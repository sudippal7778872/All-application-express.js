//  How To Send HTML & JSON Data as a Response using Express JS

const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");
port = 3000;


// need to set hbs path
// console.log(path.join(__dirname,"/templates"))
const templatesPath = path.join(__dirname,"/templates/views")
const partialsPath = path.join(__dirname,"/templates/partials")
// to set the view engine
app.set("view engine","hbs");
app.set("views",templatesPath)
hbs.registerPartials(partialsPath)


// view engine route
app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/about", (req,res)=>{
    res.render("about")
})

app.listen(port, () => {
    console.log(`listening port number ${port}`);
})