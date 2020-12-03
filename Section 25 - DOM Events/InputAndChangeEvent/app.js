const input = document.querySelector("input");
const h1 = document.querySelector("h1");

//the event fires not when we start typing, but after wheen we typed something and leave the text box, then it fires.
input.addEventListener("change", () => {
    console.log("I am changing after the input is changed and unfocused");
});

//on the other hand input event will actually fire an event right away after the modification of the box
input.addEventListener("input", (event) => {
    //can capture that input event with event argument
    h1.innerText = input.value;
    console.log("I am changing right away");
});
