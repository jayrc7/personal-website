import React from 'react';

const Home = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen">
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
                            Determined to become a specialist in Machine Learning, MLOps, DevOps, and Data Engineering
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

                <div className="mt-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">About Me</h2>
                    <div className="mt-6 space-y-6 text-gray-600">
                        <p>
                            Hello! I'd like to start off by thanking you for visiting my webpage! My name is Jason and I currently work as a Software Engineer at General Motors. At GM, I work on an internal application doing full stack work and I also lead the devops side of my team.
                        </p>
                        <p>
                            I recently acquired my master's in Computer Science, with an emphasis in Machine Learning, from UT Austin. As a developer, I'm passionate about building software that can make a positive impact on people's lives. Not only do I love building software, but I go above and beyond to make sure that the software being delivered is of the highest quality my team and myself can produce. I have experience in full-stack development, devops, machine learning, and software engineering best practices.
                        </p>
                        <p>
                            As my career matures, I am shifting more towards DevOps, machine learning, data engineering, and MLOps. Recently, I have been spending a lot of time learning more about neural networks and how they work under the hood. I also spend time learning probability, statistics, and SQL while making sure that my knowledge from my master's program is still fresh in my mind.
                        </p>
                        <p>
                            Some things that I enjoy doing on my free time are playing and watching soccer, spending time with loved ones, and learning new things whether it's software engineering related or not. Feel free to look through my website and resume to get a better idea of what I've been up to!
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;