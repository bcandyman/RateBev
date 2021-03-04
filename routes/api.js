const router = require('express').Router();
const db = require('../models');

router.route('/states')
  .get(async (req, res) => {
    const states = await db.State.findAll();
    res.json(states);
  });

router.route('/cities')
  .get(async (req, res) => {
    const cities = await db.City.findAll();
    res.json(cities);
  });

router.route('/brewers')
  .get(async (req, res) => {
    const brewers = await db.Brewer.findAll();
    res.json(brewers);
  });

router.route('/brews')
  .get(async (req, res) => {
    const brews = await db.Brew.findAll();
    res.json(brews);
  });

router.route('/city/:id')
  .get(async (req, res) => {
    const { id } = req.params;
    const cities = await db.City.findOne({
      where: {
        id,
      },
      include: [db.State],
    });
    res.json(cities);
  })
  .post(async (req, res) => {
    const { name, stateId } = req.body;
    const cityOutput = await db.City.create({ name, stateId });
    res.send(cityOutput).status(200);
  });

router.route('/state/:id')
  .get(async (req, res) => {
    const { id } = req.params;
    const state = await db.State.findOne({
      where: {
        id,
      },
      include: [db.City],
    });
    res.json(state);
  });

router.route('/brewer/:id')
  .get(async (req, res) => {
    const { id } = req.params;
    const brewer = await db.Brewer.findOne({
      where: {
        id,
      },
      include: [db.City],
    });
    res.json(brewer);
  })
  .post(async (req, res) => {
    const { name, cityId } = req.body;
    const brewerOutput = await db.Brewer.create({ name, cityId });
    res.send(brewerOutput).status(200);
  });

router.route('/brew/:id')
  .get(async (req, res) => {
    const { id } = req.params;
    const brews = await db.Brew.findOne({
      where: {
        id,
      },
      include: [{
        model: db.Brewer,
        include: [{
          model: db.City,
          include: db.State,
        }],
      }, {
        model: db.Style,
        attributes: ['name'],
      }],
    });
    res.json(brews);
  })
  .post(async (req, res) => {
    const {
      name,
      brewerId,
      styleId,
      rating,
      comment,
    } = req.body;
    const brewOutput = await db.Brew.create({
      name,
      brewerId,
      styleId,
      rating,
      comment,
    });
    res.send(brewOutput).status(200);
  });

router.route('/style/:id')
  .get(async (req, res) => {
    const { id } = req.params;
    const style = await db.Style.findOne({
      where: {
        id,
      },
    });
    res.json(style);
  })
  .post(async (req, res) => {
    const { name } = req.body;
    const styleOutput = await db.Style.create({ name });
    res.send(styleOutput).status(200);
  });

router.route('/brews/bystyle/:styleId')
  .get(async (req, res) => {
    const { styleId } = req.params;
    const brewOutput = await db.Brew.findAll({
      where: {
        styleId,
      },
    });
    res.json(brewOutput);
  });

router.get('/logins', async (req, res) => {
  const users = await db.Login.findAll();
  res.json(users);
});

router.get('/login/:uuid', async (req, res) => {
  const { uuid } = req.params;
  const login = await db.Login.findOne({
    where: {
      uuid,
    },
    include: [{ model: db.Rating }],
  });
  res.json(login);
});

module.exports = router;
