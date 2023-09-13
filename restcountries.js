function fetchCountries(){


// Define the REST Countries API URL for retrieving a list of countries
        const apiUrl = 'https://restcountries.com/v3.1/all';

        // Get a reference to the <ul> element in your HTML
        const countryList = document.getElementById('countryList');

        // Send the API request
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Create list items for each country
                data.forEach(country => {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `
                        <h2>${country.name.common}</h2>
                        <p><strong>Population:</strong> ${country.population}</p>
                    `;
                    countryList.appendChild(listItem);
                });
            })
            .catch(error => {
                console.error('Error fetching country data:', error);
            });
}
