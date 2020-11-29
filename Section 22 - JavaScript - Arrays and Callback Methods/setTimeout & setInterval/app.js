//prints first right away.
console.log("Hello!");

//waits 3 seconds then prints
setTimeout(() => {
    console.log("are you still there?");
}, 3000);

//will actually be printed right after hello
console.log("GOODBYE");

//setInterval and clearInterval

//set interval will execute the chunk of code continuously every x milliseconds
// returns the id of the interval which can be stopped at some point by clearInterval(id) -> stops execution entirely

const id = setInterval(() => {
    console.log(Math.random());
}, 3000);
