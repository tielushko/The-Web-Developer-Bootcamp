//our basic function
const greet = function () {
    console.log("HIIII");
};

// function that takes a function argument inside of it, and executes it twice for example
function callTwice(func) {
    func();
    func();
}

//calling a function with another function argument
callTwice(greet);


