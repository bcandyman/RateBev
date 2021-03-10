const auth = require('../middleware/auth');
const controller = require('../../controllers/controller');
const db = require('../../models');
const router = require('express').Router();

// @route   GET     /api/style/{id}
// @desc    Get a style by its id
// @access  Private
router.get('/:id', auth, async (req, res) => {
    res.json(await controller.findOne(db.Style, { where: req.params }));
});

// @route   POST    /api/style
// @desc    Create a new style
// @access  Private
router.post('/', auth, async (req, res) => {
	//Validate body data
	const { name } = req.body;
	if (!name) return res.status(400).json({ msg: 'name not populated' });
	res.json(await controller.create(db.Style, { name }));
});

module.exports = router;
