const nums = [1, 2, 314, 15, 16, 74, 352, 1315, 55, 5, 133, 533, 50];

//spread operator allows us to pass in the entire contents of the iterable
//getting the max of nums
console.log(Math.max(...nums));

//prints each element as a separate number separated by spaces
// can use strings, objects and arrays.
console.log(...nums);

console.log(Math.min(...nums));

//spread with array literals

const cats = ["blue", "red", "fluffy"];
const dogs = ["rusty", "wyatt"];

//using spread to create a new array with new contents
const allPets = [...cats, ...dogs, "speedy"];

const chars = [..."hello"];

//spread with Object Literals

const canine = { family: "Caninae", isFluffy: true };
const feline = { legs: 4, family: "Felidae" };

//creating the object with the parameters combined together
// notice that the last element will overwrite family key which will result in Caninae value
const catDog = { ...feline, ...canine };

//can also include the custom key value pairs

//spreading array into object
const test = { ...[1, 2, 3, 4, 5] }; //key will be index value will be value at index

//example: usage of that data to copy over the user entered form data, and add our own

const dataFromForm = {
    username: "tfinke",
    email: "tfinke@gmail.com",
    password: "wordpass",
};

const modifiedData = { ...dataFromForm, id: 1234, isAdmin: false };
