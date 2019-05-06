const mysql = require('mysql');
const path = require('path');
const fs = require('fs');
const _conf = require('../db/index');
const _util = require('../util/index');
const pool = mysql.createPool(_conf.mysql);
const _sql = {
    selectAll: 'select * from leaveAmessage',
    insert: 'INSERT INTO leaveAmessage(message,userId,ipAddress) VALUES(?,?,?)',
    selectFromUser: 'select * from leaveAmessage where userId=?',
    delete: 'delete from leaveAmessage where id in (?)',
};
module.exports = {
    selectall: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            connection.query(_sql.selectAll, function (err, result) {
                _util.getJsonWrite(res, result);
                connection.release();
            });
        });
    },
    selectFromUser: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            connection.query(_sql.selectFromUser, function (err, result) {
                _util.getJsonWrite(res, result);
                connection.release();
            });
        });
    },
    add: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            var param = req.body;
            connection.query(_sql.insert, [param.message, param.userId, param.ipAddress], function (err, result) {
                _util.postJsonWrite(res, result);
                connection.release();
            });
        });
    },
    deleteMessage: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            const param = req.query;
            connection.query(_sql.delete, [param.ids], function (err, result) {
                _util.getJsonWrite(res, result);
                connection.release();
            });
        });
    },
   
};