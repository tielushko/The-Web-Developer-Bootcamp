const add = (x, y) => {
    return x + y;
};

const PI = 3.14159;

const square = (x) => x * x;

// what the file exports (default is empty object)
module.exports.add = add;
module.exports.PI = PI;
module.exports.square = square;

// instead can do exports.square = square, etc. notice that exports can be reassigned as
// variable name, breaking this functionality
