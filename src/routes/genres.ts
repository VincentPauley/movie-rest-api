import express from 'express'

import { GetGenres } from '../controllers/genres'

const router = express.Router()

router.get('/', GetGenres)

export default router