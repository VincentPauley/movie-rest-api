import sqlite3 from 'sqlite3'

export default function DbConnect(): Promise<sqlite3.Database> {
  return new Promise((resolve, reject) => {
    let db = new sqlite3.Database('db.sqlite', (err) => {
      if (err) {
        console.error('DB Connection Error: ', err)
        reject(err)
      }

      resolve(db)
    })
  })
}
