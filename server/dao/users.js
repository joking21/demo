const mysql = require('mysql');
const _conf = require('../db/index');
const _util =  require('../util/index');
const pool  = mysql.createPool(_conf.mysql);
const _sql = {
    selectAll: 'select * from user',
    insert: 'INSERT INTO user(name,password) VALUES(?,?)'
};
module.exports = {
    selectall: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            connection.query(_sql.selectAll, function(err, result) {
                _util.jsonWrite(res, result);
                connection.release();
            });
        });
    },
    add: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            var param = req.body;
            connection.query(_sql.insert, [param.name, param.password], function(err, result) {
                _util.jsonWrite(res, result);
                connection.release();
            });
        });
    }
};