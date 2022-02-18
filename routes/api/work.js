const { works } = require("./assets/data");

var express = require("express");

var router = express.Router();

router.get("/:id", function (req, res, next) {
    const id = req.params.id;
    res.json(works[id]);
});

module.exports = router;
