const express = require("express");
const app = express();
const path = require("path");
const router = require("./router/router");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static("views"));
app.set("views","views");
app.set("view engine","ejs");
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.use(function(req,res,next){   
  res.header('Access-Control-Allow-Origin',"*");  
  res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Methods',"GET,PUT,POST,DELETE");  
  next();
});  

app.use("/", router);


app.listen(8888, ()=>{
    console.log("The server running on port 8888")
});