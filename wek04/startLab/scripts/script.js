// This code below was used for both the single dialog
// example and the Reusing of one dialog over and over 

const openButton = document.querySelector('#openButton');
const dialogBox = document.querySelector('#dialogBox');
const closeButton = document.querySelector('#closeButton');
//The below variable mean we are targeting an element with an id of dialogBox
// that has a child element tag called div / division
const dialogBoxText = document.querySelector("#dialogBox div");


//"show the dialog" button opens the dialog modally
openButton.addEventListener ("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `One Apple contains 95 calories`;
});

// "close" button closes the dialog
closeButton.addEventListener("click", () => {
    dialogBox.close();
});

// Debugging
// When the element isn't in the Document Object Model (DOM) yet,
// document.getElementById() (or querySelector()) will return null.
// Use DOMContentLoaded event: This is a more formal and reliable way
// to ensure your script runs only after the DOM is fully loaded.
// This is particularly useful if you place your <script> tag in the <head> section.
// document.addEventListener("DOMContentLoaded", () => {
//     const openButton = document.querySelector('#openButton');
//     const dialogBox = document.querySelector('#dialogBox');
//     const closeButton = document.querySelector('#closeButton');
//     const dialogBoxText = document.querySelector('#dialogBox div');

//     // Now you are sure openButton exists
//     if (openButton) { // It's good practice to check if the element was found
//         openButton.addEventListener("click", () => {
//             dialogBox.showModal();
//             dialogBoxText.innerHTML = `One Apple contains 95 calories`;
//         });
//     } else {
//         console.error("Error: openButton element not found!");
//     }

//     if (closeButton) {
//         closeButton.addEventListener("click", () => {
//             dialogBox.close();
//         });
//     }
// });