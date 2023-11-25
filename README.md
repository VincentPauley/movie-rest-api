## TODOs:

### Backend

[ ] - POST call that allows for optional create movie with genres
[ ] - POST genres needs to delete all prior entries for the movie

- enhancements & bugs

... need to get what I have working really well before adding
more or this will grow out of control.

- bugs

[ ] - navigate back to the home page flashes results twice

- enhancements

[ ] - search clear
[ ] - no search results
[ ] - genre add would be nice too.

-- Super interesting query that counts unique occurances of genres
SELECT [genre_id], COUNT([genre_id]) AS CountOf FROM [movie_genres] GROUP BY [genre_id] ORDER BY CountOf DESC;

Results could be used for optimization for search categories etc. or just show areas that are lacking.

-- parent/sub genres could be a cool add that allows for easier lookups:

- Crime
  - Gangster/Mob
  - Heist

Maybe better than direct children would be levels: like level 1 is something
like: "Drama" or "crime". then things that are more obscure like "Heist" become
level 2 - could lead to smaller queries if overview becomes just the level 1 genres
and then more are expanded on if you click on it? just a thought.

### Deployment

Need to get the API deployed to a real endpoint if this project is going to scale.

Concerns:

- need to limit the amount of redundant reads. Could get expensive over time

  [] - authenticated requests to prevent db hits

      >>> Store Hash as part of the application

  [] -

### Datase

- some way to associate movies to a franchise/trilogy etc...

### Scripting

[ ] - cleanup DB scripting and extra class in the group.

## UI

[X] - add genres to movies.
[ ] - Create Movie from UI

- search by Genre
- view genre graphs
- raating dispersal graphs

### Tasks for Saturday

[X] - genre chip: receives an ID as a prop and renders a chip with the right label - removes need for one of the joins in global search
[ ] - Edit movie genres full replacement and cleanup
[ ] - delete movie record and genre entries

## Tags

- guilty pleasure
- elite trash
- absurd comedy (comedey sub-genre)
- silly
-
