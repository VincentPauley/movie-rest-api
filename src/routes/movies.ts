import express from 'express'
import { AddMovie, GetMovieById, MovieRatings } from '../controllers/movies'

const router = express.Router()

router.get('/:id', GetMovieById)
router.get('/ratings', MovieRatings)

router.post('/', AddMovie)

export default router