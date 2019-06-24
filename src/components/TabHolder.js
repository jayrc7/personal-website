import React, { Component } from 'react';
import ProjectDisplay from './ProjectDisplay';
import CourseDisplay from './CourseDisplay';
import { Tab } from 'semantic-ui-react'

const panes = [ 
  { menuItem: 'Projects', render: () => <Tab.Pane> <ProjectDisplay /> </Tab.Pane> },
  { menuItem: 'Courses', render: () => <Tab.Pane> <CourseDisplay /> </Tab.Pane> }
]

const TabHolder = () => <Tab panes = {panes} />

export default TabHolder
