var tag = document.getElementById("highlight"); //find the matching object with same id

var tags = document.getElementsByClassName("bolded"); //find matching objects by class name


var items = document.getElementsByTagName("li"); //find matching li objects in document

console.log(items[0]);//prints out 1st item
console.log(items[1]);//2nd item

//query selector - returns the first element that matches a given CSS selector.
var selected = document.querySelector("#highlight"); //->select by id

var bolded = document.querySelector(".bolded"); // -> select by class //NOTE: always returns the 1st element that matches!!!

//query selector all - works as query selector but returns all matching elements!

var classes = document.querySelectorAll(".bolded");
var lis = document.querySelectorAll("li");

/* ways to get <p id="first" class="special">Hello</p>
var p = document.querySelector("p");
var p = document.querySelector(".p")
var p = document.querySelector("#first");
var p = document.getElementById("first");
var p = document.getElementsByClassName("special")[0];
var p = document.querySelectorAll(".special")[0];
var p = document.querySelectorAll("p")[0]
var p = document.getElementsByTagName("p")[0];

//quirky - selects a first paragraph right after h1
var p = document.querySelector("h1 + p");
*/
