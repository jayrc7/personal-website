import React, { Component } from 'react';
import { proj, tag } from './projects.js';
import './CoverLetter.css';
import { Button, Transition, Container, Segment, Header, Label} from 
        'semantic-ui-react';


class CoverLetter extends React.Component{
    render(){
        return(
            <div className="display"> 	
					<br/>
					<Container inverted text>
						<Header textAlign="left" inverted as='h1'>
							<h1> Cover Letter </h1>
						</Header>

						<p className = "paragraph"> Dear Google Recruiter, </p>

						<p className ="paragraph"> I am writing to express my interest in the Software Engineering role for Google. I am more than a good fit for the job because I can successfully work in a team environment, I’m equipped with problem solving skills, and I have solid experience in the software engineering field. Furthermore, because I excel in my programming and theory classes that my university offers, I have proof that I work well under strict deadlines and that I can keep up with rigorous work. I know that working for Google, I can realize my goal of creating software that’ll make the lives of others more convenient and enjoyable. </p>

						<p className = "paragraph"> 
My most notable experience so far from being a student at the University of California, San Diego is being a project manager for a team in the Triton Software Engineering organization. Overall, my assignment is to lead a team of 5 developers in creating a website for a local dance organization on campus. As project manager, I’ve been ensuring that the website we create is of high quality and that it’s completed in a timely manner. In fulfilling my main goal there’s been side responsibilites that follow. For example, I’ve had to explain standard software development practices like making HTML objects into reusable components and how to make pull requests on github in order to leave master unharmed. Furthermore, I assign tasks for my developers based on their strengths while also making decisions on how we go about implementing a website feature such as the navbar. I am also in constant communication with our client, showing her our progress and making sure that she is satisfied with the website’s appearance. We are making great progress right now, the website is expected to be finished by the end of January and we are currently wrapping up the desktop version of it. Being a project manager has developed leadership qualities in me that I know I can show as a Software Engineer at Google. The experience has helped me become a software engineer that’s team oriented and that can communicate ideas effectively. Lastly, this experience shows that I know what it takes to implement a project, both in terms of technical skills and decision making skills.
						</p>

						<p className="paragraph">
					
I can demonstrate that I am a great candidate for the software engineering role at Google by elaborating more on my university experience. I currently have a 3.5 major GPA and this is due to the fact that I really enjoy the computer science depth. I’ve taken courses that are necessary to excel as a software engineer such as: advanced data structures, software tools and techniques, runtime analysis, and computer organization and systems programming. I have also taken theory classes that deal with discrete math and the theory of computability, which have all challenged me and have helped me develop problem solving skills. Through my organization work and personal projects, I’ve become familiarized with the project development cycle and have placed obstacles in front of me that I needed to overcome using standard industry practices like storing to a database or creating an algorithm to give an app a certain functionality. 
						</p>

						<p className="paragraph">
In conclusion, I am a great candidate for the position because I can work with others efficiently to overcome a task at hand. I can express myself in a concise and straight to the point manner that I believe will be appreciated at a demanding environment like Google. Through my university’s coursework, I’ve been prepared to deal with challenges and pressures in a way that produces excellent results. Also, I have experience in developing projects so I am very teachable when it comes to learning new technologies. I look forward to hearing back from you, as I believe I can be a valuable asset to develop a functionality or app for Google. 
						
						</p>
						
						<br/>
						<br/>
						<br/>
						<br/>

					</Container>
            </div> 
        )
    }
}

export default CoverLetter;
