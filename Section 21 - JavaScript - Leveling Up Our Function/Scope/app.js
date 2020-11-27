/////////////////////
// Function Scope  //
/////////////////////

//variables defined inside the function are not accessible outside of that function
// function collectEggs() {
//     let totalEggs = 6;
//     console.log(totalEggs);
// }

// collectEggs();

let bird = "scarlet macaw";

//since 'closer' version of bird is present within the function, it will reference it first. once the function executes the bird global variable will not be changed
function birdWatch() {
    let bird = "parrot";
    console.log(bird);
}

birdWatch();
console.log(bird);

//tricky example ahead - will actually print out Spanish dancer since its the closest constant.

// const creature = "Common Sea Dragon";

// function scubaDive() {
//     const creature = "Spanish Dancer"; //A type of sea slug
//     console.log(creature);
// }

// scubaDive();

///////////////////
//  Block Scope  //
///////////////////

let radius = 8;

if (radius >= 0) {
    const PI = 3.14159;
    let msg = "HIIII";
}

console.log(radius);
//console.log(msg); //will result in error since the variable is available only inside that conditional block

//var keywords however don't scope the variables to the block.... let won't allow that.

/////////////////////
//  Lexical Scope  //
/////////////////////

//child function will have access to parents function variables that are inside(), but not the other way around
function bankRobbery() {
    const heroes = ["spiderman", "superman", "batman"];
    function cryForHelp() {
        for (let hero of heroes) {
            console.log(`PLEASE HELP US ${hero.toUpperCase()}`);
        }
    }
    cryForHelp();
}
