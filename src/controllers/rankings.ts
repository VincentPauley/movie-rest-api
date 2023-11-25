import { Request, Response } from 'express'
import DbConnect from '../util/dbConnection'

const findRankingById = (id: string) => {
  return new Promise(async(resolve, reject) => {
    try {
      const db = await DbConnect()
  
      db.all(`
        SELECT
          *
        FROM
          rankings
        WHERE
          movieId = ?
      `, [id], (err: any, rows: any) => {
        if (err) {
          reject('Could not find record.')
        }
        resolve(rows[0])
      })
    } catch (e) {
      console.log(e)
      reject('something went wrong')
    }
  })
  
}

export const GetRankingById = async (req: Request, res: Response) => {
  try {
    const record = await findRankingById(req.params.id)
    res.send(record);
  } catch (e) {
    console.error(e)
    res.send('error')
  }
}

export const SetRanking = (req: Request, res: Response) => {
  const {
    movieId,
    vinnieRanking,
    hollyRanking,
    imdbRating,
    tomatometer,
    rtAudienceScore
  } = req.body;
  
  // call GetRankingById() and run either an update
  // or a create based on the result.
  res.send(`-- received SetRanking() request. for movieId: ${movieId}`);
}

