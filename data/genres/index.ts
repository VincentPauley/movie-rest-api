import fs from 'fs'
import path from 'path'

import TableSeed from '../TableSeed'

const tableCreate = `
  CREATE TABLE genres (
    id text UNIQUE,
    name text UNIQUE
  );
`;

const jsonFile = fs.readFileSync(path.resolve(__dirname + '/records.json'), { encoding: 'utf8'});
const recordData = JSON.parse(jsonFile)

export const GenreSeed = new TableSeed('db.sqlite', 'genres', ['id', 'name'], tableCreate, recordData.records)
