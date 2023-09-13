// Make a request to the Chuck Norris API
function fetchJoke() {
fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(data => {
    // Access the joke from the response data
    var joke = data.value;

    // Display the joke on the webpage
    document.getElementById("jokeContainer").textContent = joke;
  })
  .catch(error => {
    console.log('Error:', error);
  });
}