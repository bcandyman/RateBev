const connection = require('./connection');

const query = (queryString) => new Promise((res, rej) => {
  connection.query(queryString, (err, result) => {
    if (err) rej(err);
    res(result);
  });
});

module.exports = {

  // Returns all data from any table within the database
  selectTable: (table) => new Promise((res, rej) => {
    query(`SELECT * FROM  ${table}`)
      .then((val) => res(val));
  }),

  // Returns all beers with a specified rating
  beerByRating: (rating) => new Promise((res, rej) => {
    query(`SELECT brewers.brewer, beers.beer,beers.rating,cities.city,states.state 
            FROM beers 
            INNER JOIN brewers ON beers.brewerid=brewers.id 
            INNER JOIN cities ON brewers.cityid=cities.id 
            INNER JOIN states ON cities.stateid=states.id 
            WHERE beers.rating = ${rating}`)
      .then((val) => res(val));
  }),

  // Returns all beers by a specified brewer
  beerByBrewer: (brewer) => new Promise((res, rej) => {
    query(`SELECT brewers.brewer, beers.beer,beers.rating,cities.city,states.state
            FROM beers
            INNER JOIN brewers ON beers.brewerid=brewers.id
            INNER JOIN cities ON brewers.cityid=cities.id
            INNER JOIN states ON cities.stateid=states.id
            WHERE brewers.brewer = ${brewer}`)
      .then((val) => res(val));
  }),

  // Returns the ID of a state
  stateIdByState: (state) => new Promise((res, rej) => {
    query(`SELECT id FROM states WHERE state="${state}" LIMIT 1`)
      .then((val) => res(val[0].id));
  }),

  // Returns the ID of a city from a city name and a state ID
  cityIdByStateId: (city, stateId) => new Promise((res, rej) => {
    query(`SELECT id FROM cities WHERE city="${city}" AND stateId=${stateId} LIMIT 1`)
      .then((val) => res(val));
  }),

  // Returns the ID of a city from a city name and a state name
  cityIdByState(city, state) {
    return new Promise((res, rej) => {
      this.stateIdByState(state)
        .then((stateId) => this.cityIdByStateId(city, stateId))
        .then((cityId) => res(cityId));
    });
  },

  // Creates a new city from a city name and a state name
  createCity(city, state) {
    return new Promise((res, rej) => {
      this.stateIdByState(state)
        .then((stateId) => query(`INSERT INTO cities (city, stateid) VALUES ("${city}", ${stateId})`))
        .then((result) => res(result));
    });
  },

  // Creates and returns if not within database or returns if is
  // in database a city from a city name and a state name
  getCityId(city, state) {
    return new Promise((res, rej) => {
      this.cityIdByState(city, state)
        .then((cityId) => {
          if (cityId.length === 0) {
            this.createCity(city, state)
              .then((data) => res(data.insertId));
          } else {
            res(cityId[0].id);
          }
        });
    });
  },

  // Creates a new brewer from a brewer name, a city name and a state name
  createBrewer(brewer, city, state) {
    return new Promise((res, rej) => {
      Promise.all([this.getCityId(city, state), this.stateIdByState(state)])
        .then((data) => {
          query(`INSERT INTO brewers (brewer, cityid, stateid)VALUES ("${brewer}", ${data[0]}, ${data[1]});`)
            .then((result) => res(result));
        });
    });
  },

  // Returns the style id from a style
  styleIdByStyle: (style) => new Promise((res, rej) => {
    query(`SELECT id FROM styles WHERE style="${style}" LIMIT 1`)
      .then((val) => res(val[0].id));
  }),

  // Returns the brewer id by city name and state name
  brewerIdByBrewer(brewer, city, state) {
    return new Promise((res, rej) => {
      Promise.all([this.getCityId(city, state), this.stateIdByState(state)])
        .then((data) => {
          query(`SELECT id FROM brewers WHERE brewer="${brewer}" AND cityid=${data[0]} AND stateid=${data[1]} LIMIT 1`)
            .then((result) => res(result[0].id));
        });
    });
  },

  // Creates a new beer
  createBeer(beer, rating, style, brewer, city, state, comment) {
    return new Promise((res, rej) => {
      Promise.all([this.styleIdByStyle(style), this.brewerIdByBrewer(brewer, city, state)])
        .then((val) => query(`INSERT INTO beers (beer, rating, styleid, brewerid, comment)VALUES ("${beer}", ${rating}, ${val[0]}, ${val[1]}, "${comment}")`)
          .then((vals) => res(vals)));
    });
  },
};
