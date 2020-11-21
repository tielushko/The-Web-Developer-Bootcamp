// Making an array:
const colors = ["red", "orange", "yellow"];

// Arrays are indexed like strings:
colors[0]; // "red"

// They have a length:
colors.length; //3

// Important array methods:
//push(value) - adds value to the END of an array
//pop() - removes and returns last value in array

//unshift(value) - adds value to START of an array
//shift() - removes and returns first element in an array

//concat - combine 2 arrays together into a merged array

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const array3 = array1.concat(array2); //array3 = [1,2,3,4,5,6]

//includes

array1.includes(2); //true - indicates if found -> only the first match
array1.includes(0); //false if it is not found

array1.indexOf(2); //1
array1.indexOf(0); //-1

//reverse - destructive changes the initial array - inplace
array2.reverse(); // [6,5,4]

//slice - getting the slice of the array
let colors = ["red", "blue", "green", "orange", "indigo", "purple", "yellow"];

colors.slice(3); // from index 3-orange to the end.
colors.slice(); //the entire array
colors.slice(2, 4); //includes 2,3 up to but not including 4 (green, orange)
colors.slice(-3); //gives last three elements of the array

// colors.splice(index_insert, how_many_to_delete, what_to_insert) -> returns an array of deleted items

colors.splice(3, 1); //deletes the color orange from the array
colors.splice(1, 2); //deletes blue and green. from original
colors.splice(1, 0, "red-blue"); //inserts red-blue before index 1, 0 because length of 0, and insert the text in third argument

//array.sort() turns everything into strings, then compares their UTF characters.

// ['hi'] === ['hi'] //false
// [1,2] === [1,2] //false
// [1,2] == [1,2] //false
// [] == [] //false

//because array compares the references in memory, not the contents of the arrays.

// and because of those we end up with not equal

let nums = [1, 2, 3];
let numsCopy = nums; //basically a copy of the refernece to variable nums to array [1,2,3]
//whenever nums will change, the numsCopy will change too


//const array is used to prevent array from being reassigned
//it can still be modified and contents can be deleted, but the address (reference is the same, so it doesnt error) 

//if const array is referenced to a different array entirely, we error