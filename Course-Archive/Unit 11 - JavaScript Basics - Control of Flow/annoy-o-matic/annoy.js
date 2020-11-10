//BONUS: contains yes in the entire string
var answer = prompt("Are we there yet?");

while (answer.indexOf("yes") === -1) {
    answer = prompt("Are we there yet?");
}

alert("Yay we made it!");

/* Version 1
var answer = prompt("Are we there yet?");

while (true) {
    answer = prompt("Are we there yet?");
    if (answer == "yeah" || answer == "yes") {
        alert("Yay we made it!");
        break; 
    }
}
*/

/* Version 2
    var answer = prompt("Are we there yet?");
    while(answer != "yes" && answer != "yeah") {
        var answer = prompt("Are we there yet?");
    }
    alert("Yay we made it!");
*/
