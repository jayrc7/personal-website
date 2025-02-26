import React from 'react';
import '../App.css';
import { Grid } from "semantic-ui-react";

class Home extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<div className="App">
				<div className="header">
					<Grid className="grid-height" stackable>
						<Grid.Row>
							<Grid.Column mobile={1} tablet={10} computer={10}>
								<h1 className="title"> Jason Cabrera </h1>
								<h1 className="subtitle"> Software Engineer at General Motors </h1>
								<h1 className="subtitle"> M.S. Computer Science at UT Austin</h1>
								<h1 className="subtitle"> B.S. Computer Science at UC San Diego</h1>
								<a title='Check out my projects' href='https://github.com/jayrc7' rel="noreferrer" target='_blank'><img alt="Github" className='icon' src={process.env.PUBLIC_URL + '/githubicon.jpg'} /></a>
								<a title='Contact me via email' href='mailto:jrcabrer@ucsd.edu' rel="noreferrer" target='_blank'><img alt="Email" className='icon' src={process.env.PUBLIC_URL + '/emailicon.png'} /></a>
								<a title='Connect with me' href='https://www.linkedin.com/in/jasonrcabrera' rel="noreferrer" target='_blank'><img alt="LinkedIn" className='icon' src={process.env.PUBLIC_URL + '/linkedinicon.png'} /></a>
								<a className="NavLink" href={process.env.PUBLIC_URL + '/Cabrera, Jason Resume.pdf'} rel="noreferrer" target='_blank'>View Resume >></a>
							</Grid.Column>
							<Grid.Column mobile={1} tablet={6} computer={6}>
								<div>
									<img alt="" className="me-img" src={process.env.PUBLIC_URL + '/Me.png'} />
								</div>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</div>

				<div className="text-container">
					<h1 className="subtitle"> About Me </h1>
					<p> Hello! I'd like to start off by thanking you for visiting my webpage! My name is Jason and I currently work as a Software Engineer at General Motors. I recently acquired my master's in Computer Science, with an emphasis in Machine Learning, from UT Austin.
						As a developer, I'm passionate about building software that can make a positive impact on people's lives. I have experience in full-stack development, devops, machine learning, and software engineering best practices. As my career progresses, I am shifting more towards machine learning, data engineering, and MLOps.
					</p>
					<p> 
					Some things that I enjoy doing on my free time are playing and watching soccer, spending time with loved ones, and learning new things whether it's software engineering related or not. Feel free to look through my website and resume to get a better idea of what I've been up to!
					</p>
				</div>
			</div>
		);
	}
}

export default Home;