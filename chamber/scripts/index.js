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

// Forecast Weather

const membersDataUrl = 'data/members.json'; // Path to your members JSON

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


}

// Initialize functions
getWeatherData();
getForecastData();
// loadSpotlights();