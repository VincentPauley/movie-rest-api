import fs from 'fs'
import path from 'path'
import sqlite3 from "sqlite3"

import TableSeed from '../TableSeed'

const tableCreate = `
  CREATE TABLE genres (
    id text UNIQUE,
    name text UNIQUE
  );
`;

const jsonFile = fs.readFileSync(path.resolve(__dirname + '/records.json'), { encoding: 'utf8'});
const recordData = JSON.parse(jsonFile)

export const GenreSeed = new TableSeed('db.sqlite', 'genres', ['id', 'name'], tableCreate, recordData.records)

const GenreData = {
  // TODO: env file here
  // @DEPRECATE
  createTable(dbSource = 'db.sqlite') {
    return new Promise((resolve, reject) => {
      let db = new sqlite3.Database(dbSource, (err) => {
        if (err) {
          return reject(err)
        }

        // TODO: not sure why this no work
        // const tableSQL = fs.readFileSync('./table.sql', { encoding: 'utf8'})
        const tableSQL = `CREATE TABLE genres (
          id text UNIQUE,
          name text UNIQUE
        );`

        db.run(tableSQL, (err) => {
          if (err) {
            return reject(err)
          }

          resolve(true)
        })
      })
    })
  },
  insertRecords(dbSource = 'db.sqlite') {
    return new Promise((resolve, reject) => {
      try {
        const jsonFile = fs.readFileSync(path.resolve(__dirname + '/records.json'), { encoding: 'utf8'});
        const recordData = JSON.parse(jsonFile)

        let db = new sqlite3.Database(dbSource, (err) => {
          if (err){
            throw err
          }

          const insertStatement = 'INSERT INTO genres (id, name) VALUES (?, ?);'

          recordData.records.forEach((record: any) => {
            db.run(insertStatement, [record.id, record.name])
          })
        })
      } catch (e) {
        reject(e)
      }
    });
  }
}

// GenreData.createTable()
// GenreData.insertRecords()

// console.log('--GenreSeed--')
// console.log(GenreSeed.insertStatement())

export default GenreData
