const mysql = require('mysql');
const _conf = require('../db/index');
const _util = require('../util/index');
const pool = mysql.createPool(_conf.mysql);
const _sql = {
    add: 'INSERT INTO article(userId,title,content,typeId, time, power) VALUES(?,?,?,?,?,?)',
    selectType: 'select * from articleType',
    selectNew: 'select article.id, article.title, article.content, article.time,article.userId, article.typeId,'+
    ' user.name as userName,'+
    ' articleType.name as typeName'+
     ' from article,articleType,user'+
     ' where article.userId = user.id and article.typeId = articleType.id order by time desc limit 10',

     selectContent: 'select article.id, article.title, article.content, article.time,article.userId, article.typeId,'+
      ' user.name as userName,'+
      ' articleType.name as typeName'+
      ' from article'+
      ' INNER JOIN user'+
      ' ON article.userId = user.id'+
      ' INNER JOIN articleType'+
      ' ON article.typeId = articleType.id'+
      ' where article.id=?'
};
module.exports = {
    add: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            const param = req.body;
            const myDate = new Date();
            connection.query(_sql.add, [param.userId, param.title, param.content, param.typeId, myDate, param.power], function (err, result) {
                _util.postJsonWrite(res, result);
                connection.release();
            });
        });
    },
    getType: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            connection.query(_sql.selectType, function (err, result) {
                _util.getJsonWrite(res, result);
                connection.release();
            });
        });
    },
    getNewArticle: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            connection.query(_sql.selectNew, function (err, result) {
                _util.getJsonWrite(res, result);
                connection.release();
            });
        });
    },
    getContent: function(req, res, next){
        pool.getConnection(function (err, connection) {
            const param = req.query;
            connection.query(_sql.selectContent,[param.id], function (err, result) {
                _util.getJsonWrite(res, result);
                connection.release();
            });
        });
    }
};