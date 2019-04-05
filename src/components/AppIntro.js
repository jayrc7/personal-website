import React, { Component } from 'react';
import {Image, Container} from 'semantic-ui-react';
import './AppIntro.css';

class AppIntro extends React.Component{
    render(){
        return(
            <div className = "intro">
                <Image floated="left" src="https://lh3.googleusercontent.com/D09HpfleYkn0gCE84FEHE2H7qmLwKnme0WLy0PVtq7QSMxa3pIwcvS_7dkefWBmeAhRoXk4u3OvH4z2zsBllbCV767vWFq9mJ9aCUFR4WWNML67q_I3A2VwANlAa_mFd0G_fHzhDRS78Sh4lhhKHF3ouQ8NAA9OxmxMhSqLBAT56MHCWJ59MVQxeaUzv7OWgGuqjpMa0EvHCD9tyhqaONDt9go4p4dz0JZeo4dptANyRdsGAEAv9XWcLJh2_Jq5v6rCE15STYgUuwDOpm42D1eFdEIm0yA6xzchwQ_UIZpIg8HD3LVAgD_DZR8KE7YS6HmQvI8PqWkLmymzl8HdRktuvRiCMicpmEnTU4nG8RMGHoLYs04Ni61VlczdIXYIeX7z-rbDPVSUzsLqMU3GXQlEak5f3SlIFWG6fSFXmts1SJBmGgNofEogiYWmc64TWapsdL3xlfbi0B3AVchEOSbCoXIdeglvUfYAggH3c5q2S6bT16is4d6_2wDvoBhMWKNpZPZxwArUZaU_sKTbPLjCFy-30vmIg1v5UXfQp2vJOHRf06jMmTBe_Mrvr85PCjzzx6hK9A49eYxRav0dqkgQabwVR-MG1bXZcVC5DE95SN6CgH1AVusN6vug1DZhutT36PjICF0dVxB0GjlgfTCOzFrYqI_3-=w731-h953-no" size="small" rounded />
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
