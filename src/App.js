import React from 'react';
import About from'./components/About/about'
import Contact from './components/Contact/contact'
import Navbar from './components/Navbar/navbar'
import ProjectList from './components/ProjectsList/ProjectsList';
import Skills from './components/Skills/skills'

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <About />
        <ProjectList />
        <Skills />
        <Contact />
      </div>
    );
  }
}

export default App;
