-- Remove beertracker database if exists
DROP DATABASE IF EXISTS beertracker_db;
-- Create beertracker database
CREATE DATABASE beertracker_db;

USE beertracker_db;


-- Create states table
CREATE TABLE states (
id INTEGER NOT NULL AUTO_INCREMENT,
name VARCHAR(20) NOT NULL,
abbr VARCHAR(20) NOT NULL,
PRIMARY KEY (id)
);

-- Prepopulate states table
INSERT INTO states (name, abbr) VALUES ("Alabama", "AL");
INSERT INTO states (name, abbr) VALUES ("Alaska", "AK");
INSERT INTO states (name, abbr) VALUES ("Arizona", "AZ");
INSERT INTO states (name, abbr) VALUES ("Arkansas", "AR");
INSERT INTO states (name, abbr) VALUES ("California", "CA");
INSERT INTO states (name, abbr) VALUES ("Colorado", "CO");
INSERT INTO states (name, abbr) VALUES ("Connecticut", "CT");
INSERT INTO states (name, abbr) VALUES ("Delaware", "DE");
INSERT INTO states (name, abbr) VALUES ("Florida", "FL");
INSERT INTO states (name, abbr) VALUES ("Georgia", "GA");
INSERT INTO states (name, abbr) VALUES ("Hawaii", "HI");
INSERT INTO states (name, abbr) VALUES ("Idaho", "ID");
INSERT INTO states (name, abbr) VALUES ("Illinois", "IL");
INSERT INTO states (name, abbr) VALUES ("Indiana", "IN");
INSERT INTO states (name, abbr) VALUES ("Iowa", "IA");
INSERT INTO states (name, abbr) VALUES ("Kansas", "KS");
INSERT INTO states (name, abbr) VALUES ("Kentucky", "KY");
INSERT INTO states (name, abbr) VALUES ("Louisiana", "LA");
INSERT INTO states (name, abbr) VALUES ("Maine", "ME");
INSERT INTO states (name, abbr) VALUES ("Maryland", "MD");
INSERT INTO states (name, abbr) VALUES ("Massachusetts", "MA");
INSERT INTO states (name, abbr) VALUES ("Michigan", "MI");
INSERT INTO states (name, abbr) VALUES ("Minnesota", "MN");
INSERT INTO states (name, abbr) VALUES ("Mississippi", "MS");
INSERT INTO states (name, abbr) VALUES ("Missouri", "MO");
INSERT INTO states (name, abbr) VALUES ("Montana", "MT");
INSERT INTO states (name, abbr) VALUES ("Nebraska", "NE");
INSERT INTO states (name, abbr) VALUES ("Nevada", "NV");
INSERT INTO states (name, abbr) VALUES ("New Hampshire", "NH");
INSERT INTO states (name, abbr) VALUES ("New Jersey", "NJ");
INSERT INTO states (name, abbr) VALUES ("New", "Mexico");
INSERT INTO states (name, abbr) VALUES ("New York", "NY");
INSERT INTO states (name, abbr) VALUES ("North Carolina", "NC");
INSERT INTO states (name, abbr) VALUES ("North Dakota", "ND");
INSERT INTO states (name, abbr) VALUES ("Ohio", "OH");
INSERT INTO states (name, abbr) VALUES ("Oklahoma", "OK");
INSERT INTO states (name, abbr) VALUES ("Oregon", "OR");
INSERT INTO states (name, abbr) VALUES ("Pennsylvania", "PA");
INSERT INTO states (name, abbr) VALUES ("Rhode Island", "RI");
INSERT INTO states (name, abbr) VALUES ("South Carolina", "SC");
INSERT INTO states (name, abbr) VALUES ("South Dakota", "SD");
INSERT INTO states (name, abbr) VALUES ("Tennessee", "TN");
INSERT INTO states (name, abbr) VALUES ("Texas", "TX");
INSERT INTO states (name, abbr) VALUES ("Utah", "UT");
INSERT INTO states (name, abbr) VALUES ("Vermont", "VT");
INSERT INTO states (name, abbr) VALUES ("Virginia", "VA");
INSERT INTO states (name, abbr) VALUES ("Washington", "WA");
INSERT INTO states (name, abbr) VALUES ("West Virginia", "WV");
INSERT INTO states (name, abbr) VALUES ("Wisconsin", "WI");
INSERT INTO states (name, abbr) VALUES ("Wyoming", "WY");


-- Create cities table
CREATE TABLE cities (
id INTEGER NOT NULL AUTO_INCREMENT,
name VARCHAR(20) NOT NULL,
stateid INTEGER NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (stateid) REFERENCES states(id)
);

-- Prepopulate cities table
INSERT INTO cities (name, stateid) VALUES ("Auburn", 5);
INSERT INTO cities (name, stateid) VALUES ("Rocklin", 5);
INSERT INTO cities (name, stateid) VALUES ("Santa Rosa", 5);
INSERT INTO cities (name, stateid) VALUES ("Broken Arrow", 30);


-- Create style table
CREATE TABLE styles (
id INTEGER NOT NULL AUTO_INCREMENT,
name VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);

-- Prepopulate style table
INSERT INTO styles (name) VALUES ("India Pale Ale");
INSERT INTO styles (name) VALUES ("Double India Pale Ale");
INSERT INTO styles (name) VALUES ("Triple India Pale Ale");
INSERT INTO styles (name) VALUES ("Pilsner");
INSERT INTO styles (name) VALUES ("Imperial India Pale Ale");
INSERT INTO styles (name) VALUES ("Imperial Stout");
INSERT INTO styles (name) VALUES ("Stout");
INSERT INTO styles (name) VALUES ("Pale Ale");


-- Create brewers table
CREATE TABLE brewers (
id INTEGER NOT NULL AUTO_INCREMENT,
name VARCHAR(30) NOT NULL,
cityid INTEGER NOT NULL,
stateid INTEGER NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (cityid) REFERENCES cities(id),
FOREIGN KEY (stateid) REFERENCES states(id)
);

-- Prepopulate brewers table
INSERT INTO brewers (name, cityid, stateid)VALUES ("Moksa", 2, 5);
INSERT INTO brewers (name, cityid, stateid)VALUES ("Moonraker", 1, 5);
INSERT INTO brewers (name, cityid, stateid)VALUES ("Russian River", 3, 5);


-- Create beer table
CREATE TABLE beers (
id INTEGER NOT NULL AUTO_INCREMENT,
name VARCHAR(30) NOT NULL,
rating INTEGER NOT NULL,
styleid INTEGER NOT NULL,
brewerid INTEGER NOT NULL,
comment VARCHAR(100),
PRIMARY KEY (id),
FOREIGN KEY (brewerid) REFERENCES brewers(id),
FOREIGN KEY (styleid) REFERENCES styles(id)
);

-- Prepopulate beers table
INSERT INTO beers (name, rating, styleid, brewerid, comment)VALUES ("Cool Cool", 4, 1, 2, "");
INSERT INTO beers (name, rating, styleid, brewerid, comment)VALUES ("MoBrien", 5, 1, 1, "");
INSERT INTO beers (name, rating, styleid, brewerid, comment)VALUES ("Some Grass", 5, 1, 2, "");
INSERT INTO beers (name, rating, styleid, brewerid, comment)VALUES ("Pliny The Elder", 4, 2, 3, "");
