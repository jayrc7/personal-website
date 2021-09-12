import React from 'react';
import '../css/AppHeader.css';
import { Header, Image } from 'semantic-ui-react';
import Links from './Links';

class AppHeader extends React.Component{
  render(){
    return(
      <div className="header"> 
		  <h1 className="title"> Jason Cabrera </h1>
		  <h1 className="subtitle"> Software Engineer at General Motors </h1>
		  <Links/>
		  <br/>
      </div>
    )
  }
}

export default AppHeader;
