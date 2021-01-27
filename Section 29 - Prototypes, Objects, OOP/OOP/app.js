// const hex = (r, g, b) => {
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };

// const rgb = (r, g, b) => {
//     return `rgb(${r}, ${g}, ${b})`;
// };

// making your own objects without the constructor function
const makeColor = (r, g, b) => {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function () {
        const { r, g, b } = this;
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    };

    color.hex = function () {
        const { r, g, b } = this;
        return (
            "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        );
    };
    return color;
};

const firstColor = makeColor(35, 255, 150);

// constructor function

// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }

// if you call on its own....
// Color(255,255,255) -> undefined
//
// need keyword 'new'
// new Color(255,255,255) -> returns object

// creating prototype functions.
// Color.prototype.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r},${g},${b})`;
// };

// Color.prototype.hex = function () {
//     const { r, g, b } = this;
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };

// Color.prototype.rgba = function (a = 1.0) {
//     const { r, g, b } = this;
//     return `rgba(${r},${g},${b},${a})`;
// };
// color1 = new Color(255, 10, 100);
// color2 = new Color(10, 100, 255);

class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }

    greet() {
        return `Hello from the color ${this.name}!`;
    }

    innerRGB() {
        const { r, g, b } = this;
        return `${r},${g},${b}`;
    }

    rgb() {
        return `rgb(${this.innerRGB()})`;
    }
    rgba(a = 1.0) {
        const { r, g, b } = this;
        return `rgba(${this.innerRGB()},${a})`;
    }
    hex() {
        const { r, g, b } = this;
        return (
            "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        );
    }
}

const red = new Color(255, 67, 89, "tomato");
const white = new Color(255, 255, 255, "white");
