var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  console.log("adminroute accessed");
  if ((req.body.username === "admin" && req.body.pw === "0000") || 0000) {
    res.render("admin");
  } else {
    res.render("adminLoginFailed");
  }
});

module.exports = router;
