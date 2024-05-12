import React, {useState, useEffect } from 'react';

function ProjectsPage() {

    return (
    <>    
    
        <h1>Joel Gilger</h1>
        <div classNameName="card">
        
        <article >
            <h2>Projects</h2>
            <p>Here are some projects that I have worked on</p>
            <div id="projects-section">
            <div className="project-display">
                <img src="osrshome.png" className="thumbnail"/>
                
                    <div className="project-info">Runescape Item Guessing Game</div>
                    <div className="project-tech">
                    
                    <label className="tag">HTML5</label>
                    <label className="tag">CSS3</label>
                    <label className="tag">JavaScript</label>
                    <label className="tag">Python</label>
                    <label className="tag">React</label>
                    <label className="tag">Flask</label>
                    </div>
    
                <div className="project-notes">A website to play a game where you can guess items and monsters from the MMORPG Old School Runescape.</div>
                <a className="project-link" href="https://osrs.joelgilger.com">Check it out!</a>
                </div>
                
            <div className="project-display">
            <img src="bloodhome.png" className="thumbnail"/>
            
                <div className="project-info">Blood Data and Personal Image Gallery</div>
                <div className="project-tech">
                
                <label className="tag">HTML5</label>
                <label className="tag">CSS3</label>
                <label className="tag">JavaScript</label>
                <label className="tag">Node</label>
                <label className="tag">React</label>
                </div>

            <div className="project-notes">Website with various features including a blood work database, staff member generator, personal image gallery, and web development concepts.</div>
            <a className="project-link" href="https://jgiggler.github.io/Blood_sample_frontend/">Check it out!</a> 
            </div>
        
        
            <div className="project-display">
            <img src="personalhome.png" className="thumbnail"/>
            
                <div className="project-info">Personal Website</div>
                <div className="project-tech">
                
                <label className="tag">HTML5</label>
                <label className="tag">CSS3</label>
                </div>

            <div className="project-notes">Portfolio website to feature my projects and get to know more about me.</div>
            <a className="project-link-none" >You're already here!</a> 
            </div>
            
            

            </div>
            
               
        </article>
        </div>
    </>
    )
}

export default ProjectsPage;