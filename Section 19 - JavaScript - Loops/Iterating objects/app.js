const testScores = {
    Oleg: 100,
    Igor: 94,
    Jack: 86,
    Yak: 90,
    Thin: 91,
};

//iterating the entire object
for (let person in testScores) {
    console.log(`${person} received ${testScores[person]} on his exam`);
}

//iterating just the keys
for (let key of Object.keys(testScores)) {
    console.log(key);
}

//iterating just the values
for (let value of Object.values(testScores)) {
    console.log(value);
}


//average example
let total = 0;
for (let value of Object.values(testScores)) {
    total += value;
}
console.log(total / Object.values(testScores).length);
//REMEMBER - OF FOR ARRAYS -> IN FOR OBJECTS
