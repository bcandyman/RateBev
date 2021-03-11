const auth = require('../middleware/auth');
const controller = require('../../controllers/controller');
const db = require('../../models');
const router = require('express').Router();

// @route   GET     /api/brew/all
// @desc    Get all brews
// @access  Private
router.get('/all', auth, async (req, res) => {
	res.json(await controller.findAll(db.Brew));
});

// @route   GET     /api/brew/all/byBrewerId/{id}
// @desc    Get all brews within a specified brewer
// @access  Private
router.get('/all/byBrewerId/:id', auth, async (req, res) => {
	const { id: brewerId } = req.params;
	if (!brewerId) {
		return res.status(400).json({ msg: 'Brewer Id must be populated' });
	}
	res.json(await controller.findAll(db.Brew, { where: { brewerId: brewerId } }));
});

// @route   GET     /api/brew/{id}}
// @desc    Get a brew by its id
// @access  Private
router.get('/:id', auth, async (req, res) => {
	const brew = await controller.findOne(db.Brew, {
		where: req.params,
		include: [
			{
				model: db.Brewer,
				include: [
					{
						model: db.City,
						include: db.State,
					},
				],
			},
			{
				model: db.Style,
				attributes: ['name'],
			},
		],
	});
	res.json(brew);
});

// @route   GET     /api/all/bystyleId/{id}
// @desc    Get all  brews that match a styleId
// @access  Private
router.get('/all/bystyleId/:styleId', auth, async (req, res) => {
	res.json(await controller.findAll(db.Brew, { where: req.params }));
});

// @route   POST    /api/brew
// @desc    Create a new brew
// @access  Private
router.post('/', auth, async (req, res) => {
	//Validate body data
	const { name, brewerId, styleId, rating } = req.body;
	if (!name || !brewerId || !styleId || !rating) {
		return res.status(400).json({ msg: 'Not enough data to create brew' });
	}
	//Create the brew
	const options = { name, brewerId, styleId, rating };
	res.json(await controller.create(db.Brew, options));
});

module.exports = router;
