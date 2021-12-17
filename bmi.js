const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});


app.post("/", function(req, res){

  var num1 = parseFloat(req.body.w1);
  var num2 = parseFloat(req.body.h1);
  

  var result = num1 / (num2*num2);


    res.send("BMI Result is" + result);
});

app.listen(3000, function(){
    console.log("server started on port 3000");
} );


 