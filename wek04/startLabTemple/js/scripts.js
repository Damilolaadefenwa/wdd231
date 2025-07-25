import { temples } from "../data/temples.js";
// console.log(temples);

import { url } from "../data/temples.js";
// console.log(url);

//The Query Selector References for Our HTML to display the Item
const showHere = document.querySelector("#showHere");
const mydialog = document.querySelector("#mydialog");
const mytitle = document.querySelector("#mydialog h2");
const myclose = document.querySelector("#mydialog button");
const myinfo = document.querySelector("#mydialog p");
// Adding the Dynamic Action
myclose.addEventListener("click", () => mydialog.close())

//----------- CREATE A FUNCTION THAT WILL LOOP THROUGH
// THE ARRAY OF JSON ITEMS 
function displayItem(data) {
    // console.log(data)
    data.forEach(x => {
        console.log(x)
        const photo = document.createElement('img')
        photo.src = `${url}${x.path}`
        photo.alt = x.name

        //Add an event listener to each division on the page.
        photo.addEventListener("click", () => showStuff(x));
        showHere.appendChild(photo)
    })
    
}

//START DISPLAYING ALL ITEMS by calling the function
displayItem(temples)

//Building Our ShowStuff Function.
function showStuff(x) {
    mytitle.innerHTML = x.name
    mydialog.showModal()
    myinfo.innerHTML = `Dedicated ${x.dedicated} by ${x.person} as temple number ${x.number}`
}