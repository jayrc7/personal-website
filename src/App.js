import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Projects from './pages/Projects';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
        <Router basename="/personal-website">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/projects" component={Projects} />
            </Switch>
        </Router>
    );
  }
}

export default App;
