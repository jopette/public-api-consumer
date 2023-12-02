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
// Loops through characters and creates elements to put items in, in this case
// divs for the cards, image tags for images, h3:s for name and species and a button
// for the like button.
function renderCharacters(characters) {
    characters.forEach(character => {
        const div = document.createElement('div');
        const front = document.createElement('div');
        const back = document.createElement('div');
        const image = document.createElement('img');
        const name = document.createElement('h3');
        const info = document.createElement('button');

    // Creates classes for selected elements
    div.classList.add('card');
    image.classList.add('card-img');
    name.classList.add('card-name')
    info.classList.add('card-btn');

    // Put values from characters inside the elements. 'src' is added for image.
    // innerText and back ticks (``) for name and species elements. This is necessary if we want to 
    // display text next to the characters name and species.
    image.src = character.image;
    name.innerText = `${character.name}`;
    info.textContent = 'Character info';

    // Appends these elements to our newly created div 
    // element and then appends that div to our ‘cardsContainer’ global variable.
    // We individually append image, name, species, and the like button into 
    // the div and then append the div into our ‘cardsContainer’ where our cards will now live.
    div.appendChild(image);
    div.appendChild(name);
    div.appendChild(info);
    
    cardsContainer.appendChild(div);

    info.addEventListener('click', function() {
        div.classList.toggle('flipped');
    });

    })
}