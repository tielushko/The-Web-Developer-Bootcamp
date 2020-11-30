//selecting by ID, returns a javascript object with that particular element
const banner = document.getElementById("banner");

//selecting all img tags and storing as an object, supports indexing 0,1,2,3.

//Will return HTMLCollection object
//it WILL be missing the typical array methods.
const allImages = document.getElementsByTagName("img");

//viewing image sources

for (let img of allImages) {
    console.log(img.src);
}

//selecting elements with particular className
//Will return HTMLCollection object

const squareImages = document.getElementsByClassName("square");

for (let img of squareImages) {
    //do something with each image
    // img.src = ....
}

//querySelector and querySelectorAll - newer and better
//notice we use the selector as used in css
//querySelector gives the first matching one
document.querySelector("h1");
document.querySelector("#banner");

//can chain on just like css selectors classes and attributes

document.querySelector("img:nth-of-type(2)");
document.querySelector('a[title="Java"]');

//querySelectorAll returns a COLLECTION of all of the matches
document.querySelectorAll("a");

//anchor tags inside paragraphs
const pLinks = document.querySelectorAll("p a");

for (let link of pLinks) {
    console.log(link.href);
}
