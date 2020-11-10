var button = document.querySelector("body");

button.addEventListener("click", function() {
    button.classList.toggle("colorToggle")
});

//another version 
/*
    var button = document.querySelector("button");
    var isPurple = false;

    button.addEventListener("click", function() {
        if(isPurple) {
            document.body.style.background = "white";
            isPurple = false;
        } else {
            document.body.style.background = "purple"; 
            isPurple = true;
        }
    });
*/