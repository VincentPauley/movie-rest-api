import express from 'express'

import { GetGenres, SaveGenreToMovie } from '../controllers/genres'

const router = express.Router()

router.get('/', GetGenres)

router.post('/movie', SaveGenreToMovie)

export default router