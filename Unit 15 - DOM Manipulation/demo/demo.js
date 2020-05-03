
//changing basic design using javascript
var h1 = document.querySelector("h1");
h1.style.color = "yellow";
h1.style.border = "5px solid pink";


//toggling on and off the css classes.
var p = document.querySelector("p");
p.classList.add("big");


//textContent and innerHTML manipulation
var anotherWayofP = document.getElementsByTagName("p");
console.log(p.textContent);
p.textContent = "Corgi mixes are super adorable"; //can overwrite but dangerous as it gets rid of other nested tags.
p.innerHTML = "Corgi mixes are super adorable"; //can overwrite and DOES NOT REMOVE the innertags

var ul = document.querySelector("ul");
console.log(ul.textContent);
console.log(ul.innerHTML);


//get and setAttribute manipulation
var link = document.getElementsByTagName("a")[0];
link.setAttribute("href", "http://www.bing.com");

//toggling on and off the css classes.

/* 
//in CSS file
.some-class {
    color: blue;
    border: 10 px solid red;
}

//in JAVASCRIPT file
var tag = document.getElementById("highlight");

//add the class to classList
tag.classList.add("some-class");

//remove 
tag.classList.remove("some-class");

//toggle - if given element has that element - remove it, if absent - it will add it to classList 
tag.classList.toggle("some-class");

//NOTE! classList is NOT AN ARRAY. must use .add
*/

//addEventListener

var h1 = document.querySelector("h1");
h1.addEventListener("click", function() {
    console.log("You cliked h1");
    h1.style.backgroundColor = "orange";
});

document.querySelector("ul").addEventListener("click", function() {
    console.log("you clicked ul");  
});

var lis = document.querySelectorAll("li");

for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function() {
        this.style.color = "pink";     
    });
}
