import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { useState } from 'react';
import AboutMe from './Components/Pages/AboutMe';
import Projects from './Components/Pages/Projects';
import Contact from './Components/Pages/Contact';

function App() {
  const [currentPage, setcurrentPage] = useState('About Me')
  return (
    <div>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none' }}>
          <li onClick={() => setcurrentPage("About Me")}>About Me</li>
          <li onClick={() => setcurrentPage("Projects")}>Projects</li>
          <li onClick={() => setcurrentPage("Contact")}>Contact</li>
          <li>Resume</li>
        </ul>
      </nav>
      {currentPage === "About Me" ? <AboutMe />
        : currentPage === "Projects" ? <Projects />
          : <Contact />}
    </div>
  );
}

export default App;
