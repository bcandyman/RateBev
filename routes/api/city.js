const auth = require('../middleware/auth');
const controller = require('../../controllers/controller');
const db = require('../../models');
const router = require('express').Router();

// @route   GET     /api/city/all
// @desc    Get all cities
// @access  Private
router.get('/all', auth, async (req, res) => {
	res.json(await controller.findAll(db.City));
});

// @route   GET     /api/city/all/byStateId/{id}
// @desc    Get all cities within a specified state
// @access  Private
router.get('/all/byStateId/:id', auth, async (req, res) => {
	const { id: stateId } = req.params;
	if (!stateId) {
		return res.status(400).json({ msg: 'State Id must be populated' });
	}
	res.json(await controller.findAll(db.City, { where: { stateId: stateId } }));
});

// @route   GET     /api/city/{id}
// @desc    Get a city by its id
// @access  Private
router.get('/:id', auth, async (req, res) => {
	res.json(
		await controller.findOne(db.City, { where: req.params, include: [db.State] })
	);
});

// @route   POST    /api/city
// @desc    Create a new city
// @access  Private
router.post('/', auth, async (req, res) => {
	//Validate body data
	const { name, stateId } = req.body;
	if (!name || !stateId) {
		return res.status(400).json({ msg: 'name and stateId not populated' });
	}

	//Return city, if city exists
	const data = await controller.findOne(db.City, {
		where: { name, stateId },
	});
	if (data) return res.json(data.dataValues);

	//Create new city
	res.json(await controller.create(db.City, { name, stateId }));
});

module.exports = router;
