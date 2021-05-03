const mysql = require("mysql2");
const env = require("dotenv");
env.config("../.env");
const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});
const mydb = new Promise((resolve, reject) => {
  connection.connect(() => {
    console.log("Connected");
    resolve();
  });
  // reject();
});

module.exports ={mydb,connection};
