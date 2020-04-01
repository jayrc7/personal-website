import React, { Component } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import ProjectDisplay from './components/ProjectDisplay';

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <AppHeader />
		  <ProjectDisplay />
      </div>
    );
  }
}

export default App
