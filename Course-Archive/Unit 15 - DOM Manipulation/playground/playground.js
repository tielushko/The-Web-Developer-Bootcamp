//simple color manipulation
var h1 = document.querySelector("h1");
h1.style.color = "pink";

//background animation
var body = document.querySelector("body"); //SELECT
var isBlue = false; 

setInterval( function() { //MANIPULATE THE SELECTION
    if(isBlue) {
        body.style.background = "white";
    } else {
        body.style.background = "blue";
    }
    isBlue = !isBlue;
},1000);

