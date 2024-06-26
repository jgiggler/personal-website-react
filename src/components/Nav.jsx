import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ghlogo from '../images/github.png';
import linklogo from '../images/linkedin.png'

function Nav() {
    const [isDarkMode, setIsDarkMode] = useState(true);
    
    useEffect(() => {
        // Update CSS class based on isDarkMode state
        const rootElement = document.documentElement;
        rootElement.className = isDarkMode ? 'dark-theme' : 'light-theme';
        
      }, [isDarkMode]);

    const toggleTheme = () => {
      setIsDarkMode(prevMode => !prevMode);
    };
    
    return (
    <div className={isDarkMode ? 'dark-theme' : 'light-theme'}>
      <nav className='sidebar'>
          <Link to="/home">Home</Link>
          <Link to="/projects">Projects</Link>
          
            

          <div className='social-box'>
          
          <a className="socials" href='https://github.com/jgiggler'><img src={ghlogo} className='icon'/>Github</a>
          <a className="socials" href='https://www.linkedin.com/in/joel-gilger/'><img src={linklogo} className='icon'/>LinkedIn</a>
          </div>
          <footer className='footer1'>&copy; Joel Gilger 2024</footer>
          <button className='footer2' onClick={toggleTheme}>Change Theme</button>
      </nav>
    </div>
    );
};
  


export default Nav;