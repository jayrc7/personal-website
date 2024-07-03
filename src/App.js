import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
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
          <Routes>
            <Route exact path="/"     element={<Home />} />
            <Route path="/projects"   element={<Projects />} />
            <Route path="/blog"       element={<Blog />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
      </Router>
    );
  }
}

export default App;
