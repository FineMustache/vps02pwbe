const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost',
    database: 'senai_cursos',
    user: 'root'
})

module.exports = con