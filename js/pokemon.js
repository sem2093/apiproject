// Make a request to the PokéAPI
//update number at end of url to cycle through Pokémon 
fetch('https://pokeapi.co/api/v2/pokemon/12')
  .then(response => response.json())
  .then(data => {
    // Access the Pokémon information from the response data
    var pokemonName = data.name;
    var pokemonAbilities = data.abilities.map(ability => ability.ability.name).join(", ");

    // Display the Pokémon information on the webpage
    document.getElementById("pokemonNameContainer").textContent = pokemonName;
    document.getElementById("pokemonAbilitiesContainer").textContent = pokemonAbilities;
  })
  .catch(error => {
    console.log('Error:', error);
  });
