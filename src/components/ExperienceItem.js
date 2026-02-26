import React from 'react';
import ExperienceAccordion from './ExperienceAccordion';

const ExperienceItem = ({ data }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
                <div className="flex items-center">
                    <img className="h-16 w-16 object-contain" src={process.env.PUBLIC_URL + data.imgSrc} alt={data.title} />
                    <div className="ml-4">
                        <h2 className="text-xl font-bold text-gray-900">{data.title}</h2>
                        <p className="text-sm text-gray-600">{data.role}</p>
                        <p className="text-sm text-gray-500">{data.startAndEndDates}</p>
                    </div>
                </div>
                <div className="mt-4">
                    <p className="text-gray-600">{data.description}</p>
                </div>
            </div>
            {data.items && <ExperienceAccordion items={data.items} />}
        </div>
    );
};

export default ExperienceItem;