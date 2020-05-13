import React, { useEffect } from 'react';
import portrait from '../Images/portrait.jpg';

const Home = () => {

    useEffect(() => {
        document.title = `Joel Perren · Home`;
    });

    return (
        <main className="flex-container">
            <div className="home-portrait">
                <img className="portrait" src={portrait} alt="Portrait of me!" />
            </div>
            <div className="home-content">
                <p>Hi, my name is Joel Perren — welcome to my website!</p>
                <p>I have a Masters degree with Distinction in Geographical Information Systems from the University of Leeds and am currently working as a Transport Planner for Fore Consulting in Leeds. I am passionate about anything and everything GIS related but particularly in the development of GIS tools and web-based maps, microsimulation modelling, and political geography.</p>
                <p>I built this website in order to showcase the skills which I have developed throughout my degree and in my subsequent career. I am enthusiastic about everything that I do and pride myself on the quality and presentation of my work and I hope this philosophy is evident from this website. </p>
                <p>In my personal life, I enjoy numerous activities including walking, running, and bouldering. I also have two dogs called Maisy and Pippa, enjoy computer games, and take an interest in history and world politics.</p>
            </div>
        </main>
    );
}

export default Home;