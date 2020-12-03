/*all of the events from javascript when clicked on button inside the div, the button onclick events will fire, as well as the div*/
//it is in events will fire

//to eliminate such behavior we can use

// event.stopPropagation() //and it prevents bubbling up.
function makeRandomColor() {
    const r = Math.floor(Math.random() * 256); //0 to 255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

const div = document.querySelector("#hide");
const button = document.querySelector("button");

div.addEventListener("click", (event) => {
    div.classList.toggle("hide");
});

//include stop propagation so the event doesn't propagate up to the parent div
button.addEventListener("click", (event) => {
    event.stopPropagation();
    div.style.backgroundColor = makeRandomColor();
});

//RECYCLED CODE FROM PREVIOUS SECTION!
//working with forms and using the form data in js.
const commentForm = document.querySelector("#comment-form");
const commentsContainer = document.querySelector("#comments");

//listen for submit event
commentForm.addEventListener("submit", (event) => {
    //to prevent the submission to the different/refreshed page of the form, we need to PreventDefault.
    event.preventDefault();

    //to get the value submitted from inputs of the form we can use the property elements of commentForm and search by name attr of html tag
    const usernameInput = commentForm.elements.username;
    const commentInput = commentForm.elements.comment;
    addComment(usernameInput.value, commentInput.value);
    commentInput.value = "";
    usernameInput.value = "";
});

const addComment = (username, comment) => {
    const commentWrapper = document.createElement("li");
    const usernameHighlight = document.createElement("b");
    usernameHighlight.append(username);
    commentWrapper.append(usernameHighlight);
    commentWrapper.append(` - ${comment}`);
    commentsContainer.prepend(commentWrapper);
};

//event delagation is where we add the event listener to the parent of the elements, so that if the original elements disappear we won't lose functionality

// const ul = document.querySelector("#comments");

//each time we hit on the ul we will use the event's 'target' property to determine which exact li was clicked inside that target and remove it.

commentsContainer.addEventListener("click", (event) => {
    event.target.closest("LI").remove();
});
