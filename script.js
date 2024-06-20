
const buttons = document.querySelectorAll('.num');
const pokeNum = document.querySelector('.pokeNum')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (pokeNum.textContent.length < 4) {
            pokeNum.textContent = pokeNum.textContent + button.textContent;
        }
    });
});




const clearButton = document.getElementById('del');

clearButton.addEventListener('click', () => {
    pokeNum.textContent = '';
});




const goButton = document.getElementById('go');
let pokemon = "";

goButton.addEventListener('click', () => {
    pokemon = pokeNum.textContent;
    const pokeImg = document.getElementById('pokeImg');
    const pokeName = document.getElementById('pokeName');
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not OK');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        console.log(data.sprites.front_default);
        pokeImg.src = data.sprites.front_default;
        pokeName.textContent = data.name;
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
});






const prevButton = document.getElementById('prev');

prevButton.addEventListener('click', () => {

    

    let currentPokemon = parseInt(pokeNum.textContent);
    let previousPokemon = currentPokemon - 1;
    pokeNum.textContent = previousPokemon;
    pokemon = pokeNum.textContent;
    console.log(pokemon);
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not OK');
        }
        return response.json();
    })
    .then(data => {
        pokeImg.src = data.sprites.front_default;
        pokeName.textContent = data.name;

    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
});



const nextButton = document.getElementById('next');

nextButton.addEventListener('click', () => {
    let currentPokemon = parseInt(pokeNum.textContent);
    let nextPokemon = currentPokemon + 1;
    pokeNum.textContent = nextPokemon;
    pokemon = pokeNum.textContent;
    console.log(pokemon);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not OK');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        console.log(data.sprites.front_default);
        pokeImg.src = data.sprites.front_default;
        pokeName.textContent = data.name;
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
});