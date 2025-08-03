// 1. IMPORTING THE DATA
import { timbuktuData } from '../data/discoverData.mjs';
//Testing
// console.log(timbuktuData.activities);

// 2. GETTING THE CONTAINER, CREATING AND DISPLAYING THE CARD
const gallery = document.querySelector('#allplaces');

// REPLACE the old code with this new one.

const places = timbuktuData.activities;
//Testing
console.log(places);

function displayItems(places) {
    places.forEach(activity => {
        //building the card element
        const thecard = document.createElement('div')
        //creating a class for styling
        // thecard.className = 'discover-card';
        // buiding the item in the card
        thecard.innerHTML = `
            <img src="${activity.photo}" alt="${activity.name}" loading="lazy" width="300" height="200">
            <h2>${activity.name}</h2>
            <address>${activity.address}</address>
            <p>${activity.description}</p>
            <a href="${activity.url}" target="_blank" class="info-button">Learn More</a>
        `;
        // Appending the newly created card to the gallery container
        gallery.appendChild(thecard)
    })  // end of loop
} // end of function

//Displaying all the items by initializing the function
displayItems(places)


//Old Code
// timbuktuData.activities.forEach(activity => {
//     // Create the main card container. We'll call it 'discover-card'.
//     let card = document.createElement('div');
//     card.className = 'discover-card'; // Use a new class to avoid CSS conflicts

//     // Use template literals to build the new inner HTML structure.
//     // Notice the <div class="card-info"> wrapping the text content.
//     card.innerHTML = `
//         <figure>
//             <img src="${activity.photo}" alt="${activity.name}" loading="lazy" width="300" height="200">
//         </figure>
//         <div class="card-info">
//             <h2>${activity.name}</h2>
//             <address>${activity.address}</address>
//             <p>${activity.description}</p>
//             <a href="${activity.url}" target="_blank" class="info-button">Learn More</a>
//         </div>
//     `;

//     // Append the newly created card to the gallery container
//     gallery.appendChild(card);
// });



//4. --- LOCALSTORAGE VISITOR MESSAGE ---

// 1. Get the message element from the DOM
const visitMessage = document.getElementById('visit-message');

// 2. Get the last visit timestamp from localStorage (returns null if not set)
const lastVisit = localStorage.getItem('lastVisitTimestamp');

// 3. Get the current timestamp
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
        // Handle singular 'day' vs plural 'days'
        const dayText = daysSinceLastVisit === 1 ? 'day' : 'days';
        visitMessage.textContent = `You last visited ${daysSinceLastVisit} ${dayText} ago.`;
    }
}

// 5. ALWAYS update the localStorage with the current visit timestamp for the *next* visit
localStorage.setItem('lastVisitTimestamp', now);