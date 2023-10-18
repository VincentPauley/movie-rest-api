import fs from 'fs'
import sqlite3 from 'sqlite3'
import MovieData from './data/movies'

import { GenreSeed } from './data/genres'

const DBSOURCE = 'db.sqlite'

let db = new sqlite3.Database(DBSOURCE, async(err) => {
  if (err) {
    console.error('--Failed DB init')
    console.error(err.message)
    throw err
  } else {
    
    const tableCreateSql = fs.readFileSync('./data/movies/table.sql', { encoding: 'utf8'})
    db.run(tableCreateSql, (err) => {
      if (err) {
        console.log(err)
      }

      const insertSql = fs.readFileSync('./data/movies/insert.sql', { encoding: 'utf8' })

      MovieData.forEach(movie => db.run(insertSql, movie))

      console.log('it\'s ok')
    })

    await GenreSeed.createTable()
    GenreSeed.seedTable()
  }
})
