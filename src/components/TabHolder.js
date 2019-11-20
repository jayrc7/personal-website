import React from 'react';
import ProjectDisplay from './ProjectDisplay';
import CourseDisplay from './CourseDisplay';
import AboutDisplay from './AboutDisplay';
import { Tab } from 'semantic-ui-react'

const panes = [ 
 // { menuItem: 'About', render: () => <Tab.Pane attached = {true}> <AboutDisplay /> </Tab.Pane>	},
  { menuItem: 'Projects', render: () => <Tab.Pane attached = {true}> <ProjectDisplay /> </Tab.Pane> },
  { menuItem: 'Courses', render: () => <Tab.Pane attached = {true}> <CourseDisplay /> </Tab.Pane> }
]


class TabHolder extends React.Component {
  state = { color: "grey" }

  handleColorChange = e => this.setState({ color: e.target.value })

  render() {
    const { color } = this.state

    return (
      <div>
        <Tab menu={{ color, inverted: true, attached: true, tabular: true }} panes={panes} />
      </div>
    )
  }
}

export default TabHolder
