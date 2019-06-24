import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader';
import ProjectDisplay from './components/ProjectDisplay';

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <AppHeader />
        <ProjectDisplay />
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}

export default App
