const mysql = require('mysql');
const _conf = require('../db/index');
const _util = require('../util/index');
const pool = mysql.createPool(_conf.mysql);
const _sql = {
    add: 'INSERT INTO article(userId,title,content,typeId, time, power) VALUES(?,?,?,?,?,?)',
    selectType: 'select * from articleType',
    selectNew: 'select article.id, article.title, article.preview, article.content, article.time,article.userId, article.typeId,' +
        ' user.name as userName,' +
        ' articleType.name as typeName' +
        ' from article,articleType,user' +
        ' where article.userId = user.id and article.typeId = articleType.id and article.power = 1 order by time desc limit 10',

    selectContent: 'select article.id, article.preview, article.title, article.content, article.time,article.userId, article.typeId,' +
        ' user.name as userName,' +
        ' articleType.name as typeName' +
        ' from article' +
        ' INNER JOIN user' +
        ' ON article.userId = user.id' +
        ' INNER JOIN articleType' +
        ' ON article.typeId = articleType.id' +
        ' where article.id=?',

    setPreview: 'UPDATE article set preview=preview+1 where id = ?',

    selectAll: 'select article.id, article.title, article.preview, article.content, article.time,article.userId, article.typeId,' +
        ' user.name as userName,' +
        ' articleType.name as typeName' +
        ' from article,articleType,user' +
        ' where article.userId = user.id and article.typeId = articleType.id and article.power = 1 order by time desc',
    selectAllByAdmin: 'select article.id, article.preview, article.title, article.content, article.time,article.userId, article.typeId,' +
        ' user.name as userName,' +
        ' articleType.name as typeName' +
        ' from article,articleType,user' +
        ' where article.userId = user.id and article.typeId = articleType.id order by time desc',
    selectByMe: 'select article.id, article.title, article.preview, article.content, article.time,article.userId, article.typeId, article.power,' +
        ' articleType.name as typeName' +
        ' from article,articleType' +
        ' where article.typeId = articleType.id and article.userId = ?',

    update: 'UPDATE article SET title = ?, content = ?, power = ?, typeId = ?, time = ? where id = ?',

    delete: 'DELETE FROM article WHERE id = ?',
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
        console.log(req);
        pool.getConnection(function (err, connection) {
            connection.query(_sql.selectNew, function (err, result) {
                _util.getJsonWrite(res, result);
                connection.release();
            });
        });
    },
    getContent: function (req, res, next) {
        const _this = this;
        pool.getConnection(function (err, connection) {
            const param = req.query;
            connection.query(_sql.selectContent, [param.id], function (err, result) {
                _util.getJsonWrite(res, result);
                connection.release();
                _this.setPreview(param.id);
            });
        });
    },
    setPreview: function (id) {
        // setPreview
        console.log(id);
        pool.getConnection(function (err, connection) {
            connection.query(_sql.setPreview, [id], function (err, result) {
                console.log(err);
                console.log(result);
                connection.release();
            });
        });
    },
    getAllArticle: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            const param = req.query;
            //  page: 页数   num: 每页条数
            connection.query(_sql.selectAll, function (err, result) {
                if (result) {
                    const page = parseInt(param.page);
                    const num = parseInt(param.num);
                    const tempNum = result.length % num === 0 ? 0 : 1;
                    const total = parseInt(result.length / num) + tempNum;   // 总页数
                    const tempList = result.slice((page - 1) * num, (page - 1) * num + 10);
                    const tempData = {
                        data: tempList,
                        total,
                        page,
                        num,
                        totalCount: result.length,
                    }
                    _util.getJsonWrite(res, tempData);
                } else {
                    _util.getJsonWrite(res, result);
                }
                connection.release();

            });
        });
    },
    getAllArticleByAdmin: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            const param = req.query;
            //  page: 页数   num: 每页条数
            connection.query(_sql.selectAllByAdmin, function (err, result) {
                if (result) {
                    const page = parseInt(param.page);
                    const num = parseInt(param.num);
                    const tempNum = result.length % num === 0 ? 0 : 1;
                    const total = parseInt(result.length / num) + tempNum;   // 总页数
                    const tempList = result.slice((page - 1) * num, (page - 1) * num + 10);
                    const tempData = {
                        data: tempList,
                        total,
                        page,
                        num,
                        totalCount: result.length,
                    }
                    _util.getJsonWrite(res, tempData);
                } else {
                    _util.getJsonWrite(res, result);
                }
                connection.release();

            });
        });
    },
    getSelectByMe: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            const param = req.query;
            connection.query(_sql.selectByMe, [param.id], function (err, result) {
                _util.getJsonWrite(res, result);
                connection.release();
            });
        });
    },
    updateArticle: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            const param = req.body;
            const myDate = new Date();
            connection.query(_sql.update, [param.title, param.content, param.power, param.typeId, myDate, param.id], function (err, result) {
                _util.postJsonWrite(res, result);
                connection.release();
            });
        });
    },
    deleteArticle: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            const param = req.query;
            connection.query(_sql.delete, [param.id], function (err, result) {
                _util.getJsonWrite(res, result);
                connection.release();
            });
        });
    },
};