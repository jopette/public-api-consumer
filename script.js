// Fetching the api characters
async function fetchCharacters() {
    try {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const characters = await response.json();
    console.log(characters.results);
    renderCharacters(characters.results);
    } catch (error) {
        console.error('Error fetching characters', error);
      }
  }
  // Create fetchButton variable and connect the HTML fetchCards id to it.
  // Also added event listener to click and fetch the cards.
  const fetchButton = document.querySelector('#fetchCards');
  fetchButton.addEventListener('click', fetchCharacters);

// Create cardsContainer variable and connect the HTML cards-container id to it.
const cardsContainer = document.querySelector('#cards-container');

// Function renderCharacters (used in the api fetch above). It iterates through
// the characters and places out tags for the character elements.
function renderCharacters(characters) {
    characters.forEach(character => {
        const div = document.createElement('div');
        const image = document.createElement('img');
        const name = document.createElement('h2');
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

    // Puts values inside the tags, for the card front and back.
    image.src = character.image;
    name.innerText = `${character.name}`;
    info.textContent = 'Character info';
    back.innerHTML = `<strong>Origin:</strong> ${character.origin.name}<br><strong>Species:</strong> ${character.species}<br><strong>Gender:</strong> ${character.gender}<br><strong>Status:</strong> ${character.status}\n`;
    backInfo.textContent = 'Flip back';

    // Appends the values to the card front and back.
    div.appendChild(image);
    div.appendChild(name);
    div.appendChild(info);
    back.appendChild(backInfo);
    div.appendChild(back);
    // Appends the cards to cardsContainer.
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