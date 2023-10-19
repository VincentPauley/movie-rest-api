import express from 'express'
import { AddMovie, MovieRatings } from '../controllers/movies'

const router = express.Router()

router.post('/', AddMovie)

router.get('/ratings', MovieRatings)

export default router