// objects with some methods attached to it.
const myMath = {
    PI: 3.14159,
    square: function (num) {
        return num * num;
    },
    cube: function (num) {
        return num ** 3;
    },
};

console.log(myMath.PI);
console.log(myMath.cube(3));
console.log(myMath.square(2));

//shorthand way of adding methods

const shortHandMath = {
    add(x, y) {
        return x + y;
    },
    multiply(x, y) {
        return x * y;
    },
};
