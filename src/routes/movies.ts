import express from 'express'
import { AddMovie, GetMovieById } from '../controllers/movies'

const router = express.Router()

router.get('/:id', GetMovieById)

router.post('/', AddMovie)

export default router