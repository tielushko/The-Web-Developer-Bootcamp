let maxNumber = parseInt(prompt("Welcome! Enter maxiumum number (integer): "));

while (!maxNumber || maxNumber < 0) {
    maxNumber = parseInt(prompt("Welcome! Enter a valid positive number!!!"));
}

const randomGuess = Math.floor(Math.random() * maxNumber) + 1;
let guessCounter = 1;

let guessInput = parseInt(prompt("Enter your first guess guess!"));

while (parseInt(guessInput) !== randomGuess) {
    if (guessInput === "q") break;
    guessCounter++;
    if (guessInput < randomGuess) {
        guessInput = prompt("Too low! Try guessing again!");
    } else if (guessInput > randomGuess) {
        guessInput = prompt("Too high! Try guessing again!");
    }
}
if (guessInput === "q") {
    alert("Bye bye quitter");
} else if (guessCounter == 1) {
    alert(`OK YOU WIN! It took you ${guessCounter} attempt to win!`);
} else {
    alert(`OK YOU WIN! It took you ${guessCounter} attempts to win!`);
}
