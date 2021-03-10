const auth = require('../middleware/auth');
const controller = require('../../controllers/controller');
const db = require('../../models');
const router = require('express').Router();

// @route   GET     /api/state/all
// @desc    Get all states
// @access  Private
router.get('/all', auth, async (req, res) => {
	res.json(await controller.findAll(db.State));
});

// @route   GET     /api/state/{id}
// @desc    Get a state by its id
// @access  Private
router.get('/:id', auth, async (req, res) => {
	res.json(
		await controller.findOne(db.State, { where: req.params, include: [db.City] })
	);
});

module.exports = router;
