const bcrypt = require('bcrypt');
const controller = require('../../controllers/controller');
const db = require('../../models');
const jwt = require('jsonwebtoken');
const router = require('express').Router();

// @route   POST    /api/user/signup
// @desc    Register a new user
// @access  Public
router.post('/user/signup', async (req, res) => {
	//Validate body data
	const { firstName, lastName, email, password } = req.body;
	if (!firstName || !lastName || !email || !password) {
		return res.status(400).json({ msg: 'Please enter all fields' });
	}

	//Salt and hash password enter save to database
	bcrypt.hash(password, 10, async (err, hash) => {
		const newUser = await controller.create(db.User, {
			first_name: firstName,
			last_name: lastName,
			email,
			password: hash,
		});
        
		//Create token
		const token = jwt.sign(
			{ id: newUser.uuid, name: newUser.first_name },
			process.env.JWT_SECRET
		);

		res.json({ token });
	});
});

// @route   /api/user/login
// @desc    Authenticates an existing user's credentials
router.post('/login', async (req, res) => {
	//Ensure all data has been entered
	const { email, password } = req.body;
	if (!(email || password)) {
		return res.status(400).json({ msg: 'Please enter all fields' });
	}

	//Pull user data from the database
	const { dataValues: user } = await controller.findOne(db.User, {
		where: { email },
	});
	if (!user) return res.status(401).json({ msg: 'User does not exist' });
	//Test if credentials match
	bcrypt.compare(password, user.password, function (err, isMatch) {
		if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });
		//Create token and send to client
		const token = jwt.sign(
			{ id: user.uuid, name: user.first_name },
			process.env.JWT_SECRET
		);
		res.json({ token });
	});
});

module.exports = router;
