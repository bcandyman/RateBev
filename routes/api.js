const router = require('express').Router();
const connection = require('../config/connection');

router.route('/states')
  .get((req, res) => {
    connection.query('SELECT * FROM states', (err, data) => {
      if (err) throw err;
      console.log(data);
    });
    res.send('States has been printed to the console.');
  });

router.route('/cities')
  .get((req, res) => {
    connection.query('SELECT * FROM cities', (err, data) => {
      if (err) throw err;
      console.log(data);
    });
    res.send('Cities has been printed to the console.');
  });

router.route('/beers')
  .get((req, res) => {
    res.send('Beers has been printed to the console.');
  });

router.route('/brewers')
  .get((req, res) => {
    res.send('Brewers has been printed to the console.');
  });

module.exports = router;
