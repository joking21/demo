const mysql = require('mysql');
const _conf = require('../db/index');
const _util = require('../util/index');
const pool = mysql.createPool(_conf.mysql);
var path = require('path');
var fs = require('fs');
module.exports = {
  imageUpload: function (req, res, next) {
    // console.log(req.body);
    // console.log(req.file);
    const tempInfo = req.body;
    if (req.file != undefined) {
      fileName = tempInfo.userId + "_" + req.file.originalname;
      //重命名，加后缀，不然图片会显示乱码，打不开
      fs.renameSync(req.file.path, path.resolve(__dirname, '..') + "/public/image/" + fileName);
      
    }
  }
};