const express = require("express");
const app = express();
const port = 3000;
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
const { v4 : uuid4} = require("uuid");
uuid4();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(port , () => {
    console.log(`Server is running on http://localhost:${port}`);
});

let posts = [
    {
        id: uuid4(),
        username: "user1",
        content: "This is the first post" 
    },
    {
        id: uuid4(),
        username: "user2",
        content: "This is the second post" 
    },
    {
        id: uuid4(),
        username: "user3",
        content: "This is the third post"
    },
    {
        id: uuid4(),
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
    const id = uuid4();
    posts.push({ username, content , id });
    res.redirect("/posts");
});

// app.get("/posts/:id", (req, res) => {
//     let {id} = req.params;
//     let post = posts.find((p) => id === p.id);
//     console.log(post);
//     // res.render("show.ejs", { post });
// });
app.get("/posts/:id", (req, res) => {
    const { id } = req.params;
    const post = posts.find((p) => id === (p.id.toString()));
    console.log(post);
    if (!post) {
        return res.status(404).send("Post not found");
    }
    res.render("show.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
    const { id } = req.params;
    let newContent = req.body.content;
    console.log(newContent);
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    res.redirect(`/posts/${id}`);
});

app.get("/posts/:id/edit", (req, res) => {
    const { id } = req.params;
    const post = posts.find((p) => id === p.id);   
    res.render("in.ejs", { post });
});
