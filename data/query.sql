-- example data lookup on Silver-Linings Playbook.
SELECT
  movies.title,
  movies.year,
  movies.rated,
  genres.name
FROM
  movies
INNER JOIN
  movie_genres
ON movie_genres.movie_id = movies.id
INNER JOIN
  genres
ON movie_genres.genre_id = genres.id
WHERE 
  movies.id = 'def8f838-e1c4-488b-b146-f0b159a03b06';