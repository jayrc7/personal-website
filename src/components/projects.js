var proj = {
  "projects": [
    {
      "name": "Personal Website",
      "link": "https://github.com/jayrc7/personal-website",
	  "website":"",
	  "organization":"",
      "description": ["Created a personal portfolio site in React and Semantic UI, hosted on Github Pages.", "Wrote custom components in React for dynamic filtering of projects by tags and to display courses taken."],
      "tags": ["Personal", "Javascript", "React", "Semantic UI"]
    },

    {
      "name": "Live Well San Diego Market Evaluation Tool",
      "link": "https://liveweller.herokuapp.com/",
	  "website":"https://liveweller.herokuapp.com",
	  "organization": "Triton Software Engineering",
      "description": ["Triton Software Engineering web app project, worked in a team of 4 with weekly deadlines.","Developed market evaluation tool for Live Well San Diego organization using HTML/CSS/Javascript/JQuery/Bootstrap, configured database to push/pull client responses using Firebase.", "Engineered and tested algorithm that handles market evaluations.", "Implemented dynamic front end using JQuery."],
      "tags": ["Organization", "Javascript", "HTML/CSS", "JQuery", "Firebase", "Bootstrap"]
    },

    {
      "name": "TwoNote",
      "link": "https://github.com/jayrc7/Project-TwoNote",
	  "website":"https://www.youtube.com/watch?v=GVmKS1qHUqY",
	  "organization":"",
      "description": ["Developer and Co-creator for Linux note taking app.", "Engineered algorithms in order to create, rename, edit, and delete notebooks/notes using knowledge learned from data structures course.", "Developed frontend using PyGTK api, from the most notable sidebar menu that facilitates the client's note taking experience to the popups that deal with it's designated purpose e.g. creating a notebook." ],
      "tags": ["Personal", "Python", "PyGTK", "Linux"],
    },

    {
      "name": "Safeguard",
      "link": "https://github.com/jayrc7/safeguard",
	  "website":"",
	  "organization":"LA Hacks 2019 (Won Top 5 Overall Hack)",
      "description": ["Won Top 5 Overall Hack at LAHacks 2019 for a community safety app. Demoed in front of judges and all LaHacks participants.", "Developed portions of frontend using React and Semantic UI. Also dealt with backend Firebase integration.", "Configured a Twilio server to receive texts and reply with the nearest safehouse while also alerting clients' location to all community members." ],
      "tags": ["Hackathon", "Javascript", "React", "Twilio", "Firebase"],
    },

    {
      "name": "Beacon",
      "link": "https://github.com/jayrc7/Beacon",
	  "website": "",
	  "organization":"SD Hacks 2018",
      "description": ["Developed web app that allows users to drop beacons on a map that contains contact info and description of an event.", "Implemented frontend using HERE mapping api and React, also engineered the algorithm to add beacons onto the map." ],
      "tags": ["Hackathon", "Javascript", "React"],
    },

	{
	  "name": "2048", 
	  "link": "",
	  "website": "https://www.youtube.com/watch?v=vOTnji-uVtM",
	  "organization":"",
	  "description": ["Implemented classic 2048 game that took all the app markets by storm where the objective is to combine matching tiles until the 2048 tile is reached.", "JavaFX API for frontend and Java for backend.", "Unable to post github repo due to academic integrity rules :("],
	  "tags": ["Course", "Java", "JavaFX", "Game"],
	},

    {
      "name": "Ball and Paddle",
      "link": "https://github.com/jayrc7/Ball_and_Paddle",
	  "website":"https://www.youtube.com/watch?v=n9ZVauq4Cp8",
	  "organization":"Personal Project",
      "description": ["Implemented classic game where player must eliminate all bricks by reflecting the ball off of a paddle.", "JavaFX API for frontend and Java for backend." ],
      "tags": ["Personal", "Java", "JavaFX","Game"],
    },

	{
	  "name": "Home Castle Painting Website",
	  "link": "https://github.com/home-castle/home-castle.github.io",
	  "website":"https://www.homecastlepainting.com",
	  "organization":"",
	  "description": ["Created static website for my fathers local painting company using HTML/CSS/JS.", "Implemented an original design to give the website a sense of professionalism and simplicity while showing the painting company's craft.", "Collaborated with a team member to discuss all design strategies."],
	  "tags": ["Personal", "HTML/CSS", "Bootstrap"],
	}


  ]
}

var tag = { "tags": ["Organization", "Hackathon", "Personal", "Course", "JQuery", "React", "Semantic UI", "Bootstrap", "Java", "Python", "HTML/CSS", "Javascript", "Firebase", "Linux", "Twilio", "JavaFX", "PyGTK", "Game"] }
export { proj, tag }
