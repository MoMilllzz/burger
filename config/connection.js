const mysql = require("mysql"); 
const connection = mysql.createConnection ({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "American123!",
    database: "burgers_db"
})

connection.connect (function() {

})

module.exports = connection