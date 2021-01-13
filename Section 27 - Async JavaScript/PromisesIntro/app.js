// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure("Connection Timeout :(");
        } else {
            success(`Here is your fake data from ${url}`);
        }
    }, delay);
};
// THE PROMISE VERSION
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject("Connection Timeout :(");
            } else {
                resolve(`Here is your fake data from ${url}`);
            }
        }, delay);
    });
};

fakeRequestCallback(
    "books.com/page1",
    // in case of success. notice that we pass in the response from the success parameters
    // in the func definition and for failure as well
    (response) => {
        console.log("Success!");
        console.log(response);
        //notice nesting of the second call
        fakeRequestCallback(
            "books.com/page2",
            // in case of success. notice that we pass in the response from the success parameters
            // in the func definition and for failure as well
            (response) => {
                console.log("IT WORKED AGAIN!!!!");
                console.log(response);
                fakeRequestCallback(
                    "books.com/page3",
                    // in case of success. notice that we pass in the response from the success parameters
                    // in the func definition and for failure as well
                    (response) => {
                        console.log("IT WORKED for third time!!!!");
                        console.log(response);
                    },
                    (error) => {
                        console.log("ERROR in the third request!!!");
                        console.log(error);
                    }
                );
            },
            (error) => {
                console.log("ERROR in the second request!!!");
                console.log(error);
            }
        );
    },
    (error) => {
        console.log("ERROR!!!");
        console.log(error);
    }
);

// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log("IT WORKED!!!!!! (page1)")
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log("IT WORKED!!!!!! (page2)")
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log("IT WORKED!!!!!! (page3)")
//                     })
//                     .catch(() => {
//                         console.log("OH NO, ERROR!!! (page3)")
//                     })
//             })
//             .catch(() => {
//                 console.log("OH NO, ERROR!!! (page2)")
//             })
//     })
//     .catch(() => {
//         console.log("OH NO, ERROR!!! (page1)")
//     })

// THE CLEANEST OPTION WITH THEN/CATCH
// RETURN A PROMISE FROM .THEN() CALLBACK SO WE CAN CHAIN!
// fakeRequestPromise("yelp.com/api/coffee/page1")
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page1)");
//         console.log(data);
//         return fakeRequestPromise("yelp.com/api/coffee/page2");
//     })
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page2)");
//         console.log(data);
//         return fakeRequestPromise("yelp.com/api/coffee/page3");
//     })
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page3)");
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log("OH NO, A REQUEST FAILED!!!");
//         console.log(err);
//     });
