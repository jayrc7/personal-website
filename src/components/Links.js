import React, { Component } from 'react';
import './Links.css';
import { Image } from 'semantic-ui-react';

class Links extends React.Component{
    render(){
        return(
            <div className="links"> 
                <Image.Group size = "mini">
                    <Image src={"https://ubisafe.org/images/email-vector.png"} as='a' href="mailto:jrcabrer@ucsd.edu" target="_blank" title="Email me" circular/>
                    <Image src={"https://4.bp.blogspot.com/--omgjr2n6eg/WyN-i8kG6PI/AAAAAAAASGc/4rW8yeCYWPogpTdE9Y50ry2vcFy_l4rjQCLcBGAs/s320/github.jpg"} as='a' target="_blank" href="https://github.com/jayrc7" title ="Check out my repos"circular/>
                    <Image src={"https://www.leadingenius.ch/wp-content/uploads/2018/06/linkedin.png"} as='a' href="https://www.linkedin.com/in/jasonrcabrera" title="Connect with me" target="_blank"circular/>
                    <Image src={"https://cdn3.iconfinder.com/data/icons/web-ui-3/128/Menu2-2-512.png"} as='a' title="See my resume" href="https://docs.google.com/document/d/1QS9l3O1V1auV03aBINOeANODck8z9lPR6S0G3Mwr2_M/edit?usp=sharing" target="_blank" circular/>
                </Image.Group>
            </div> 
        )
    }
}

export default Links 
