const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req,res){
    res.render("home")
})

app.get("/about", function(req,res){
    res.render("about")
})

app.get("/contact", function(req,res){
    res.render("contact")
})


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}



app.listen(port, function() {
    console.log("Server started on port 3000");
  });
  