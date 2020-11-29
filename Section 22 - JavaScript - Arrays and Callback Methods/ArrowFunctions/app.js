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

const movies = [
    {
        title: "amadeus",
        score: 99,
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

// arrow functions are used for function expressions

// const add = function (x, y) {
//     return x + y;
// };

// with arrow functions instead it becomes

const add = (x, y) => {
    return x + y;
};

//cannot have on its own, syntax error.
// (x, y) => {
//     return x + y;
// };

const square = (num) => {
    return num * num;
};

// Can do this but only if function accepts one argument

// const square = num => {
//     return num * num;
// };
//must inlcude the () if no arguments are given
const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
};

//arrow functions with implicit return -> only works with the arrow functions

const isEven = (num) => num % 2 === 0; //one-liner check if number is even

//if the function does only one thing we can just use implicit return

// only work if there is one and only one statement in a function
const randomDie = () => Math.floor(Math.random() * 6) + 1;

// working with arrow implicit return and map to produce a new array
const newMovies = movies.map((movie) => `${movie.title} is ${movie.score}/100`);
