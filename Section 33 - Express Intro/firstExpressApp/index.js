const express = require("express");

const app = express();
// console.dir(app);

//any request coming in runs through this use, output is in terminal
// creates a request object that has the information about the particular response.
// can't have more than one response sent.

// app.use((request, response) => {
//     console.log("We got a new request.");
//     // response.send("Hello we got your request, this is your response.");
//     response.send({ color: "red" });
//     // response.send('<h1>This is my request</h1>');
// });

app.get("/", (request, response) => {
    console.log("We got a HOMEPAGE request.");
    response.send("<h1>Welcome to homepage</h1>");
});

//pattern defining links (subreddits)
app.get("/r/:subreddit", (request, response) => {
    //access the variable subreddit
    const { subreddit } = request.params;
    response.send(`<h1>Welcome to ${subreddit} subreddit</h1>`);
});

app.get("/r/:subreddit/:postID", (request, response) => {
    //access the variable subreddit, postID
    const { subreddit, postID } = request.params;
    response.send(
        `<h1>Browsing the ${subreddit} subreddit, viewing ${postID} post</h1>`
    );
});

app.get("/search", (request, response) => {
    //access the search queries
    const { q } = request.query;
    if (!q) {
        response.send("<h1>Nothing found if nothing searched!!!</h1>");
    }
    response.send(`<h1>Search Results for: ${q}</h1>`);
});
app.get("/cats", (request, response) => {
    console.log("We got a CAT request.");
    response.send("<h1>meow</h1>");
});

app.post("/cats", (request, response) => {
    console.log("We got a CAT POST request.");
    response.send("<h1>THIS IS DIFFERENT FROM GET REQUEST</h1>");
});
app.get("/dogs", (request, response) => {
    console.log("We got a DOG request.");
    response.send("<h1>BARK</h1>");
});

app.get("*", (request, response) => {
    console.log("We got a 404 request.");
    response.send("<h1>I don't know that path. 404.</h1>");
});
// /cats - meow
// /dogs - bark
// / - welcome to home
app.listen(3000, () => {
    console.log("Listening on port 3000");
});
