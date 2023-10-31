import { v4 as uuidv4 } from 'uuid'
import sqlite3 from 'sqlite3'
import { Request, Response } from 'express'

import DbConnect from '../util/dbConnection'
// TODO: more performant route for movie fetching (does not require all fields.)

/**
 * getMovies()
 * 
 * This is the real deal 
 */
export const GetMovies = async (req: Request, res: Response) => {
  try {
    const db = await DbConnect()

    const query = `
      SELECT
        movies.id,
        title,
        year,
        rated,
        genres.name AS genre
      FROM
        movies
      LEFT OUTER JOIN
        movie_genres
      ON
        movie_genres.movie_id = movies.id
      LEFT OUTER JOIN
        genres
      ON
        movie_genres.genre_id = genres.id
      ORDER BY RANDOM();`
  
    db.all(query, async(err, rows) => {
      if (err) {
        console.error(err)
        return res.status(500).json({ message: 'Failed @getMovies(), query execution. check server logs.' })
      }

      const records: { [key: string]: any } = {}

      rows.forEach((row: any) => {
        if (!records[row.id]) {
          records[row.id] = {
            title: row.title,
            year: row.year,
            rated: row.rated,
            genres: []
          }
        }

        if (row.genre) {
          records[row.id].genres.push(row.genre)
        }
      })

      const formattedRecords: any[] = []

      Object.keys(records).forEach(recordID => {
        formattedRecords.push({
          id: recordID,
          ...records[recordID]
        })
      })

      res.status(200).json({ records: formattedRecords })
    })
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Failed @getMovies(), check server logs' })
  }
}

// Find movie by ID.
export const GetMovieById = (req: Request, res: Response) => {
  let db = new sqlite3.Database('db.sqlite', (err) => {
    if (err) {
      return res.status(500).json({ message: 'Bad DB Connection'})
    }

    const { id } = req.params

    db.all(`
      SELECT
        *
      FROM
        movies
      WHERE
        id = ?
    `, [id], (err: any, rows: any) => {
      if (err) {
        return res.status(400).json({ message: 'Could not find record.'})
      }

      if (!Array.isArray(rows)) {
        return res.status(400).json({ message: 'Could not find record.'})
      }

      if (rows.length !== 1) {
        return res.status(400).json({ message: 'No record with that ID was found.'})
      }

      res.status(200).json({ movie: rows[0] })
    })
  })
}

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

export const UpdateMovie = (req: Request, res: Response) => {
  let db = new sqlite3.Database('db.sqlite', (err) => {
    if (err) {
      return res.status(500).json({ message: 'Bad DB Connection'})
    }

    const { title, year, rated } = req.body

    console.log(req.body)
    console.log(title, year, rated, req.params.id)

    const SqlStatment = `
      UPDATE movies
      SET title = ?,
      year = ?,
      rated = ?
      WHERE id = ?
    `
    db.run(SqlStatment, [
      title,
      year,
      rated,
      req.params.id
    ], (err) => {
      if (err) {
        console.log(err)
        return res.status(500).json({ message: 'Update Failed'})
      }

      return res.status(200).json({ updated: req.params.id })
    })
  })
}

