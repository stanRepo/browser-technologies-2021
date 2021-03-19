var express = require("express");
var router = express.Router();

// Catch the form on POST request
router.post("/", function (req, res, next) {
  console.log(req.body);

  res.render("finished", {
    obj: req.body,
  });
});

module.exports = router;
