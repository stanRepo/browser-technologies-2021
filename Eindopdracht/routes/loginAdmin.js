var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  console.log("adminroute accessed");
  console.log(req.body.username);
  console.log(req.body.pw);
  if ((req.body.username === "admin" && req.body.pw === "0000") || 0000) {
    res.render("admin.ejs");
  } else {
    res.render("adminLoginFailed.ejs");
  }
});

module.exports = router;
