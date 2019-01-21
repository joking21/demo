const mysql = require('mysql');
const path = require('path');
const fs = require('fs');
const _conf = require('../db/index');
const _util = require('../util/index');
const pool = mysql.createPool(_conf.mysql);
const _sql = {
    selectAll: 'select * from user',
    insert: 'INSERT INTO user(name,password) VALUES(?,?)',
    selectUser: 'select * from user where name=? and password=?',
    selectUserById: 'select * from user where id = ?',
};
function isUpdate(name, password, img, id) {
    return `UPDATE user SET ${name ? 'name = ?' : ''}${password ? ', password = ? ' : ''} ${img ? ', img = ?' : ''} WHERE id = ?`
}
module.exports = {
    selectall: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            connection.query(_sql.selectAll, function (err, result) {
                _util.getJsonWrite(res, result);
                connection.release();
            });
        });
    },
    add: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            var param = req.body;
            connection.query(_sql.insert, [param.name, param.password], function (err, result) {
                _util.postJsonWrite(res, result);
                connection.release();
            });
        });
    },
    selectUser: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            var param = req.query;
            connection.query(_sql.selectUser, [param.name, param.password], function (err, result) {
                if (result.length === 0) {
                    res.json({
                        code: 404,
                        msg: '用户名不存在或密码错误！'
                    });
                } else {
                    res.json({
                        code: 200,
                        msg: '登录成功！',
                        result: result
                    });
                }
                connection.release();
            });
        });
    },
    selectUserInfo: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            var param = req.query;
            connection.query(_sql.selectUserById, [param.id], function (err, result) {
                _util.getJsonWrite(res, result);
                connection.release();
            });
        });
    },
    updateUser: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            const param = req.body;
            const file = req.file;
            let fileName = '';
            let imgUrl = '';
            if (file != undefined) {
                fileName = param.userId + "_" + req.file.originalname;
                fs.renameSync(req.file.path, path.resolve(__dirname, '..') + "/public/image/" + fileName);
                imgUrl = `/files/image/${fileName}`;
            }
            const tempData = [];
            param.userName ? tempData.push(param.userName) : null;
            param.userPassword ? tempData.push(param.userPassword) : null;
            imgUrl ? tempData.push(imgUrl) : null;
            param.userId ? tempData.push(param.userId) : null;
            connection.query(isUpdate(param.userName, param.userPassword, imgUrl, param.userId),
                tempData,
                function (err, result) {
                    _util.postJsonWrite(res, result);
                    connection.release();
                });
        });
    }
};