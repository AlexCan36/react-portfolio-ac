//import logo from './logo.svg';
import './App.css';
//import Header from './Components/Header';
import { useState } from 'react';
import AboutMe from './Components/Pages/AboutMe';
import Projects from './Components/Pages/Projects';
import Contact from './Components/Pages/Contact';
import Resume from './Components/Pages/Resume';

function App() {
  const [currentPage, setcurrentPage] = useState('About Me')
  return (
    <div>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none' }}>
          <li onClick={() => setcurrentPage("About Me")}>About Me</li>
          <li onClick={() => setcurrentPage("Projects")}>Projects</li>
          <li onClick={() => setcurrentPage("Contact")}>Contact</li>
          <li onClick={() => setcurrentPage("Resume")}>Resume</li>
        </ul>
      </nav>
      {currentPage === "About Me" ? <AboutMe />
        : currentPage === "Projects" ? <Projects />
        : currentPage === "Resume" ? <Resume />
          : <Contact />}

      <footer>
        <h2>footer:</h2>
      </footer>

    </div>
  );
}

export default App;
