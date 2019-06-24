import React, { Component } from 'react';
import './ProjectDisplay.css';
import { proj, tag } from './projects.js';
import { Button, Transition, Container, Segment, Header, Label, Icon, List } from 
        'semantic-ui-react';

class ProjectDisplay extends React.Component{
    state = {
        currTags: {},
        activeProjects: [],
        empty: true
    }
    
    constructor(props){
      super(props);
      for( let i = 0; i < proj.projects.length; i++){
        this.state.activeProjects.push(proj.projects[i]);
      }

      for(let i = 0; i < tag.tags.length; i++){
        this.state.currTags[tag.tags[i]] = false;
      }
    }

    toggleTag = (event, {value}) => {
        const {currTags} = this.state
        currTags[value] = !currTags[value]
        this.setState(prevState => ({active: currTags[value]} ) )
        if(!this.checkEmpty()){
          this.setState({empty: false})
        }
        
        else{
          this.setState({empty: true})
        }
    }

    checkEmpty = () => {
      for( let i = 0; i < tag.tags.length; i++ ){
        if(this.state.currTags[tag.tags[i]] == true){
          return false;
        }
      }

      return true
    }
    checkVisible = tags => {
      const {currTags} = this.state
      if(this.state.empty){
        return true
      }
      for(let i = 0; i < tags.length; i++){
        if( currTags[tags[i]] ){
          return true;
        }
      }

      return false;
    }

    render(){
        const {currTags, activeProjects, currentWord, active} = this.state

        return(
            <div className="display"> 
            <Container inverted text>
                <Header textAlign="left"inverted as='h1'> 
                    <h1>  Projects </h1>
                </Header>

                <Segment attached ="top" inverted>
                    <Header textAlign="left" content="Filter by tag:" 
                     size = "tiny"/>
                    
                    {tag.tags.map( item => 
                    <Button toggle compact size = "tiny" color = {"teal"} 
                     className="button" value={item} active = {currTags[item]}
                     content={item} 
                     onClick = {this.toggleTag} /> )}
                    
                </Segment> 

                <Segment attached = "bottom">
                  <div className = "as" >
                    {this.state.activeProjects.map( (item, i) => 
                    <ProjectItem title = {item.name} link = {item.link} 
                    tags = {item.tags} description = {item.description}
                    visible = {
                      this.checkVisible(item.tags)}/>)}
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
      <Transition visible = {this.props.visible} animation = "fade left" > 
      <Segment basic> 
        <Segment attached = "top" clearing>
          <div className = "sd">
              <h1 className = "project-title"> {this.props.title}</h1> 
              <a target = "_blank" className = "link" 
              href = {this.props.link}> View Github Rep >> </a>
          </div>
        </Segment>
        <Segment attached>
          <div className = "sd">
          {this.props.tags.map( tag => <Label className = "Tag" 
          color = {"teal"} key = {tag} content = {tag} size = "large"/> )}
          </div>
        </Segment> 

        <Segment attached="bottom">
          <div className = "sd"> 
          {this.props.description.map((item, i) => 
          <p className = "p-title" key = {i}> {item} </p>)}
          </div>
        </Segment> 
      </Segment>
      </Transition>
    )
  }
}
export default ProjectDisplay
