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
const headlineImage = document.getElementById('headline-image');
const headlineTitle = document.getElementById('headline-title');
const headlineAuthor = document.getElementById('headline-author');
const headlineDescription = document.getElementById('headline-description');
const headlineUrl = document.getElementById('headline-url');

//2. Articles News
const articleImage = document.getElementById('article-image');
const articleTitle = document.getElementById('article-title');
const articleDate = document.getElementById('article-date');
const articleDescription = document.getElementById('article-description');
const articleUrl = document.getElementById('article-url');

//3. Health Headlines News
const healthImage = document.getElementById('health-image');
const healthTitle = document.getElementById('health-title');
const healthAuthor = document.getElementById('health-author');
const healthDescription = document.getElementById('health-description');
const healthUrl = document.getElementById('health-url');

// --- News API Integration ---
//EXAMPLE: https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c9bd884110d64e60879c324eea9097fb
//EXAMPLE: https://newsapi.org/v2/everything?q=tesla&from=2025-07-07&sortBy=publishedAt&apiKey=c9bd884110d64e60879c324eea9097fb

const myApiKey = "c9bd884110d64e60879c324eea9097fb";
const myCountry = "ng";
const myPreferenceA = "business";
const myPreferenceB = "health";
const myDate = "2025-08-07";
// const currentDate = new Date().getDate();
const mySource = "Forbes";
const mySortingOrder = "popularity"

// Headlines News and Article API URLs (using my their parameters)
const getHeadlineNews = `https://newsapi.org/v2/top-headlines?country=${myCountry}&category=${myPreferenceA}&apiKey=${myApiKey}`
const getArticles = `https://newsapi.org/v2/everything?q=${mySource}&from=${myDate}&sortBy=${mySortingOrder}&apiKey=${myApiKey}`

//3. The Function to fetch and display the Headlines news

async function getHeadlineData() {
    try {
        const currentResponse = await fetch(getHeadlineNews);
        if (currentResponse.ok) {
            const headlineData = await currentResponse.json();
            console.log(headlineData); //testing only
            // displayHeadline(headlineData);

        } else {
            throw Error(await currentResponse.text());
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

//Displaying result to the Headlines News Card.
function displayHeadline(headlineData) {

}

// Initialize functions
getHeadlineData();
