import React, { Component } from 'react';
import './AboutDisplay.css';
import './ProjectDisplay.css';
import { proj, tag } from './projects.js';
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
			<p className = "about-p"> I'm a third year currently working towards a Computer Science Major and Mathematics Minor at the University of California, San Diego. I am a Christian as well as a nature, soccer, and movie enthusiast that likes to spend time with friends and family. I'm also a part of on campus organizations such as Triton Software Engineering where I get to be involved in the development of software products for non profit organizations and Triton Navigators, which is a collegiate Christian fellowship that allows me to express my faith with others. While being involved in university coursework and organizations, I have dived into personal projects and have participated in hackathons to gain more experience in software development. Feel free to look around my website. If you have any questions, concerns, feedback please let me know! </p>
			</Container>
			<br />
			<br />
			<Container inverted text>
				<Header textAlign="left"inverted as='h1'>
					<h1> Experience </h1>
				</Header>
				
				<ExperienceItem title = "Bentley Systems - Incoming Software Engineering Intern" 
					loc = "San Diego, California" date = "Summer 2020" description = "I'm excited to be at Bentley Systems this summer as a Software Engineering Intern! Looking forward to developing software for a company that promotes the safety of infrastructure around the world. More details to come." />
				
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
					<p className = "p-titl"> Date: {this.props.date} </p>
					<p className = "p-titl"> Location: {this.props.loc} </p>
					<p className = "p-titl"> {this.props.description} </p>
					</div>
				</Segment>
			</Segment>
		);
	}
}
export default AboutDisplay
