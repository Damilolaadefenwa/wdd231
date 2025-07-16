import byuiCourse from './modules/course';
import { setSectionSelection } from './modules/sections';
import { setTitle, renderSections } from "./modules/output";

//1.At the top of the file, import the byuiCourse object
//  from the course module.
//2.Next, import the setSectionSelection function from the
//  sections module.

//The content of this script file has been reduced to
// event listeners and the function calls.

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = Number(document.querySelector("#sectionNumber").value);
    byuiCourse.changeEnrollment(sectionNum);
    renderSections(byuiCourse.sections);
});

document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = Number(document.querySelector("#sectionNumber").value);
    byuiCourse.changeEnrollment(sectionNum, false);
    renderSections(byuiCourse.sections);
});

setTitle(byuiCourse);
setSectionSelection(byuiCourse.sections);
renderSections(byuiCourse.sections);