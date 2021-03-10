const router = require('express').Router();
const db = require('../../models');
const controller = require('../../controllers/controller');
const auth = require('../../auth');

router.get('/brewers', async (req, res) => {
	res.json(await controller.findAll(db.Brewer));
});

router.get('/brews', async (req, res) => {
	res.json(await controller.findAll(db.Brew));
});

router.get('/cities', async (req, res) => {
	res.json(await controller.findAll(db.City));
});

router.get('/logins', async (req, res) => {
	res.json(await controller.findAll(db.Login));
});

router.get('/states', auth, async (req, res) => {
	res.json(await controller.findAll(db.State));
});

router.get('/brew/:id', async (req, res) => {
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

router.get('/brewer/:id', async (req, res) => {
	res.json(
		await controller.findOne(db.Brewer, { where: req.params, include: [db.City] })
	);
});

router.get('/brews/bystyle/:styleId', async (req, res) => {
	res.json(await controller.findAll(db.Brew, { where: req.params }));
});

router.get('/city/:id', async (req, res) => {
	res.json(
		await controller.findOne(db.City, { where: req.params, include: [db.State] })
	);
});

router.get('/login/:uuid', async (req, res) => {
	res.json(
		await controller.findOne(db.Login, {
			where: req.params,
			include: [{ model: db.Rating }],
		})
	);
});

router.get('/state/:id', async (req, res) => {
	res.json(
		await controller.findOne(db.State, { where: req.params, include: [db.City] })
	);
});

router.get('/style/:id', async (req, res) => {
	res.json(await controller.findOne(db.Style, { where: req.params }));
});

router.post('/city', async (req, res) => {
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

router.post('/brewer', async (req, res) => {
	//Validate body data
	const { name, cityId } = req.body;
	if (!name || !cityId) {
		return res.status(400).json({ msg: 'name and cityId not populated' });
	}

	//Create the brewer
	res.json(await controller.create(db.Brewer, { name, cityId }));
});

router.post('/brew', async (req, res) => {
	//Validate body data
	const { name, brewerId, styleId, rating } = req.body;
	if (!name || !brewerId || !styleId || !rating) {
		return res.status(400).json({ msg: 'Not enough data to create brew' });
	}
	//Create the brew
	const options = { name, brewerId, styleId, rating };
	res.json(await controller.create(db.Brew, options));
});

router.post('/style', async (req, res) => {
	//Validate body data
	const { name } = req.body;
	if (!name) return res.status(400).json({ msg: 'name not populated' });
	res.json(await controller.create(db.Style, { name }));
});

module.exports = router;
