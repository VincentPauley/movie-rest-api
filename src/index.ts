import express, { Request, Response } from 'express'

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello I am TS server')
})

app.listen(port, () => {
  console.log(`server up @ http://localhost:${port}/`)
})