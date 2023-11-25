import express from 'express'
import { SetRanking } from '../controllers/rankings'

const router = express.Router()

router.post('/', SetRanking)

export default router;