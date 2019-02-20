import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader';
import AppIntro from './components/AppIntro';

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <AppHeader />
        <AppIntro />
      </div>
    );
  }
}

export default App
