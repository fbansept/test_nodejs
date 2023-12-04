const express = require("express");
const pool = require("./database");
const app = express();

app.get("/data", (req, res) => {
  pool.query("SELECT * FROM ma_table", (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port} !!!`);
});
