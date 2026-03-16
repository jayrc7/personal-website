import React from 'react';
import { professionalExperience, academicExperience, mentorshipExperience } from '../content/experience.js';
import ExperienceItem from '../components/ExperienceItem';

const Home = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const posts = [
        {
            title: 'Building a Movie Recommender System Using Movie Ratings and the Surprise Scikit Library',
            href: process.env.PUBLIC_URL + '/Recommender Systems Research Paper - Jason Cabrera.pdf',
            description: 'My first machine learning research paper! Underwent research on which prediction algorithm to use for a collaborative-based filtering movie recommender system.',
            date: 'Jan 7, 2022',
            category: { name: 'Research Paper', href: '#' },
            imageUrl: process.env.PUBLIC_URL + '/CaseStudiesCourseImg.jpeg',
        },
    ];

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Hero / About */}
            <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2">
                        <img
                            alt="Jason Cabrera"
                            className="rounded-lg shadow-2xl mx-auto w-2/3 md:w-full"
                            src={process.env.PUBLIC_URL + '/Me.png'}
                        />
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            Jason Cabrera
                        </h1>
                        <p className="mt-3 text-lg text-gray-600">
                            Software Engineer at General Motors
                        </p>
                        <p className="mt-1 text-md text-gray-500">
                            Software Engineer with a passion for building impactful software, specializing in full-stack development and DevOps. Exploring the intersection of machine learning and software engineering to create innovative solutions.
                            
                        </p>
                        <div className="mt-6 flex space-x-4">
                            <a href="https://github.com/jayrc7" rel="noreferrer" target="_blank" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">GitHub</span>
                                <img alt="Github" className='h-8 w-8' src={process.env.PUBLIC_URL + '/githubicon.jpg'} />
                            </a>
                            <a href="mailto:jrcabrer@ucsd.edu" rel="noreferrer" target="_blank" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Email</span>
                                <img alt="Email" className='h-8 w-8' src={process.env.PUBLIC_URL + '/emailicon.png'} />
                            </a>
                            <a href="https://www.linkedin.com/in/jasonrcabrera" rel="noreferrer" target="_blank" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">LinkedIn</span>
                                <img alt="LinkedIn" className='h-8 w-8' src={process.env.PUBLIC_URL + '/linkedinicon.png'} />
                            </a>
                        </div>
                        <div className="mt-8">
                            <a
                                href={process.env.PUBLIC_URL + '/Cabrera, Jason Resume.pdf'}
                                rel="noreferrer"
                                target="_blank"
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                View Resume
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            {/* Experience */}
            <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
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
            </section>

            {/* Blog */}
            <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Blog</h1>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        A collection of my thoughts and writings.
                    </p>
                </div>

                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    {posts.map((post) => (
                        <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                            </div>
                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-indigo-600">
                                        <a href={post.category.href} className="hover:underline">
                                            {post.category.name}
                                        </a>
                                    </p>
                                    <a href={post.href} target="__blank" className="block mt-2">
                                        <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                                        <p className="mt-3 text-base text-gray-500">{post.description}</p>
                                    </a>
                                </div>
                                <div className="mt-6 flex items-center">
                                    <div className="text-sm text-gray-500">
                                        <time dateTime={post.date}>{post.date}</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;