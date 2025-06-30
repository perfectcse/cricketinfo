// routes/updateRoutes.js
const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/", (req, res) => {
  const query = "SELECT * FROM cricket_updates ORDER BY date";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: "DB Error" });
    res.json(results);
  });
});

module.exports = router;
