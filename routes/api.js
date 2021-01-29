const router = require('express').Router();
const db = require('../config/orm');

router.route('/:tableName')
  .get((req, res) => {
    db.selectTable(req.params.tableName, (data) => {
      res.json(data);
    });
  });

module.exports = router;
