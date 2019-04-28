var express = require("express");
var router = express.Router();
const conn = require("../db.js");

router.get("/", function(req, res, next) {
  conn.connect();
  conn.query("SELECT name from categories", (err, results, fields) => {
    res.json({
      categories: results
    });
  });
  conn.end();
});
router.get("/db/categories"),
  (req, res, next) => {
    conn.connect();
    conn.query(sql, (err, results, fields) => {
      res.json({
        categories: results[0]
      });
    });
    conn.end();
  };
module.exports = router;
