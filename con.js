const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql12345",
    database: "testdb",
    multipleStatements: true,
  });
  
  con.connect( (err) => {
    if (err) throw err;
    console.log("Connected!");
    
  });
  
module.exports = con;