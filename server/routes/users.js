var express = require('express');
var router = express.Router();
var users = require('../dao/users')

router.get('/selectAll', function(req, res, next) {
  users.selectall(req, res, next);
});
router.post('/add', function(req, res, next) {
  users.add(req, res, next);
});
router.get('/login', function(req, res, next){
  users.selectUser(req, res, next);
})
router.get('/selectUser', function(req, res, next){
  users.selectUserInfo(req, res, next);
})
module.exports = router;
