(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{141:function(e,t,a){e.exports=a(266)},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){},266:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(37),o=a.n(i),s=(a(146),a(29)),c=a(30),l=a(32),m=a(31),p=a(33),u=(a(147),a(148),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"title"}," Jason Cabrera "),r.a.createElement("h1",{className:"subtitle"}," B.S. Computer Science major at UC San Diego, graduating in Summer 2021."),r.a.createElement("div",{className:"nav"},r.a.createElement("a",{className:"navlink",href:"mailto:jrcabrer@ucsd.edu",title:"Email Me",target:"_top",rel:"noopener noreferrer"}," Email "),r.a.createElement("a",{className:"navlink",href:"https://github.com/jayrc7",title:"Connect with me",target:"_blank"}," Github "),r.a.createElement("a",{className:"navlink",href:"https://www.linkedin.com/in/jasonrcabrera",title:"Check out my repos",target:"_blank"}," LinkedIn "),r.a.createElement("a",{className:"navlink",href:"https://drive.google.com/file/d/1Rr29IMj49KTawhDX6S3Cr_5RU2UhUaNI/view?usp=sharing",target:"_blank",title:"See my resume"}," Resume ")),r.a.createElement("br",null))}}]),t}(r.a.Component)),h=(a(149),{projects:[{name:"Personal Website",link:"https://github.com/jayrc7/personal-website",website:"",organization:"",description:["Created a personal portfolio site in React and Semantic UI, hosted on Github Pages.","Wrote custom components in React for dynamic filtering of projects by tags and to display courses taken."],tags:["Personal","Javascript","React","Semantic UI"]},{name:"Live Well San Diego Market Evaluation Tool",link:"https://liveweller.herokuapp.com/",website:"https://liveweller.herokuapp.com",organization:"Triton Software Engineering",description:["Developed market evaluation tool for Live Well San Diego organization using HTML/CSS/Javascript/JQuery/Bootstrap, configured database to push/pull client responses using Firebase.","Engineered and tested algorithm that handles market evaluations.","Implemented dynamic front end using JQuery.","Triton Software Engineering project, worked in a team of 4 with weekly deadlines."],tags:["Organization","Javascript","HTML/CSS","JQuery","Firebase","Bootstrap","Demo"]},{name:"TwoNote",link:"https://github.com/jayrc7/Project-TwoNote",website:"https://www.youtube.com/watch?v=GVmKS1qHUqY",organization:"",description:["Developer and Co-creator for Linux note taking app.","Engineered algorithms in order to create, rename, edit, and delete notebooks/notes using knowledge learned from data structures course.","Developed frontend using PyGTK api, from the most notable sidebar menu that facilitates the client's note taking experience to the popups that deal with it's designated purpose e.g. creating a notebook."],tags:["Personal","Python","PyGTK","Linux","Demo"]},{name:"Safeguard",link:"https://github.com/jayrc7/safeguard",website:"",organization:"LA Hacks 2019 (Won Top 5 Overall Hack)",description:["Won Top 5 Overall Hack at LAHacks 2019 for a community safety app. Demoed in front of judges and all LaHacks participants.","Developed portions of frontend using React and Semantic UI. Also dealt with backend Firebase integration.","Configured a Twilio server to receive texts and reply with the nearest safehouse while also alerting clients' location to all community members."],tags:["Hackathon","Personal","Javascript","React","Twilio","Firebase"]},{name:"2048",link:"",website:"https://www.youtube.com/watch?v=vOTnji-uVtM",organization:"Course Project",description:["Implemented classic 2048 game that took all the app markets by storm where the objective is to combine matching tiles until the 2048 tile is reached.","JavaFX API for frontend and Java for backend.","Unable to post github repo due to academic integrity rules :("],tags:["Course","Java","JavaFX","Game","Demo"]},{name:"Ball and Paddle",link:"https://github.com/jayrc7/Ball_and_Paddle",website:"https://www.youtube.com/watch?v=n9ZVauq4Cp8",organization:"Personal Project",description:["Implemented classic game where player must eliminate all bricks by reflecting the ball off of a paddle.","JavaFX API for frontend and Java for backend."],tags:["Personal","Java","JavaFX","Game","Demo"]}]}),d={tags:["Bootstrap","Course","Demo","Firebase","Game","Hackathon","HTML/CSS","Java","JavaFX","Javascript","JQuery","Linux","Organization","Personal","PyGTK","Python","React","Semantic UI","Twilio"]},g=a(271),b=a(273),f=a(274),v=a(272),k=a(275),w=a(62),y=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={currTags:{},activeProjects:[],empty:!0},a.toggleTag=function(e,t){var n=t.value,r=a.state.currTags;r[n]=!r[n],a.setState(function(e){return{active:r[n]}}),a.checkEmpty()?a.setState({empty:!0}):a.setState({empty:!1})},a.checkEmpty=function(){for(var e=0;e<d.tags.length;e++)if(!0===a.state.currTags[d.tags[e]])return!1;return!0},a.checkVisible=function(e){var t=a.state.currTags;if(a.state.empty)return!0;for(var n=0;n<e.length;n++)if(t[e[n]])return!0;return!1};for(var n=0;n<h.projects.length;n++)a.state.activeProjects.push(h.projects[n]);for(var r=0;r<d.tags.length;r++)a.state.currTags[d.tags[r]]=!1;return a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.currTags,n=t.activeProjects;return r.a.createElement("div",{className:"display"},r.a.createElement("br",null),r.a.createElement(g.a,{inverted:"true",text:!0},r.a.createElement(b.a,{textAlign:"left",inverted:!0},r.a.createElement("h1",null," Projects ")),r.a.createElement(f.a,{attached:"top",inverted:!0},r.a.createElement(b.a,{textAlign:"left",content:"Filter by tag:",size:"tiny"}),d.tags.map(function(t){return r.a.createElement(v.a,{toggle:!0,compact:!0,size:"tiny",color:"teal",className:"button",value:t,content:t,key:t,basic:!a[t],onClick:e.toggleTag})})),r.a.createElement(f.a,{attached:"bottom"},r.a.createElement("div",{className:"as"},n.map(function(t,a){return r.a.createElement(E,{title:t.name,key:a,link:t.link,org:t.organization,tags:t.tags,description:t.description,website:t.website,visible:e.checkVisible(t.tags)})})))))}}]),t}(r.a.Component),E=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(k.a,{visible:this.props.visible,animation:"fade left"},r.a.createElement(f.a,{basic:!0},r.a.createElement(f.a,{attached:"top",clearing:!0},r.a.createElement("div",{className:"sd"},r.a.createElement("h1",{className:"project-title"}," ",this.props.title),""===this.props.org?r.a.createElement("h2",{className:"project-type"}," Personal Project "):r.a.createElement("h2",{className:"project-type"}," ",this.props.org," "),""===this.props.link?"":r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"link",href:this.props.link}," View Github Repo >> "),""===this.props.link||""===this.props.website?"":r.a.createElement("br",null),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"link",href:this.props.website}," ",""===this.props.website?"":"View Demo >>"," "))),r.a.createElement(f.a,{attached:!0},r.a.createElement("div",{className:"sd"},this.props.tags.map(function(e){return r.a.createElement(w.a,{className:"Tag",color:"teal",key:e,content:e,size:"large"})}))),r.a.createElement(f.a,{attached:"bottom"},r.a.createElement("div",{className:"sd"},this.props.description.map(function(e,t){return r.a.createElement("p",{className:"p-title",key:t}," ",e," ")})))))}}]),t}(n.Component),j=y,T=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u,null),r.a.createElement(j,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[141,1,2]]]);
//# sourceMappingURL=main.5ea9b47e.chunk.js.map