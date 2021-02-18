const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid } = require("uuid");

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
//to be able to parse the POST form information from the body
app.use(express.urlencoded({ extended: true }));
//to handle json data
app.use(express.json());

const comments = [
    {
        id: uuid(),
        username: "Todd",
        comment: "LOL! SO FUNNY",
    },
    {
        id: uuid(),
        username: "Valentina",
        comment: "No way! YOu are joking",
    },
    {
        id: uuid(),
        username: "Krista",
        comment: "THE most hilarious thing ever",
    },
    {
        id: uuid(),
        username: "Scott",
        comment: "Dying laughing",
    },
    {
        id: uuid(),
        username: "Skylar",
        comment: "DON't tell me anymore. I am bought!",
    },
];

app.get("/tacos", (req, res) => {
    res.send("GET /tacos response");
});

app.post("/tacos", (req, res) => {
    const { meat, qty } = req.body;
    res.send(`OK. Here are your ${qty} ${meat} tacos.`);
});

app.get("/comments", (req, res) => {
    res.render("comments/index.ejs", { comments });
});

app.get("/comments/new", (req, res) => {
    res.render("comments/new.ejs");
});

app.post("/comments", (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username: username, comment: comment, id: uuid() });
    //after accomplishing a task, it redirects us and sends a default get request to the comments route
    res.redirect("/comments");
});

app.get("/comments/:id", (req, res) => {
    const { id } = req.params;
    const comment = comments.find((c) => c.id === id);
    res.render("comments/show.ejs", { comment });
});

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!");
});

// REST PATTERN website/resource/action
// index route      GET /comments/ - list all comments
// create route     POST /comments/ - create a new comment
// show route       GET /comments/:id - get one comment using the id.
// update route     PATCH /comments/:id - update the content of the id comment.
// destroy route    DELETE /comments/:id - destroy the comment of id.

[];
