module.exports = {
  postJsonWrite: function (res, ret) {
        if (typeof ret === 'undefined') {
            res.json({
                code: 500,
                msg: '操作失败'
            });
        } else {
            res.json({
                code: 200,
                msg: '操作成功',
            });
        }
    },
    getJsonWrite: function (res, ret) {
        if (typeof ret === 'undefined') {
            res.json({
                code: 500,
                msg: '操作失败'
            });
        } else {
            res.json({
                code: 200,
                msg: '操作成功',
                result: ret,
            });
        }
    },
}