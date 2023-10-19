import { v4 as uuidv4 } from 'uuid'
import sqlite3 from 'sqlite3'
import { Request, Response } from 'express'

export const AddMovie = (req: Request, res: Response) => {
  let db = new sqlite3.Database('db.sqlite', (err) => {
    if (err) {
      return res.status(500).json({ message: 'Bad DB Connection'})
    }

    const id = uuidv4()

    db.run(`
      INSERT INTO
        movies
      (id, title, year, rated, director, plot)
        VALUES
      (?,?,?,?,?,?)`, [
        id,
        req.body.title,
        req.body.year,
        req.body.rated,
        req.body.director,
        req.body.plot
      ], (err) => {
        if (err) {
          return res.status(400).json({ message: 'Insertion failed.'})
        }

        return res.status(200).json({ created: id })
      })
  })
}
