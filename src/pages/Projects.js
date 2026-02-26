import React, { useState, useEffect } from 'react';
import { proj, tag } from '../content/projects.js';

const Projects = () => {
    const [activeTags, setActiveTags] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        setFilteredProjects(proj.projects);
    }, []);

    useEffect(() => {
        if (activeTags.length === 0) {
            setFilteredProjects(proj.projects);
        } else {
            const filtered = proj.projects.filter(project =>
                activeTags.every(tag => project.tags.includes(tag))
            );
            setFilteredProjects(filtered);
        }
    }, [activeTags]);

    const toggleTag = (clickedTag) => {
        setActiveTags(prevTags =>
            prevTags.includes(clickedTag)
                ? prevTags.filter(t => t !== clickedTag)
                : [...prevTags, clickedTag]
        );
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Projects</h1>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        Here are some of the projects I've worked on.
                    </p>
                </div>

                <div className="mt-10">
                    <div className="flex flex-wrap justify-center gap-2">
                        {tag.tags.map(t => (
                            <button
                                key={t}
                                onClick={() => toggleTag(t)}
                                className={`px-4 py-2 rounded-full text-sm font-medium ${
                                    activeTags.includes(t)
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-white text-gray-700 hover:bg-gray-50'
                                }`}
                            >
                                {t}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project, i) => (
                        <ProjectItem key={i} project={project} />
                    ))}
                </div>
            </main>
        </div>
    );
};

const ProjectItem = ({ project }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
            <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{project.organization || 'Personal Project'}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map(t => (
                        <span key={t} className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">
                            {t}
                        </span>
                    ))}
                </div>
                <div className="mt-4 text-gray-600 text-sm space-y-2 flex-grow">
                    {project.description.map((desc, i) => (
                        <p key={i}>{desc}</p>
                    ))}
                </div>
            </div>
            <div className="p-6 bg-gray-50 flex justify-end space-x-4">
                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-900 font-medium"
                    >
                        View Github Repo &rarr;
                    </a>
                )}
                {project.website && (
                    <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-900 font-medium"
                    >
                        View Demo &rarr;
                    </a>
                )}
            </div>
        </div>
    );
};

export default Projects;