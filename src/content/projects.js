var proj = {
  "projects": [
    {
      "name": "Mom & Pops",
      "link": "https://github.com/jorge-aparicio/MomPops",
	  "website": "",
    "organization": "",
      "description": ["Currently working on an Android app that allows users to find local restaurants to support. Tech Stack: Android, Java, Postgres",
                      "Designed and implemented a custom menu item component that displays all relevant information about a menu item, which can then be added to a user's cart or favorites.", 
                      "Created the cart page that displays the users current cart along with the total price. Additional functionalities include clearing the current cart, saving their cart, and viewing previous carts for user convenience.", // TODO: describe how functionalities were implemented when they are finished
                      "Implemented the Clicked Restaurant page that displays the menu of the clicked restaurant.",
                      "Designed the database using an E/R diagram. Algorithmically converted the diagram into a relational database."],
      "tags": ["Android", "Java", "Postgres", "SQL"]
    },

    {
      "name": "KIWI Forum",
      "link": "",
	  "website":"https://kiwi-test-app.herokuapp.com/login",
	  "organization":"Software Engineering Course",
      "description": ["Lead a team of ten upperclassmen developers in an Agile environment to develop a specialized web forum application for a software engineering course, tech stack: ReactJS, NodeJS, Express, Firebase", 
                      "Designed the database schema, added navbar functionality that allowed employees to list/change the specializations by which their forum was filtered by, and created/tested RESTful API for the application to interact with the database.",
                      "Developed the authentication system using express, firebase, and cookies to allow employee and admin authenticated backend routes and pages. Created an employee invite system that would email a unique one-time-only invite link to a specified employee’s email that would grant access to the admin’s company forum."],
      "tags": ["Javascript", "React", "Firebase", "NodeJS", "Express", "Semantic UI"]
    },

    {
      "name": "College Course Registrar",
      "link": "",
	  "website":"",
	  "organization":"Databases Course",
      "description": ["Developed a college course registrar web application that allows students to plan their schedules, enroll in classes, view their academic history etc., tech stack: JSP, Java, JDBC, Apache Tomcat, PostgreSQL", 
                      "Created and optimized SQL queries to allow efficient retrieval of data such as finding available dates for a professor to schedule a review session, finding nonconflicting classes for a student’s current schedule and more.",
                      "Modeled the database using an E/R diagram, maintained the database using integrity constraints, triggers, and materialized views.",
                      "Created forms using JSP to allow for database insertion, updating, and deletion of data."],
      "tags": ["Java", "JSP", "JDBC", "Postgres", "SQL", "Apache Tomcat"]
    },

    {
      "name": "Dynamics Performance Team Website",
      "link": "https://github.com/TritonSE/dynamics-website",
	  "website":"https://dynamicsperformanceteam.com",
	  "organization":"Triton Software Engineering",
      "description": ["Lead a team of first year developers in developing a website for a nonprofit dance organization, tech stack: ReactJS", 
                      "Ensuring the completion of the website in a timely manner while providing a challenging, friendly, and engaging environment that simulates a software development experience.",
                      "Conducted code reviews that guided developers towards better code implementation practices."],
      "tags": ["Javascript", "React", "Semantic UI"]
    },

    {
      "name": "Personal Website",
      "link": "https://github.com/jayrc7/personal-website",
	  "website":"",
	  "organization":"",
      "description": ["Created a personal portfolio site in React and Semantic UI, hosted on Github Pages.", "Wrote custom components in React for dynamic filtering of projects by tags and to display courses taken."],
      "tags": ["Javascript", "React", "Semantic UI"]
    },

    {
      "name": "Live Well San Diego Market Evaluation Tool",
      "link": "https://liveweller.herokuapp.com/",
	  "website":"https://liveweller.herokuapp.com",
	  "organization": "Triton Software Engineering",
      "description": ["Developed market evaluation tool for Live Well San Diego organization using HTML/CSS/Javascript/JQuery/Bootstrap, configured database to push/pull client responses using Firebase.", "Engineered and tested algorithm that handles market evaluations.", "Implemented dynamic front end using JQuery.", "Triton Software Engineering project, worked in a team of 4 with weekly deadlines."],
      "tags": ["Javascript", "HTML/CSS", "JQuery", "Firebase", "Bootstrap"]
    },

    {
      "name": "TwoNote",
      "link": "https://github.com/jayrc7/Project-TwoNote",
	  "website":"https://www.youtube.com/watch?v=GVmKS1qHUqY",
	  "organization":"",
      "description": ["Developer and Co-creator for Linux note taking app.", "Engineered algorithms in order to create, rename, edit, and delete notebooks/notes using knowledge learned from data structures course.", "Developed frontend using PyGTK api, from the most notable sidebar menu that facilitates the client's note taking experience to the popups that deal with it's designated purpose e.g. creating a notebook." ],
      "tags": ["Python", "PyGTK", "Linux"],
    },

    {
      "name": "Safeguard",
      "link": "https://github.com/jayrc7/safeguard",
	  "website":"",
	  "organization":"LA Hacks 2019 (Won Top 5 Overall Hack)",
      "description": ["Won Top 5 Overall Hack at LAHacks 2019 for a community safety app. Demoed in front of judges and all LaHacks participants.", "Developed portions of frontend using React and Semantic UI. Also dealt with backend Firebase integration.", "Configured a Twilio server to receive texts and reply with the nearest safehouse while also alerting clients' location to all community members." ],
      "tags": ["Javascript", "React", "Twilio", "Firebase"],
    },

	{
	  "name": "2048", 
	  "link": "",
	  "website": "https://www.youtube.com/watch?v=vOTnji-uVtM",
	  "organization":"Course Project",
	  "description": ["Implemented classic 2048 game that took all the app markets by storm where the objective is to combine matching tiles until the 2048 tile is reached.", "JavaFX API for frontend and Java for backend.", "Unable to post github repo due to academic integrity rules :("],
	  "tags": ["Java", "JavaFX"],
	},

    {
      "name": "Ball and Paddle",
      "link": "https://github.com/jayrc7/Ball_and_Paddle",
	  "website":"https://www.youtube.com/watch?v=n9ZVauq4Cp8",
	  "organization":"Personal Project",
      "description": ["Implemented classic game where player must eliminate all bricks by reflecting the ball off of a paddle.", "JavaFX API for frontend and Java for backend." ],
      "tags": ["Java", "JavaFX"],
    },

  ]
}

var tag = { "tags": ["Android", "Apache Tomcat", "Bootstrap", "Firebase", "Express", "HTML/CSS", "Java", "JavaFX", "Javascript", "JDBC", "JSP", "JQuery", "Linux",  "NodeJS", "Postgres", "PyGTK", "Python", "React", "SQL", "Semantic UI", "Twilio"]}

export { proj, tag }
