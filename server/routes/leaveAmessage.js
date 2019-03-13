const express = require('express');
const router = express.Router();
const leaveAmessage = require('../dao/leaveAmessage')
router.get('/list', function (req, res, next) {
    leaveAmessage.selectall(req, res, next);
});
router.post('/add', function (req, res, next) {
    leaveAmessage.add(req, res, next);
});
router.get('/selectByUser', function (req, res, next) {
    leaveAmessage.selectFromUser(req, res, next);
})
router.get('/delete', function (req, res, next) {
    leaveAmessage.deleteMessage(req, res, next);
})
module.exports = router;
