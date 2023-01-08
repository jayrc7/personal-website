import React from 'react';
import '../App.css';
import ProjectDisplay from "../components/ProjectDisplay";
import { Grid } from "semantic-ui-react";
import Navbar from '../components/Navbar';

class Home extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<div className="App">
				<Navbar />
				<div className="header">
					<Grid className="grid-height" stackable>
						<Grid.Row>
							<Grid.Column mobile={1} tablet={10} computer={10}>
								<h1 className="title"> Jason Cabrera </h1>
								<h1 className="subtitle"> Software Engineer at General Motors </h1>
								<h1 className="subtitle"> M.S. Computer Science at UT Austin</h1>
								<h1 className="subtitle"> B.S. Computer Science at UC San Diego</h1>
								<a title='Check out my projects' href='https://github.com/jayrc7' target='_blank'><img className='icon' src='githubicon.jpg' /></a>
								<a title='Contact me via email' href='mailto:jrcabrer@ucsd.edu' target='_blank'><img className='icon' src='emailicon.png' /></a>
								<a title='Connect with me' href='https://www.linkedin.com/in/jasonrcabrera' target='_blank'><img className='icon' src='linkedinicon.png' /></a>
								<a className="NavLink" href={process.env.PUBLIC_URL + '/Cabrera, Jason Resume.pdf'} target='_blank'>View Resume >></a>
							</Grid.Column>
							<Grid.Column mobile={1} tablet={6} computer={6}>
								<div>
									<img className="me-img" src={process.env.PUBLIC_URL + '/Me.png'} />
								</div>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</div>

				<div className="text-container">
					<h1 className="subtitle"> About Me </h1>
					<p> Hello! I'd like to start off by thanking you for visiting my webpage! My name is Jason and I currently work as a Software Engineer at General Motors while pursuing a master's in Computer Science, with an emphasis in Machine Learning, from UT Austin.
						As a developer, I'm passionate about full stack development, whether mobile or web based. I'm also interested in databases and of course, machine learning.
					</p>
					<p> 
					Some things that I enjoy doing on my free time are playing and watching soccer, spending time with loved ones, and learning new things whether it's software engineering related or not. Feel free to look through my website and resume to get a better idea of what I've been up to!
					</p>
				</div>

				<div className='text-container'>
					<h1 className='subtitle'> Recent Updates </h1>
					<p> 01/07/23 - Added first blog to blog page, added initial projects to project page </p>
				</div>
			</div>
		);
	}
}

export default Home;