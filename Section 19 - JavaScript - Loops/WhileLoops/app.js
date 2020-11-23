let input = prompt("Enter something");

while (true) {
    input = prompt(input);
    if (input == "break") {
        break;
    }
}
alert("OK YOU WIN");
