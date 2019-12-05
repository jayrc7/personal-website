import React from 'react';
import ProjectDisplay from './ProjectDisplay';
import CourseDisplay from './CourseDisplay';
import AboutDisplay from './AboutDisplay';
import LinkDisplay from './LinkDisplay';
import CoverLetter from './CoverLetter';
import Critique from './Critique';
import { Tab } from 'semantic-ui-react'

const panes = [ 
  { menuItem: 'About', render: () => <Tab.Pane attached = {true}> <AboutDisplay /> </Tab.Pane>	},
  { menuItem: 'Projects', render: () => <Tab.Pane attached = {true}> <ProjectDisplay /> </Tab.Pane> },
  { menuItem: 'Courses', render: () => <Tab.Pane attached = {true}> <CourseDisplay /> </Tab.Pane> },
  { menuItem: 'Cover', render: () => <Tab.Pane attached = {true}> <CoverLetter/> </Tab.Pane> }, 
  { menuItem: 'Critique', render: () => <Tab.Pane attached = {true}> <Critique/> </Tab.Pane> },
  { menuItem: 'Links', render: () => <Tab.Pane attached = {true}> <LinkDisplay /> </Tab.Pane> }
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
