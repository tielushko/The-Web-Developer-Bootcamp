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

numbers.some((number) => number >= 5); //true - if ANY of the numbers in the numbers array is >= 5, then the function returns true
movies.every((movie) => movie.score >= 80); //true - if ALL of the movies have the score of >= 80, then the function will return true

//function to see if every single digit in the array is even
function allEvens(input_array) {
    return input_array.every((num) => num % 2 === 0);
}
