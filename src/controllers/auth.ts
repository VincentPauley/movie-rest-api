import 'dotenv/config'
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'

export const Authenticate = (req: Request, res: Response) => {
  const { PASSWORD_HASH } = process.env

  if (PASSWORD_HASH?.length !== 60) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  bcrypt.compare(req.body.password, PASSWORD_HASH, (err, result) => {
    if (err) {
      console.error(err)
      return res.status(401).json({ message: 'Unauthorized' });
    }

    if (!result) {
      console.log('failed authentication, wrong password: ' + req.body.password)
      return res.status(401).json({ message: 'Unauthorized' });
    }

    return res.status(200).json({ message: 'Successful Authentication' });
  })
}
