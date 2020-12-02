const btn = document.querySelector("#v2");

btn.onclick = () => {
    console.log("You clicked me");
};

function scream() {
    console.log("AHHHHHHHHHH");
    console.log("STOP TOUCHINGMEEEE");
}

btn.onmouseenter = scream;

//addEventListener(type_of_event, function)

const btn3 = document.querySelector("#v3");

btn3.addEventListener("click", () => {
    alert("clicked");
});

btn3.addEventListener("mouseup", scream);

//add event listener is useful when we want to apply multiple functions to the element
function twist() {
    console.log("Twist");
}

function shout() {
    console.log("shout");
}

const tasBTN = document.querySelector('#tas')

tasBTN.addEventListener('click', twist)
tasBTN.addEventListener("click", shout);