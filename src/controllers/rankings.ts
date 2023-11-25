import { Request, Response } from 'express'

export const GetRankingById = () => {
  // find record by ID, return record or null
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

