CREATE TABLE movies (
  id text UNIQUE,
  title text REQUIRED,
  year INTEGER REQUIRED,
  rated text,
  director text,
  plot text
);
