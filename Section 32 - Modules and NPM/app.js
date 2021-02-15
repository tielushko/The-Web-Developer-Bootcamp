//what is imported from file math.js in current working directory
// const math = require("./math");
const { PI, square } = require("./math");
const cats = require("./shelter");

// console.log(math);

console.log(square(9));
console.log(cats, "REQUIRED AN ENTIRE DIRECTORY!");
