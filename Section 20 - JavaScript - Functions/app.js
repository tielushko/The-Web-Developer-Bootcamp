//definition of the function
function grumpus() {
    console.log("ugh... you again");
    console.log("leave me alone!!!!");
}

//running of the function
grumpus();

function greet(firstName) {
    console.log(`Hey there, ${firstName}!`);
}

greet("Elvis");

function repeat(message, num) {
    let result = "";
    for (let i = 0; i < num; i++) {
        result += message;
    }
    console.log(result);
}
