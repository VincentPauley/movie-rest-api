import express from 'express'
import { ReadFullTable } from '../controllers/tables'

const router = express.Router()

router.get('/:tableName', ReadFullTable)

export default router