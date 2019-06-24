import React, { Component } from 'react';
import './ProjectDisplay.css';
import { course } from './courses.js';
import { Button, Transition, Container, Segment, Header, Label, Icon, List } from 
        'semantic-ui-react';

class CourseDisplay extends React.Component{
    render(){
        return(
            <div className="display"> 
            <br />
            <Container inverted text>
                <Header textAlign="left"inverted as='h1'> 
                    <h1>  Courses </h1>
                </Header>

                <Segment>
                  <div className = "as" >
                    {course.courses.map( (item, i) => 
                    <CourseItem title = {item.name} description = {item.description}
                    />)}
                  </div>
                
                </Segment> 
            </Container>
            </div> 
        )
    }
}


class CourseItem extends Component {
  render(){
    return (
      <Segment basic> 
        <Segment attached = "top" clearing>
          <div className = "sd">
              <h1 className = "project-title"> {this.props.title}</h1> 
          </div>
        </Segment>

        <Segment attached="bottom">
          <div className = "sd"> 
          <p className = "p-title"> {this.props.description} </p>
          </div>
        </Segment> 
      </Segment>
    )
  }
}
export default CourseDisplay