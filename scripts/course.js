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
        completed: true
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
        completed: true
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
        completed: true
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
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
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

// Filter Courses

createCoursesSection();
filterCourses(courses);
countCredits(courses);

const allCourses = document.querySelector("#all");
allCourses.addEventListener("click", () => {
    filterCourses(courses);
    countCredits(courses);
});

const wddCourses = document.querySelector("#wdd");
wddCourses.addEventListener("click", () => {
    filterCourses(courses.filter(course => course.subject === "WDD"));
    countCredits(courses.filter(course => course.subject === "WDD"));

});

const cseCourses = document.querySelector("#cse");
cseCourses.addEventListener("click", () => {
    filterCourses(courses.filter(course => course.subject === "CSE"));
    countCredits(courses.filter(course => course.subject === "CSE"));

});


// Create Buttons and Boxes

function createCoursesSection() {
    document.querySelector("#course-filter").innerHTML = "";
    let options = document.createElement("div")
    let allButton = document.createElement("button");
    let wddButton = document.createElement("button");
    let cseButton = document.createElement("button");

    options.setAttribute("id", "course-options");
    allButton.textContent = "All";
    allButton.setAttribute("type", "button");
    allButton.setAttribute("id", "all");
    allButton.setAttribute("name", "All Courses");
    wddButton.textContent = "WDD";
    wddButton.setAttribute("type", "button");
    wddButton.setAttribute("id", "wdd");
    wddButton.setAttribute("name", "WDD Courses");
    cseButton.textContent = "CSE";
    cseButton.setAttribute("type", "button");
    cseButton.setAttribute("id", "cse");
    cseButton.setAttribute("name", "CSE Courses");


    options.appendChild(allButton);
    options.appendChild(wddButton);
    options.appendChild(cseButton);

    document.querySelector("#course-filter").appendChild(options);
}

function filterCourses(coursesArray) {
    document.querySelector("#filtered").innerHTML = "";
    
    let cards = document.createElement("div");
    coursesArray.forEach(course => {
        let courseBox = document.createElement("span");

        courseBox.innerHTML = `${course['subject']} ${course['number']}`;
                
        cards.appendChild(courseBox); 

        if (course['completed'] == false) {
            courseBox.setAttribute("class", "toNotColor");
        }
    });

    document.querySelector("#filtered").appendChild(cards);
   
}

// Count Credits

function countCredits(anArray) {
    document.querySelector("#credits").innerHTML = "";

    const count = anArray.reduce((accumulator, item) => {
        return accumulator += item['credits'];  
    }, 0)
    
    document.querySelector("#credits").innerHTML = `The total credits for courses listed above is <strong>${count}</strong>`;

}