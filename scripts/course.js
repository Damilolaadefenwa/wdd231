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

//1. Modify the courses array content in your script file by changing the completed property 
// to true if you have completed a course. Mark completed courses.
courses.forEach(course => {
    if (
        course.subject === 'CSE' ||
        (course.subject === 'WDD' && course.number === 130) ||
        (course.subject === 'WDD' && course.number === 131)
        // Add more conditions for other completed courses
    ) {
        course.completed = true;
    }
});

//2, 3, 4, 5. Dynamic Display, Filtering, Styling, and Credits
// Getting DOM elements
const courseList = document.querySelector('.course-list');
const courseTotal = document.querySelector('.course-total');
const filterButtons = document.querySelectorAll('.course-filters button');

// Rendering courses
function renderCourses(filter = 'All') {
    // Filtering courses
    let filtered = courses;
    if (filter === 'WDD') filtered = courses.filter(c => c.subject === 'WDD');
    else if (filter === 'CSE') filtered = courses.filter(c => c.subject === 'CSE');

    // Render cards
    courseList.innerHTML = filtered.map(course => `
        <div class="course-card${course.completed ? ' completed' : ''}">
            <h3>${course.subject} ${course.number}</h3>
            <p>${course.title}</p>
            <p>Credits: ${course.credits}</p>
            <p>${course.completed ? '✅ Completed' : '⏳ In Progress'}</p>
        </div>
    `).join('');

    // Calculate total credits
    const totalCredits = filtered.reduce((sum, c) => sum + c.credits, 0);
    courseTotal.textContent = `The total credits for courses listed above is ${totalCredits}`;
}

// Button event listeners
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        renderCourses(btn.textContent.trim());
    });
});

// Initial render
renderCourses();