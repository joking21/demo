const express = require('express');
const router = express.Router();
const users = require('../dao/users')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' });
router.get('/list', function(req, res, next) {
  users.selectall(req, res, next);
});
router.post('/add', function(req, res, next) {
  users.add(req, res, next);
});
router.get('/login', function(req, res, next){
  users.selectUser(req, res, next);
})
router.get('/single', function(req, res, next){
  users.selectUserInfo(req, res, next);
})
router.post('/update', upload.single('file'), function(req, res, next){
  users.updateUser(req, res, next);
})
module.exports = router;
