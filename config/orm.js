const connection = require('./connection');

module.exports = {
  selectTable: ((table, cb) => {
    connection.query(`SELECT * FROM  ${table}`, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  }),

  beerByRating: ((rating, cb) => {
    const queryString = `SELECT brewers.brewer, beers.beer,beers.rating,cities.city,states.state 
                          FROM beers INNER JOIN brewers ON beers.brewerid=brewers.id 
                          INNER JOIN cities ON brewers.cityid=cities.id 
                          INNER JOIN states ON cities.stateid=states.id 
                          WHERE beers.rating = ${rating};`;
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  }),

  beerByBrewer: ((brewer, cb) => {
    const queryString = `SELECT brewers.brewer, beers.beer,beers.rating,cities.city,states.state
                          FROM beers
                          INNER JOIN brewers ON beers.brewerid=brewers.id
                          INNER JOIN cities ON brewers.cityid=cities.id
                          INNER JOIN states ON cities.stateid=states.id
                          WHERE brewers.brewer = ${brewer}`;
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  }),

  stateIdByState: ((state, cb) => {
    const queryString = `SELECT id FROM states WHERE state="${state}" LIMIT 1`;
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  }),

  cityIdByCity: ((city, stateId, cb) => {
    const queryString = `SELECT id FROM cities WHERE city="${city}" AND stateId=${stateId} LIMIT 1`;
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  }),

  createBrewer: ((brewer, cityId, stateId, cb) => {
    const queryString = `INSERT INTO brewers (brewer, cityid, stateid) VALUES ("${brewer}",${cityId},${stateId})`;
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  }),
};
