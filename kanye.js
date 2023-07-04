function fetchQuote() {
  const quoteContainer = document.getElementById('quote-container');

  fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(data => {
      const quote = data.quote + " - Kanye West";
      quoteContainer.textContent = quote;
    })
    .catch(error => {
      console.error('Error fetching Kanye quote:', error);
    });
}
