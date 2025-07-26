//How To extract Form information submitted using URLSearchParams(of the get method)
// And display it to the User.

//STEP 1
//Start with variable to pointing to the computer window search bar

// const getString = window.location.search;
// console.log(getString);

//extracting the name value pair information display to the consolw
// by using JavaScript Built-in URLSEarchParams Constructor to extract it out.

// const myInfo = new URLSearchParams(getString);
// console.log(myInfo);

//Optionally You can write a single line of code instead of the two above.

const myInfo = new URLSearchParams(window.location.search);
// console.log(myInfo);

//STEP 2
//There are several method inside the URLSearchParams Constructor to use
// to display the name-value-pair of the URL parameter

// console.log(myInfo.get('first'));
// console.log(myInfo.get('last'));
// console.log(myInfo.get('phone'));
// console.log(myInfo.get('email'));
// console.log(myInfo.get('ordinance'));
// console.log(myInfo.get('date'));
// console.log(myInfo.get('location'));

//STEP 3
// Populate the Thank You page by selecting the
// HTML ID using temperal literal and displaying it to the user.

document.querySelector('#results').innerHTML = `
<p>Appointment for ${myInfo.get('first')} ${myInfo.get('last')}<p/>
<p>Proxxy ${myInfo.get('ordinance')} on ${myInfo.get('date')} at the Church ${myInfo.get('location')} Temple </p>
<p>Your Phone: ${myInfo.get('phone')}</p>
<p>Your Email: ${myInfo.get('email')}</p>
`;