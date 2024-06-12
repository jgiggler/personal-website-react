import React, {useState, useEffect } from 'react';
import osrs from '../images/osrshome.png';
import blood from '../images/bloodhome.png';
import personal from '../images/personalhome.png';
import hogwarts from '../images/hogwartshome.png';
import fortune from '../images/fortunehome.png';
function ProjectsPage() {

    return (
    <>    
    
        <h1>Joel Gilger</h1>
        <div classNameName="card">
        
        <article >
            <h2>Projects</h2>
            <p>Here are some projects that I have worked on</p>
            <p>PLEASE NOTE: Some features for each website may NOT be working as I have decided to stop hosting the backend.</p>  
        <div id="projects-section">
            <div className="project-display">
            <img src={fortune} className="thumbnail"/>
            
                <div className="project-info">Fortune Forge</div>
                <div className="project-tech">
                
                <label className="tag">HTML5</label>
                <label className="tag">CSS3</label>
                <label className="tag">JavaScript</label>
                <label className="tag">React</label>
                <label className="tag">Flask</label>
                </div>

            <div className="project-notes">Website used to learn about all things money. Learn about Investing, Stocks and Cryptocurrency.
             Uses 3 custom-built microservices and 1 external microservice.</div>
            <a className="project-link" style={{color: 'black'}}>Pictures Coming Soon!</a> 
            </div>
            <div className="project-display">
            <img src={hogwarts} className="thumbnail"/>
            
                <div className="project-info">Hogwarts Library Management System</div>
                <div className="project-tech">
                
                <label className="tag">HTML5</label>
                <label className="tag">CSS3</label>
                <label className="tag">React</label>
                <label className="tag">Flask</label>
                </div>

            <div className="project-notes">Website used to track book data for Hogwarts Library and reservations from students. Typically used by muggles.</div>
            <a className="project-link" style={{color: 'black'}}>Pictures Coming Soon!</a> 
            </div>
            <div className="project-display">
                <img src={osrs} className="thumbnail"/>
                
                    <div className="project-info">Runescape Item Guessing Game</div>
                    <div className="project-tech">
                    
                    <label className="tag">HTML5</label>
                    <label className="tag">CSS3</label>

                    <label className="tag">React</label>
                    <label className="tag">Flask</label>
                    </div>
    
                <div className="project-notes">A website to play a game where you can guess items and monsters from the MMORPG Old School Runescape.</div>
                <a className="project-link" style={{color: 'black'}} href="https://osrs.joelgilger.com">Check it out!</a>
                </div>
                
            <div className="project-display">
            <img src={blood} className="thumbnail"/>
            
                <div className="project-info">Blood Data and Personal Image Gallery</div>
                <div className="project-tech">
                
                <label className="tag">HTML5</label>
                <label className="tag">CSS3</label>
                <label className="tag">Node</label>
                <label className="tag">React</label>
                </div>

            <div className="project-notes">Website with various features including a blood work database, staff member generator, personal image gallery, and web development concepts.</div>
            <a className="project-link" style={{color: 'black'}} href="https://jgiggler.github.io/Blood_sample_frontend/">Check it out!</a> 
            </div>
        
        
            <div className="project-display">
            <img src={personal} className="thumbnail"/>
            
                <div className="project-info">Personal Website</div>
                <div className="project-tech">
                
                <label className="tag">HTML5</label>
                <label className="tag">CSS3</label>
                <label className="tag">React</label>
                </div>

            <div className="project-notes">Portfolio website to feature my projects and get to know more about me.</div>
            <a className="project-link-none" style={{color: 'black'}} >You're already here!</a> 
            </div>
        </div>
            
             
        </article>
        </div>
    </>
    )
}

export default ProjectsPage;