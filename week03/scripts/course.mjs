// This file will contain the course object section data
// and its methods that are used to enroll and drop students
// from the course.

//1. Move the byuiCourse object into the course file from the modules.js file.

const byuiCourse = {
    code: "WDD231",
    name: "Web Frontend Development I",
    sections: [
        {
            sectionNumber: 1,
            enrolled: 88,
            instructor: "Brother Bingham",
        },
        {
            sectionNumber: 2,
            enrolled: 81,
            instructor: "Sister Shultz",
        },
        {
            sectionNumber: 3,
            enrolled: 95,
            instructor: "Sister Smith",
        },
    ],
}

//2. In this course file, export the byuiCourse object
// as the his course.mjs file, This line can be the last 
// line of the file.

export default byuiCourse;