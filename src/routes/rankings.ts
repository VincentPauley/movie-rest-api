import express from 'express'
import { GetRankingById, SetRanking } from '../controllers/rankings'

const router = express.Router()

router.get('/:id', GetRankingById)

router.post('/', SetRanking)

export default router;