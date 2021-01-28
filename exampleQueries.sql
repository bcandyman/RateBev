-- Selects beers with the specified brewer id
SELECT * FROM beers WHERE brewerid = 2;

-- Selects all beers from a specified brewer
-- Brewer will be joined with items from the beers table
SELECT brewers.name, beers.name,beers.rating
FROM beers
INNER JOIN brewers ON beers.brewerid=brewers.id
WHERE brewers.name = "Russian River";

-- Selects all beers by a specified beer rating
-- Brewer, city and state of the brewer will be joined with returned items from the beers table
SELECT brewers.name, beers.name,beers.rating,cities.name,states.name
FROM beers
INNER JOIN brewers ON beers.brewerid=brewers.id
INNER JOIN cities ON brewers.cityid=cities.id
INNER JOIN states ON cities.stateid=states.id
WHERE beers.rating = 4;