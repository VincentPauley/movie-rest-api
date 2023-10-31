import express from 'express'
import { AddMovie, GetMovieCount, GetMovieById, GetMovies, UpdateMovie } from '../controllers/movies'

const router = express.Router()

router.get('/count', GetMovieCount)

router.get('/all', GetMovies)

router.get('/:id', GetMovieById)

router.post('/:id', UpdateMovie)

router.post('/', AddMovie)

export default router