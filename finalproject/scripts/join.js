/* The Join Page Section */
/* Author: Damilola Adefenwa/
/* Date: 2025-08-10 */

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
        { "level": "Bronze", "cost": "₦5,000 per quarter", "benefits": ["Standard listing in our online business directory.", "Invitation to general networking events"] },
        { "level": "Silver", "cost": "₦12,500 per quarter", "benefits": ["All Bronze benefits", "Promotion on our social media channels", "Inclusion in one quarterly feature on our blog."] },
        { "level": "Gold", "cost": "₦25,000 per quarter", "benefits": ["All Silver benefits", "Invitations to exclusive member workshops and seminars.", "Priority support from our member services team"] },
        { "level": "Platinum", "cost": "₦50,000 per quarter", "benefits": ["All Gold benefits", "Dedicated marketing and social media campaigns from our team.", "Exclusive invitations to high-profile networking events and workshops.", "One-on-one business consultation sessions with our experts."] }
    ];

    benefitsData.forEach(item => {
        // Construct modal ID from level, e.g., 'Bronze' becomes 'modal-bronze'
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