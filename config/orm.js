const connection = require('./connection');

const query = (queryString) => new Promise((res, rej) => {
  connection.query(queryString, (err, result) => {
    if (err) rej(err);
    res(result);
  });
});

module.exports = {
  selectTable: (table) => new Promise((res, rej) => {
    query(`SELECT * FROM  ${table}`)
      .then((val) => res(val));
  }),

  beerByRating: (rating) => new Promise((res, rej) => {
    query(`SELECT brewers.brewer, beers.beer,beers.rating,cities.city,states.state 
            FROM beers 
            INNER JOIN brewers ON beers.brewerid=brewers.id 
            INNER JOIN cities ON brewers.cityid=cities.id 
            INNER JOIN states ON cities.stateid=states.id 
            WHERE beers.rating = ${rating}`)
      .then((val) => res(val));
  }),

  beerByBrewer: (brewer) => new Promise((res, rej) => {
    query(`SELECT brewers.brewer, beers.beer,beers.rating,cities.city,states.state
            FROM beers
            INNER JOIN brewers ON beers.brewerid=brewers.id
            INNER JOIN cities ON brewers.cityid=cities.id
            INNER JOIN states ON cities.stateid=states.id
            WHERE brewers.brewer = ${brewer}`)
      .then((val) => res(val));
  }),

  stateIdByState: (state) => new Promise((res, rej) => {
    query(`SELECT id FROM states WHERE state="${state}" LIMIT 1`)
      .then((val) => res(val));
  }),

  cityIdByCity: (city, stateId) => new Promise((res, rej) => {
    query(`SELECT id FROM cities WHERE city="${city}" AND stateId=${stateId} LIMIT 1`)
      .then((val) => res(val));
  }),

  createBrewer: (brewer, cityId, stateId) => new Promise((res, rej) => {
    query(`INSERT INTO brewers (brewer, cityid, stateid) VALUES ("${brewer}",${cityId},${stateId})`)
      .then((val) => res(val));
  }),
};
