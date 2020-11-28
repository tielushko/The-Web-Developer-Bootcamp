//function that returns a blank function
function makeMysteryFunc() {
    let rand = Math.random();

    if (rand > 0.5) {
        return function () {
            console.log("CONGRATS, I AM A GOOD FUNCTION");
            console.log("YOU WIN A MILLIONN DOLLARS");
        };
    } else {
        return function () {
            alert("YOU SUCK SO MUCH.");
            alert("DONT TRY TO CLOSE THIS WINDOW");
            alert("DONT TRY TO CLOSE THIS WINDOW");
            alert("DONT TRY TO CLOSE THIS WINDOW");
            alert("DONT TRY TO CLOSE THIS WINDOW");
            alert("DONT TRY TO CLOSE THIS WINDOW");
            alert("DONT TRY TO CLOSE THIS WINDOW");
        };
    }
}

//saving that return function into a variable that will become a function on itself.
const mystery = makeMysteryFunc();

//calling that function mystery that we saved earlier
mystery();

//factory functions -> they produce different functions based on the input that we provide to generate the function.

//imagine our basis function we want to have different ranges to check if the number belongs to them, generate example for between 50 and 100.
function isBetween(num) {
    return num >= 50 && num <= 100;
}

//now have a function that would accept the min and max between which we would need to check if the number is in the range
function generateIsBetween(min, max) {
    return function (num) {
        return num >= min && num <= max;
    };
}

//generating a range for the child age
const isChild = generateIsBetween(0, 17);

console.log(isChild(1));

//generating the range for the adult
const isAdult = generateIsBetween(18, 64);
console.log(isAdult(75));

const isSenior = generateIsBetween(65, 120);
console.log(isSenior(100));
