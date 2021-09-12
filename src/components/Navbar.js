import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
	return (
          <div className="Navbar">
            <a className="NavLink"><Link to='/'>Home</Link></a>
            <a className="NavLink"><Link to='/projects'>Projects</Link></a>
				{/*
            <a className="NavLink"> Experience </a>
            <a className="NavLink"> Blog </a>
            <a className="NavLink"> Resume </a>
				*/}	
          </div>
	);
}
