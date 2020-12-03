//instead of applying random color for just button or h1 variable, we can
//create a new function that applies the functionality to "this", which in
//context will refer to specific things

function makeRandomColor() {
    const r = Math.floor(Math.random() * 256); //0 to 255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

const buttons = document.querySelectorAll("button");
const h1s = document.querySelectorAll("h1");

for (let button of buttons) {
    button.addEventListener("click", colorize);
}

for (let h1 of h1s) {
    h1.addEventListener("click", colorize);
}

// this would refer to the object that would be passed in through eventlistener
function colorize() {
    this.style.backgroundColor = makeRandomColor();
    this.style.color = makeRandomColor();
}
