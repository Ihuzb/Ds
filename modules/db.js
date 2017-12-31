var mysql = require('mysql')
module.exports = mysql.createConnection({
    host: '127.0.0.1',
    post: 3306,
    user: 'root',
    password: '123456',
    database: 'ceshi'
})
