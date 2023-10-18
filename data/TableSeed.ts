import sqlite3 from 'sqlite3'

export default class TableSeed {
  dbSource: string;
  tableName: string;
  keyOrder: string[];
  tableCreateSQL: string;
  records: any[];

  constructor(dbSource: string, tableName: string, keyOrder: string[], tableCreateSQL: string, records: any[]) {
    this.dbSource = dbSource;
    this.tableName = tableName;
    this.keyOrder = keyOrder;
    this.tableCreateSQL = tableCreateSQL;
    this.records = records;
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

    return new Promise((resolve, reject) => {
      let db = new sqlite3.Database(this.dbSource, (err) => {
        this.records.forEach(record => {
          db.run(insertStatement, [record.id, record.name]) // TODO: this needs to be dynamic to the keys
        })
      })
    })
  }

  insertStatement() {
    return `INSERT INTO ${this.tableName} (${this.keyOrder.join(', ')}) VALUES (${this.keyOrder.map(k => '?').join(', ')});`;
  }
}
