for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 0; i < 21; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
for (let i = 0; i < 21; i += 2) {
    console.log(i);
}

for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
}

const animals = ["lions", "tigers", "bear"];

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

const seatingChart = [
    ["Sakura", "Fukusima", "Mayamoto"],
    ["Oleg", "Antonio", "Keving", "Olga"],
    ["Jack", "Flower", "Igor", "Flavio"],
];

for (let i = 1; i <= 10; i++) {
    console.log(`i is ${i}`);
    for (let j = 1; j <= 4; j++) {
        console.log(`   j is ${j}`);
    }
}

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`ROW #${i+1}`)
    for (let j = 0; j < row.length; j++) {
        console.log(`   ${row[j]}`);
    }
}
