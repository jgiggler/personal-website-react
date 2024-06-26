import React, {useState, useEffect } from 'react';
import resume from '../images/JG-resume-2024.pdf';
import Skills from '../components/skills'

function HomePage() {
    const [showResume, setShowResume] = useState(false);

    const toggleResume = () => {
        setShowResume(!showResume);
      };

    return (
    <>    
    
        <h1>Joel Gilger</h1>
        <div className="card">
        
        <article >
            <h2>Web Developer and Designer</h2>
            <p id="about-me">I'm currently attending Oregon State University acquiring my B.S. in Computer Science.
                My goal is to become a full stack engineer with a concentration in web development and applications for an innovative company.</p>
            <h2>About Me</h2>
            <div>
            
            <p id="about-me">
            As I continue to work on side projects and gain more experience with full-stack web development I remain a lifelong learner.
            My passion for web develop has become a priority and I have decided to make that passion a profession.
            </p>
            </div>
            <button onClick={toggleResume}>{showResume ? 'Hide Resume' : 'Show Resume'}</button>
            {showResume && (
            <div id='pdf-container'>
                <embed src={resume} type='application/pdf' width="95%" height="100%"/>
            </div>
            )}
            
            {<Skills/>}
            
        </article>
        </div>
        
    
    </>
    )
}

export default HomePage;