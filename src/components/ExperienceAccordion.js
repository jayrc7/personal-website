import React, { useState } from 'react';

const ExperienceAccordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <div className="border-t border-gray-200">
            {items.map((item, index) => (
                <div key={index}>
                    <h2>
                        <button
                            type="button"
                            className="flex items-center justify-between w-full p-6 font-medium text-left text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200"
                            onClick={() => handleClick(index)}
                        >
                            <span>{item.itemName}</span>
                            <svg
                                className={`w-6 h-6 transform ${activeIndex === index ? 'rotate-180' : ''}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </h2>
                    {activeIndex === index && (
                        <div className="p-6 bg-white">
                            <ul className="list-disc list-inside space-y-2">
                                {item.itemInfo.map((content, i) => (
                                    <li key={i}>{content}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ExperienceAccordion;