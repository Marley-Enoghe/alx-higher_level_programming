-- This is the list all shows from hbtn_0d_tvshows_rate by their rating.
-- List each record should display: tv_shows.title - rating sum
-- This is the results must be sorted in acending order by the rating
-- The database name will be passed as an argument of the mysql command

SELECT tv_shows.title, SUM(tv_show_ratings.rate) AS rating
FROM tv_shows
INNER JOIN tv_show_ratings
ON tv_shows.id = tv_show_ratings.show_id
GROUP BY tv_shows.id
ORDER BY rating DESC;
