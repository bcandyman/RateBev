const auth = require('../middleware/auth');
const controller = require('../../controllers/controller');
const db = require('../../models');
const router = require('express').Router();

// @route   GET     /api/rating/all
// @desc    Get all ratings
// @access  Private
router.get('/all', auth, async (req, res) => {
	res.json(await controller.findAll(db.Rating));
});

// @route   GET     /api/rating/all/user
// @desc    Get all ratings belonging to a user
// @access  Private
router.get('/all/user', auth, async (req, res) => {
	//Validate body data
	const { id: userid } = req.user;
	if (!userid) {
		return res
			.status(400)
			.json({ msg: 'brewId or raing or userId not populated' });
	}
	res.json(await controller.findAll(db.Rating, { where: { userid } }));
});

// @route   POST    /api/rating
// @desc    Create a new rating
// @access  Private
router.post('/', auth, async (req, res) => {
	//Validate body data
	const { brewId, rating, comment } = req.body;
	const { id: userid } = req.user;
	if (!brewId || !rating || !userid) {
		return res
			.status(400)
			.json({ msg: 'brewId or raing or userId not populated' });
	}

	//Return city, if rating exists
	const data = await controller.findOne(db.Rating, {
		where: { userid, brewId },
	});
	if (data) return res.json(data.dataValues);

	//Create new rating
	res.json(
		await controller.create(db.Rating, { userid, brewId, rating, comment })
	);
});

module.exports = router;
