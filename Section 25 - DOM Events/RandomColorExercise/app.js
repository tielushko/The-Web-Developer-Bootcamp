const h1 = document.querySelector("h1");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const rgb = makeRandomColor();
    document.body.style.backgroundColor = rgb;
    h1.innerText = rgb;
});

function makeRandomColor() {
    const r = Math.floor(Math.random() * 256); //0 to 255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    if (r < 100 && g < 100 && b < 100) {
        h1.style.color = "white";
    } else {
        h1.style.color = "black";
    }
    return `rgb(${r},${g},${b})`;
}
