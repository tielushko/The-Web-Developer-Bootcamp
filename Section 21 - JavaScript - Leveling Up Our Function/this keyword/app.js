const cat = {
    name: "Blue Steele",
    color: "grey",
    breed: "Russian Blue",
    //note the usage of this which refers to the cat object and its properties itself
    meow() {
        console.log("THIS IS:", this);
        console.log(`${this.name} says meooowwwww`);
    },
};

cat.meow();

//notice that this keyword in the meow2 will actually not reference itself
const meow2 = cat.meow;

//this wil actually be Window Object so this will refer to Window object
meow2();
