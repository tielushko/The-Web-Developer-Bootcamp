// fetch("https://api.cryptonator.com/api/full/btc-usd")
//     //first fetch gets the header information and not the body information
//     .then((res) => {
//         console.log(res);
//         //return res.json() to fully request the body of the data
//         return res.json();
//     })
//     .then((data) => {
//         console.log("FETCHING DATA");
//         console.log(data);
//         console.log(data.ticker.price);
//     })
//     .catch((e) => {
//         console.log(e);
//     });

// short version using async and await...
const fetchBitcoinPrice = async () => {
    try {
        let res = await fetch("https://api.cryptonator.com/api/full/btc-usd");
        let data = await res.json();
        console.log(data.ticker.price);
    } catch (e) {
        console.log("Unable to process your request at a time.");
    }
};
