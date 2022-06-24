// to create package.json use npm init

const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    res.send("hello world from express");
})
app.get("/about", (req,res)=>{
    res.send("hello world form about page");
})

app.listen(3000, ()=>{
    console.log("listening at port number 3000");
})