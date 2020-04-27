//this function will be able to load the html page after the javascript code.
window.setTimeout(function() {
    // put all of your JS code from the lecture here
    var todos = [];
    
    var input = prompt("What would you like to do?");
    
    while (input !== "quit") {
        var input = prompt("What would you like to do?");

        if (input === "list") {
            console.log(todos);
        } else if (input === "new") {
            //ask for new todo
            var newToDo = prompt("Enter new to-do"); 
            todos.push(newToDo);
        }
    }
    
console.log("Ok. You quit the app!");
  }, 500);