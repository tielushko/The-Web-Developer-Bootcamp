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

//uncommon way of doing things
//creating a function to work with element

// function print(element) {
//     console.log(element);
// }
// //passing in that function to be applied for each element in the array
// numbers.forEach(print);

//more commmon way is to define an inline function

numbers.forEach(function (el) {
    console.log(el);
});

// same as

for (let el of numbers) {
    console.log(el);
}

//just the modulo
numbers.forEach(function (el) {
    if (el % 2 == 0) {
        console.log(el);
    }
});

//forEach can also be applied on the array of objects

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

movies.forEach(function(movie) {
    console.log(`${movie.title} - ${movie.score}/100`)
})