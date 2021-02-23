// const { mapFinderOptions } = require('sequelize/types/lib/utils');
const router = require('express').Router();
const db = require('../models');

router.route('/states')
  .get(async (req, res) => {
    const states = await db.State.findAll();
    res.json(states);
  });

router.route('/state/:uuid')
  .get(async (req, res) => {
    const { uuid } = req.params;
    const state = await db.State.findOne({
      where: {
        uuid,
      },
    });
    res.json(state);
  });

router.route('/cities')
  .get(async (req, res) => {
    const cities = await db.City.findAll();
    res.json(cities);
  });

router.route('/city/:uuid')
  .get(async (req, res) => {
    const { uuid } = req.params;
    const cities = await db.City.findOne({
      where: {
        uuid,
      },
      include: [db.State],
    });
    res.json(cities);
  });

router.route('/city')
  .post(async (req, res) => {
    const {
      name,
      stateId,
    } = req.body;

    try {
      const city = await db.City.create({
        name, stateId,
      });
      res.json(city);
    } catch (error) {
      res.status(500).json(error);
    }
  });

module.exports = router;
