/* The Join Page Section */
/* Author: Damilola Adefenwa/
/* Date: 2025-07-26 */

// Use URLSearchParams to get data from the URL
const params = new URLSearchParams(window.location.search);

// Get all required fields from the URL parameters
const firstName = params.get('fname');
const lastName = params.get('lname');
const email = params.get('email');
const phone = params.get('phone');
const businessName = params.get('business_name');
const timestamp = params.get('timestamp');

// Format the timestamp to be more readable
const formattedDate = new Date(timestamp).toLocaleString();

// Display the data on the page
const summaryElement = document.getElementById('summary-data');
summaryElement.innerHTML = `
    <strong>First Name:</strong> ${firstName}<br>
    <strong>Last Name:</strong> ${lastName}<br>
    <strong>Email:</strong> ${email}<br>
    <strong>Mobile Phone:</strong> ${phone}<br>
    <strong>Business Name:</strong> ${businessName}<br>
    <strong>Application Submitted:</strong> ${formattedDate}
`;