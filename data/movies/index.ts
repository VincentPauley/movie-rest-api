import fs from 'fs'
import path from 'path'
import TableSeed2 from '../TableSeed2'

const tableCreate = fs.readFileSync(path.resolve(__dirname + '/table.sql'), { encoding: 'utf8'});

export const MovieSeed = new TableSeed2(
    'db.sqlite',
    'movies',
    ['id', 'title', 'year', 'rated', 'director', 'plot'],
    tableCreate,
    path.resolve(__dirname + '/records.json')
)
