import express from 'express'
import { MovieRatings } from '../controllers/movie-ratings'

const router = express.Router()

router.get('/', MovieRatings)

export default router