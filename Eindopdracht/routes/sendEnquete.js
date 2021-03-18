var express = require("express");
var router = express.Router();

/* GET home page. */
router.post("/sendEnquete", function (req, res, next) {
  console.log(req.body.firstName);
  res.render("index", { title: "Express" });
});

module.exports = router;
