const router = require('express').Router();
const db = require('../config/orm');

router.route('/byrating')
  .get((req, res) => {
    db.beerByRating(req.query.rating, (data) => {
      res.json(data);
    });
  });

router.route('/bybrewer')
  .get((req, res) => {
    db.beerByBrewer(req.query.brewer, (data) => {
      res.json(data);
    });
  });

router.route('/:tableName')
  .get((req, res) => {
    db.selectTable(req.params.tableName, (data) => {
      res.json(data);
    });
  });

router.route('/brewer')
  .post((req, res) => {
    db.stateIdByState(req.body.brewerState, (stateId) => {
      db.cityIdByCity(req.body.brewerCity, stateId[0].id, (cityId) => {
        if (cityId.length === 0) {

        } else {
          db.createBrewer(req.body.brewerName, cityId[0].id, stateId[0].id, (newBrewer) => {
            res.json(newBrewer);
          });
        }
      });
    });
  });

module.exports = router;
