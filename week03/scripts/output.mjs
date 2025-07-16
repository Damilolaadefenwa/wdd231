function setTitle(course) {
    document.querySelector("#courseName").textContent = course.name;
    document.querySelector("#courseCode").textContent = course.code;
}

function renderSections(sections) {
    const html = sections.map(
        (section) => `<tr>
      <td>${section.sectionNumber}</td>
      <td>${section.enrolled}</td>
      <td>${section.instructor}</td></tr>`
    );
    document.querySelector("#sections").innerHTML = html.join("");
}

export { setTitle, renderSections };


//You can also export the this function 'as named exports' 
// like the course example below in the commented function.
// export function setTitle(course) { ... }
// export function renderSections(sections) { ... }

// export function setTitle(course) {
//     document.querySelector("#courseName").textContent = course.name;
//     document.querySelector("#courseCode").textContent = course.code;
// }

// export function renderSections(sections) {
//     const html = sections.map(
//         (section) => `<tr>
//       <td>${section.sectionNumber}</td>
//       <td>${section.enrolled}</td>
//       <td>${section.instructor}</td></tr>`
//     );
//     document.querySelector("#sections").innerHTML = html.join("");
// }
