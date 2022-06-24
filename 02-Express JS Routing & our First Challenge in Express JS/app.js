// challenge

const express = require("express");
const app = express();
port = 3000;

app.get("/",(req,res)=>{
    res.send("hello from Home")
})
app.get("/about",(req,res)=>{
    res.send("hello from about");
})
app.get("/contact",(req,res)=>{
    res.send("hello from contact");
})

app.listen(port, ()=>{
    console.log(`listening port number ${port}`);
})