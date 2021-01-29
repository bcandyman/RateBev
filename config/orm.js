const connection = require('./connection');

module.exports = {
  selectTable: ((table, cb) => {
    connection.query(`SELECT * FROM  ${table}`, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  }),
};
