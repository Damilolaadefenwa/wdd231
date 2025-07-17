//1. In the JavaScript file, first select all of the HTML elements
// that will need to be manipulated and assign them to const
// variables.

// option 1: select HTML elements in the document
// const currentTemp = document.querySelector('#current-temp');
// const weatherIcon = document.querySelector('#weather-icon');
// const captionDesc = document.querySelector('figcaption');


//option 1: Declare a const variable named "url" and assign it a valid URL string
// as given in the openweathermap api documentation was presented.
// const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=3caf86809b54413b53660a02dd4827f1&units=metric';

// option 2: select HTML elements in the document
const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

// option 2: Create Required Variables for the URL
const myKey = "3caf86809b54413b53660a02dd4827f1";
const myLat = "49.7528";
const myLong = "6.6305";

// Construct a full path using template literals
const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`

//Define an asynchronous function named "apiFetch()"
// that uses a try block to handle errors.

async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); //testing only
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

//Build the displayResults function to output
// to the given HTML document.

function displayResults(data) {
    // console.log("Hello"); //for testing only
    myTown.innerHTML = data.name;
    myDescription.innerHTML = data.weather[0].description;
    myTemperature.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    myGraphic.setAttribute('src', iconsrc);
    myGraphic.setAttribute('alt', data.weather[0].description)
}