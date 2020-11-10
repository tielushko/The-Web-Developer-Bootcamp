//create secret number 
var secretNumber = 4;
//ask for the guess
var guess = Number(prompt("Enter the number you guessing", "number"));

if (guess === secretNumber) 
    alert("You guessed it!")
else if(guess < secretNumber)
    alert("Your guess is too low!");
else 
    alert("Your guess is too high!");