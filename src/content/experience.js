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
                "itemInfo": ["Optimized SQL queries within microservices for better performance. Resolved concurrency issues using row level locking mechanisms provided by OracleDB.",
                                "Implemented new frontend features such as form validation and duplicate account prevention.",
                                "Completed frontend and backend for a feature which allows dealers to transfer a customer’s existing vehicle’s plans to their newly purchased vehicle. Created frontend pages to facilitate the transfer. Updated database schemas and created API routes in the backend.",
                                "Worked on adding features to internal web applications such as being able to login using an employee’s Microsoft account as well as adding middleware function to API routes to prevent unauthenticated users from accessing the different tools portals, also added the ability to lock and unlock users from a variety of internal applications that rely on the same user database.",
                                "Created a new microservice to automate some of the manual work needed when updating a vehicle module’s software over the air. Created a WebClient Spring Boot bean to call APIs, created DTOs to store API responses inside Java objects, coded the logic of the microservice according to the documented requirements, integrated Kafka using Spring Integration to receive and send messages to another microservice.",
                                "Created Build and Release pipelines to deploy Docker images of microservices to Kubernetes using Azure DevOps build and release pipelines. Created Release Pipelines to deploy applications on Microsoft Azure.",
                                "Lead a team workshop on how to .NET deploy applications to Kubernetes through Azure DevOps pipelines.",
                                "Developed a new feature for the NCAA march madness in vehicle application that sends vehicle notifications to the driver for upcoming and current games played by their favorite teams. Implemented option for turning on/off notifications."
                            ]
            }, 
            {
                "itemName": "Tech Stack",
                "itemInfo": ["Frontend: Angular, ASP.NET Web Pages", "Backend: Java (Spring Boot), C#", "Databases: SQLServer, OracleDB", "Cloud: Hashicorp Vault, Amazon S3, Microsoft Azure, Pivotal Cloud Foundry, Kubernetes, Docker, Kibana"]
            }
        ]
    }
];

let academicExperience = [
    {
        "title": "UT Austin", 
        "role": "Part Time Student - Expected Graduation in 2025",
        "description": "Master's of Science - Computer Science",
        "startAndEndDates": "Current Major GPA: 4.0",
        "imgSrc": "/utAustin.png",
        "items": [
            {
                "itemName": "Courses",
                "itemInfo": ["Advanced Operating Systems", "Case Studies of Machine Learning", "Advanced Linear Algebra for Computing"]
            }
        ]
    },
    {
        "title": "UC San Diego", 
        "role": "Graduated on June 2021",
        "description": "Bachelors of Science - Computer Science",
        "startAndEndDates": "Major GPA: 3.69",
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