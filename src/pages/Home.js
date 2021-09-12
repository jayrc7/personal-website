import React from 'react';
import AppHeader from '../components/AppHeader';

class Home extends React.Component {
	render() {
		return (
			<div className="App">
				<AppHeader />
				<h1> About </h1>
				<p> Hey! I'm Jason and I'm currently in Warren, Michigan, working at General Motors as a Software Engineer. I graduated with a B.S. in Computer Science
					from UC San Diego in the summer of 2021 and since then I've been gettting adjusted to life in a new city, while enjoying the work I'm doing at GM. Some things that I enjoy doing on my free time are playing and watching soccer, spending time with loved ones, and learning new things whether it's software engineering related or not.
				</p>
				<p> 
				As a developer, I'm passionate about full stack development, whether mobile or web based. I'm also interested in databases and operating systems. Feel free to look through my website to get a better idea of what I've been up to!
				</p>
			</div>
		);
	}
}

export default Home;