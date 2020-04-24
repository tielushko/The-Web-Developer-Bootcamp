var count = -10;

alert("Printing all numbers from -10 to 19 in console");
console.log("Printing all numbers from -10 to 19 in console");
while (count < 20) {
    console.log(count);
    count++;
}

alert("print all even numbers between 10 and 40")
console.log("print all even numbers between 10 and 40")
count = 10;

while (count < 41) {
    if (count % 2 == 0)
        console.log(count);
    count++;
}

alert("print all odd numbers between 300 and 333")
console.log("print all odd numbers between 300 and 333")
count = 300;

while (count < 334) {
    if (count % 2 == 1)
        console.log(count);
    count++;
}

alert("print all numbers divisible by 5 and 3 between 5 and 50")
console.log("print all numbers divisible by 5 and 3 between 5 and 50")
count = 5;

while (count < 51) {
    if ((count % 5 == 0) && (count % 3 == 0))
        console.log(count);
    count++;
}