import React from 'react';
import '../css/Links.css';

class Links extends React.Component {
	render() {
		return (
			<div>
				<a title="Check out my projects" href='https://github.com/jayrc7' target='_blank'><img className='icon' src='../../public/githubicon.jpg' /></a>
				<a title="Contact me via email"  href='mailto:jrcabrer@ucsd.edu'><img className='icon' src='../../public/emailicon.png' /></a>
				<a title="Connect with me"><img  href='www.linkedin.com/in/jasonrcabrera' src='../../public/linkedinicon.png' /></a>
			</div>
		);
	}
}

export default Links;