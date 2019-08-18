(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(e,t,a){},147:function(e,t,a){e.exports=a(288)},152:function(e,t,a){},153:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){},288:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(40),o=a.n(r),s=(a(152),a(17)),c=a(18),l=a(20),m=a(19),p=a(21),u=(a(153),a(154),a(295)),d=a(139),h=(a(155),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={loading:!0},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"links"},i.a.createElement(d.a.Group,{size:"mini"},i.a.createElement(d.a,{src:"email-vector.png",as:"a",href:"mailto:jrcabrer@ucsd.edu",target:"_blank",title:"Email me",circular:!0}),i.a.createElement(d.a,{src:"github.jpg",as:"a",target:"_blank",href:"https://github.com/jayrc7",title:"Check out my repos",circular:!0}),i.a.createElement(d.a,{src:"linkedin.png",as:"a",href:"https://www.linkedin.com/in/jasonrcabrera",title:"Connect with me",target:"_blank",circular:!0}),i.a.createElement(d.a,{src:"Menu2-2-512.png",as:"a",title:"See my resume",href:"https://drive.google.com/file/d/1-0qRbL2sYGP93amhSu5diKhLcM5oBhvy/view?usp=sharing",target:"_blank",circular:!0})))}}]),t}(i.a.Component)),g=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"header"},i.a.createElement(u.a,{inverted:!0,as:"h1"},i.a.createElement(d.a,{src:"https://cdn.dribbble.com/users/109649/screenshots/954354/lightningbolt.png"}),i.a.createElement(u.a.Content,null,"Jason Cabrera",i.a.createElement(u.a.Subheader,null,"Junior at UC San Diego: B.S. Computer Science"))),i.a.createElement(h,null))}}]),t}(i.a.Component),b=(a(124),{projects:[{name:"Personal Website",link:"https://github.com/jayrc7/personal-website",website:"",organization:"",description:["Created a personal portfolio site in React and Semantic UI, hosted on Github Pages.","Wrote custom components in React for dynamic filtering of projects by tags and to display courses taken."],tags:["Personal","Javascript","React","Semantic UI"]},{name:"Live Well San Diego Market Evaluation Tool",link:"https://liveweller.herokuapp.com/",website:"https://liveweller.herokuapp.com",organization:"Triton Software Engineering",description:["Triton Software Engineering web app project, worked in a team of 4 with weekly deadlines.","Developed market evaluation tool for Live Well San Diego organization using HTML/CSS/Javascript/JQuery/Bootstrap, configured database to push/pull client responses using Firebase.","Engineered and tested algorithm that handles market evaluations.","Implemented dynamic front end using JQuery."],tags:["Organization","Javascript","HTML/CSS","JQuery","Firebase","Bootstrap"]},{name:"TwoNote",link:"https://github.com/jayrc7/Project-TwoNote",website:"https://www.youtube.com/watch?v=GVmKS1qHUqY",organization:"",description:["Developer and Co-creator for Linux note taking app.","Engineered algorithms in order to create, rename, edit, and delete notebooks/notes using knowledge learned from data structures course.","Developed frontend using PyGTK api, from the most notable sidebar menu that facilitates the client's note taking experience to the popups that deal with it's designated purpose e.g. creating a notebook."],tags:["Personal","Python","PyGTK","Linux"]},{name:"Safeguard",link:"https://github.com/jayrc7/safeguard",website:"",organization:"LA Hacks 2019 (Won Top 5 Overall Hack)",description:["Won Top 5 Overall Hack at LAHacks 2019 for a community safety app. Demoed in front of judges and all LaHacks participants.","Developed portions of frontend using React and Semantic UI. Also dealt with backend Firebase integration.","Configured a Twilio server to receive texts and reply with the nearest safehouse while also alerting clients' location to all community members."],tags:["Hackathon","Javascript","React","Twilio","Firebase"]},{name:"Beacon",link:"https://github.com/jayrc7/Beacon",website:"",organization:"SD Hacks 2018",description:["Developed web app that allows users to drop beacons on a map that contains contact info and description of an event.","Implemented frontend using HERE mapping api and React, also engineered the algorithm to add beacons onto the map."],tags:["Hackathon","Javascript","React"]},{name:"2048",link:"",website:"https://www.youtube.com/watch?v=vOTnji-uVtM",organization:"",description:["Implemented classic 2048 game that took all the app markets by storm where the objective is to combine matching tiles until the 2048 tile is reached.","JavaFX API for frontend and Java for backend.","Unable to post github repo due to academic integrity rules :("],tags:["Course","Java","JavaFX","Game"]},{name:"Ball and Paddle",link:"https://github.com/jayrc7/Ball_and_Paddle",website:"https://www.youtube.com/watch?v=n9ZVauq4Cp8",organization:"Personal Project",description:["Implemented classic game where player must eliminate all bricks by reflecting the ball off of a paddle.","JavaFX API for frontend and Java for backend."],tags:["Personal","Java","JavaFX","Game"]},{name:"Home Castle Painting Website",link:"https://github.com/home-castle/home-castle.github.io",website:"https://www.homecastlepainting.com",organization:"",description:["Created static website for my fathers local painting company using HTML/CSS/JS.","Implemented an original design to give the website a sense of professionalism and simplicity while showing the painting company's craft.","Collaborated with a team member to discuss all design strategies."],tags:["Personal","HTML/CSS","Bootstrap"]}]}),f={tags:["Organization","Hackathon","Personal","Course","JQuery","React","Semantic Ui","Bootstrap","Java","Python","HTML/CSS","Javascript","Firebase","Linux","Twilio","JavaFX","PyGTK","Game"]},v=a(292),y=a(89),E=a(294),w=a(296),k=a(65),j=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={currTags:{},activeProjects:[],empty:!0},a.toggleTag=function(e,t){var n=t.value,i=a.state.currTags;i[n]=!i[n],a.setState(function(e){return{active:i[n]}}),a.checkEmpty()?a.setState({empty:!0}):a.setState({empty:!1})},a.checkEmpty=function(){for(var e=0;e<f.tags.length;e++)if(!0===a.state.currTags[f.tags[e]])return!1;return!0},a.checkVisible=function(e){var t=a.state.currTags;if(a.state.empty)return!0;for(var n=0;n<e.length;n++)if(t[e[n]])return!0;return!1};for(var n=0;n<b.projects.length;n++)a.state.activeProjects.push(b.projects[n]);for(var i=0;i<f.tags.length;i++)a.state.currTags[f.tags[i]]=!1;return a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.currTags,n=t.activeProjects;return i.a.createElement("div",{className:"display"},i.a.createElement("br",null),i.a.createElement(v.a,{inverted:"true",text:!0},i.a.createElement(u.a,{textAlign:"left",inverted:!0},i.a.createElement("h1",null," Projects ")),i.a.createElement(y.a,{attached:"top",inverted:!0},i.a.createElement(u.a,{textAlign:"left",content:"Filter by tag:",size:"tiny"}),f.tags.map(function(t){return i.a.createElement(E.a,{toggle:!0,compact:!0,size:"tiny",color:"teal",className:"button",value:t,active:a[t],content:t,key:t,onClick:e.toggleTag})})),i.a.createElement(y.a,{attached:"bottom"},i.a.createElement("div",{className:"as"},n.map(function(t,a){return i.a.createElement(C,{title:t.name,key:a,link:t.link,org:t.organization,tags:t.tags,description:t.description,website:t.website,visible:e.checkVisible(t.tags)})})))))}}]),t}(i.a.Component),C=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(w.a,{visible:this.props.visible,animation:"fade left"},i.a.createElement(y.a,{basic:!0},i.a.createElement(y.a,{attached:"top",clearing:!0},i.a.createElement("div",{className:"sd"},i.a.createElement("h1",{className:"project-title"}," ",this.props.title),""===this.props.org?i.a.createElement("h2",{className:"project-type"}," Personal Project "):i.a.createElement("h2",{className:"project-type"}," ",this.props.org," "),""===this.props.link?"":i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"link",href:this.props.link}," View Github Repo >> "),""===this.props.link||""===this.props.website?"":i.a.createElement("br",null),i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"link",href:this.props.website}," ",""===this.props.website?"":"View Demo >>"," "))),i.a.createElement(y.a,{attached:!0},i.a.createElement("div",{className:"sd"},this.props.tags.map(function(e){return i.a.createElement(k.a,{className:"Tag",color:"teal",key:e,content:e,size:"large"})}))),i.a.createElement(y.a,{attached:"bottom"},i.a.createElement("div",{className:"sd"},this.props.description.map(function(e,t){return i.a.createElement("p",{className:"p-title",key:t}," ",e," ")})))))}}]),t}(n.Component),S=j,O={comp:[{name:"CSE 8A - Introduction to Computer Science: Java I",description:"Fundamental concepts of applied computer science using media computation. Exercises in the theory and practice of computer science. Hands-on experience with designing, editing, compiling, and executing programming constructs and applications."},{name:"CSE 8B - Introduction to Computer Science: Java II",description:"Continuation of the Java language. Continuation of programming techniques. More on inheritance. Exception handling."},{name:"CSE 12 - Basic Data Structures and Object-Oriented Design",description:"Use and implementation of basic data structures including linked lists, stacks, and queues. Use of advanced structures such as binary trees and hash tables. Object-oriented design including interfaces, polymorphism, encapsulation, abstract data types, pre-/post-conditions. Recursion. Uses Java and Java Collections."},{name:"CSE 15L - Software Tools and Techniques Laboratory",description:"Hands-on exploration of software development tools and techniques. Investigation of the scientific process as applied to software development and debugging. Emphasis is on weekly hands-on laboratory experiences, development of laboratory notebooking techniques as applied to software design."},{name:"CSE 20 - Discrete Mathematics",description:"Basic discrete mathematical structures: sets, relations, functions, sequences, equivalence relations, partial orders, and number systems. Methods of reasoning and proofs: prepositional logic, predicate logic, induction, recursion, and pigeonhole principle. Infinite sets and diagonalization. Basic counting techniques; permutation and combinations. Applications will be given to digital logic design, elementary number theory, design of programs, and proofs of program correctness."},{name:"CSE 21 - Mathematics for Algorithms and Systems",description:"Covers the discrete mathematical tools needed to analyze algorithms and systems. Enumerative combinatorics: basic counting principles, inclusion-exclusion, and generating functions. Matrix notation. Applied discrete probability. Finite automata."},{name:"CSE 30 - Computer Organization and Systems Programming",description:"Introduction to organization of modern digital computers\u2014understanding the various components of a computer and their interrelationships. Study of a specific architecture/machine with emphasis on systems programming in C and Assembly languages in a UNIX environment."},{name:"CSE 100 - Advanced Data Structures",description:"High-performance data structures and supporting algorithms. Use and implementation of data structures like (un)balanced trees, graphs, priority queues, and hash tables. Also memory management, pointers, recursion. Theoretical and practical performance analysis, both average case and amortized. Uses C++ and STL."},{name:"CSE 105 - Theory of Computability",description:"An introduction to the mathematical theory of computability. Formal languages. Finite automata and regular expression. Push-down automata and context-free languages. Computable or recursive functions: Turing machines, the halting problem. Undecidability."}],math:[{name:"MATH 18 - Linear Algebra",description:"Matrix algebra, Gaussian elimination, determinants. Linear and affine subspaces, bases of Euclidean spaces. Eigenvalues and eigenvectors, quadratic forms, orthogonal matrices, diagonalization of symmetric matrices."},{name:"MATH 20C - Calculus and Analytic Geometry for Science and Engineering",description:"Vector geometry, vector functions and their derivatives. Partial differentiation. Maxima and minima. Double integration."},{name:"MATH 183 - Statistical Methods",description:"Introduction to probability. Discrete and continuous random variables\u2013binomial, Poisson and Gaussian distributions. Central limit theorem. Data analysis and inferential statistics: graphical techniques, confidence intervals, hypothesis tests, curve fitting."}]},T=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"display"},i.a.createElement("br",null),i.a.createElement(v.a,{inverted:!0,text:!0},i.a.createElement(u.a,{textAlign:"left",inverted:!0,as:"h1"},i.a.createElement("h1",null," Relevant Coursework ")),i.a.createElement(y.a,{className:"left"},i.a.createElement("h1",{className:"teal"}," Computer Science and Engineering "),i.a.createElement("div",{className:"as"},O.comp.map(function(e,t){return i.a.createElement(P,{title:e.name,description:e.description})})),i.a.createElement("h1",{className:"teal"}," Mathematics "),i.a.createElement("div",{className:"as"},O.math.map(function(e,t){return i.a.createElement(P,{title:e.name,description:e.description})})))))}}]),t}(i.a.Component),P=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(y.a,{basic:!0},i.a.createElement(y.a,{attached:"top",clearing:!0},i.a.createElement("div",{className:"sd"},i.a.createElement("h1",{className:"project-title"}," ",this.props.title))),i.a.createElement(y.a,{attached:"bottom"},i.a.createElement("div",{className:"sd"},i.a.createElement("p",{className:"p-title"}," ",this.props.description," "))))}}]),t}(i.a.Component),J=T,N=a(293),x=[{menuItem:"Projects",render:function(){return i.a.createElement(N.a.Pane,null," ",i.a.createElement(S,null)," ")}},{menuItem:"Courses",render:function(){return i.a.createElement(N.a.Pane,null," ",i.a.createElement(J,null)," ")}}],A=function(){return i.a.createElement(N.a,{panes:x})},H=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(g,null),i.a.createElement(A,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[147,1,2]]]);
//# sourceMappingURL=main.0ad36fb0.chunk.js.map