import React, { Component } from 'react';
import {Image, Container} from 'semantic-ui-react';
import './AppIntro.css';

class AppIntro extends React.Component{
    render(){
        return(
            <div className = "intro">
                <Image floated="left" src="https://2.bp.blogspot.com/-5YdS8nQp04M/XM5iwi4f-nI/AAAAAAAAW8Q/s9ip8a0_gR4cB4KCZZaQ4ZrNhjTqW4i9QCLcBGAs/s320/self.jpg" size="small" rounded />
                <h2 className="about-me"> About Me </h2>
                <p className = "parag"> Hello I'm Jason and I'm a software developer, sports enthusiast, and nature lover currently living in Baldwin Park, California. I spend my free time playing soccer, watching tv shows, and looking for more ways to gain programming experience. I'm always up for new challenges and I find a lot of joy in full stack development.</p>

                <p className = "parag"> Here at UCSD I've been able to build on my passion for software development by taking rigorous courses, doing side projects, and by being apart of orgs such as Triton Software Engineering and Triton Robosub. Feel free to contact me if you have any suggestions for side projects or if you'd like to hear more about my projects/involvement with my orgs. If you'd also like to talk about the premier league and why Manchester City are too good then I'm your guy. </p>

                <br />
                <br />
            </div>
        )
    }
}


export default AppIntro
