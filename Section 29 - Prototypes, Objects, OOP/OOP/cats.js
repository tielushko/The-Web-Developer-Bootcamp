class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating!`);
    }
}

class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        super(name, age); //calls the base class constructor first to handle the name and age assignment and extend functionality of base constructor
        this.livesLeft = livesLeft;
    }
    meow() {
        console.log("MEOW!");
    }
}

class Dog extends Pet {
    bark() {
        console.log("bark!");
    }
    eat() {
        console.log(`${this.name} scarfs his food!`);
    }
}
