import fs from 'fs'
import sqlite3 from 'sqlite3'

export default class TableSeed {
  dbSource: string;
  tableName: string;
  keyOrder: string[];
  tableCreateSQL: string;
  jsonFilePath: string;

  constructor(
    dbSource: string,
    tableName: string,
    keyOrder: string[],
    tableCreateSQL: string,
    jsonFilePath: string
  ) {
    this.dbSource = dbSource;
    this.tableName = tableName;
    this.keyOrder = keyOrder;
    this.tableCreateSQL = tableCreateSQL;
    this.jsonFilePath = jsonFilePath;
  }

  parseRecords() {
    const jsonFile = fs.readFileSync(this.jsonFilePath, { encoding: 'utf8'});
    return JSON.parse(jsonFile).records
  }

  createTable() {
    return new Promise((resolve, reject) => {
      let db = new sqlite3.Database(this.dbSource, (err) => {
        if (err) {
          return reject(err)
        }

        db.run(this.tableCreateSQL, (err) => {
          if (err) {
            return reject(err)
          }
  
          resolve(true)
        })
      })
    })
  }

  seedTable() {
    const insertStatement = this.insertStatement()
    const records = this.parseRecords()

    let db = new sqlite3.Database(this.dbSource, (err) => {
      records.forEach((record: any) => {
        db.run(insertStatement, this.keyOrder.map(key => record[key]))
      })
    })
  }

  insertStatement() {
    return `INSERT INTO ${this.tableName} (${this.keyOrder.join(', ')}) VALUES (${this.keyOrder.map(k => '?').join(', ')});`;
  }
}
