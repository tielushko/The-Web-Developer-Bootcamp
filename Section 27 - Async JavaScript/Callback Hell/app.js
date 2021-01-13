// setTimeout(() => {
//     document.body.style.backgroundColor = "red";
//     setTimeout(() => {
//         document.body.style.backgroundColor = "orange";
//         setTimeout(() => {
//             document.body.style.backgroundColor = "yellow";
//         }, 1000);
//     }, 1000);
// }, 1000);

//example of callback function that takes in the function argument to do next
const delayedColorDisplay = (color, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = color;
        doNext && doNext();
    }, delay);
};

//nested callback
delayedColorDisplay("red", 1000, () => {
    delayedColorDisplay("orange", 1000, () => {
        delayedColorDisplay("yellow", 1000, () => {
            delayedColorDisplay("green", 1000, () => {
                delayedColorDisplay("skyblue", 1000, () => {
                    delayedColorDisplay("blue", 1000, () => {
                        delayedColorDisplay("violet", 1000, () => {});
                    });
                });
            });
        });
    });
});

//usual structure of callback functions goes like this

searchMoviesAPI(
    "amadeus",
    () => {
        saveToDatabase(
            movies,
            () => {
                // success callback, if it works, run this
            },
            () => {
                // failure callback, if it doesn't work, run this
            }
        );
    },
    () => {
        // if the api to search movies is down, do this
    }
);
