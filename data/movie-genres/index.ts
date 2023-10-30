import fs from 'fs'
import path from 'path'
import TableSeed2 from '../TableSeed2'

const tableCreate = fs.readFileSync(path.resolve(__dirname + '/table.sql'), { encoding: 'utf8'});

const MovieGenresSeed = new TableSeed2(
  'db.sqlite',
  'movie_genres',
  ['movie_id', 'genre_id'],
  tableCreate,
  path.resolve(__dirname + '/records.json')
)

export default MovieGenresSeed
