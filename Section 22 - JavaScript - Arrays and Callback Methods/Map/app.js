// MAP will apply the function onto each element of the array and will return an array with the result.
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

// multiply each number by 2 by using map -> similar as forEach but it returns the new array -> map can be chainable -> does not mutate the original array, but produces a new one that can be saved.

const numbersDoubled = numbers.map(function (num) {
    return num * 2;
});

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

const movieTitles = movies.map(function (movie) {
    return movie.title.toUpperCase();
});

//function that takes an array of namees and returns the array of names that has trimmed the whitespaces.

function cleanNames(array_str) {
    return array_str.map(function (word) {
        return word.trim();
    });
}
