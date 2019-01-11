var express = require('express');
var router = express.Router();
var path = require('path');
var file = require('../dao/file')
/* GET home page. */
var multer = require('multer')
const upload = multer({ dest: 'uploads/' });
// upload.single('file'),
router.post('/upload/image',upload.single('file'), function(req, res, next) {
    file.imageUpload(req, res, next);
});
// 读取静态文件图片
router.get('/image/*', function (req, res) {
    res.sendFile( path.resolve(__dirname, '..') + "/public/" + req.url );
})
module.exports = router;
