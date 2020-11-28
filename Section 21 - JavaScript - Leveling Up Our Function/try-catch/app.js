//wrap the code you think might fail in code
try {
    hello.toUpperCase();
} catch {
    // if the exceptionew happens we gonna run this code
    console.log("ERRORO!!!!");
}

//this will allow us to continue our code without halt of the execution and to handle our requests

function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(2));
    } catch (error) {
        console.log(error);
        console.log("Please pass a string next time!");
    }
}
