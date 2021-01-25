axios
    .get("https://api.cryptonator.com/api/ticker/btc-usd")
    .then((res) => {
        console.log(res.data.ticker.price);
    })
    .catch((err) => {
        console.log("error", err);
    });

const fetchBitcoinPrice = async () => {
    try {
        const res = await axios.get(
            "https://api.cryptonator.com/api/ticker/btc-usd"
        );
        console.log(res.data.ticker.price);
    } catch (e) {
        console.log("error", err);
    }
};

const jokes = document.querySelector("#jokes");

const getDadJoke = async () => {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    const newli = document.createElement("LI");
    newli.append(res.data.joke);
    jokes.append(newli);
};

const button = document.querySelector("button");
button.addEventListener("click", () => {
    getDadJoke();
});
