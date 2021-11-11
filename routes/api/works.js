const {works} = require('./assets/data');

var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.json(works);
});

module.exports = router;
