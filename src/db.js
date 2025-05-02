const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.resolve(__dirname, "database", "database.db");

const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT, 
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      type TEXT NOT NULL,
      password TEXT NOT NULL,
    )
    `);
});

module.exports = db;
