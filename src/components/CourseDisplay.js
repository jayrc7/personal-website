import React from 'react';
import '../css/ProjectDisplay.css';
import { course } from '../content/courses.js';
import { Container, Segment, Header } from 
        'semantic-ui-react';

class CourseDisplay extends React.Component{
    render(){
        return(
            <div className="display"> 
            <br />
            <Container inverted text>
                <Header textAlign="left"inverted as='h1'> 
                    <h1> Relevant Coursework </h1>
                </Header>
                
                <Segment className = "left">
                  <h1 className = "teal"> Computer Science and Engineering </h1>
                  <div className = "as" >
                    {course.comp.map( (item, i) => 
                    <CourseItem title = {item.name} description = {item.description}
                    />)}
                  </div>

                </Segment>

            </Container>
            </div> 
        )
    }
}


class CourseItem extends React.Component {
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
