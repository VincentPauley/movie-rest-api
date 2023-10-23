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
