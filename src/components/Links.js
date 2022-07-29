import React from 'react';

class Links extends React.Component {
	render() {
		return (
			<>
			<div>
				<a title='Check out my projects' href='https://github.com/jayrc7' target='_blank'><img className='icon' src='githubicon.jpg' /></a>
				<a title='Contact me via email' href='mailto:jrcabrer@ucsd.edu' target='_blank'><img className='icon' src='emailicon.png' /></a>
				<a title='Connect with me' href='https://www.linkedin.com/in/jasonrcabrera' target='_blank'><img className='icon' src='linkedinicon.png' /></a>
			</div>
			<a className="NavLink" href={process.env.PUBLIC_URL + '/Cabrera, Jason Resume1.pdf'} target='_blank'>View Resume >></a>
			</>
		);
	}
}

export default Links;