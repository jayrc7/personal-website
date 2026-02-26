import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router basename="/personal-website">
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
