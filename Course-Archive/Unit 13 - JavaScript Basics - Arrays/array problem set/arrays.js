//printReverse(array) - takes an array as an argument and prints it out in reverse order
function printReverse(array) {
    for (var i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

//isUniform(array) - takes an array as an argument and returns true if all elements are identical, false otherwise.
function isUniform(array) {
    var isCorrect = true;
    for (var i = 1; i < array.length; i++) {
        if (array[i-1] === array[i] && isCorrect == true)
            isCorrect = true;
        else 
            isCorrect = false;
    }
    return isCorrect;
}

/* isUniform(array) version 2

function isUniform(array) { 
    var first = array[0];

    for (var i = 1; i < array.length; i++) {
        if(array[i] !== first) {
            return false;
        }
    }
    return true;
}
*/
//sumArray(array) - takes an array as an argument and returns sum of all the numbers in it
function sumArray(array) {
    var sum = 0; 
    array.forEach(function(number) {
        sum += number;
    });
    return sum;
}

//max(array) - returns the max value within the array.
function max(array) {
    var max = array[0];

    array.forEach(function(number){
        if(number > max)
            max = number;
    });
    
    return max;
}