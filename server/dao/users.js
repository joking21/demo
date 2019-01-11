const mysql = require('mysql');
const _conf = require('../db/index');
const _util =  require('../util/index');
const pool  = mysql.createPool(_conf.mysql);
const _sql = {
    selectAll: 'select * from user',
    insert: 'INSERT INTO user(name,password) VALUES(?,?)',
    selectUser: 'select * from user where name=? and password=?',
    selectUserById: 'select * from user where id = ?',
};
module.exports = {
    selectall: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            connection.query(_sql.selectAll, function(err, result) {
                _util.getJsonWrite(res, result);
                connection.release();
            });
        });
    },
    add: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            var param = req.body;
            connection.query(_sql.insert, [param.name, param.password], function(err, result) {
                _util.postJsonWrite(res, result);
                connection.release();
            });
        });
    },
    selectUser: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            var param = req.query;
            connection.query(_sql.selectUser, [param.name, param.password], function(err, result) {
                if(result.length === 0){
                    res.json({
                        code: 404,
                        msg: '用户名不存在或密码错误！'
                    });
                }else{
                    res.json({
                        code: 200,
                        msg: '登录成功！',
                        result:result
                    });
                }
                connection.release();
            });
        });
    },
    selectUserInfo: function(req, res, next) {
        pool.getConnection(function(err, connection) {
            var param = req.body;
            connection.query(_sql.selectUserById, [param.id], function(err, result) {
                _util.postJsonWrite(res, result);
                connection.release();
            });
        });
    }
};