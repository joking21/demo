const mysql = require('mysql');
const _conf = require('../db/index');
const _util = require('../util/index');
const pool = mysql.createPool(_conf.mysql);
var path = require('path');
var fs = require('fs');
const _sql = {

};
module.exports = {
  imageUpload: function (req, res, next) {
    console.log(req.file);
    if (req.file != undefined) {
      fileName = new Date().getTime() + "_" + req.file.originalname;
      //重命名，加后缀，不然图片会显示乱码，打不开
      fs.renameSync(req.file.path, path.resolve(__dirname, '..') + "/public/image/" + fileName);
      console.log(fileName);
      console.log(req.file.path);
    }
  }
};