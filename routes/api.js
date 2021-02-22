// const { mapFinderOptions } = require('sequelize/types/lib/utils');
const router = require('express').Router();
const { Beer } = require('../models');

router.route('/beers')
  .get(async (req, res) => {
    const beer = await Beer.findAll();
    res.json(beer);
  })
  .post(async (req, res) => {
    const {
      name,
      styleId,
      breweryId,
      comment,
    } = req.body;

    try {
      const beer = await Beer.create({
        name, styleId, breweryId, comment,
      });
      res.json(beer);
    } catch (error) {
      res.status(500).json(error);
    }
  });

module.exports = router;
