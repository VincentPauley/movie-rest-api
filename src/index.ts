import express, { Request, Response } from 'express'

// routes
import tableRoutes from './routes/table'

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello I am TS server')
})

app.use('/full-table', tableRoutes)

app.listen(port, () => {
  console.log(`server up @ http://localhost:${port}/`)
})