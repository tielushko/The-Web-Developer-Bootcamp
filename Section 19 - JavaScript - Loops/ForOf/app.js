const subreddits = [
    "chickens",
    "turtles",
    "cars",
    "ComputerScience",
    "guns",
    "AITA",
];

for (let sub of subreddits) {
    console.log(`https://www.reddit.com/r/${sub}`);
}

const seatingChart = [
    ["Sakura", "Fukusima", "Mayamoto"],
    ["Oleg", "Antonio", "Kevin", "Olga"],
    ["Jack", "Flower", "Igor", "Flavio"],
];

for (let row of seatingChart) {
    console.log(`ROW ${seatingChart.indexOf(row) + 1}`);
    for (let student of row) {
        console.log(`   ${student}`);
    }
}

//for of works with other iterable like strings and sets
