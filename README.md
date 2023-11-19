## TODOs:

### Backend

[X] - POST route for create movie
[ ] - POST call that allows for optional create movie with genres
[ ] - POST genres needs to delete all prior entries for the movie
[ ] - find genres by movie ID
[ ] - find movies by genre ID
[X] - GET movies list that includes genres
[ ] - Search by movie title
[X] - movie count
[ ] - count by genre
[ ] - matches/showing display for when records are visible.

- DIGRESSION:

  - Search is painfully slow to the point of Beach-Ballig
    :plan:

  [X] - put a limit on record return
  [X] - create a debounce on search to stall and avoid unnecessary computations

  - allow for back-end search for title.
  - handle pagination

  :pagination plan:

  - no need to add another field, ORDER BY id works and is
    already randomized due to ID generation.

  - perhaps search requires 2+ letters but doesn't paginate?

- Plan:

  [X] - 1. search include genres so there can be some visualization
  [ ] - 2. get single record that includes genre as well.

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

[ ] - genre chip: receives an ID as a prop and renders a chip with the right label - removes need for one of the joins in global search
[ ] - Edit movie genres full replacement and cleanup
[ ] - delete movie record and genre entries
