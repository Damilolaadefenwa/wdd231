// ASSIGNMENT ACTIVITIES
// 1.Open this file in your browser to identify 
// and reference the key/value pairs found in the JSON data
// 2.Declare a const variable named "url" that contains....
const url = "https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json";
//3.Declare a const variable name "cards" that selects the HTML div element
const cards = document.querySelector('#cards');
//4. Create a async defined function named "getProphetData" to fetch
//data from the JSON source url using the await fetch() method.
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json(); // parse the JSON data
    // console.log(data);      //output test the result of data in a traditional way.
    // console.table(data.prophets);      //output test the result of data in a table format.
    displayProphets(data.prophets);       // note that you reference the prophets array of the JSON data object, not just the object
}
getProphetData();

//11. Define a function expression named "displayProphets" that handles a single parameter named "prophets" 
const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        card.classList.add('card');
        let fullName = document.createElement('h2');
        const birthdate = document.createElement('p');
        const birthplace = document.createElement('p');
        let portrait = document.createElement('img');
        

        // Build the h2 content out to show the prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthdate.textContent = `Birthdate: ${prophet.birthdate}`;
        birthplace.textContent = `Birthplace: ${prophet.birthplace}`;

        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append the section(card) with the created elements
        card.appendChild(fullName);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(portrait);
        
        cards.appendChild(card);
    });
}



