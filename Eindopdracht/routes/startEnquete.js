var express = require("express");
var router = express.Router();

// Catch the form on POST request
router.post("/", function (req, res, next) {
  console.log(req.body.firstName);

  res.render("enquete", {
    obj: req.body,
  });
});

module.exports = router;
