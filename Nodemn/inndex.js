const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(port , () => {
    console.log(`Server is running on http://localhost:${port}`);
});

let posts = [
{   username: "user1",
    content: "This is the first post" 
},
{   username: "user2", 
    content: "This is the second post" 
},
{   username: "user3",
    content: "This is the third post"
},
{
    username: "user4",
    content: "This is the fourth post"
},

];

app.get("/posts/new" , (req, res) => {
    res.render("new.ejs");
});

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.post("/posts", (req, res) => {
    const { username, content } = req.body;
    posts.push({ username, content });
    res.redirect("/posts");
});
