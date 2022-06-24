//  How To Send HTML & JSON Data as a Response using Express JS

const express = require("express");
const app = express();
port = 3000;

// for one line html
app.get("/", (req, res) => {
    res.send("<h1>hello from Home</h1>")
})

// for multiple line html
app.get("/about", (req, res) => {
    res.write("<h1>hi buddy how are you?</h1>")
    res.write("<h1>let catch up some time</h1>")
    res.send("");
})

// we can pass object. by default it will strinify into JSON
app.get("/contact", (req, res) => {
    res.send({
        id: 1,
        name: "sudip",
        age: 23,
        contact: 1234567890,
    });
})

// passing multiple object
// app.get("/temp", (req, res) => {
//     res.send([
//         {
//             id: 1,
//             name: "sudip",
//             age: 23,
//             contact: 1234567890,
//         },
//         {
//             id: 1,
//             name: "sudip",
//             age: 23,
//             contact: 1234567890,
//         },
//     ]);
// })

// we can also use .json to send response. 
app.get("/temp", (req, res) => {
    res.json([
        {
            id: 1,
            name: "sudip",
            age: 23,
            contact: 1234567890,
        },
        {
            id: 1,
            name: "sudip",
            age: 23,
            contact: 1234567890,
        },
    ]);
})

app.listen(port, () => {
    console.log(`listening port number ${port}`);
})