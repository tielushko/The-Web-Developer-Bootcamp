
//functiono roll die with the default parameter being 6.
function rollDie (numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
}

//include the default parameters the VERY LAST in the function, after the non-default ones

function greet (name, msg="Hey there") {
    console.log(`${msg}, ${name}`);
}


