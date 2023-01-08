import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
        <Router basename="/personal-website">
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/blog" component={Blog} />
        </Router>
    );
  }
}

export default App;
