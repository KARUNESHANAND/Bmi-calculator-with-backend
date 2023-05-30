const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,response){
    response.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,response){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    function bmiCalculator(weight, height) {
        var bmi = parseFloat((weight)/(height**2)).toFixed(2);
        return bmi;
    } 
    var bmiFinal = bmiCalculator(weight,height);
    response.send("The calculated BMI for weight = " + weight + "kg and height = " + height + "m is : " + bmiFinal);
});

app.listen(3000, function(){
    console.log("server started on port 3000");
});