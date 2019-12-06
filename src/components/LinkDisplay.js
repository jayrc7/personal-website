import React, { Component } from 'react';
import './AboutDisplay.css';
import { proj, tag } from './projects.js';
import { Button, Transition, Container, Segment, Header, Label} from 
        'semantic-ui-react';

class LinkDisplay extends React.Component{
    render(){
        return(
            <div className="display"> 
					<br />
					<Container inverted text>
						<Header textAlign="left" inverted as='h1'> 
							<h1> Links </h1>
						</Header>
					<a className="link-title" target="_blank" href="https://www.ucsd.edu/catalog/curric/CSE-ug.html"> Major Requirements >>> </a>
					<p className="p-title"> Feel free to look into my major requirements. These courses are preparing me for a career in software engineering.</p>
					<br/>

					<a className="link-title" target="_blank" href="http://tse.ucsd.edu/"> Triton Software Engineering Website >>> </a>
					<p className="p-title"> Website for the organization that has helped me gain experience in software development. Check out our mission statement, our members, and the projects we've worked on! </p>
					<br/>
					<a className="link-title" target="_blank" href="https://skillcrush.com/2017/02/27/front-end-back-end-full-stack/"> Full Stack Intro >>> </a>
					<p className="p-title"> Full Stack development is my current area of interest in computer science. Full Stack Engineers can essentially be involved in every aspect of project development, hence the title Full Stack Engineer. For me personally, I'd like to be involved with both front end and back end development of a project that way I can be invovled in the products development as much as possible. </p>
					<br/>

					<a className = "link-title" target = "_blank" href="https://realpython.com/the-model-view-controller-mvc-paradigm-summarized-with-legos/"> MVC Architecture >>> </a>
					<p className="p-title"> The MVC architecture describes a very popular structure for an application. It stands for Model-View-Controller. You can't just wing an application for a deployable web app, there has to be a structure to it. Here's a very high level intro to what the MVC architecture entails. </p>
					<br/>

					<a className = "link-title" target ="_blank" href="https://steelkiwi.com/blog/collaboration-is-a-key-to-project-success/"> Collaboration in Software Engineering >>> </a>
					<p className="p-title"> A lot of people think that software engineers don't have to communicate in their job because of all the memes of us being socially awkward. That stigma is very wrong, collaboration and communication are very important aspects in software engineering. </p>
					<br/>

					<a className = "link-title" target="_blank" href="https://itnext.io/what-makes-a-great-software-engineer-d6e10761fe55"> Becoming a Great Software Engineer >>>  </a>
					<p className="p-title"> Obviously my goal is to become a great software engineer, this article summarizes a bit on what it means to be a good software engineer.  </p>
					<br/>
					</Container>
            </div> 
        )
    }
}

export default LinkDisplay;
