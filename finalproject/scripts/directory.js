/* Directory Page Section */
/* Author: Damilola Adefenwa/
/* Date: 2025-08-09 */

//A. DYNAMIC CONTENT GENERATION
document.addEventListener('DOMContentLoaded', async () => {
    const membersDisplay = document.getElementById('member-display');
    const gridViewBtn = document.getElementById('grid-view-btn');
    const listViewBtn = document.getElementById('list-view-btn');

    const membersDataUrl = 'data/mymember.json'; // Path to your JSON data

    // Fetching the member's data 
    try {
        const response = await fetch(membersDataUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const members = await response.json();
        // Initial display as grid
        displayMembers(members, 'grid');

        // Event listeners for view toggles
        gridViewBtn.addEventListener('click', () => {
            displayMembers(members, 'grid');
            gridViewBtn.classList.add('active');
            listViewBtn.classList.remove('active');
        });

        listViewBtn.addEventListener('click', () => {
            displayMembers(members, 'list');
            listViewBtn.classList.add('active');
            gridViewBtn.classList.remove('active');
        });

    } catch (error) {
        console.error('Error fetching member data:', error);
        membersDisplay.innerHTML = '<p class="error-message">Failed to load business directory. Please try again later.</p>';
    }

    // Creating the member card
    function createMemberCard(member) {
        const card = document.createElement('div');
        card.classList.add('member-card');

        const image = document.createElement('img');
        image.src = `images/${member.image}`; 
        image.alt = `${member.name} Logo`;
        image.loading = 'lazy'; 

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('card-content');

        const name = document.createElement('h3');
        name.textContent = member.name;

        const tagline = document.createElement('p');
        tagline.classList.add('tagline');
        tagline.textContent = member.tagline;

        const address = document.createElement('p');
        address.textContent = member.address;

        const phone = document.createElement('p');
        phone.textContent = member.phone;

        const website = document.createElement('a');
        website.href = member.website;
        website.textContent = member.website;
        website.target = '_blank'; // Opening in new tab
        website.rel = 'noopener noreferrer'; // security best practice

        const booking = document.createElement('a');
        booking.href = member.booking;
        booking.textContent = member.booking;
        booking.target = '_blank';
        booking.rel = 'noopener noreferrer';

        const membershipLevel = document.createElement('p');
        membershipLevel.classList.add('membership-level');
        membershipLevel.textContent = `Membership: ${member.membershipLevel}`;

        contentDiv.appendChild(name);
        contentDiv.appendChild(tagline);
        contentDiv.appendChild(address);
        contentDiv.appendChild(phone);
        contentDiv.appendChild(website);
        contentDiv.appendChild(booking);

        card.appendChild(image);
        card.appendChild(contentDiv);
        card.appendChild(membershipLevel); 

        return card;
    }

    // Displaying the members
    function displayMembers(members, viewType = 'grid') {
        membersDisplay.innerHTML = ''; // Clear previous content
        membersDisplay.classList.remove('member-grid', 'member-list'); // Remove existing view classes
        membersDisplay.classList.add(`member-${viewType}`); // Add the new view class

        members.forEach(member => {
            const card = createMemberCard(member);
            membersDisplay.appendChild(card);
        });
    }
});


//B. --- LOCALSTORAGE VISITOR MESSAGE ---

// 1. Getting the message element from the DOM
const visitMessage = document.getElementById('visit-message');

// 2. Getting the last visit timestamp from localStorage (returns null if not set)
const lastVisit = localStorage.getItem('lastVisitTimestamp');

// 3. Gettingthe current timestamp
const now = Date.now();

// 4. Logic to determine the message
if (!lastVisit) {
    // First visit ever
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    // Calculate the difference in milliseconds, then convert to days
    const daysSinceLastVisit = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

    if (daysSinceLastVisit < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else {
        // Handling singular 'day' vs plural 'days'
        const dayText = daysSinceLastVisit === 1 ? 'day' : 'days';
        visitMessage.textContent = `You last visited ${daysSinceLastVisit} ${dayText} ago.`;
    }
}

// 5. Updating the localStorage with the current visit timestamp for the *next* visit
localStorage.setItem('lastVisitTimestamp', now);