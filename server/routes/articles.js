var express = require('express');
var router = express.Router();
var article = require('../dao/articles')


router.post('/add', function(req, res, next) {
  article.add(req, res, next);
});
router.get('/type', function(req, res, next) {
  article.getType(req, res, next);
});
router.get('/new', function(req, res, next) {
  article.getNewArticle(req, res, next);
});
router.get('/detail', function(req, res, next) {
  article.getContent(req, res, next);
});
router.get('/list', function(req, res, next) {
  article.getAllArticle(req, res, next);
});
router.get('/personal', function(req, res, next) {
  article.getSelectByMe(req, res, next);
});
router.post('/update', function(req, res, next) {
  article.updateArticle(req, res, next);
});
router.get('/article/admin/byAll', function(req, res, next) {
  article.getAllArticleByAdmin(req, res, next);
});
router.get('/delete', function(req, res, next) {
  article.deleteArticle(req, res, next);
});
module.exports = router;
