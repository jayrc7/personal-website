import React, { Component } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import ProjectDisplay from './components/ProjectDisplay';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <Router>
          <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </Router>

    );
  }
}

export default App;
