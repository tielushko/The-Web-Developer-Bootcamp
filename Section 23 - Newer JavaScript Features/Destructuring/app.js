const scores = [99888, 88877, 77766, 66655, 55544, 44433, 33322, 22211];

// if we want the gold and silver from highscores instead of doing
highScore = scores[0];
secondHighScore = scores[1];

// we can easily do this:
const [gold, silver, bronze, ...everyoneElse] = scores;

//and gold silver bronze will hold 0th, 1st and 2nd elements respectively and everything else

//destructuring from objects
const user = {
    email: "user@gmail.com",
    lastName: "Userov",
    firstName: "User",
    born: 1978,
    died: 2067,
    city: "San Francisco",
};

const user3 = {
    email: "stacy@gmail.com",
    lastName: "Fox",
    firstName: "Stacy",
    born: 1978,
    city: "San Francisco",
};
//pulling values from object into separate variables
const { email, firstName, lastName, city } = user; //equivalent to const email = user.email; using same name for variable as the key

////pulling values from object into separate variables but renaming them
const { born: birthYear } = user; //equivalent to aboce but actually pulls data form born into newly created variable birthYear
const { died: deathYear } = user;

//default values to prevent being assigned to undefined if the value is not found in object
const { city, state, died = "N/A" } = user2;

//destructuring parameters inside the function!!! -> if will use the entire object

// function fullName(user) {
//     const { firstName, lastName } = user;
//     return `${firstName} ${lastName}`;
// }

// desctructuring parameters insed the parameter field -> if only need parts of object

function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}

const movies = [
    {
        title: "amadeus",
        score: 99,
    },
    {
        title: "stand by me",
        score: 85,
    },
    {
        title: "parasite",
        score: 96,
    },
    {
        title: "alien",
        score: 100,
    },
];

//example of destructuring parameters inside the arrow function inside the filter

const highestRated = movies.filter(({ score }) => score >= 90);

//line
movies.map((movie) => `${movie.title} is rated ${movie.score}`);
//can instead be written as this
movies.map(({ title, score }) => `${title} is rated ${score}`);
