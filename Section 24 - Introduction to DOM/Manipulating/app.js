//selecting the innerText property of the paragraph and changing it
// notice that the elements inside of it like angchor tags will also be completely replaced

// document.querySelector('p').innerText = 'lololol'

//to modify the text contents without replacing the tags use textContent, will ignore any nested markup

// document.querySelector('p').textContent

const allLinks = document.querySelectorAll("a");

// for (let link of allLinks) {
//     link.innerText = "I am a link!!!!!".toUpperCase();
// }

//to inject HTML markup inside the tag using the innerHTML
//innerHTML will return everything inside including html markup

const h1HTML = (document.querySelector("h1").innerHTML = "<i>TEst H1<i>");

//innerhtml - full contents + markup
//innertext - stuff that's hidden from user is displayed - hiding html markup
//textContent - full text, hidden or not, no markup

// you can directly change the attributes of the tags

document.querySelector("#banner").src;

//alternative way is through getAttribute('src')//pulls directly from the hmtl markup
//we can change this attr using .setAttribute('href', 'https://google.com')  //need to provide two parameters

document.querySelector('input[type="text"]').setAttribute("type", "color");

for (let link of allLinks) {
    link.style.color = "rgb(0,108,134)";
    link.style.textDecorationColor = "magenta";
    link.style.textDecorationStyle = "wavy";
}

//to find out the realtime style of the element and the value that is allocated to it.
window.getComputedStyle(document.querySelector("h1")).fontSize;

//classList. contains all the style classes applied to the element

//adding the certain class styles to the element
document.querySelector("h2").classList.add("purple");
document.querySelector("h2").classList.add("border");

//removing
document.querySelector("h2").classList.remove("purple");

//toggling the classes on if its off, or off if its on.
document.querySelector("h2").classList.toggle("border");

//the dom tree can be traversed with
//.parentElement
//.children //returns HTMLCollection
//.nextElementSibling .previousElementSibling

//creating elements through javascript with createElement, and adding it to the node with appendChild (select students)

const image = document.createElement("img");
image.src =
    "https://images.unsplash.com/photo-1606735517056-c40996edc1ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80";

document.body.appendChild(image);

image.classList.add("square");

const newh3 = document.createElement("h3");
newh3.innerText = "I am a created h3";
document.body.appendChild(newh3);

//can use the append method for multiple additions to the inside of the element.
const p = document.querySelector("p");

p.append("I AM NEW TEXT"); //appends to the end of the paragraph

//prepend
const newb = document.createElement("b");
newb.append("PIE");

p.prepend(newb);

//insert next to some element.
//.insertAdjacentElement(position, element);

const h2 = document.createElement("h2");
h2.innerText = "SILKY CHICKENS";

const h1 = document.querySelector("h1");

h1.insertAdjacentElement("afterend", h2);

const h3 = document.createElement("h3");
h3.innerText = "HO HO HO";

//can also insert with after or before a certain element
h1.after(h3);

//remove and removeChild

//removechild selects the parent, then call the removeChild to remove a particular element.
const b = document.querySelector("b");
b.parentElement.removeChild(b);

// remove is called on the object itself
const img = document.querySelector("img");
img.remove();
