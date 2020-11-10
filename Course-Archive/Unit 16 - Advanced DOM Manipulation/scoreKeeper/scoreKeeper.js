var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var winScoreDisplay = document.querySelector("#until");
var numInput = document.querySelector("input[type='number']"); 
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winScore = 5; 


p1Button.addEventListener("click", function() {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winScore) {
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1Score; 
    } 
});

p2Button.addEventListener("click", function() {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winScore) {
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score; 
    } 
});

resetButton.addEventListener("click", function() {
    reset();
});

numInput.addEventListener("change", function() {
    winScoreDisplay.textContent = this.value;
    winScore = Number(this.value);
    reset();
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}