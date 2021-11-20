import React from 'react';
import '../App.css';

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
				</div>

				<h1 className="about-title"> About </h1>
				<p> Hey! I'm Jason and I'm currently in Warren, Michigan, working at General Motors as a Software Engineer. I graduated with a B.S. in Computer Science
					from UC San Diego in the summer of 2021 and since then I've been getting adjusted to life in a new city, while enjoying the work I'm doing at GM. Some things that I enjoy doing on my free time are playing and watching soccer, spending time with loved ones, and learning new things whether it's software engineering related or not.
				</p>
				<p> 
				As a developer, I'm passionate about full stack development, whether mobile or web based. I'm also interested in databases and operating systems. Feel free to look through my website to get a better idea of what I've been up to!
				</p>
			</div>
		);
	}
}

export default Home;