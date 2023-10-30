import sqlite3 from 'sqlite3'
import { Request, Response } from 'express'

import DbConnect from '../util/dbConnection'

export const GetGenres = async(req: Request, res: Response) => {
  try {
    const db = await DbConnect()

    db.all(`SELECT * FROM genres`, (err, rows) => {
      if (err) {
        res.status(500).json({ message: 'Bad DB lookup.' })
      }

      res.status(200).json({ genres: rows })
    })
  } catch (e) {
    res.send(e)
  }
}

export const SaveGenreToMovie = async(req: Request, res: Response) => {
  const { movieId, genreId } = req.body
  


  const insertStatement = 'INSERT INTO movie_genres (movie_id, genre_id) VALUES (?,?);'

  let db = new sqlite3.Database('db.sqlite', (err) => {
    genreId.forEach((appliedID: string) => {
      // console.log('--- Applied Genre ID: ', appliedID)
      db.run(insertStatement, [movieId, appliedID])    
    });
  })

  res.send(`might have worked, take a look.`)

  

  // seedTable() {
  //   const insertStatement = this.insertStatement()
  //   const records = this.parseRecords()
  //   let db = new sqlite3.Database(this.dbSource, (err) => {
  //     records.forEach((record: any) => {
  //       db.run(insertStatement, this.keyOrder.map(key => record[key]))
  //     })
  //   })
  // }
}
