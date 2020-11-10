/*
var movieDB = [
    {name: "The Godfather", rating: 5, hasWatched: true}, 
    {name: "Frozen 2", rating: 4.5, hasWatched: true}, 
    {name: "Bad Boys Forever", rating: 4, hasWatched: true}, 
    {name: "Mad Max", rating: 5, hasWatched: false}
];

for(var i = 0; i < movieDB.length; i++) {
    if (movieDB[i].hasWatched) {
        console.log("You have watched '" + movieDB[i].name + "' - " + movieDB[i].rating + " stars.");
    } else {
        console.log("You have not seen '" + movieDB[i].name + "' - " + movieDB[i].rating + " stars.");
    }
}
 basic workings of the movieDB*/

var movieDB = [];

alert("Welcome to the Movie Database!");

while(command !== "quit") {
    var command = prompt("Please enter what would you like to do!");

    //add new movie
    if (command === "add") {
        addMovie();
    } else if (command === "list") {    //list the movies in the database
        listMovies();
    } else if (command === "delete") {  //remove a movie from the database
        deleteMovie();
    }
}

console.log("Ok you quit the app. Bye!");

function addMovie() {
    var movie = {};
    movie.name = prompt("Enter the movies name:");
    movie.rating = prompt("Enter the movie rating:"); 
    movie.hasWatched = prompt("Have you seen the movie? Enter yes/no:")
    movieDB.push(movie);
    console.log("Item added!");
}

function listMovies() {
    for(var i = 0; i < movieDB.length; i++) {
        if (movieDB[i].hasWatched === "yes") {
            console.log((i+1) + ": You have watched '" + movieDB[i].name + "' - " + movieDB[i].rating + " stars.");
        } else if(movieDB[i].hasWatched === "no") {
            console.log((i+1) + ": You have not seen '" + movieDB[i].name + "' - " + movieDB[i].rating + " stars.");
        }
    }
}

function deleteMovie() {
    var deleteIndex = prompt("Which movie would you like to delete? Enter a number.");
    deleteIndex -= 1;
    movieDB.splice(deleteIndex, 1);
    console.log("Item deleted.");
}