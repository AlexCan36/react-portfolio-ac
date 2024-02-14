//import logo from './logo.svg';
import './App.css';
import githubLogo from  './assets/pics/github_logo.png';
import linkedinLogo from './assets/pics/linkedin_image.png';
import facebookLogo from './assets/pics/facebook_logo.png';
//import Header from './Components/Header';
import { useState } from 'react';
import AboutMe from './Components/Pages/AboutMe';
import Projects from './Components/Pages/Projects';
import Contact from './Components/Pages/Contact';
import Resume from './Components/Pages/Resume';

function App() {
  const [currentPage, setcurrentPage] = useState('About Me');

  const handleRefresh = () => {
    window.location.reload(); // Reload the page
  };
  return (
    <div>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none' }}>
        <li onClick={handleRefresh}>Alex Canez</li> {/* Add onClick event handler */}
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
        <div class='row'>
        <div class="column">
            <h5>Github</h5>
            <a target='_blank'rel='noreferrer' href="https://github.com/AlexCan36"><img border="1" alt="Github" src={githubLogo} width="100" height="100"></img></a>
          </div>
          <div class="column">
          <h5>Linkedin</h5>
            <a target='_blank'rel='noreferrer' href="https://www.linkedin.com/in/alex-canez-050823230/"><img border="1" alt="Linkedin" src={linkedinLogo} width="100" height="100"></img></a>
          </div>
          <div class="column">
          <h5>Facebook</h5>
            <a target='_blank' rel='noreferrer' href="https://www.facebook.com/elwinny.canez/"><img border="1" alt="Facebook" src={facebookLogo} width="100" height="100"></img></a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
