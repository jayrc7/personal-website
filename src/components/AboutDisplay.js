import React, { Component } from 'react';
import '../css/AboutDisplay.css';
import '../css/ProjectDisplay.css';
import { proj, tag } from '../content/projects.js';
import { Container, Header, Segment } from 'semantic-ui-react';

class AboutDisplay extends React.Component {
	render() {
		return (
			<div className="display">
			<br />
			<Container inverted text>
				<Header textAlign="left"inverted as='h1'>
					<h1> Welcome to my Portfolio! </h1>
				</Header>
			<p className = "about-p"> I'm a third year currently working towards a Computer Science degree at the University of California, San Diego. Thanks for stopping by and feel free to look around my website. If you have any questions, concerns, feedback please let me know! </p>
			</Container>
			<br />
			<br />

			<Container inverted text>
				<Header textAlign = "left" inverted as='h1'> <h1> Languages/Tools: </h1> </Header>
				<Segment basic>
					<h1 className="skill"> <h1 className="Teal">Skilled: </h1> C++ | C | Java | Python | Javascript | Git | HTML/CSS | Unix/Bash  </h1>
					<h1 className="skill"> <h1 className="Teal"> Familiar: </h1> ReactJS | NodeJS | Express | SQL  </h1>
					<h1 className="skill"> <h1 className="Teal">Learning:</h1> NodeJS | SQL</h1>
				</Segment> 
			</Container>
			<br />
			<br />
			<Container inverted text>
				<Header textAlign="left"inverted as='h1'>
					<h1> Experience </h1>
				</Header>
				
				<ExperienceItem title="Triton Software Engineering - Software Developer"
					loc="UC San Diego" date="Fall 2018 - Spring 2019" description="Worked in a team of four to develop a market evaluation tool for Live Well San Diego, a local health organization. The purpose of our tool is to give customers a platform where they can provide feedback for markets and to help market owners reflect and act on said feedback in order to deliver the best experience to their customers. Implementation details listed in project section." />
			</Container>
			</div>
		);
	}
}

class ExperienceItem extends React.Component {
	render() {
		return (
			<Segment basic>
				<Segment attached = "top" clearing>
					<div className = "sd">
						<h1 className = "experience-title"> {this.props.title} </h1>
					</div>
				</Segment>

				<Segment attached="bottom">
					<div className = "sd">
					<p className = "p-title"> Date: {this.props.date} </p>
					<p className = "p-title"> Location: {this.props.loc} </p>
					<p className = "p-title"> {this.props.description} </p>
					</div>
				</Segment>
			</Segment>
		);
	}
}
export default AboutDisplay
