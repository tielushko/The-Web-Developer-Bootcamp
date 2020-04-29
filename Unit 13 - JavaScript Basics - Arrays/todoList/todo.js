//this function will be able to load the html page after the javascript code.
window.setTimeout(function() {
    // put all of your JS code from the lecture here
    var todos = [];
    
    var input = prompt("What would you like to do?");
    
    while (input !== "quit") {
        var input = prompt("What would you like to do?");
        if (input === "list") {
            listToDos();
        } else if (input === "new") {
            addToDo();
        } else if (input === "delete") {
            deleteToDo(); 
        }
    }
    console.log("Ok. You quit the app!");

    function listToDos(){
        console.log("**********");
                todos.forEach(function(todo, i){
                    console.log((i+1) + ": " + todo);
                });
        console.log("**********");
    }
    
    function addToDo() {
        var newToDo = prompt("Enter new to-do"); 
        todos.push(newToDo);
        console.log("Item added");
    }
    
    function deleteToDo() {
        var removeIndex = prompt("Enter a number of todo to delete!");
        removeIndex -= 1;
        todos.splice(removeIndex, 1);
        console.log("Item deleted");
    }
  }, 500);


