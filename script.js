// Fetching the api characters
fetch('https://rickandmortyapi.com/api/character')
.then(response => response.json())
.then(characters => {
    console.log(characters.results)
    renderCharacters(characters.results);
});

// Create cardsContainer variable and connect the HTML cards-container id to it
const cardsContainer = document.querySelector('#cards-container');

// Function renderCharacters (used in the api fetch above). It iterates through
// the characters and places out tags for the elements below.
function renderCharacters(characters) {
    characters.forEach(character => {
        const div = document.createElement('div');
        const image = document.createElement('img');
        const name = document.createElement('h3');
        const info = document.createElement('button');
        const back = document.createElement('div');
        const backInfo = document.createElement('button');

    // Creates classes for the tags above.
    div.classList.add('card');
    image.classList.add('card-img');
    name.classList.add('card-name')
    info.classList.add('card-btn');
    back.classList.add('card-back');
    backInfo.classList.add('card-back-btn');

    // Puts values inside the tags. Three on the card front, two on the card back.
    image.src = character.image;
    name.innerText = `${character.name}`;
    info.textContent = 'Character info';
    back.innerText = `Origin: ${character.origin.name}\nSpecies: ${character.species}\nGender: ${character.gender}\nStatus: ${character.status}\n`;
    backInfo.textContent = 'Flip back';

    // Appends the values to the card front and back.
    div.appendChild(image);
    div.appendChild(name);
    div.appendChild(info);
    back.appendChild(backInfo);
    div.appendChild(back);
    // Appends the entire card to cardsContainer.
    cardsContainer.appendChild(div);

    // Two event listeners (cards front and back) for toggle flipping the cards.
    info.addEventListener('click', function() {
        div.classList.toggle('flipped');
    });

    backInfo.addEventListener('click', function() {
        div.classList.toggle('flipped');
    });

    })
}