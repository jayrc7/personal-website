import React from 'react';

const Blog = () => {
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
            <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
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
            </main>
        </div>
    );
};

export default Blog;