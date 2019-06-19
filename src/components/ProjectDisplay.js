import React, { Component } from 'react';
import './ProjectDisplay.css';
import { Button,Container, Segment, Header, Icon, List } from 
        'semantic-ui-react';

class ProjectDisplay extends React.Component{
    state = {
        currTags: {},
        projects: []
    }

    toggleTag = (event, {value}) => {
        alert(value);
    }

    static getDerivedStateFromProps( props, state ){
    }
    render(){
        const {currTags, projects} = this.state

        return(
            <div className="display"> 
            <Container inverted text>
                <Header textAlign="left"inverted as='h1'> 
                    <h1>  Projects </h1>
                </Header>

                <Segment attached ="top" inverted>
                    <Header textAlign="left" content="Filter by tag:" 
                     size = "tiny"/>

                    <Button compact size = "tiny" color = {"teal"} 
                     className="button" value={"JQuery"} content={"JQuery"} 
                     onClick = {this.toggleTag} />

                    <Button compact size = "tiny" color = {"teal"} 
                     className="button" value={"React"} content={"React"} 
                     onClick = {this.toggleTag} />

                    <Button compact size = "tiny" color = {"teal"} 
                     className="button" value={"Java"} content={"Java"} 
                     onClick = {this.toggleTag} />

                    <Button compact size = "tiny" color = {"teal"} 
                     className="button" value={"Python"} content={"Python"} 
                     onClick = {this.toggleTag} />

                    <Button compact size = "tiny" color = {"teal"} 
                     className="button" value={"HTML/CSS"} content={"HTML/CSS"} 
                     onClick = {this.toggleTag} />

                    <Button compact size = "tiny" color = {"teal"} 
                     className="button" value={"Javascript"} 
                     content={"Javascript"} onClick = {this.toggleTag} />

                    <Button compact size = "tiny" color = {"teal"} 
                     className="button" value={"Hackathon"} 
                     content={"Hackathon"} onClick = {this.toggleTag} />

                    <Button compact size = "tiny" color = {"teal"}
                    className="button" value={"Firebase"} 
                    content={"Firebase"} onClick = {this.toggleTag} />

                    <Button compact size = "tiny" color = {"teal"} 
                     className="button" value={"Linux"} content={"Linux"} 
                     onClick = {this.toggleTag} />

                    <Button compact size = "tiny" color = {"teal"} 
                     className="button" value={"API"} content={"API"} 
                     onClick = {this.toggleTag} />

                    <Button compact size = "tiny" color = {"teal"} 
                     className="button" value={"Web"} content={"Web"} 
                     onClick = {this.toggleTag} />

                    <Button compact size = "tiny" color = {"teal"} 
                    className="button" value={"Game"} content={"Game"} 
                    onClick = {this.toggleTag} />

                </Segment> 
            </Container>
            </div> 
        )
    }
}

export default ProjectDisplay
