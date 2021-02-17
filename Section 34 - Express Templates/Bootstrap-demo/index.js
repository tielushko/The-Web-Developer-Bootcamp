const express = require("express");
//required to set the views directory
const path = require("path");
const redditData = require("./data.json");
const app = express();

//bundling our css and js assets with the page that come inside the public directory
// set the public directory

app.use(express.static(path.join(__dirname, "/public")));

//don't need to require ejs, can just set it and be done.
app.set("view engine", "ejs");

// set the views directory
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    //the rendered html document must be stored in the directory views, to render the page, we attach it to our
    // response, passing in the file. Don't have to do ejs if we changed the view engine with app.set
    // if directory is not views, need to specify - best idea is to set the views directory
    res.render("home.ejs");
});

//example with passing in the data into the template
app.get("/rand", (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    // whatever num is, it will be available in my template under the name rand
    res.render("random.ejs", { rand: num }); //could also just do num to get it as num
});

app.get("/cats", (req, res) => {
    const cats = ["Blue", "Rocket", "Monty", "Stefany", "Winston"];
    res.render("cats.ejs", { cats });
});

app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    const subredditData = redditData[subreddit];
    if (subredditData) {
        res.render("subreddit.ejs", { ...subredditData });
    } else {
        res.render("notfound", { subreddit });
    }
});

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
});
