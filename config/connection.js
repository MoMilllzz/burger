const mysql = require("mysql"); 
let connection

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection ({
        host: "localhost",
        user: "root",
        port: 3306,
        password: "American123!",
        database: "burgers_db"
    })
}

connection.connect (function() {

})

module.exports = connection