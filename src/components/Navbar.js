import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
	return (
          <div className="Navbar">
              <a className="NavLink"><Link to='/'>Home</Link></a>
              <a className="NavLink"><Link to='/projects'>Projects</Link></a>
              <a className="NavLink" href={process.env.PUBLIC_URL + '/Cabrera, Jason Resume.pdf'} target='_blank'>Resume</a>
              {/* <a className="NavLink"> Experience </a>
               <a className="NavLink"> Blog </a>
                */}
          </div>
	);
}
