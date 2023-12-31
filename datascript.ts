// TODO: obviously some DRY cleanup possible from here.
import { GenreSeed } from './data/genres'
import { MovieSeed } from './data/movies'
import { RankingSeed } from './data/rankings'
import MovieGenresSeed from './data/movie-genres'

const movieSetup = async () => {
  await MovieSeed.createTable()
  MovieSeed.seedTable()
}

const genreSetup = async () => {
  await GenreSeed.createTable()
  GenreSeed.seedTable()
}

const movieGenreSetup = async () => {
  await MovieGenresSeed.createTable()
  MovieGenresSeed.seedTable()
}

const rankingSetup = async () => {
  await RankingSeed.createTable()
  RankingSeed.seedTable()
}

genreSetup()
movieSetup()
movieGenreSetup()
rankingSetup()
