import React, { useEffect } from 'react';
import lastUpdated from '../Images/last-updated.png';
import CVEmploymentHistory from './CVEmploymentHistory';
import CVEducation from './CVEducation';
import CVSkills from './CVSkills';

const CV = () => {
    useEffect(() => {
        document.title = `Joel Perren · CV`;
    });

    return (
        <main>
            <h2 className="cv-heading">Take a look at my <span className="accent1">CV</span></h2>
            <div className="widget-container" title="Last updated">
                <div className="last-updated-widget">
                    <img src={lastUpdated} alt="" className="last-updated-icon"></img>
                    <span className="last-updated-text">January 2020</span>
                </div>
                <div className="empty"></div>
            </div>
            <CVEmploymentHistory />
            <CVEducation />
            <CVSkills />
        </main>
    );
}

export default CV;