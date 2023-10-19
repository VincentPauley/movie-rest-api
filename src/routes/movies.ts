import express from 'express'
import { AddMovie } from '../controllers/movies'

const router = express.Router()

router.post('/', AddMovie)

export default router