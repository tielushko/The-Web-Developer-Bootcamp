// filter allows us to filter out the contents of the function based on criteria. If the element in array satisfies the criteria given in callback function, it is added to the new returned array.

const numbers = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
];

const oddLessThan10 = numbers.filter(
    (number) => number % 2 === 1 && number < 10
);

const movies = [
    {
        title: "amadeus",
        score: 80,
    },
    {
        title: "stand by me",
        score: 85,
    },
    {
        title: "parasite",
        score: 96,
    },
    {
        title: "alien",
        score: 100,
    },
];

const bestMovies = movies.filter((movie) => movie.score >= 90);
const badMovies = movies.filter((movie) => movie.score < 90);
const bestMoviesTitles = movies
    .filter((movie) => movie.score >= 90)
    .map((movie) => movie.title);

//function to filter an array of usernames with only less than 10 characters
function validUserNames(usernames_array) {
    return usernames_array.filter((username) => username.length < 10);
}
