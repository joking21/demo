var express = require('express');
var router = express.Router();
var article = require('../dao/articles')


router.post('/add', function(req, res, next) {
  article.add(req, res, next);
});
module.exports = router;
