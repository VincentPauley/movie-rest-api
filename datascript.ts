// TODO: obviously some DRY cleanup possible from here.
import { GenreSeed } from './data/genres'
import { MovieSeed } from './data/movies'

const movieSetup = async () => {
  await MovieSeed.createTable()
  MovieSeed.seedTable()
}

const genreSetup = async () => {
  await GenreSeed.createTable()
  GenreSeed.seedTable()
}

genreSetup()
movieSetup()
