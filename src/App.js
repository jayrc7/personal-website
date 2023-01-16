import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
        <Router>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/blog" component={Blog} />
            <Route path="/experience" component={Experience} />
        </Router>
    );
  }
}

export default App;
