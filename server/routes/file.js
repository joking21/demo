const express = require('express');
const router = express.Router();
const path = require('path');
const file = require('../dao/file')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' });
router.post('/upload/image',upload.single('file'), function(req, res, next) {
    file.imageUpload(req, res, next);
});
// 读取静态文件图片
router.get('/image/*', function (req, res) {
    res.sendFile( path.resolve(__dirname, '..') + "/public" + req.url );
})
module.exports = router;
