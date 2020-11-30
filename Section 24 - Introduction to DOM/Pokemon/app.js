// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");

for (let i = 1; i <= 890; i++) {
    //create the div for pokemon data
    const pokemon = document.createElement("div");

    //create the label with inner text
    const label = document.createElement("span");
    label.innerText = i;

    //create the image element with pokemon sprite
    const sprite = document.createElement("img");
    sprite.src =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
        i +
        ".png";

    //appending image to div
    pokemon.appendChild(sprite);

    //appending label to div
    pokemon.appendChild(label);

    //appending the overall div to the section
    container.appendChild(pokemon);

    pokemon.classList.add('pokemon')
    sprite.classList.add('pokemon', 'img')
}
// const sprite = document.createElement("img");
// sprite.src =
//     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png";

// container.appendChild(sprite);
