// To make an object literal:
const dog = {
  name: "Rusty",
  breed: "unknown",
  isAlive: false,
  age: 7,
};
// All keys will be turned into strings!

// To retrieve a value:
dog.age; //7
dog["age"]; //7

//updating values
dog.breed = "mutt";
dog["age"] = 8;

//nested arrays and comments
const comments = [
  {
    username: "Tammy",
    text: "lolololo",
    votes: 9,
  },
  {
    username: "FishBoi",
    text: "glub glub glub",
    votes: 12387,
  },
];

comments[1].text; //glub glub glub
