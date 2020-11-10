//implementation of my own forEach function 

function myForEach(array, func) {
    for (var i = 0; i < array.length; i++) {
        func(array[i]);
    }
}   


var arr = ["red", "orange", "yellow"];

myForEach(arr, alert);

Array.prototype.myForEach = function (func) {
    for (var i = 0; i < this.length; i++) {
        func(this[i]);
    }     
}

var friends = ["Caro", "Ethan", "Kevin", "Rafael"];

friends.myForEach(function(name) {
    console.log("I love " + name);
});