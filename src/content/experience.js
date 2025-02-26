let professionalExperience = [
    {
        "title": "General Motors",
        "role": "Full Stack Software Engineer",
        "description": "Worked on internal applications, microservices, and in-vehicle applications.", 
        "startAndEndDates": "2021-Present",
        "imgSrc": "/generalMotors.png",
        "items": [
            {
                "itemName": "In-Depth Experience",
                "itemInfo": ["Implemented a Python Flask microservice as a recommender system to help predict which vehicle features are enabled by which hardware components based on vehicle data. It utilizes the Jaccard similarity and benefitted the company by helping vehicle testers quickly find the faulting controller when a feature isn’t working. Configured items such as OAuth2 integration, Hashicorp vault support, and Waitress support",
                            "Created a Java Spring Boot microservice, which serves as a scheduler for important tasks such as sending email notifications to our users, updating our database data using external api to promote data consistency, and handling background tasks with a long turnaround time.", 
                            "Redesigned the application’s UI router to utilize the standard Angular router in a cleaner manner. Enabled the router to no longer rely on local storage when the user requests to go to the previous page and instead rely on its own page history.  Furthermore, designed the router so it would successfully open a page in a new tab (if requested) using OAuth2 state to keep track of the page the user would like to open.",
                            "Designed and implemented the UI/API of a form which gets filled out when there is an issue with a vehicle’s hardware component. The form consists of 8 different sections and gets filled out by multiple users with different roles. Added S3 storage in the API to support file attachments in the different sections. Effectively componentized the sections and implemented the API to save the form in an efficient and transactional manner.",
                            "Designed and implemented the architecture for Blue Green Deployment on K8s, cutting release time from 15 minutes to 10 seconds.",
                            "Created Build and Release pipelines to deploy Docker images of microservices to Kubernetes using Azure DevOps build and release pipelines. Currently migrating the team’s CI/CD to Github Actions."
                        ]
            }, 
            {
                "itemName": "Tech Stack",
                "itemInfo": ["Frontend: Angular", "Backend: Java (Spring Boot)", "Databases: PostgresDB", "Cloud: Hashicorp Vault, Amazon S3, Pivotal Cloud Foundry, Kubernetes, Docker, Kibana"]
            }
        ]
    }
];

let academicExperience = [
    {
        "title": "UT Austin", 
        "role": "Graduated on December 2024",
        "description": "Master's of Science - Computer Science",
        "startAndEndDates": "",
        "imgSrc": "/utAustin.png",
        "items": [
            {
                "itemName": "Courses",
                "itemInfo": ["Advanced Operating Systems", "Case Studies of Machine Learning", "Advanced Linear Algebra for Computing",
                    "Deep Learning", "Virtualization", "Reinforcement Learning", "Machine Learning", "Android",
                    "Natural Language Processing", "Planning, Search, and Reasoning Under Uncertainty"]
            }
        ]
    },
    {
        "title": "UC San Diego", 
        "role": "Graduated on June 2021",
        "description": "Bachelors of Science - Computer Science",
        "startAndEndDates": "",
        "imgSrc": "/ucSanDiego.png",
        "items": [
            {
                "itemName": "Courses",
                "itemInfo": ["Advanced Data Structures", "Database System Principles", "Computer Organization and Systems Programming", "Database System Applications", "Design and Analysis of Algorithms", 
                                "Intro to Machine Learning", "Mathematics for Algorithms and Systems", "Principles of Computer Operating Systems", "Recommender Systems and Web Mining", "Software Engineering",
                                "Statistical Methods"]
            }
        ]
    }
];

let mentorshipExperience = [
    {
        "title": "Advanced Operating Systems - UT Austin", 
        "role": "Learning Facilitator",
        "description": "Held 2 office hour sessions per week during the semester to assist graduate students in their projects. Graded assignments and designed midterm/final questions.",
        "startAndEndDates": "January 2024 - May 2024",
        "imgSrc": "/utAustin.png",
    },
    {
        "title": "Big Brothers Big Sisters - Detroit", 
        "role": "Tutor",
        "description": "Algebra II Tutor",
        "startAndEndDates": "August 2021 - June 2022",
        "imgSrc": "/bbbsDetroit.png",
    },
    {
        "title": "Triton Software Engineering", 
        "role": "Project Manager",
        "description": "Lead a team of first year undergrads through two projects for non-profit organizations. Taught software engineering best practices such as using github and creating pull requests. Created tasks for them to undertake, reviewed pull requests, and helped developers with implementation when needed.",
        "startAndEndDates": "September 2020 - June 2021",
        "imgSrc": "/tse.png",
    },
    {
        "title": "Navigators @ UCSD", 
        "role": "Co Bible Study Leader",
        "description": "Facilitated a Bible study group consisting of first year undergrads. Created agenda for every session, asked questions in order to spark discussion, closed each session with a prayer.",
        "startAndEndDates": "September 2018 - June 2020",
        "imgSrc": "/navigators.png",
    }
];


export { professionalExperience, academicExperience, mentorshipExperience };