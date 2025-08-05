// 1. IMPORTING THE DATA
import { timbuktuData } from '../data/discoverData.mjs';
//Testing
// console.log(timbuktuData.activities);

// 2. GETTING THE CONTAINER, CREATING AND DISPLAYING THE CARD
const gallery = document.querySelector('#allplaces');
const places = timbuktuData.activities;
//Testing
// console.log(places);

function displayItems(places) {
    places.forEach(activity => {
        //building the card element
        const thecard = document.createElement('div')
        //creating a class for styling
        // thecard.className = 'discover-card';
        // buiding the item in the card
        thecard.innerHTML = `
            <figure>
                <img src="${activity.photo}" alt="${activity.name}" loading="lazy" width="300" height="200">
            </figure>
            <h2>${activity.name}</h2>
            <address>${activity.address}</address>
            <p>${activity.description}</p>
            <a href="${activity.url}" target="_blank" class="info-button">Learn More About This Place</a>
        `;
        // Appending the newly created card to the gallery container
        gallery.appendChild(thecard)
    })  // end of loop
} // end of function

//Displaying all the items by initializing the function
displayItems(places)


//3. --- LOCALSTORAGE VISITOR MESSAGE ---

// 1. Getting the message element from the DOM
const visitMessage = document.getElementById('visit-message');

// 2. Getting the last visit timestamp from localStorage (returns null if not set)
const lastVisit = localStorage.getItem('lastVisitTimestamp');

// 3. Gettingthe current timestamp
const now = Date.now();

// 4. Logic to determine the message
if (!lastVisit) {
    // First visit ever
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    // Calculate the difference in milliseconds, then convert to days
    const daysSinceLastVisit = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

    if (daysSinceLastVisit < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else {
        // Handling singular 'day' vs plural 'days'
        const dayText = daysSinceLastVisit === 1 ? 'day' : 'days';
        visitMessage.textContent = `You last visited ${daysSinceLastVisit} ${dayText} ago.`;
    }
}

// 5. ALWAYS update the localStorage with the current visit timestamp for the *next* visit
localStorage.setItem('lastVisitTimestamp', now);