// selecting storage containers for our scores,
const scorePlayer1Container = document.querySelector("#player-1-score");
const scorePlayer2Container = document.querySelector("#player-2-score");

// and selecting buttons that increment score
const incrementButton1 = document.querySelector("#increment-1");
const incrementButton2 = document.querySelector("#increment-2");

//button for reset the score
const resetButton = document.querySelector("#reset");

// selecting the input area of the limit for the score
const scoreLimitInput = document.querySelector("#score-limit");

// setting default value to 5
scoreLimitInput.defaultValue = 5;

// get the current score as the max in our game
let scoreLimit = parseInt(scoreLimitInput.value);

//whenever our input box changes the number inside we need to capture that new number inside of it.
scoreLimitInput.addEventListener("change", () => {
    scoreLimit = parseInt(scoreLimitInput.value);
    reset();
});

// set the current scores to zero at start of game
let currentPlayer1Score = 0;
let currentPlayer2Score = 0;

// at the beginning of the game no one one yet, will be useful to prevent the other button from working
let isGameOver = false;

incrementButton1.addEventListener("click", () => {
    if (currentPlayer1Score !== scoreLimit && !isGameOver) {
        currentPlayer1Score++;
        scorePlayer1Container.innerText = currentPlayer1Score;
    }
    if (currentPlayer1Score === scoreLimit) {
        isGameOver = true;
        scorePlayer1Container.classList.add("green");
        scorePlayer2Container.classList.add("red");
        incrementButton1.disabled = true;
        incrementButton2.disabled = true;
    }
});

incrementButton2.addEventListener("click", () => {
    if (currentPlayer2Score !== scoreLimit && !isGameOver) {
        currentPlayer2Score++;
        scorePlayer2Container.innerText = currentPlayer2Score;
    }
    if (currentPlayer2Score === scoreLimit) {
        isGameOver = true;
        scorePlayer2Container.classList.add("green");
        scorePlayer1Container.classList.add("red");
        incrementButton1.disabled = true;
        incrementButton2.disabled = true;
    }
});

//reset event listener

resetButton.addEventListener("click", reset);

function reset() {
    isGameOver = false;
    currentPlayer1Score = 0;
    currentPlayer2Score = 0;
    scorePlayer1Container.innerText = currentPlayer1Score;
    scorePlayer2Container.innerText = currentPlayer2Score;
    scorePlayer1Container.classList.remove("green", "red");
    scorePlayer2Container.classList.remove("green", "red");
    incrementButton1.disabled = false;
    incrementButton2.disabled = false;
}
