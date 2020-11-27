document.addEventListener("DOMContentLoaded", function () {
    let command = prompt("Please enter the command").trim().toLowerCase();
    let todos_container = [];

    while (command != "quit" && command != "q") {
        if (command == "new") {
            const todo = prompt("Enter the todo to add to the list.")
                .trim()
                .toLowerCase(0);
            todos_container.push(todo);
            alert(`TODO "${todo}" was added to the list.`);
        } else if (command == "list") {
            console.log("HERE IS THE LIST OF ALL THE TODOS");
            console.log("*********************************");
            for (todo of todos_container) {
                console.log(`*  ${todos_container.indexOf(todo) + 1}: ${todo}`);
            }
            console.log("*********************************");
        } else if (command == "delete") {
            const index_of_delete = parseInt(
                prompt("Enter the todo form the list you want to delete.")
            );
            const deleted_item = todos_container.splice(index_of_delete - 1, 1);

            alert(
                `The TODO: ${deleted_item[0]} was removed from the list of todos`
            );

            console.log("HERE IS UPDATED LIST OF ALL THE TODOS");
            console.log("*********************************");
            for (todo of todos_container) {
                console.log(`*  ${todos_container.indexOf(todo) + 1}: ${todo}`);
            }
            console.log("*********************************");
        } else if (command == "quit") {
            break;
        } else {
            command = prompt(
                "Invalid command entered. Please enter a valid command."
            )
                .trim()
                .toLowerCase();
        }

        command = prompt("Please enter the command").trim().toLowerCase();
    }

    alert("Thank you for using the to-do list simplistic app.");
});
