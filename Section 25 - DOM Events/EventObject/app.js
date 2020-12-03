//every event has something known as event object passed in by default
document.querySelector("button").addEventListener("click", (event) => {
    console.log(event);
});
//we can capture that event with the argument to the function ->
// it provides information about the event, the key pressed or the location of the mouse pointer

const input = document.querySelector("input");

input.addEventListener("keydown", (event) => {
    //use key to display the key being pressed
    console.log(event.key);
    //use code for directing the instructions based on the keyboard presses
    console.log(event.code);
});

//FOR A game example, to listen for particular key we need to add event listener to a window

window.addEventListener("keydown", (event) => {
    console.log(event.code);
});
