const blue = require("./blue");
const sadie = require("./sadie");
const janet = require("./janet");

const allCats = [blue, sadie, janet];

//index js binds the export files together. so whenever node requires a directory,
// it takes the things that index.js exports and also runs it...

// console.log(allCats);

module.exports = allCats;
