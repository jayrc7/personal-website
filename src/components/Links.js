import React from 'react';
import '../css/Links.css';

class Links extends React.Component {
	render() {
		return (
			<div>
				<a title='Check out my projects' href='https://github.com/jayrc7' target='_blank'><img className='icon' src='githubicon.jpg' /></a>
				<a title='Contact me via email'  href='mailto:jrcabrer@ucsd.edu'><img className='icon' src='emailicon.png' /></a>
				<a title='Connect with me'       href='https://www.linkedin.com/in/jasonrcabrera' target='_blank'><img  className='icon' target='_blank' src='linkedinicon.png' /></a>
			</div>
		);
	}
}

export default Links;