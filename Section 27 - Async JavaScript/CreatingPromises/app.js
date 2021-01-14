const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve("Satisfied color change request");
        }, delay);
    });
};

delayedColorChange("red", 1000)
    .then(() => {
        delayedColorChange("orange", 1000);
        console.log("Done");
    })
    .then(() => {
        delayedColorChange("yellow", 1000);
        console.log("Done");
    })
    .then(() => {
        delayedColorChange("green", 1000);
        console.log("Done");
    })
    .then(() => {
        delayedColorChange("skyblue", 1000);
        console.log("Done");
    })
    .then(() => {
        delayedColorChange("indigo", 1000);
    })
    .then(() => {
        delayedColorChange("violet", 1000);
        console.log("Done");
    });
