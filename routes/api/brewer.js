const auth = require('../middleware/auth');
const controller = require('../../controllers/controller');
const db = require('../../models');
const router = require('express').Router();

// @route   GET     /api/brewers/all
// @desc    Get all brewers
// @access  Private
router.get('/all', auth, async (req, res) => {
	res.json(await controller.findAll(db.Brewer));
});

// @route   GET     /api/brewer/{id}
// @desc    Get a brewer by its id
// @access  Private
router.get('/:id', auth, async (req, res) => {
	res.json(
		await controller.findOne(db.Brewer, { where: req.params, include: [db.City] })
	);
});

// @route   POST    /api/brewer
// @desc    Create a new brewer
// @access  Private
router.post('/', auth, async (req, res) => {
	//Validate body data
	const { name, cityId } = req.body;
	if (!name || !cityId) {
		return res.status(400).json({ msg: 'name and cityId not populated' });
	}

	//Create the brewer
	res.json(await controller.create(db.Brewer, { name, cityId }));
});

module.exports = router;
