function fetchData() {
// Generate a random number between 1 and 100
var randomPokemonNumber = Math.floor(Math.random() * 100) + 1;

// Construct the URL with the random number
var url = `https://pokeapi.co/api/v2/pokemon/${randomPokemonNumber}`;


// Make a request to the PokéAPI
//update number at end of url to cycle through Pokémon 

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Access the Pokémon information from the response data
    var pokemonName = data.name;
    var pokemonAbilities = data.abilities.map(ability => ability.ability.name).join(", ");

    // Display the Pokémon information on the webpage
    document.getElementById("pokemonNameContainer").textContent = "Name: "+ pokemonName;
    document.getElementById("pokemonAbilitiesContainer").textContent = "Ability: " + pokemonAbilities;
  })
  .catch(error => {
    console.log('Error:', error);
  });
}
