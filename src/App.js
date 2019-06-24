import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader';
import TabHolder from './components/TabHolder';

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <AppHeader />
        <TabHolder />
      </div>
    );
  }
}

export default App
