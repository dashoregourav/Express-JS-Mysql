const express = require("express");
const bodyParser = require("body-parser");
const {mydb}=require('./config/db')
const index=require("./routes");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',index);
mydb.then(()=>{
  app.listen(3000, () => {
    console.log("Listening to the port 3000");
  });
}).catch(()=>{
  console.log("Error");
})

