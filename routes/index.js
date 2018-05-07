var express = require('express');
var router = express.Router();
var Laptop = require('../models/laptop');
/* GET home page. */
router.get('/', function(req, res, next) {
  Laptop.find(function(err, docs) {
    var laptopChunks = [];
    var chunkSize = 3;
    for (var i= 0; i < docs.length; i += chunkSize) {
      laptopChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop/index', {title: 'Treek', laptops: laptopChunks});
  });
});

module.exports = router;
