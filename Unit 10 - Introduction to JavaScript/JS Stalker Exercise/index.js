var userFirst = prompt("Enter your First Name:");
var userLast = prompt("Enter your Last Name:");
var userAge = prompt("Enter your age:");

var fullName = userFirst + " " + userLast + "!";
alert("Hello, dear "  + fullName);
alert("You are " + userAge + " years old, I believe!");

console.log("Hello, dear " + fullName);
console.log("You are " + userAge + " years old, I believe!");



//the age calculator 
var age = prompt("What is your age?");
var days = age * 365.25;
alert(age + " years old is approximately " + days + " days old.");