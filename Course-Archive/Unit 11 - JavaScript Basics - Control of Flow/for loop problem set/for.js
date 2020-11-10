
alert("Printing all numbers from -10 to 19 in console");
console.log("Printing all numbers from -10 to 19 in console");

for (var count = -10; count <= 19; count++) {
    console.log(count);
}
alert("print all even numbers between 10 and 40")
console.log("print all even numbers between 10 and 40")

for (var count = 10; count <= 40; count++) {
    if (count % 2 == 0) {
        console.log(count);
    }
}

alert("print all odd numbers between 300 and 333")
console.log("print all odd numbers between 300 and 333")

for (var count = 300; count <= 333; count++) {
    if (count % 2 == 1)
        console.log(count);
}

alert("print all numbers divisible by 5 and 3 between 5 and 50")
console.log("print all numbers divisible by 5 and 3 between 5 and 50")

for (var count = 5; count <= 50; count++) {
    if ((count % 5 == 0) && (count % 3 == 0))
        console.log(count); 
}
