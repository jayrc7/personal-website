import React from 'react';
import ExperienceContainer from '../components/ExperienceContainer';
import '../App.css';
import { professionalExperience, academicExperience, mentorshipExperience } from '../content/experience.js';
import { Container } from 'semantic-ui-react';

class Experience extends React.Component {
    render() {
        return (
            <Container text style={{marginTop: '60px'}}> 
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
                {
                    mentorshipExperience.map((experience) => {
                        return <ExperienceContainer data={experience} />
                    })
                }

                <br />
            </Container>
        );
    }
}

export default Experience;