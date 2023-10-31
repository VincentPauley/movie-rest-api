import sqlite3 from 'sqlite3'
import { Request, Response } from 'express'

export const ReadFullTable = (req: Request, res: Response) => {
  console.log('Read Full Table..')
  let db = new sqlite3.Database('db.sqlite', (err) => {
    if (err) {
      return res.status(500).json({ message: 'Bad DB Connection.'})
    }

    const { tableName } = req.params


    let query = null;

    if (tableName === 'movies') {
      query = 'SELECT * FROM movies'
    }

    if (tableName === 'movie_genres') {
      query = 'SELECT * FROM movie_genres'
    }

    if (tableName === 'genres') {
      query = 'SELECT * FROM genres'
    }

    if (!query) return res.status(400).json({ message: 'table not found.'})

    db.all(query, [], (err, rows) => {
      if (err) {
        console.log(err)
        return res.status(500).json({ message: 'Bad DB Lookup.'})
      }

      res.status(200).json({ records: rows })
    })
  })
}
