const express = require("express");
const bodyParser = require("body-parser");
const index=require("./routes/index");
const app = express();
const mysql=require('mysql2');


app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',index);
app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log("Listening to the port 3000");
});
