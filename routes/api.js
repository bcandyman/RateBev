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
    db.createBrewer(req.body.brewerName, req.body.city, req.body.state)
      .then((val) => res.json(val));
  });

router.route('/beer')
  .post((req, res) => {
    db.createBeer(
      req.body.beer,
      req.body.rating,
      req.body.style,
      req.body.brewer,
      req.body.city,
      req.body.state,
      req.body.comment,
    )
      .then((val) => res.json(val));
  });

module.exports = router;
