//arguments object will allow us to have the arguments passed into the function be accessible
function sum() {
    console.log(arguments);
}

//however the caveat is that the arguments doesn't act like a regular array, and lacks all of the methods arrays have, e.g. reduce map filter

// will throw an error
// function sum() {
//     return arguments.reduce((total, current) => total + current)
// }

// a solution is to use ...nums to be able to store any number of arguments passed into the function as an array

function sumRest(...nums) {
    return nums.reduce((total, current) => total + current);
}

const winners = ["Patrick", "Joe", "Brandon", "Maggie", "Tom", "Vin"];

function raceResults(gold, silver, ...everyoneElse) {
    console.log(`First place goes to ${gold}`);
    console.log(`First place goes to ${silver}`);
    console.log(`First place goes to ${everyoneElse}`);
}
