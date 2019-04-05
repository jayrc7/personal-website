import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader';
import AppIntro from './components/AppIntro';
import ProjectDisplay from './components/ProjectDisplay';

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <AppHeader />
        <AppIntro />
        <ProjectDisplay />
      </div>
    );
  }
}

export default App
