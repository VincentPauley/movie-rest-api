import { Request, Response } from 'express'
import MovieRatingOptions from '../constants/movie-ratings'

export const MovieRatings = (req: Request, res: Response) => {
  res.status(200).json({ records: MovieRatingOptions})
}
