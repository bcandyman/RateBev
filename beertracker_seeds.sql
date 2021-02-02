-- Remove beertracker database if exists
DROP DATABASE IF EXISTS beertracker_db;
-- Create beertracker database
CREATE DATABASE beertracker_db;

USE beertracker_db;


-- Create states table
CREATE TABLE states (
id INTEGER NOT NULL AUTO_INCREMENT,
state VARCHAR(20) NOT NULL,
abbr VARCHAR(20) NOT NULL,
PRIMARY KEY (id)
);

-- Prepopulate states table
INSERT INTO states (state, abbr) VALUES ("Alabama", "AL");
INSERT INTO states (state, abbr) VALUES ("Alaska", "AK");
INSERT INTO states (state, abbr) VALUES ("Arizona", "AZ");
INSERT INTO states (state, abbr) VALUES ("Arkansas", "AR");
INSERT INTO states (state, abbr) VALUES ("California", "CA");
INSERT INTO states (state, abbr) VALUES ("Colorado", "CO");
INSERT INTO states (state, abbr) VALUES ("Connecticut", "CT");
INSERT INTO states (state, abbr) VALUES ("Delaware", "DE");
INSERT INTO states (state, abbr) VALUES ("Florida", "FL");
INSERT INTO states (state, abbr) VALUES ("Georgia", "GA");
INSERT INTO states (state, abbr) VALUES ("Hawaii", "HI");
INSERT INTO states (state, abbr) VALUES ("Idaho", "ID");
INSERT INTO states (state, abbr) VALUES ("Illinois", "IL");
INSERT INTO states (state, abbr) VALUES ("Indiana", "IN");
INSERT INTO states (state, abbr) VALUES ("Iowa", "IA");
INSERT INTO states (state, abbr) VALUES ("Kansas", "KS");
INSERT INTO states (state, abbr) VALUES ("Kentucky", "KY");
INSERT INTO states (state, abbr) VALUES ("Louisiana", "LA");
INSERT INTO states (state, abbr) VALUES ("Maine", "ME");
INSERT INTO states (state, abbr) VALUES ("Maryland", "MD");
INSERT INTO states (state, abbr) VALUES ("Massachusetts", "MA");
INSERT INTO states (state, abbr) VALUES ("Michigan", "MI");
INSERT INTO states (state, abbr) VALUES ("Minnesota", "MN");
INSERT INTO states (state, abbr) VALUES ("Mississippi", "MS");
INSERT INTO states (state, abbr) VALUES ("Missouri", "MO");
INSERT INTO states (state, abbr) VALUES ("Montana", "MT");
INSERT INTO states (state, abbr) VALUES ("Nebraska", "NE");
INSERT INTO states (state, abbr) VALUES ("Nevada", "NV");
INSERT INTO states (state, abbr) VALUES ("New Hampshire", "NH");
INSERT INTO states (state, abbr) VALUES ("New Jersey", "NJ");
INSERT INTO states (state, abbr) VALUES ("New", "Mexico");
INSERT INTO states (state, abbr) VALUES ("New York", "NY");
INSERT INTO states (state, abbr) VALUES ("North Carolina", "NC");
INSERT INTO states (state, abbr) VALUES ("North Dakota", "ND");
INSERT INTO states (state, abbr) VALUES ("Ohio", "OH");
INSERT INTO states (state, abbr) VALUES ("Oklahoma", "OK");
INSERT INTO states (state, abbr) VALUES ("Oregon", "OR");
INSERT INTO states (state, abbr) VALUES ("Pennsylvania", "PA");
INSERT INTO states (state, abbr) VALUES ("Rhode Island", "RI");
INSERT INTO states (state, abbr) VALUES ("South Carolina", "SC");
INSERT INTO states (state, abbr) VALUES ("South Dakota", "SD");
INSERT INTO states (state, abbr) VALUES ("Tennessee", "TN");
INSERT INTO states (state, abbr) VALUES ("Texas", "TX");
INSERT INTO states (state, abbr) VALUES ("Utah", "UT");
INSERT INTO states (state, abbr) VALUES ("Vermont", "VT");
INSERT INTO states (state, abbr) VALUES ("Virginia", "VA");
INSERT INTO states (state, abbr) VALUES ("Washington", "WA");
INSERT INTO states (state, abbr) VALUES ("West Virginia", "WV");
INSERT INTO states (state, abbr) VALUES ("Wisconsin", "WI");
INSERT INTO states (state, abbr) VALUES ("Wyoming", "WY");


-- Create cities table
CREATE TABLE cities (
id INTEGER NOT NULL AUTO_INCREMENT,
city VARCHAR(20) NOT NULL,
stateid INTEGER NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (stateid) REFERENCES states(id)
);

-- Prepopulate cities table
INSERT INTO cities (city, stateid) VALUES ("Auburn", 5);
INSERT INTO cities (city, stateid) VALUES ("Rocklin", 5);
INSERT INTO cities (city, stateid) VALUES ("Santa Rosa", 5);
INSERT INTO cities (city, stateid) VALUES ("Broken Arrow", 36);


-- Create style table
CREATE TABLE styles (
id INTEGER NOT NULL AUTO_INCREMENT,
style VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);

-- Prepopulate style table
INSERT INTO styles (style) VALUES ("India Pale Ale");
INSERT INTO styles (style) VALUES ("Double India Pale Ale");
INSERT INTO styles (style) VALUES ("Triple India Pale Ale");
INSERT INTO styles (style) VALUES ("Pilsner");
INSERT INTO styles (style) VALUES ("Imperial India Pale Ale");
INSERT INTO styles (style) VALUES ("Imperial Stout");
INSERT INTO styles (style) VALUES ("Stout");
INSERT INTO styles (style) VALUES ("Pale Ale");


-- Create brewers table
CREATE TABLE brewers (
id INTEGER NOT NULL AUTO_INCREMENT,
brewer VARCHAR(30) NOT NULL,
cityid INTEGER NOT NULL,
stateid INTEGER NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (cityid) REFERENCES cities(id),
FOREIGN KEY (stateid) REFERENCES states(id)
);

-- Prepopulate brewers table
INSERT INTO brewers (brewer, cityid, stateid)VALUES ("Moksa", 2, 5);
INSERT INTO brewers (brewer, cityid, stateid)VALUES ("Moonraker", 1, 5);
INSERT INTO brewers (brewer, cityid, stateid)VALUES ("Russian River", 3, 5);


-- Create beer table
CREATE TABLE beers (
id INTEGER NOT NULL AUTO_INCREMENT,
beer VARCHAR(30) NOT NULL,
rating INTEGER NOT NULL,
styleid INTEGER NOT NULL,
brewerid INTEGER NOT NULL,
comment VARCHAR(100),
PRIMARY KEY (id),
FOREIGN KEY (brewerid) REFERENCES brewers(id),
FOREIGN KEY (styleid) REFERENCES styles(id)
);

-- Prepopulate beers table
INSERT INTO beers (beer, rating, styleid, brewerid, comment)VALUES ("Cool Cool", 4, 1, 2, "");
INSERT INTO beers (beer, rating, styleid, brewerid, comment)VALUES ("MoBrien", 5, 1, 1, "");
INSERT INTO beers (beer, rating, styleid, brewerid, comment)VALUES ("Some Grass", 5, 1, 2, "");
INSERT INTO beers (beer, rating, styleid, brewerid, comment)VALUES ("Pliny The Elder", 4, 2, 3, "");
