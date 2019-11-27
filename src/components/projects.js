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
      "description": ["Developed market evaluation tool for Live Well San Diego organization using HTML/CSS/Javascript/JQuery/Bootstrap, configured database to push/pull client responses using Firebase.", "Engineered and tested algorithm that handles market evaluations.", "Implemented dynamic front end using JQuery.", "Triton Software Engineering project, worked in a team of 4 with weekly deadlines."],
      "tags": ["Organization", "Javascript", "HTML/CSS", "JQuery", "Firebase", "Bootstrap", "Demo"]
    },

    {
      "name": "TwoNote",
      "link": "https://github.com/jayrc7/Project-TwoNote",
	  "website":"https://www.youtube.com/watch?v=GVmKS1qHUqY",
	  "organization":"",
      "description": ["Developer and Co-creator for Linux note taking app.", "Engineered algorithms in order to create, rename, edit, and delete notebooks/notes using knowledge learned from data structures course.", "Developed frontend using PyGTK api, from the most notable sidebar menu that facilitates the client's note taking experience to the popups that deal with it's designated purpose e.g. creating a notebook." ],
      "tags": ["Personal", "Python", "PyGTK", "Linux", "Demo"],
    },

    {
      "name": "Safeguard",
      "link": "https://github.com/jayrc7/safeguard",
	  "website":"",
	  "organization":"LA Hacks 2019 (Won Top 5 Overall Hack)",
      "description": ["Won Top 5 Overall Hack at LAHacks 2019 for a community safety app. Demoed in front of judges and all LaHacks participants.", "Developed portions of frontend using React and Semantic UI. Also dealt with backend Firebase integration.", "Configured a Twilio server to receive texts and reply with the nearest safehouse while also alerting clients' location to all community members." ],
      "tags": ["Hackathon", "Personal", "Javascript", "React", "Twilio", "Firebase"],
    },

	{
	  "name": "2048", 
	  "link": "",
	  "website": "https://www.youtube.com/watch?v=vOTnji-uVtM",
	  "organization":"Course Project",
	  "description": ["Implemented classic 2048 game that took all the app markets by storm where the objective is to combine matching tiles until the 2048 tile is reached.", "JavaFX API for frontend and Java for backend.", "Unable to post github repo due to academic integrity rules :("],
	  "tags": ["Course", "Java", "JavaFX", "Game", "Demo"],
	},

    {
      "name": "Ball and Paddle",
      "link": "https://github.com/jayrc7/Ball_and_Paddle",
	  "website":"https://www.youtube.com/watch?v=n9ZVauq4Cp8",
	  "organization":"Personal Project",
      "description": ["Implemented classic game where player must eliminate all bricks by reflecting the ball off of a paddle.", "JavaFX API for frontend and Java for backend." ],
      "tags": ["Personal", "Java", "JavaFX","Game", "Demo"],
    },

  ]
}

var tag = { "tags": ["Bootstrap", "Course", "Demo", "Firebase", "Game", "Hackathon", "HTML/CSS", "Java", "JavaFX", "Javascript", "JQuery", "Linux", "Organization", "Personal", "PyGTK", "Python", "React", "Semantic UI", "Twilio"]}

export { proj, tag }
