/* Home Page Section */
/* Author: Damilola Adefenwa/
/* Date: 2025-08-07 */

// PART B. IMPORTING THE DATA FOR SPOTLIGHT CARD
import { allBusinesses } from '../data/spotlightData.mjs';
//Testing
console.log(allBusinesses);

// allBusinesses.forEach(business => {
//     console.log(`${business.name} → ${business.booking}`);
// });


//PART A: GETTING CURRENT HEADLINE AND ARTICLES FROM NEWS API's

//1. Business Headlines News
const headlineImage1 = document.getElementById('headline-image1');
const headlineTitle1 = document.getElementById('headline-title1');
const headlineAuthor1 = document.getElementById('headline-author1');
const headlineDescription1 = document.getElementById('headline-description1');
const headlineUrl1 = document.getElementById('headline-url1');

//2. Articles News
const headlineImage2 = document.getElementById('headline-image2');
const headlineTitle2 = document.getElementById('headline-title2');
const headlineAuthor2 = document.getElementById('headline-author2');
const headlineDescription2 = document.getElementById('headline-description2');
const headlineUrl2 = document.getElementById('headline-url2');

//3. Health Headlines News
const headlineImage3 = document.getElementById('headline-image3');
const headlineTitle3 = document.getElementById('headline-title3');
const headlineAuthor3 = document.getElementById('headline-author3');
const headlineDescription3 = document.getElementById('headline-description3');
const headlineUrl3 = document.getElementById('headline-url3');

// --- News API Integration ---
//newsapi.org EXAMPLE: GET https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=c9bd884110d64e60879c324eea9097fb
//newsdata.io SOURCE EXAMPLE:https://newsdata.io/api/1/sources?country=NG&apikey=YOUR_API_KEY&q=lifestyle
//newsdata.io HEADLINES EXAMPLE:https://newsdata.io/api/1/latest?apikey=YOUR_API_KEY(pub_4bfd4fba83024ec5a065e2cbc83cc36f)&q=movies

const myApiKeyNewsData = "pub_4bfd4fba83024ec5a065e2cbc83cc36f";
const myApiKeyNewsOrg = "c9bd884110d64e60879c324eea9097fb";
const myCountry = "ng";
const mySource = "bbc-news";
const myKeywordA = "business";
const myKeywordB = "Nigeria";
const myKeywordC = "Lifestyle";


// Headlines News and Article API URLs (using my their parameters)
const getHeadlineUrl = `https://newsdata.io/api/1/latest?country=${myCountry}&apikey=${myApiKeyNewsData}&q=${myKeywordA}`
// const getArticleUrl = `https://newsapi.org/v2/top-headlines?sources=${mySource}&apiKey=${myApiKeyNewsOrg}`

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

//Displaying result to the Headlines News Card.
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

// Initialize functions
getHeadlineData();
