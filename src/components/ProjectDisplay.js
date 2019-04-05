import React, { Component } from 'react';
import './ProjectDisplay.css';
import { Button,Container, Segment, Header, Icon, List } from 'semantic-ui-react';

class ProjectDisplay extends React.Component{
    state = {
        currTags: {},
        projects: []
    }

    render(){
        const {currTags, projects} = this.state
        return(
            <div className="display"> 
            <Container inverted text>
                <Header textAlign="left"inverted as='h1'> <h1>  Projects (Coming Soon) </h1></Header>
                <Segment attached ="top" inverted>
                    <Header textAlign="left" content="Filter by tag:" size = "tiny"/>
                    <Button compact size = "tiny" color = {"teal"} className="button" value={"JQuery"} content={"JQuery"} />
                    <Button compact size = "tiny" color = {"teal"} className="button" value={"React"} content={"React"} />
                    <Button compact size = "tiny" color = {"teal"} className="button" value={"Java"} content={"Java"} />
                    <Button compact size = "tiny" color = {"teal"} className="button" value={"Python"} content={"Python"} />
                    <Button compact size = "tiny" color = {"teal"} className="button" value={"HTML/CSS"} content={"HTML/CSS"} />
                    <Button compact size = "tiny" color = {"teal"} className="button" value={"PyGTK"} content={"PyGTK"} />
                    <Button compact size = "tiny" color = {"teal"} className="button" value={"Hackathon"} content={"Hackathon"} />
                    <Button compact size = "tiny" color = {"teal"} className="button" value={"Express"} content={"Express"} />
                    <Button compact size = "tiny" color = {"teal"} className="button" value={"Firebase"} content={"Firebase"} />
                    <Button compact size = "tiny" color = {"teal"} className="button" value={"Linux"} content={"Linux"} />
                    <Button compact size = "tiny" color = {"teal"} className="button" value={"API"} content={"API"} />
                    <Button compact size = "tiny" color = {"teal"} className="button" value={"Web"} content={"Web"} />
                    <Button compact size = "tiny" color = {"teal"} className="button" value={"Game"} content={"Game"} />

                </Segment> 
            </Container>
            </div> 
        )
    }
}

export default ProjectDisplay
