import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 fixed w-full top-0 z-10">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex space-x-4">
                    <NavLink to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</NavLink>
                    <NavLink to="/experience" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Experience</NavLink>
                    <NavLink to="/projects" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</NavLink>
                    <NavLink to="/blog" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blog</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;