import fs from 'fs'
import path from 'path'
import TableSeed2 from '../TableSeed2'

const tableCreate = fs.readFileSync(path.resolve(__dirname + '/table.sql'), { encoding: 'utf8'});

export const RankingSeed = new TableSeed2(
    'db.sqlite',
    'rankings',
    ['movieId', 'vinnieRanking', 'hollyRanking', 'imdbRating', 'tomatometer', 'rtAudienceScore'],
    tableCreate,
    path.resolve(__dirname + '/records.json')
)
