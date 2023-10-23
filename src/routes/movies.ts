import express from 'express'
import { AddMovie, GetMovieById, UpdateMovie } from '../controllers/movies'

const router = express.Router()

router.get('/:id', GetMovieById)

router.post('/:id', UpdateMovie)

router.post('/', AddMovie)

export default router