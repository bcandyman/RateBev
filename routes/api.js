const router = require('express').Router();
const db = require('../models');
const controller = require('../controllers/controller');

router.get('/brewers', async (req, res) => {
  controller.findAll(db.Brewer, res);
});

router.get('/brews', async (req, res) => {
  controller.findAll(db.Brew, res);
});

router.get('/cities', async (req, res) => {
  controller.findAll(db.City, res);
});

router.get('/logins', async (req, res) => {
  controller.findAll(db.Login, res);
});

router.get('/states', async (req, res) => {
  controller.findAll(db.State, res);
});

router.get('/brew/:id', async (req, res) => {
  controller.findOne(db.Brew, res, {
    where: req.params,
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
});

router.get('/brewer/:id', async (req, res) => {
  controller.findOne(db.Brewer, res, {
    where: req.params,
    include: [db.City],
  });
});

router.get('/brews/bystyle/:styleId', async (req, res) => {
  controller.findAll(db.Brew, res, { where: req.params });
});

router.get('/city/:id', async (req, res) => {
  controller.findOne(db.City, res, {
    where: req.params,
    include: [db.State],
  });
});

router.get('/login/:uuid', async (req, res) => {
  controller.findOne(db.Login, res, {
    where: req.params,
    include: [{ model: db.Rating }],
  });
});

router.get('/state/:id', async (req, res) => {
  controller.findOne(db.State, res, {
    where: req.params,
    include: [db.City],
  });
});

router.get('/style/:id', async (req, res) => {
  controller.findOne(db.Style, res, { where: req.params });
});

router.post('/city', async (req, res) => {
  const { name, stateId } = req.body;
  controller.create(db.City, res, { name, stateId });
});

router.post('/brewer', async (req, res) => {
  const { name, cityId } = req.body;
  controller.create(db.Brewer, res, { name, cityId });
});

router.post('/brew', async (req, res) => {
  const options = {
    name: req.body.name,
    brewerId: req.body.brewerId,
    styleId: req.body.styleId,
    rating: req.body.rating,
    comment: req.body.comment,
  };
  controller.create(db.Brew, res, options);
});

router.post('/style', async (req, res) => {
  const { name } = req.body;
  controller.create(db.Style, res, { name });
});

module.exports = router;
