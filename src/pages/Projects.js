import React from 'react';
import Navbar from '../components/Navbar';
import ProjectDisplay from '../components/ProjectDisplay';

class Projects extends React.Component {
	render() {
		return (
			<>
				<Navbar />
				<ProjectDisplay />
			</>
		);
	}
}

export default Projects;