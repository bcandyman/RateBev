const router = require('express').Router();
const db = require('../config/orm');

router.route('/byrating')
  .get((req, res) => {
    db.beerByRating(req.query.rating)
      .then((data) => res.json(data));
  });

router.route('/bybrewer')
  .get((req, res) => {
    db.beerByBrewer(req.query.brewer)
      .then((data) => res.json(data));
  });

router.route('/:tableName(beers|brewers|cities|states|styles)')
  .get((req, res) => {
    db.selectTable(req.params.tableName)
      .then((data) => res.json(data));
  });

router.route('/brewer')
  .post((req, res) => {
    db.stateIdByState(req.body.brewerState)
      .then((stateId) => {
        db.cityIdByCity(req.body.brewerCity, stateId[0].id)
          .then((cityId) => {
            console.log(cityId)
            if (cityId.length === 0) {

            } else {
              db.createBrewer(req.body.brewerName, cityId[0].id, stateId[0].id)
                .then((val) => res.json(val));
            }
          });
      });
  });

module.exports = router;
