// Dynamic filling of course section.
//Copy this array of course objects into a JavaScript file
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'The course introduces responsive design using HTML, CSS, and JavaScript with attention to usability, accessibility, and best practices in web frontend development. It builds on prior experience in Web Fundamentals and programming.Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

// 1. Modify the courses array content by changing 'completed' property
// (This part of your code is good, leave it as is)
courses.forEach(course => {
    if (
        (course.subject === 'CSE' && course.number === 110) ||
        (course.subject === 'WDD' && course.number === 130) ||
        (course.subject === 'CSE' && course.number === 111) ||
        (course.subject === 'CSE' && course.number === 210) ||
        (course.subject === 'WDD' && course.number === 131)
        // WDD 231 is 'In Progress', so it remains false
    ) {
        course.completed = true;
    }
});

// Get references to your HTML elements
// We will use '.course-list' as the main container for course cards
const courseListContainer = document.querySelector('.course-list');
const courseTotalElement = document.querySelector('.course-total');
const filterButtons = document.querySelectorAll('.course-filters button');

//*** 24/7/2025: Learning activity To add Modal */
// Reference to my HTML <dialog> element
const courseDetailsModal = document.getElementById('course-details');


// MODAL RELATED FUNCTIONS (Part A of your assignment) ---

// Function to display the modal with specific course details
function displayCourseDetails(course) {
    // Clear previous content
    courseDetailsModal.innerHTML = '';

    // Add content (including the close button and all details)
    courseDetailsModal.innerHTML = `
            <button id="closeModal">❌</button><h2>${course.subject} ${course.number}</h2>
            <h3>${course.title}</h3>
            <p><strong>Credits</strong>: ${course.credits}</p>
            <p><strong>Certificate</strong>: ${course.certificate}</p>
            <p>${course.description}</p>
            <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
        `;

    // Get reference to the close button AFTER it's added to the modal's DOM
    const closeModalButton = document.getElementById("closeModal");

    // Add event listener for the close button
    if (closeModalButton) {
        closeModalButton.addEventListener("click", () => {
            courseDetailsModal.close();
        });
    }

    // Show the modal
    courseDetailsModal.showModal();
}

// Event listener to close the modal when clicking outside of the modal content (on the backdrop)
courseDetailsModal.addEventListener('click', (event) => {
    if (event.target === courseDetailsModal) {
        courseDetailsModal.close();
    }
});


// --- MAIN RENDERING FUNCTION (Adapted from my previous existing renderCourses in week01) ---

// Your existing rendering function, now modified to include the modal click listener
function renderCourses(filter = 'All') {
    // Clear previous cards from the main course list container
    courseListContainer.innerHTML = '';

    // Filter courses
    let filtered = courses;
    if (filter === 'WDD') filtered = courses.filter(c => c.subject === 'WDD');
    else if (filter === 'CSE') filtered = courses.filter(c => c.subject === 'CSE');

    // Loop through filtered courses and create/append cards
    filtered.forEach(course => {
        const courseDiv = document.createElement('div');
        // Add existing classes and 'completed' class for styling
        courseDiv.classList.add('course-card');

        if (course.completed) {
            courseDiv.classList.add('completed');
        }

        // Determine completed status icon based on your image
        const statusIcon = course.completed ? '✅ Completed' : '⏳ In Progress';

        // Populate the course card with its basic info (matching your the week01 assignment)
        courseDiv.innerHTML = `
                <h3>${course.subject} ${course.number}</h3>
                <p>${course.title}</p>
                <p>Credits: ${course.credits}</p>
                <p>${statusIcon}</p>
            `;

        // --- PART B: Add 'click' event listener to each course card ---
        // This is crucial for opening the modal for the specific course clicked
        courseDiv.addEventListener('click', () => {
            displayCourseDetails(course); // Pass the entire course object
        });

        // Append the created course card to the main container
        courseListContainer.appendChild(courseDiv);
    });

    // Calculate and display total credits (your existing logic)
    const totalCredits = filtered.reduce((sum, c) => sum + c.credits, 0);
    courseTotalElement.textContent = `The total credits for courses listed above is ${totalCredits}`;
}

// --- Button event listeners (My existing logic from my week01 assignment) ---
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove 'active' class from all buttons and add to the clicked 
        // one (optional, but good for UI for later use)
        // filterButtons.forEach(b => b.classList.remove('active'));
        // btn.classList.add('active');
        // Below code written in week01 assignment.
        renderCourses(btn.textContent.trim());
    });
});

// --- Initial call to render courses when the page loads ---
// Make sure 'All' button is active initially (optional)
// document.querySelector('.course-filters button').classList.add('active');
renderCourses('All'); // Display all courses initially;
