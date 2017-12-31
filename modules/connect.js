var pool = require('./db.js')
module.exports.add = function (v1, v2, fn) {
    refer(v1, function (rows) {
        if (!rows.length) {
            v1 = '"' + v1 + '"'
            v2 = '"' + v2 + '"'
            var sql = 'INSERT INTO ceshi(f1,f2) VALUES (' + v1 + ',' + v2 + ')'
            pool.query(sql, function (err, rows, file) {
                if (err) {
                    console.log('数据库添加失败了！')
                } else {
                    fn(true)
                    console.log('数据库添加成功了！')
                }
            })
        } else {
            fn(false)
            console.log('注册表中已有！')
        }
    })

}
var refer = function (v1, fn) {
    v1 = '"' + v1 + '"'
    var sql = 'SELECT * FROM ceshi WHERE f1 = ' + v1 + ''
    pool.query(sql, function (err, rows, file) {
        if (err) {
            console.log('数据库查询失败了！')
        } else {
            console.log(rows)
            fn(rows)
            console.log('数据库查询成功了！')

        }
    })
}
module.exports.refer = refer