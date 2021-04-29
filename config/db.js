const mysql = require("mysql2");
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "sample",
});
conn.connect(() => {
  console.log("Connected");
});

module.exports=conn;