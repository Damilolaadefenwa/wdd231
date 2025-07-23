/* Home Page Section */
/* Author: Damilola Adefenwa/
/* Date: 2025-07-11 */

// Current Weather, Weather Forecast and Json file for Member

// Current Weather
const currentWeatherIcon = document.getElementById('current-weather-icon');
const currentLocation = document.getElementById('current-location');
const currentTemperature = document.getElementById('current-temperature');
const currentDescription = document.getElementById('current-description');
const currentHigh = document.getElementById('current-high');
const currentLow = document.getElementById('current-low');
const currentDetails = document.getElementById('current-details');

// --- Weather API Integration ---
const apiKey = "3caf86809b54413b53660a02dd4827f1";
const myLat = "16.7662";
const myLong = "-3.0036";
const city = 'Timbuktu';
const countryCode = 'ML'; // Mali's country code


// Weather API URLs (using my variables and &units=imperial for Fahrenheit)
const currentWeatherUrl = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${apiKey}&units=imperial`
const forecastUrl = `//api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${apiKey}&units=imperial`


// The Function to fetch and display the Current Weather
async function getWeatherData() {
    try {
        const currentResponse = await fetch(currentWeatherUrl);
        if (currentResponse.ok) {
            const currentData = await currentResponse.json();
            console.log(currentData); //testing only
            displayWeather(currentData);

        } else {
            throw Error(await currentResponse.text());
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// The Function to format time to 12-hour format 
// using the Unix timestamp (in seconds) in Openweather API
function formatTime12Hour(unixTimestamp) {
    // This check if unixTimestamp is valid before proceeding
    if (typeof unixTimestamp !== 'number' || isNaN(unixTimestamp)) {
        return "--:-- --"; // default value if not a valid number
    }
    // if true then convert seconds to milliseconds for Date object
    const date = new Date(unixTimestamp * 1000);

    // Also check if the Date object is valid incase parsing failed
    if (isNaN(date.getTime())) {
        return "--:-- --"; // default value if date is invalid
    }

    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'
    const strMinutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${strMinutes} ${ampm}`;
}

//Displaying result to the Current Weather Card.
function displayWeather(currentData) {
    console.log("welcome to my home");
    currentWeatherIcon.src = `https://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png`;
    currentWeatherIcon.alt = `${currentData.weather[0].description} Icon`;
    currentLocation.textContent = currentData.name;
    currentTemperature.textContent = `${currentData.main.temp}°F`;
    currentDescription.textContent = currentData.weather[0].description;
    currentHigh.textContent = `High:${currentData.main.temp_max}°F`;
    currentLow.textContent = `Low:${currentData.main.temp_min}°F`;

    const sunriseTime = formatTime12Hour(currentData.sys.sunrise);
    const sunsetTime = formatTime12Hour(currentData.sys.sunset);
    currentDetails.innerHTML = `Humidity: ${currentData.main.humidity}% | Sunrise:${sunriseTime} | Sunset: ${sunsetTime}`;

}

// The Function to fetch and display the forecast data
async function getForecastData() {
    try {
        const forecastResponse = await fetch(forecastUrl)
        if (forecastResponse.ok) {
            const forecastData = await forecastResponse.json();
            console.log(forecastData); //testing only
            displayForecast(forecastData);
        }
        else {
            throw Error(await forecastResponse.text());
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

//Displaying result to the Forecast Weather Card.
function displayForecast(forecastData) {
    console.log("Hello World");
    const forecastContainer = document.querySelector('#weather-forecast-card .forecast-days-container');
    forecastContainer.innerHTML = ''; // Clear loading message

    const forecastDays = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize today to start of day

    // Filter to get one entry per day for the next 3 days
    const processedDates = new Set();
    let daysCount = 0;

    for (const item of forecastData.list) {
        const itemDate = new Date(item.dt * 1000); // Convert Unix timestamp to Date object
        itemDate.setHours(0, 0, 0, 0); // Normalize item date to start of day

        // Only consider future days (or today, if the first entry is for today)
        if (itemDate.getTime() >= today.getTime()) {
            const dateString = itemDate.toISOString().split('T')[0]; // YYYY-MM-DD

            if (!processedDates.has(dateString) && daysCount < 3) {
                forecastDays.push(item);
                processedDates.add(dateString);
                daysCount++;
            }
        }
        if (daysCount >= 3) break; // Stop after collecting 3 distinct days
    }

    forecastDays.forEach(dayData => {
        const forecastDayDiv = document.createElement('div');
        forecastDayDiv.classList.add('forecast-day-item');

        const date = new Date(dayData.dt * 1000); // Convert Unix timestamp to Date object
        const options = { weekday: 'long' };
        const dayName = date.toLocaleDateString('en-US', options);

        forecastDayDiv.innerHTML = `
            <p class="forecast-day-name">${dayName}</p>
            <p class="forecast-temp">${Math.round(dayData.main.temp)}°F</p>
        `;
        forecastContainer.appendChild(forecastDayDiv);
    });
}

// --- The Business Spotlights Session --

const membersDataUrl = 'data/members.json'; // Path to my members JSON data

// fetching Data from Json file
async function getMembers() {
    try {
        const response = await fetch(membersDataUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            displaySpotlights(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

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

    // 1. Filter for Gold members
    const goldMembers = data.filter(company => company.membershipLevel === "Gold");

    // 2. Shuffle the Gold members
    const shuffledGoldMembers = shuffleArray([...goldMembers]); // Create a shallow copy to shuffle

    // 3. Select up to 3 random Gold members
    const selectedCompanies = shuffledGoldMembers.slice(0, 3);

    // --- DEBUGGING: Log selected companies to console ---
    console.log("Selected Gold Members for Spotlight:", selectedCompanies);
    // --- END DEBUGGING ---

    if (selectedCompanies.length === 0) {
        spotlightGrid.innerHTML = '<p>No Gold member spotlights available at this time.</p>';
        return;
    }

    selectedCompanies.forEach(member => {
        const companyCard = document.createElement('div');
        companyCard.classList.add('company-card');

        const image = document.createElement('img');
        image.src = `images/${ member.image }`;
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
getWeatherData();
getForecastData();
getMembers();
