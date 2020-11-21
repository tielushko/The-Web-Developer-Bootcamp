// let random = Math.random();

// if (random < 0.5) {
//   console.log("your random number is less than 0.5");
//   console.log(random);
// } else {
//   console.log("your random number is greater or equal than 0.5");
//   console.log(random);
// }

// const age = parseInt(prompt("Enter your age"));

// if (age < 5) {
//   console.log("You are a baby. You get in for free.");
// } else if (age <= 10) {
//   console.log("You are a child. You pay $10");
// } else if (age < 65) {
//   console.log("You are an adult. You pay $20");
// } else {
//   console.log("You are a senior. You pay $10");
// }

const password = prompt("Please enter a new password");

if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    console.log("accepted password");
    console.log(password);
  } else {
    console.log("password must not contain space");
  }
} else {
  console.log("password is too short");
}
