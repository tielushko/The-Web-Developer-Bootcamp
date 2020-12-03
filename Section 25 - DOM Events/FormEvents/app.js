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
