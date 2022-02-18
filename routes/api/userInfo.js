const { userInfo } = require("./assets/data");

var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
    res.json(userInfo);
});

module.exports = router;
