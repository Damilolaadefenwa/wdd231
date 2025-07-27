/* The Join Page Section */
/* Author: Damilola Adefenwa/
/* Date: 2025-07-26 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Set the hidden timestamp field
    const timestampField = document.getElementById('formLoadTimestamp');
    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }

    // 2. Handle Modal Functionality
    const modalLinks = document.querySelectorAll('.modal-link');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-button');

    modalLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent page from jumping to top
            const modalId = link.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.showModal(); // Show the dialog
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            if (modal) {
                modal.close(); // Close the dialog
            }
        });
    });

    // Close modal if user clicks on the backdrop
    modals.forEach(modal => {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.close();
            }
        });
    });


    // 3. Load and display membership benefits from the provided JSON data

    const benefitsData = [
        { "level": "NP", "benefits": ["Listing in the online directory", "Access to community newsletter"] },
        { "level": "Bronze", "cost": "XOF 53,910/year", "benefits": ["All NP benefits", "Discounted tickets to chamber events", "Business name listed at one event per year"] },
        { "level": "Silver", "cost": "XOF 134,765/year", "benefits": ["All Bronze benefits", "Spotlight feature on the chamber website once per year", "Opportunity to host one 'Business After Hours' event"] },
        { "level": "Gold", "cost": "OXF 269,530/year", "benefits": ["All Silver benefits", "Banner ad on the chamber homepage", "Keynote speaking opportunity at one chamber luncheon", "Logo included in all email newsletters"] }
    ];

    benefitsData.forEach(item => {
        // Construct modal ID from level, e.g., 'NP' becomes 'modal-np'
        const modalId = `modal-${item.level.toLowerCase()}`;
        const modal = document.getElementById(modalId);
        if (modal) {
            const contentDiv = modal.querySelector('.modal-content');
            let benefitsHtml = '<ul>';
            if (item.cost) {
                benefitsHtml += `<li><strong>Cost:</strong> ${item.cost}</li>`;
            }
            item.benefits.forEach(benefit => {
                benefitsHtml += `<li>${benefit}</li>`;
            });
            benefitsHtml += '</ul>';
            contentDiv.innerHTML = benefitsHtml;
        }
    });
});