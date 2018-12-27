const mysql = require('mysql');
const _conf = require('../db/index');
const _util =  require('../util/index');
const pool  = mysql.createPool(_conf.mysql);
const _sql = {
    add: 'INSERT INTO article(userId,title,content,typeId, time, power) VALUES(?,?,?,?,?,?)',
    selectUser: 'select * from user where name=?',
};
module.exports = {
    add: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            const param = req.body;
            const myDate = new Date();
            connection.query(_sql.add, [param.userId, param.title, param.content, param.typeId, myDate, param.power], function(err, result) {
                _util.postJsonWrite(res, result);
                connection.release();
            });
        });
    }
};