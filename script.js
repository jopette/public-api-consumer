// Fetch the api characters. The word 'data' is replaced with 'characters'
fetch('https://rickandmortyapi.com/api/character')
.then(response => response.json())
.then(characters => {
    console.log(characters.results)
    renderCharacters(characters.results);
});
// Create JS cardsContainer variable and connect the HTML cards-container to it
const cardsContainer = document.querySelector('#cards-container');

// Creates function renderCharacters (used in the fetch).
function renderCharacters(characters) {
    characters.forEach(character => {
        const div = document.createElement('div');
        const image = document.createElement('img');
        const name = document.createElement('h3');
        const info = document.createElement('button');

    // Creates classes for selected elements
    div.classList.add('card');
    image.classList.add('card-img');
    name.classList.add('card-name')
    info.classList.add('card-btn');

    // Put values from characters inside the elements.
    image.src = character.image;
    name.innerText = `${character.name}`;
    info.textContent = 'Character info';

    // Appends these elements to div
    div.appendChild(image);
    div.appendChild(name);
    div.appendChild(info);
    
    cardsContainer.appendChild(div);

    info.addEventListener('click', function() {
        div.classList.toggle('flipped');
    });

    })
}