import React from 'react';
import '../css/Links.css';
import { Image } from 'semantic-ui-react';

class Links extends React.Component{
  
  state = {
     loading: true,	 
  }
  render(){
    return(
      <div className="links"> 
        <Image.Group size = "mini">
          <Image src='email-vector.png' 
           as='a' href="mailto:jrcabrer@ucsd.edu" target="_top" rel="noopener noreferrer"
           title="Email me" circular/>

          <Image src='github.jpg'
           as='a' target="_blank" href="https://github.com/jayrc7" 
           title ="Check out my repos"circular/>

          <Image src='linkedin.png' 
           as='a' href="https://www.linkedin.com/in/jasonrcabrera" 
           title="Connect with me" target="_blank"circular/>

          <Image src='Menu2-2-512.png' 
           as='a' title="See my resume" href="https://drive.google.com/file/d/1TZDRg3VWEzbiKPF6ptmq-mCXffQOZJFZ/view?usp=sharing" 
           target="_blank" circular/>
        </Image.Group>
      </div> 
    )
  }
}

export default Links 
