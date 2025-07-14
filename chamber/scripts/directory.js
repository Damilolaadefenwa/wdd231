// Author : Diogo Rangel Dos Santos
// Date   : 2025-07-09

document.addEventListener('DOMContentLoaded', async () => {
    const membersDisplay = document.getElementById('member-display');
    const gridViewBtn = document.getElementById('grid-view-btn');
    const listViewBtn = document.getElementById('list-view-btn');

    const membersDataUrl = 'data/members.json'; // Path to your JSON data

    // Function to create a member card
    function createMemberCard(member) {
        const card = document.createElement('div');
        card.classList.add('member-card');

        const image = document.createElement('img');
        image.src = `images/${member.image}`; // Assuming images are in the 'images' folder
        image.alt = `${member.name} Logo`;
        image.loading = 'lazy'; // Lazy load images for performance

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
        website.target = '_blank'; // Open in new tab
        website.rel = 'noopener noreferrer'; // Security best practice

        const membershipLevel = document.createElement('p');
        membershipLevel.classList.add('membership-level');
        membershipLevel.textContent = `Membership: ${member.membershipLevel}`;

        contentDiv.appendChild(name);
        contentDiv.appendChild(tagline);
        contentDiv.appendChild(address);
        contentDiv.appendChild(phone);
        contentDiv.appendChild(website);

        card.appendChild(image);
        card.appendChild(contentDiv);
        card.appendChild(membershipLevel); // Membership level can be outside contentDiv for specific styling

        return card;
    }

    // Function to display members
    function displayMembers(members, viewType = 'grid') {
        membersDisplay.innerHTML = ''; // Clear previous content
        membersDisplay.classList.remove('member-grid', 'member-list'); // Remove existing view classes
        membersDisplay.classList.add(`member-${viewType}`); // Add the new view class

        members.forEach(member => {
            const card = createMemberCard(member);
            membersDisplay.appendChild(card);
        });
    }

    // Fetch member data
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
});