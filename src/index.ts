import 'dotenv/config'
import cors from 'cors'
import express, { Request, Response } from 'express'
import bodyParser from 'body-parser';

// routes
import tableRoutes from './routes/table'
import movieRoutes from './routes/movies'
import movieRatings from './routes/movie-ratings'

const app = express();
const port = process.env.APPLICATION_PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello I am TS server')
})

app.use('/full-table', tableRoutes)
app.use('/movie', movieRoutes)
app.use('/movie-ratings', movieRatings)

app.listen(port, () => {
  console.log(`server up @ http://localhost:${port}/`)
})