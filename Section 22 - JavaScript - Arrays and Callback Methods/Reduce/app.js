//Reduce, takes all of the elements of any array, and then combines them into a single thing using only the function provided.

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

//example: the entire array is reduced into the sum
[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

const prices = [9.99, 1.5, 19.99, 49.95, 30.5];

//using reduce to sum
const total = prices.reduce((total, price) => total + price);

//using reduce to find min
const min = prices.reduce((min, current) => {
    if (current < min) {
        return current;
    } else {
        return min;
    }
});

const bestMovie = movies.reduce((bestMovie, currentMovie) => {
    if (currentMovie.score > bestMovie.score) {
        return currentMovie;
    } else {
        return bestMovie;
    }
});

//we can set a starting value for the accumulator, the first variable
const evens = [2, 4, 6, 8];

const sumAnd100 = evens.reduce((sum, num) => sum + num, 100);
