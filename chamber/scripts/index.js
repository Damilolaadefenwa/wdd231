/* Home Page Section */
/* Author: Damilola Adefenwa/
/* Date: 2025-07-11 */

// Current Weather 
// step 1: Select HTML elements in the document
const myWeathericon = document.querySelector('#weather-icon');
const myTemperature = document.querySelector('#temperature');
const myDescription = document.querySelector('#description');
const myHigh = document.querySelector('#high');
const myLow = document.querySelector('#low');
const myHumidity = document.querySelector('#humidity');
const mySunrise = document.querySelector('#sunrise');
const mySunset = document.querySelector('#sunset');

//Weather Forecast
const myToday = document.querySelector('#today');
const myTomorrow = document.querySelector('#tomorrow');
const myNexttomorrow = document.querySelector('#nexttomorrow');

// Creating Required Variables for the URL
const myKey = "3caf86809b54413b53660a02dd4827f1";
const myLat = "16.7662";
const myLong = "-3.0036";

// Constructing a full path using template literals
const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`

//asynchronous function to call the API Url and handle errors.
async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data); //testing only
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}
apiFetch();

//outputing the data through the given HTML document.
function displayResults(data) {
    console.log("Hello World");
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    myWeathericon.setAttribute('src', iconsrc);
    myWeathericon.setAttribute('alt', data.weather[0].description);
    myTemperature.innerHTML = `${data.main.temp}&deg;F`;
    myDescription.innerHTML = data.weather[0].description;
    myHigh.innerHTML = `${data.main.temp_max}&deg;F`;
    myLow.innerHTML = `${data.main.temp_min}&deg;F`;
    myHumidity.innerHTML = `${data.main.humidity}&percnt;`;
    // mySunrise.innerHTML = `${data.sys.sunrise}`;
}

