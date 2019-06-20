import React, { Component } from 'react';
import './ProjectDisplay.css';
import { proj } from './projects.js';
import { Button,Container, Segment, Header, Icon, List } from 
        'semantic-ui-react';

class ProjectDisplay extends React.Component{
    state = {
        currTags: {},
        projects: [],
        currentWord: ""
    }
    
    toggleTag = (event, {value}) => {
        this.setState(prevState => ({active: !prevState.active} ) )
        this.setState( {projects: [...this.state.projects, 1]} )
        this.setState( {currentWord: value} )
    }

    static getDerivedStateFromProps( props, state ) {

    }

    render(){
        const {currTags, projects, currentWord, active} = this.state

        return(
            <div className="display"> 
            <Container inverted text>
                <Header textAlign="left"inverted as='h1'> 
                    <h1>  Projects </h1>
                </Header>

                <Segment attached ="top" inverted>
                    <Header textAlign="left" content="Filter by tag:" 
                     size = "tiny"/>

                    <Button toggle compact size = "tiny" color = {"teal"} 
                     className="button" value={"JQuery"}
                     ref = {this.buttonRef} content={"JQuery"} 
                     onClick = {this.toggleTag} />

                    <Button toggle compact size = "tiny" color = {"teal"} 
                     className="button" value={"React"} content={"React"} 
                     onClick = {this.toggleTag} />

                    <Button toggle compact size = "tiny" color = {"teal"} 
                     className="button" value={"Java"} content={"Java"} 
                     onClick = {this.toggleTag} />

                    <Button toggle compact size = "tiny" color = {"teal"} 
                     className="button" value={"Python"} content={"Python"} 
                     onClick = {this.toggleTag} />

                    <Button toggle compact size = "tiny" color = {"teal"} 
                     className="button" value={"HTML/CSS"} content={"HTML/CSS"} 
                     onClick = {this.toggleTag} />

                    <Button toggle compact size = "tiny" color = {"teal"} 
                     className="button" value={"Javascript"} 
                     content={"Javascript"} onClick = {this.toggleTag} />

                    <Button toggle compact size = "tiny" color = {"teal"} 
                     className="button" value={"Hackathon"} 
                     content={"Hackathon"} onClick = {this.toggleTag} />

                    <Button toggle compact size = "tiny" color = {"teal"}
                    className="button" value={"Firebase"} 
                    content={"Firebase"} onClick = {this.toggleTag} />

                    <Button toggle compact size = "tiny" color = {"teal"} 
                     className="button" value={"Linux"} content={"Linux"} 
                     onClick = {this.toggleTag} />

                    <Button toggle compact size = "tiny" color = {"teal"} 
                     className="button" value={"API"} content={"API"} 
                     onClick = {this.toggleTag} />

                    <Button toggle compact size = "tiny" color = {"teal"} 
                     className="button" value={"Web"} content={"Web"} 
                     onClick = {this.toggleTag} />

                    <Button toggle compact size = "tiny" color = {"teal"} 
                    className="button" value={"Game"} content={"Game"}
                    active = {active} onClick = {this.toggleTag} />

                </Segment> 

                <Segment inverted attached = "bottom">
                  <div className = "as" >
                    <ProjectItem title = {proj.projects[0].name} link = {proj.projects[0].link} />
                  </div>
                
                </Segment> 
            </Container>
            </div> 
        )
    }
}


class ProjectItem extends Component {
  render(){
    return (
      <Segment basic> 
        <Segment attached = "top" clearing>
          <div className = "sd">
              <h1 className = "project-title"> {this.props.title}</h1> 
              <a target = "_blank" className = "link" href = {this.props.link}> Github Repo </a>
          </div>
        </Segment>
        <Segment attached>
          <div className = "sd">
          {proj.projects[0].tags.map((item, i) => <Button compact key = {i} color = {"teal"} content = {item} /> )}
          </div>
        </Segment> 

        <Segment attached="bottom">
          <div className = "sd"> 
          {proj.projects[0].description.map((item, i) => <p className = "p-title" key = {i}> {item} </p>)}
          </div>
        </Segment> 
      </Segment>
    )
  }
}
export default ProjectDisplay
