const mysql = require("mysql2");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "bdd",
  user: "root",
  password: "root",
  database: "ma_bdd",
});

module.exports = pool;
