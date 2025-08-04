const express = require ("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
// app.get("/", (req , res) => {
//     res.render("home.ejs");
// });

app.listen(port, () => {
    console.log(`here is servere ${port}`);
});

app.get("/home", (req, res) => {
    const deta = require("./data.json");
    let { name } = req.params;
    const user = deta[name]
    console.log(user);
    res.render("in.ejs", { user });
});

// app.get("/" , (req, res) => {
//     let rendom = Math.floor(Math.random() * 100) + 1;
//     res.render("co.ejs" , {rendom});
// });

// app.get("/ig/:username", (req, res) => {
//     let { username } = req.params;
//     res.render("in.ejs", { username });
// });

// app.use((req , res) => {
//     console.log("request received");
//     res.send("hello wor");
// });

// app.get("/", (req, res) => {
//     res.send("Hello World");
// });

// app.get("/about", (req, res) => {
//     res.send("About Us");
// });

// app.get("/:username", (req, res) => {
//     let { username } = req.params;
//     console.log(username)
//     res.send(`Hello ${username}`);
// });

// app.get("/:username", (req, res) => {
//     console.log(req.params);
//     res.send(`${req.params}`);
// });

// app.get("/search" , (req , res) => {
//     console.log(req.query);
//     res.send(req);
// });

// node package manager