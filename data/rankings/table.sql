CREATE TABLE rankings (
  movieId text REQUIRED UNIQUE,
  vinnieRanking INTEGER,
  hollyRanking INTEGER,
  imdbRating INTEGER,
  tomatometer INTEGER,
  rtAudienceScore INTEGER
);

