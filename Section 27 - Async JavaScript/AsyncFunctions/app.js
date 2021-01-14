// async functions always return promises
// return of value just makes it that the promise returned as resolved
// throw of Error() is returned as rejected

const sing = async () => {
    return "lalalallalal";
};

const singError = async () => {
    throw new Error("lalalallalal");
};

sing().then((data) => {
    console.log(`Promise resolved with`, data);
});

const login = async (username, password) => {
    if (!username || !password) {
        throw new Error("Missing credentials!");
    }
    if (password == "corgifeetarecute") {
        return "Come in. Correct password";
    } else {
        throw "Invalid password";
    }
};

login("adfsdsa", "corgifeetarecute")
    .then((msg) => {
        console.log("Logged in");
        console.log(msg);
    })
    .catch((err) => {
        console.log(err);
        console.log("Unauthorized access.");
    });

// examples with async await, await allows us to resolve the promise before doing next items
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve("Satisfied color change request");
        }, delay);
    });
};

//await allows us to resolve the promise before doing next items
const rainbow = async () => {
    await delayedColorChange("red", 1000);
    await delayedColorChange("orange", 1000);
    await delayedColorChange("yellow", 1000);
    await delayedColorChange("green", 1000);
    await delayedColorChange("skyblue", 1000);
    await delayedColorChange("blue", 1000);
    await delayedColorChange("purple", 1000);
};

// rainbow();

const printRainbow = async () => {
    await rainbow();
    console.log("All done. END OF RAINBOW");
};

//handling errors (rejections) in async functions
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject("Connecion Timeout :(");
            } else {
                resolve(`Here is your fake data from ${url}`);
            }
        }, delay);
    });
};

//function that is written with try catch block for handling rejected promises
const makeTwoRequests = async () => {
    try {
        let data1 = await fakeRequestPromise("/page1");
        let data2 = await fakeRequestPromise("/page2");
        console.log(data1, data2);
    } catch (e) {
        console.log("Caught an error", `Error is ${e}`);
    }
};

makeTwoRequests();
