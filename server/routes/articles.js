var express = require('express');
var router = express.Router();
var article = require('../dao/articles')


router.post('/add', function(req, res, next) {
  article.add(req, res, next);
});
router.get('/get/type', function(req, res, next) {
  article.getType(req, res, next);
});
router.get('/new/article', function(req, res, next) {
  article.getNewArticle(req, res, next);
});
router.get('/article/info', function(req, res, next) {
  article.getContent(req, res, next);
});
module.exports = router;
