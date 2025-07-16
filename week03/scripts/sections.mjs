import byuiCourse from './course.mjs';

function setSectionSelection(sections) {
    const sectionSelect = document.querySelector("#sectionNumber");
    byuiCourse.sections.forEach((section) => {
        const option = document.createElement("option");
        option.value = section.sectionNumber;
        option.textContent = `${section.sectionNumber}`;
        sectionSelect.appendChild(option);
    });
}

export { setSectionSelection };

//You can also export the this function as 'named exports'
// like the course example below in the commented function.
// export function populateSections(sections) { ... }

// export function setSectionSelection(sections) {
// const sectionSelect = document.querySelector("#sectionNumber");
// byuiCourse.sections.forEach((section) => {
//     const option = document.createElement("option");
//     option.value = section.sectionNumber;
//     option.textContent = `${section.sectionNumber}`;
//     sectionSelect.appendChild(option);
// });
// }