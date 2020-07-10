import React from 'react';
import '../css/AppHeader.css';
import { Header, Image } from 'semantic-ui-react';

class AppHeader extends React.Component{
  render(){
    return(
      <div className="header"> 
		  <h1 className="title"> Jason Cabrera </h1>
		  <h1 className="subtitle"> B.S. Computer Science major at UC San Diego, graduating in Summer 2021.</h1>
		  <div className="nav">
		  	 <a className="navlink" href="mailto:jrcabrer@ucsd.edu" title="Email Me" target="_top" rel="noopener noreferrer"> Email </a>
			 <a className="navlink" href="https://github.com/jayrc7" title="Connect with me" target="_blank"> Github </a>
			 <a className="navlink" href="https://www.linkedin.com/in/jasonrcabrera" title="Check out my repos"target="_blank"> LinkedIn </a>
			 <a className="navlink" href="https://drive.google.com/file/d/1YSI4FNqrdemBhaVB86MNhNqWdLwc6_gT/view?usp=sharing" target="_blank" title="See my resume"> Resume </a>
		  </div>

		  <br/>
      </div>
    )
  }
}

export default AppHeader;
