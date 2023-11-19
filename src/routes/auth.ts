import express from 'express'

import { Authenticate } from '../controllers/auth'

const router = express.Router()

router.post('/', Authenticate)

export default router;