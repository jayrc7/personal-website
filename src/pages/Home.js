import React from 'react';
import '../App.css';
import ProjectDisplay from "../components/ProjectDisplay";

class Home extends React.Component {
	render() {
		return (
			<div className="App">
				<div className="header">
					<h1 className="title"> Jason Cabrera </h1>
					<h1 className="subtitle"> Software Engineer at General Motors </h1>
					<div>
						<a title='Check out my projects' href='https://github.com/jayrc7' target='_blank'><img className='icon' src='githubicon.jpg' /></a>
						<a title='Contact me via email' href='mailto:jrcabrer@ucsd.edu' target='_blank'><img className='icon' src='emailicon.png' /></a>
						<a title='Connect with me' href='https://www.linkedin.com/in/jasonrcabrera' target='_blank'><img className='icon' src='linkedinicon.png' /></a>
					</div>
					<br/>
					<a className="NavLink" href={process.env.PUBLIC_URL + '/Cabrera, Jason Resume.pdf'} target='_blank'>View Resume >></a>
				</div>

				<h1 className="about-title"> About Me </h1>
				<p> Hey, thank you for visiting! My name is Jason and I currently work at GM while pursuing a master's in Computer Science from UT Austin.
					As a developer, I'm passionate about full stack development, whether mobile or web based. I'm also interested in databases and operating systems.
				</p>
				<p> 
			    Some things that I enjoy doing on my free time are playing and watching soccer, spending time with loved ones, and learning new things whether it's software engineering related or not. Feel free to look through my projects/resume to get a better idea of what I've been up to!
				</p>

				<ProjectDisplay />
			</div>
		);
	}
}

export default Home;