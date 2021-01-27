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
    constructor(r, g, b, name = "color") {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        this.calcHsl();
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

    hsl() {
        this.calcHsl();
        const { h, s, l } = this;
        const newHue = (h + 180) % 360;
        return "hsl(" + newHue + "," + s + "%," + l + "%)";
    }

    opposite() {
        const { h, s, l } = this;
        return "hsl(" + h + "," + s + "%," + l + "%)";
    }
    fullySaturated() {
        const { h, l } = this;

        return "hsl(" + h + "," + "100%," + l + "%)";
    }
    calcHsl() {
        // Make r, g, and b fractions of 1
        let { r, g, b } = this;

        r /= 255;
        g /= 255;
        b /= 255;

        // Find greatest and smallest channel values
        let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;

        // Calculate hue
        // No difference
        if (delta == 0) h = 0;
        // Red is max
        else if (cmax == r) h = ((g - b) / delta) % 6;
        // Green is max
        else if (cmax == g) h = (b - r) / delta + 2;
        // Blue is max
        else h = (r - g) / delta + 4;

        h = Math.round(h * 60);

        // Make negative hues positive behind 360°
        if (h < 0) h += 360;

        l = (cmax + cmin) / 2;

        // Calculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        // Multiply l and s by 100
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);

        this.h = h;
        this.s = s;
        this.l = l;
    }
}

const red = new Color(255, 67, 89, "tomato");
const white = new Color(255, 255, 255, "white");
