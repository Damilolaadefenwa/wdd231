//This file will contain the function that populates
// the section selection element on the page.

//1.Move the setSectionSelection function from the modules
//  file into the sections file.

function setSectionSelection() {
    const sectionSelect = document.querySelector("#sectionNumber");
    byuiCourse.sections.forEach((section) => {
        const option = document.createElement("option");
        option.value = section.sectionNumber;
        option.textContent = `${section.sectionNumber}`;
        sectionSelect.appendChild(option);
    });
}

//2. export the setSectionSelection function as a named export.

export function setSectionSelection(sections) { }

export function populateSections(sections) { }