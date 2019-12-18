(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(e,t,a){e.exports=a(289)},152:function(e,t,a){},153:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){},272:function(e,t,a){},289:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(40),o=a.n(i),s=(a(152),a(16)),c=a(17),l=a(19),m=a(18),u=a(20),d=(a(153),a(154),a(296)),p=a(139),h=(a(155),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"links"},r.a.createElement(p.a.Group,{size:"mini"},r.a.createElement(p.a,{src:"email-vector.png",as:"a",href:"mailto:jrcabrer@ucsd.edu",target:"_top",rel:"noopener noreferrer",title:"Email me",circular:!0}),r.a.createElement(p.a,{src:"github.jpg",as:"a",target:"_blank",href:"https://github.com/jayrc7",title:"Check out my repos",circular:!0}),r.a.createElement(p.a,{src:"linkedin.png",as:"a",href:"https://www.linkedin.com/in/jasonrcabrera",title:"Connect with me",target:"_blank",circular:!0}),r.a.createElement(p.a,{src:"Menu2-2-512.png",as:"a",title:"See my resume",href:"https://drive.google.com/file/d/1zhsVSwVqItb_chQFfnfb8jMuzI21Xx1d/view?usp=sharing",target:"_blank",circular:!0})))}}]),t}(r.a.Component)),g=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement(d.a,{inverted:!0,as:"h1"},r.a.createElement(p.a,{src:"https://cdn.dribbble.com/users/109649/screenshots/954354/lightningbolt.png"}),r.a.createElement(d.a.Content,null,"Jason Cabrera",r.a.createElement(d.a.Subheader,null,"Junior at UC San Diego: B.S. Computer Science"))),r.a.createElement(h,null))}}]),t}(r.a.Component),f=(a(82),{projects:[{name:"Personal Website",link:"https://github.com/jayrc7/personal-website",website:"",organization:"",description:["Created a personal portfolio site in React and Semantic UI, hosted on Github Pages.","Wrote custom components in React for dynamic filtering of projects by tags and to display courses taken."],tags:["Personal","Javascript","React","Semantic UI"]},{name:"Live Well San Diego Market Evaluation Tool",link:"https://liveweller.herokuapp.com/",website:"https://liveweller.herokuapp.com",organization:"Triton Software Engineering",description:["Developed market evaluation tool for Live Well San Diego organization using HTML/CSS/Javascript/JQuery/Bootstrap, configured database to push/pull client responses using Firebase.","Engineered and tested algorithm that handles market evaluations.","Implemented dynamic front end using JQuery.","Triton Software Engineering project, worked in a team of 4 with weekly deadlines."],tags:["Organization","Javascript","HTML/CSS","JQuery","Firebase","Bootstrap","Demo"]},{name:"TwoNote",link:"https://github.com/jayrc7/Project-TwoNote",website:"https://www.youtube.com/watch?v=GVmKS1qHUqY",organization:"",description:["Developer and Co-creator for Linux note taking app.","Engineered algorithms in order to create, rename, edit, and delete notebooks/notes using knowledge learned from data structures course.","Developed frontend using PyGTK api, from the most notable sidebar menu that facilitates the client's note taking experience to the popups that deal with it's designated purpose e.g. creating a notebook."],tags:["Personal","Python","PyGTK","Linux","Demo"]},{name:"Safeguard",link:"https://github.com/jayrc7/safeguard",website:"",organization:"LA Hacks 2019 (Won Top 5 Overall Hack)",description:["Won Top 5 Overall Hack at LAHacks 2019 for a community safety app. Demoed in front of judges and all LaHacks participants.","Developed portions of frontend using React and Semantic UI. Also dealt with backend Firebase integration.","Configured a Twilio server to receive texts and reply with the nearest safehouse while also alerting clients' location to all community members."],tags:["Hackathon","Personal","Javascript","React","Twilio","Firebase"]},{name:"2048",link:"",website:"https://www.youtube.com/watch?v=vOTnji-uVtM",organization:"Course Project",description:["Implemented classic 2048 game that took all the app markets by storm where the objective is to combine matching tiles until the 2048 tile is reached.","JavaFX API for frontend and Java for backend.","Unable to post github repo due to academic integrity rules :("],tags:["Course","Java","JavaFX","Game","Demo"]},{name:"Ball and Paddle",link:"https://github.com/jayrc7/Ball_and_Paddle",website:"https://www.youtube.com/watch?v=n9ZVauq4Cp8",organization:"Personal Project",description:["Implemented classic game where player must eliminate all bricks by reflecting the ball off of a paddle.","JavaFX API for frontend and Java for backend."],tags:["Personal","Java","JavaFX","Game","Demo"]}]}),b={tags:["Bootstrap","Course","Demo","Firebase","Game","Hackathon","HTML/CSS","Java","JavaFX","Javascript","JQuery","Linux","Organization","Personal","PyGTK","Python","React","Semantic UI","Twilio"]},v=a(293),E=a(90),y=a(295),w=a(297),k=a(65),j=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={currTags:{},activeProjects:[],empty:!0},a.toggleTag=function(e,t){var n=t.value,r=a.state.currTags;r[n]=!r[n],a.setState(function(e){return{active:r[n]}}),a.checkEmpty()?a.setState({empty:!0}):a.setState({empty:!1})},a.checkEmpty=function(){for(var e=0;e<b.tags.length;e++)if(!0===a.state.currTags[b.tags[e]])return!1;return!0},a.checkVisible=function(e){var t=a.state.currTags;if(a.state.empty)return!0;for(var n=0;n<e.length;n++)if(t[e[n]])return!0;return!1};for(var n=0;n<f.projects.length;n++)a.state.activeProjects.push(f.projects[n]);for(var r=0;r<b.tags.length;r++)a.state.currTags[b.tags[r]]=!1;return a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.currTags,n=t.activeProjects;return r.a.createElement("div",{className:"display"},r.a.createElement("br",null),r.a.createElement(v.a,{inverted:"true",text:!0},r.a.createElement(d.a,{textAlign:"left",inverted:!0},r.a.createElement("h1",null," Projects ")),r.a.createElement(E.a,{attached:"top",inverted:!0},r.a.createElement(d.a,{textAlign:"left",content:"Filter by tag:",size:"tiny"}),b.tags.map(function(t){return r.a.createElement(y.a,{toggle:!0,compact:!0,size:"tiny",color:"teal",className:"button",value:t,content:t,key:t,basic:!a[t],onClick:e.toggleTag})})),r.a.createElement(E.a,{attached:"bottom"},r.a.createElement("div",{className:"as"},n.map(function(t,a){return r.a.createElement(S,{title:t.name,key:a,link:t.link,org:t.organization,tags:t.tags,description:t.description,website:t.website,visible:e.checkVisible(t.tags)})})))))}}]),t}(r.a.Component),S=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(w.a,{visible:this.props.visible,animation:"fade left"},r.a.createElement(E.a,{basic:!0},r.a.createElement(E.a,{attached:"top",clearing:!0},r.a.createElement("div",{className:"sd"},r.a.createElement("h1",{className:"project-title"}," ",this.props.title),""===this.props.org?r.a.createElement("h2",{className:"project-type"}," Personal Project "):r.a.createElement("h2",{className:"project-type"}," ",this.props.org," "),""===this.props.link?"":r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"link",href:this.props.link}," View Github Repo >> "),""===this.props.link||""===this.props.website?"":r.a.createElement("br",null),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"link",href:this.props.website}," ",""===this.props.website?"":"View Demo >>"," "))),r.a.createElement(E.a,{attached:!0},r.a.createElement("div",{className:"sd"},this.props.tags.map(function(e){return r.a.createElement(k.a,{className:"Tag",color:"teal",key:e,content:e,size:"large"})}))),r.a.createElement(E.a,{attached:"bottom"},r.a.createElement("div",{className:"sd"},this.props.description.map(function(e,t){return r.a.createElement("p",{className:"p-title",key:t}," ",e," ")})))))}}]),t}(n.Component),O=j,C={comp:[{name:"CSE 140 - Components and Design Techniques for Digital Systems",description:"Design of Boolean logic and finite state machines; two-level, multilevel combinational logic design, combinational modules and modular networks, Mealy and Moore machines, analysis and synthesis of canonical forms, sequential modules."},{name:"CSE 140L - Digital Systems Laboratory",description:"Implementation with computer-aided design tools for combinational logic minimization and state machine synthesis. Hardware construction of a small digital system."},{name:"CSE 132A - Database System Principles",description:"Basic concepts of databases, including data modeling, relational databases, query languages, optimization, dependencies, schema design, and concurrency control. Exposure to one or several commercial database systems. Advanced topics such as deductive and object-orieted databases."},{name:"CSE 105 - Theory of Computability",description:"An introduction to the mathematical theory of computability. Formal languages. Finite automata and regular expression. Push-down automata and context-free languages. Computable or recursive functions: Turing machines, the halting problem. Undecidability."},{name:"CSE 100 - Advanced Data Structures",description:"High-performance data structures and supporting algorithms. Use and implementation of data structures like (un)balanced trees, graphs, priority queues, and hash tables. Also memory management, pointers, recursion. Theoretical and practical performance analysis, both average case and amortized. Uses C++ and STL."},{name:"CSE 30 - Computer Organization and Systems Programming",description:"Introduction to organization of modern digital computers\u2014understanding the various components of a computer and their interrelationships. Study of a specific architecture/machine with emphasis on systems programming in C and Assembly languages in a UNIX environment."},{name:"CSE 21 - Mathematics for Algorithms and Systems",description:"Covers the discrete mathematical tools needed to analyze algorithms and systems. Enumerative combinatorics: basic counting principles, inclusion-exclusion, and generating functions. Matrix notation. Applied discrete probability. Finite automata."},{name:"CSE 15L - Software Tools and Techniques Laboratory",description:"Hands-on exploration of software development tools and techniques. Investigation of the scientific process as applied to software development and debugging. Emphasis is on weekly hands-on laboratory experiences, development of laboratory notebooking techniques as applied to software design."},{name:"CSE 12 - Basic Data Structures and Object-Oriented Design",description:"Use and implementation of basic data structures including linked lists, stacks, and queues. Use of advanced structures such as binary trees and hash tables. Object-oriented design including interfaces, polymorphism, encapsulation, abstract data types, pre-/post-conditions. Recursion. Uses Java and Java Collections."}]},N=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"display"},r.a.createElement("br",null),r.a.createElement(v.a,{inverted:!0,text:!0},r.a.createElement(d.a,{textAlign:"left",inverted:!0,as:"h1"},r.a.createElement("h1",null," Relevant Coursework ")),r.a.createElement(E.a,{className:"left"},r.a.createElement("h1",{className:"teal"}," Computer Science and Engineering "),r.a.createElement("div",{className:"as"},C.comp.map(function(e,t){return r.a.createElement(T,{title:e.name,description:e.description})})))))}}]),t}(r.a.Component),T=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,{basic:!0},r.a.createElement(E.a,{attached:"top",clearing:!0},r.a.createElement("div",{className:"sd"},r.a.createElement("h1",{className:"project-title"}," ",this.props.title))),r.a.createElement(E.a,{attached:"bottom"},r.a.createElement("div",{className:"sd"},r.a.createElement("p",{className:"p-title"}," ",this.props.description," "))))}}]),t}(r.a.Component),P=N,x=(a(272),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"display"},r.a.createElement("br",null),r.a.createElement(v.a,{inverted:!0,text:!0},r.a.createElement(d.a,{textAlign:"left",inverted:!0,as:"h1"},r.a.createElement("h1",null," Welcome to my Portfolio! ")),r.a.createElement("p",{className:"about-p"}," I'm a third year currently working towards a Computer Science Major and Mathematics Minor at the University of California, San Diego. I am a Christian as well as a nature, soccer, and movie enthusiast that likes to spend time with friends and family. I'm also a part of on campus organizations such as Triton Software Engineering where I get to be involved in the development of software products for non profit organizations and Triton Navigators, which is a collegiate Christian fellowship that allows me to express my faith with others. While being involved in university coursework and organizations, I have dived into personal projects and have participated in hackathons to gain more experience in software development. Feel free to look around my website. If you have any questions, concerns, feedback please let me know! ")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(v.a,{inverted:!0,text:!0},r.a.createElement(d.a,{textAlign:"left",inverted:!0,as:"h1"}," ",r.a.createElement("h1",null," Languages/Tools: ")," "),r.a.createElement(E.a,{basic:!0},r.a.createElement("h1",{className:"skill"}," ",r.a.createElement("h1",{className:"Teal"},"Skilled: ")," C++ | C | Java | Python | Javascript | Git | HTML/CSS | Unix/Bash  "),r.a.createElement("h1",{className:"skill"}," ",r.a.createElement("h1",{className:"Teal"}," Familiar: ")," ReactJS | NodeJS | Express  "),r.a.createElement("h1",{className:"skill"}," ",r.a.createElement("h1",{className:"Teal"},"Learning:")," NodeJS "))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(v.a,{inverted:!0,text:!0},r.a.createElement(d.a,{textAlign:"left",inverted:!0,as:"h1"},r.a.createElement("h1",null," Experience ")),r.a.createElement(I,{title:"Bentley Systems - Incoming Software Engineer Intern",loc:"San Diego, California",date:"Summer 2020",description:"I'm excited to be at Bentley Systems this upcoming summer as a Software Engineer Intern! Looking forward to developing software for a company that promotes the safety of infrastructure around the world. More details to come."}),r.a.createElement(I,{title:"Triton Software Engineering - Software Developer",loc:"UC San Diego",date:"Fall 2018 - Spring 2019",description:"Worked in a team of four to develop a market evaluation tool for Live Well San Diego, a local health organization. The purpose of our tool is to give customers a platform where they can provide feedback for markets and to help market owners reflect and act on said feedback in order to deliver the best experience to their customers. Implementation details listed in project section."})))}}]),t}(r.a.Component)),I=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,{basic:!0},r.a.createElement(E.a,{attached:"top",clearing:!0},r.a.createElement("div",{className:"sd"},r.a.createElement("h1",{className:"experience-title"}," ",this.props.title," "))),r.a.createElement(E.a,{attached:"bottom"},r.a.createElement("div",{className:"sd"},r.a.createElement("p",{className:"p-title"}," Date: ",this.props.date," "),r.a.createElement("p",{className:"p-title"}," Location: ",this.props.loc," "),r.a.createElement("p",{className:"p-title"}," ",this.props.description," "))))}}]),t}(r.a.Component),J=x,D=a(294),z=[{menuItem:"About",render:function(){return r.a.createElement(D.a.Pane,{attached:!0}," ",r.a.createElement(J,null)," ")}},{menuItem:"Projects",render:function(){return r.a.createElement(D.a.Pane,{attached:!0}," ",r.a.createElement(O,null)," ")}},{menuItem:"Courses",render:function(){return r.a.createElement(D.a.Pane,{attached:!0}," ",r.a.createElement(P,null)," ")}}],A=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={color:"grey"},a.handleColorChange=function(e){return a.setState({color:e.target.value})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.color;return r.a.createElement("div",null,r.a.createElement(D.a,{menu:{color:e,inverted:!0,attached:!0,tabular:!0},panes:z}))}}]),t}(r.a.Component),L=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null),r.a.createElement(A,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},82:function(e,t,a){}},[[147,1,2]]]);
//# sourceMappingURL=main.2f0f8f5c.chunk.js.map