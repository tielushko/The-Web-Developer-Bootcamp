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
                reject("Connecion Timeout :(");
            } else {
                resolve(`Here is your fake data from ${url}`);
            }
        }, delay);
    });
};

// fakeRequestCallback(
//     "books.com/page1",
//     // in case of success. notice that we pass in the response from the success parameters
//     // in the func definition and for failure as well
//     (response) => {
//         console.log("Success!");
//         console.log(response);
//         //notice nesting of the second call
//         fakeRequestCallback(
//             "books.com/page2",
//             // in case of success. notice that we pass in the response from the success parameters
//             // in the func definition and for failure as well
//             (response) => {
//                 console.log("IT WORKED AGAIN!!!!");
//                 console.log(response);
//                 fakeRequestCallback(
//                     "books.com/page3",
//                     // in case of success. notice that we pass in the response from the success parameters
//                     // in the func definition and for failure as well
//                     (response) => {
//                         console.log("IT WORKED for third time!!!!");
//                         console.log(response);
//                     },
//                     (error) => {
//                         console.log("ERROR in the third request!!!");
//                         console.log(error);
//                     }
//                 );
//             },
//             (error) => {
//                 console.log("ERROR in the second request!!!");
//                 console.log(error);
//             }
//         );
//     },
//     (error) => {
//         console.log("ERROR!!!");
//         console.log(error);
//     }
// );

// run if the request is resolved with .then() and pass-in a callback function
// if the request is rejected .catch() would handle it.
// can pass in the response messages as defined in the function above
// not the cleanest option -> can chain with .then .then .then for multiple requests

// fakeRequestPromise("yelp.com/api/coffee/page1")
//     .then((response) => {
//         //in case the promise switches from pending to resolved status, it would print out the result
//         console.log(response, "\nIt worked (1)");
//         fakeRequestPromise("yelp.com/api/coffee/page2")
//             .then((response) => {
//                 //in case the promise switches from pending to resolved status, it would print out the result
//                 console.log(response, "\nIt worked (2)");
//                 fakeRequestPromise("yelp.com/api/coffee/page3")
//                     .then((response) => {
//                         //in case the promise switches from pending to resolved status, it would print out the result
//                         console.log(response, "\nIt worked (3)");
//                     })
//                     .catch((error) => {
//                         console.log(error, "\nOh no, error has occured");
//                     });
//             })
//             .catch((error) => {
//                 console.log(error, "\nOh no, error has occured");
//             });
//     })
//     .catch((error) => {
//         console.log(error, "\nOh no, error has occured");
//     });

// THE CLEANEST OPTION WITH THEN/CATCH
// RETURN A PROMISE FROM .THEN() CALLBACK SO WE CAN CHAIN!
// returned promise calls .THEN() and so on.

fakeRequestPromise("yelp.com/api/coffee/page1")
    .then((data) => {
        console.log("It Worked!!! (1)");
        console.log(data);
        return fakeRequestPromise("yelp.com/api/coffee/page2");
    })
    .then((data) => {
        console.log("It Worked!!! (2)");
        console.log(data);

        return fakeRequestPromise("yelp.com/api/coffee/page3");
    })
    .then((data) => {
        console.log("It Worked!!! (3)");
        console.log(data);
    })
    .catch((error) => {
        console.log("OH no, the request failed!!!");
        console.log(error);
    });
