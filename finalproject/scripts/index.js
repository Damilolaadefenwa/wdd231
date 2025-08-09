/* Home Page Section */
/* Author: Damilola Adefenwa/
/* Date: 2025-08-07 */

// PART B. IMPORTING THE DATA FOR THEB BUSINESS SPOTLIGHT SECTION
import { allBusinesses } from '../data/spotlightData.mjs';


//PART A: GETTING CURRENT HEADLINE AND ARTICLES FROM NEWS API's
//1. Getting Document
const headlineImage1 = document.getElementById('headline-image1');
const headlineTitle1 = document.getElementById('headline-title1');
const headlineAuthor1 = document.getElementById('headline-author1');
const headlineDescription1 = document.getElementById('headline-description1');
const headlineUrl1 = document.getElementById('headline-url1');

const headlineImage2 = document.getElementById('headline-image2');
const headlineTitle2 = document.getElementById('headline-title2');
const headlineAuthor2 = document.getElementById('headline-author2');
const headlineDescription2 = document.getElementById('headline-description2');
const headlineUrl2 = document.getElementById('headline-url2');

const headlineImage3 = document.getElementById('headline-image3');
const headlineTitle3 = document.getElementById('headline-title3');
const headlineAuthor3 = document.getElementById('headline-author3');
const headlineDescription3 = document.getElementById('headline-description3');
const headlineUrl3 = document.getElementById('headline-url3');

//2 --- News API Integration ---
//newsdata.io SOURCE EXAMPLE:https://newsdata.io/api/1/sources?country=NG&apikey=YOUR_API_KEY&q=lifestyle
//newsdata.io HEADLINES EXAMPLE:https://newsdata.io/api/1/latest?apikey=YOUR_API_KEY(pub_4bfd4fba83024ec5a065e2cbc83cc36f)&q=movies

const myApiKeyNewsData = "pub_4bfd4fba83024ec5a065e2cbc83cc36f";
const myCountry = "ng";
const myKeywordA = "business";
const myKeywordB = "Lifestyle";

// Headlines News and Article API URLs (using my their parameters)
const getHeadlineUrl = `https://newsdata.io/api/1/latest?country=${myCountry}&apikey=${myApiKeyNewsData}&q=${myKeywordA}`

//3. The Function to fetch and display the Headlines news
async function getHeadlineData() {
    try {
        const currentResponse = await fetch(getHeadlineUrl);
        if (currentResponse.ok) {
            const headlineData = await currentResponse.json();
            // console.log(headlineData); //testing only
            displayHeadline(headlineData);

        } else {
            throw Error(await currentResponse.text());
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

//4.Displaying result to the Headlines News Card.
function displayHeadline(headlineData) {
    console.log("welcome to my display");
    // console.log(headlineData.results[0].image_url);
    headlineImage1.src = headlineData.results[0].image_url;
    headlineImage1.alt = headlineData.results[0].description;
    headlineTitle1.innerHTML = `<h3>${headlineData.results[0].title}</h3>`;
    headlineDescription1.innerHTML = `<p>${headlineData.results[0].description}</p>`;
    headlineAuthor1.innerHTML = `<h4>SOURCE: ${headlineData.results[0].source_name}</h4>`;
    headlineUrl1.innerHTML = `<a href="${headlineData.results[0].source_url}" target="_blank">Read The Full Article</a>`;

    headlineImage2.src = headlineData.results[4].image_url;
    headlineImage2.alt = headlineData.results[4].description;
    headlineTitle2.innerHTML = `<h3>${headlineData.results[4].title}</h3>`;
    headlineDescription2.innerHTML = `<p>${headlineData.results[4].description}</p>`;
    headlineAuthor2.innerHTML = `<h4>SOURCE: ${headlineData.results[4].source_name}</h4>`;
    headlineUrl2.innerHTML = `<a href="${headlineData.results[4].source_url}" target="_blank">Read The Full Article</a>`;

    headlineImage3.src = headlineData.results[8].image_url;
    headlineImage3.alt = headlineData.results[8].description;
    headlineTitle3.innerHTML = `<h3>${headlineData.results[8].title}</h3>`;
    headlineDescription3.innerHTML = `<p>${headlineData.results[8].description}</p>`;
    headlineAuthor3.innerHTML = `<h4>SOURCE: ${headlineData.results[8].source_name}</h4>`;
    headlineUrl3.innerHTML = `<a href="${headlineData.results[8].source_url}" target="_blank">Read The Full Article</a>`;

}


// B--- THE BUSINESS SPOTLIGHT SECTION --
const data = allBusinesses;
//Testing
console.log(data);

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

//Displaying members and populating it.
function displaySpotlights(data) {
    const spotlightGrid = document.getElementById('spotlight-grid');
    spotlightGrid.innerHTML = ''; // Clear loading message

    // 1. Filter for Platinum members
    const platinumMembers = data.filter(member => member.membershipLevel === "Platinum");

    // 2. Shuffle the Gold members
    const shuffledPlatinumMembers = shuffleArray([...platinumMembers]); // Create a shallow copy to shuffle

    // 3. Select up to 3 random Gold members
    const selectedCompanies = shuffledPlatinumMembers.slice(0, 3);

    // --- DEBUGGING: Log selected companies to console ---
    // console.log("Selected Platinum Members for Spotlight:", selectedCompanies);
    // --- END DEBUGGING ---

    if (selectedCompanies.length === 0) {
        spotlightGrid.innerHTML = '<p>No Gold member spotlights available at this time.</p>';
        return;
    }

    selectedCompanies.forEach(member => {
        const companyCard = document.createElement('div');
        companyCard.classList.add('company-card');

        const image = document.createElement('img');
        image.src = `images/${member.image}`;
        image.alt = `${member.name} Logo`;
        image.loading = `lazy`;

        const name = document.createElement('h3');
        name.textContent = member.name;

        const address = document.createElement('p');
        address.textContent = member.address;

        const membershipLevel = document.createElement('p');
        membershipLevel.classList.add('membership-level');
        membershipLevel.textContent = `Membership: ${member.membershipLevel}`;

        const contactInfo = document.createElement('div');
        contactInfo.classList.add('contact-info');
        contactInfo.innerHTML = `
                    <p><strong>PHONE:</strong>${member.phone}</p>
                    <p><a href="${member.website}" target="_blank" rel="noopener noreferrer">${member.website}</a></p>
        `;

        companyCard.appendChild(image);
        companyCard.appendChild(name);
        companyCard.appendChild(address);
        companyCard.appendChild(contactInfo);
        companyCard.appendChild(membershipLevel);

        spotlightGrid.appendChild(companyCard);

        return spotlightGrid;
    });

}

// Initialize functions
getHeadlineData();
displaySpotlights(data);