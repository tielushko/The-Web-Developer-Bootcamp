console.log("hello from args");
// console.log(process.argv); //stores the arguments that are passed into the script (e.g. node args.js puppies chickens pigs)

args = process.argv.slice(2);
for (let arg of args) {
    console.log(`Hi! ${arg}`);
}
