import React, { useEffect } from 'react';
import portrait from '../Images/portrait.png';

const Home = () => {

    useEffect(() => {
        document.title = `Joel Perren · Home`;
    });

    return (
        <main>
            <div className="hero">
                <div>
                    <h2>Hey there, I’m <span className="accent1">Joel</span></h2>
                    <p>I am a trainee software engineer at Ordnance Survey, learning all I can about full stack development. I built this website to showcase my work and also as a fun project to develop my skills with React – I like to learn by doing!</p>
                </div>
                <div className="home-portrait">
                    <img className="portrait" src={portrait} alt="Portrait of me!" />
                </div>
            </div>
            <p>Before joining OS I earned a Masters degree with Distinction in Geographical Information Systems from the University of Leeds and worked for two and a half years as a Transport Planner for Fore Consulting, specialising in microsimulation transport models.</p>
            <p>I am passionate about anything and everything GIS related, but particularly in the development of GIS tools and web-based maps, microsimulation models, and political geography. I am enthusiastic about my work and pride myself on its quality and presentation. I hope this philosophy is evident from this website!</p>
            <p>In my personal life, I enjoy going on walks and runs, bouldering (I don’t like heights so rope climbing is a no-no), and going to the gym. I also love dogs, play video games, and take an interest in history and world politics.</p>
        </main>
    );
}

export default Home;