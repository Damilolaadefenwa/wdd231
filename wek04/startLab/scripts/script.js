// This code below was used for both the single dialog
// example and the Reusing of one dialog over and over 

const openButton = document.querySelector("#openButton");
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");
//The below variable mean we are targeting an element with an id of dialogBox
// that has a child element tag called div / division
const dialogBoxText = document.querySelector("#dialogBox div");


//"show the dialog" button opens the dialog modally
openButton1.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `One Apple contains 95 calories`
});

openButton2.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `One Orange contains 45 calories`
});

openButton3.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `One Banana contains 105 calories`
});
// "close" button closes the dialog
closeButton.addEventListener("click", () => {
    dialogBox.close();
});

