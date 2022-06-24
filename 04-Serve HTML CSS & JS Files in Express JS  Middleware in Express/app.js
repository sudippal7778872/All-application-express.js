//  How To Send HTML & JSON Data as a Response using Express JS

const path = require("path");
const express = require("express");
const app = express();
port = 3000;

const dir = path.join(__dirname,"/public")
// console.log(path.join(__dirname,"/public"))
app.use(express.static(dir))


app.get("/", (req, res) => {
    res.send("hello from home")
})


app.get("/about", (req, res) => {
    res.send("hello from about");
})


app.get("/contact", (req, res) => {
    res.send("hello from contact");
})



app.listen(port, () => {
    console.log(`listening port number ${port}`);
})