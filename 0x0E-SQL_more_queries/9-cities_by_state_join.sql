-- Used to list all cities contained in the database hbtn_0d_usa.
-- Used to list each record should display: cities.id - cities.name - states.name
-- Results must be sorted in ascending order by cities.id
-- can use only one SELECT statement
-- The list of the  database name will be passed as an argument of the mysql command

SELECT cities.id, cities.name, states.name
FROM cities
INNER JOIN states ON cities.state_id=states.id
ORDER BY cities.id;
