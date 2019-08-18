import React, { Component } from 'react';
import './ProjectDisplay.css';
import { proj, tag } from './projects.js';
import { Button, Transition, Container, Segment, Header, Label} from 
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
        if(this.state.currTags[tag.tags[i]] === true){
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
        const {currTags, activeProjects} = this.state

        return(
            <div className="display"> 
            <br />
            <Container inverted="true" text>
                <Header textAlign="left"inverted> 
                   <h1> Projects </h1>
                </Header>

                <Segment attached ="top" inverted>
                    <Header textAlign="left" content="Filter by tag:" 
                     size = "tiny"/>
                    
                    {tag.tags.map( item => 
                    <Button toggle compact size = "tiny" color = {"teal"} 
                     className="button" value={item} active = {currTags[item]}
                     content={item} key = {item}
                     onClick = {this.toggleTag} /> )}
                    
                </Segment> 

                <Segment attached = "bottom">
                  <div className = "as" >
                    {activeProjects.map( (item, i) => 
                    <ProjectItem title = {item.name} key = {i} link = {item.link} org = {item.organization}
                    tags = {item.tags} description = {item.description} website = {item.website}
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
				
			  {this.props.org === "" ? <h2 className = "project-type"> Personal Project </h2> : <h2 className = "project-type"> {this.props.org} </h2>}


			  {this.props.link === "" ? "" : 
                 <a target = "_blank" rel="noopener noreferrer" className = "link" 
                 href = {this.props.link}> View Github Repo >> </a>
			  }
			  {(this.props.link === "" || this.props.website === "") ? "" : <br/>}
			  <a target="_blank" rel = "noopener noreferrer" className = "link"
			  href = {this.props.website}> {this.props.website === "" ? "" : "View Demo >>"} </a>
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
