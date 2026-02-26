import React from 'react';
import { professionalExperience, academicExperience, mentorshipExperience } from '../content/experience.js';
import ExperienceItem from '../components/ExperienceItem';

const Experience = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="space-y-12">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Professional Experience</h1>
                        <div className="mt-6 space-y-8">
                            {professionalExperience.map((experience, index) => (
                                <ExperienceItem key={index} data={experience} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Academic Experience</h1>
                        <div className="mt-6 space-y-8">
                            {academicExperience.map((experience, index) => (
                                <ExperienceItem key={index} data={experience} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Mentorship Experience</h1>
                        <div className="mt-6 space-y-8">
                            {mentorshipExperience.map((experience, index) => (
                                <ExperienceItem key={index} data={experience} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Experience;