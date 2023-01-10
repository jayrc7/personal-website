import React from 'react';
import ExperienceContainer from '../components/ExperienceContainer';
import '../App.css';
import { professionalExperience, academicExperience } from '../content/experience.js';

class Experience extends React.Component {
    render() {
        return (
            <div style={{marginTop: '60px'}}> 
                <h1 className='subtitle'> Skills</h1>
                <h1 className='subtitle'> Professional Experience</h1>
                {
                    professionalExperience.map((experience) => {
                        return <ExperienceContainer data={experience} />
                    })
                }
                <h1 className='subtitle'> Academic Experience</h1>
                {
                    academicExperience.map((experience) => {
                        return <ExperienceContainer data={experience} />
                    })
                }
                <h1 className='subtitle'> Mentorship Experience</h1>
            </div>
        );
    }
}

export default Experience;