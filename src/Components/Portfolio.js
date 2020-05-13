import React, { useEffect } from 'react';

const Portfolio = () => {
    useEffect(() => {
        document.title = `Joel Perren · Portfolio`;
    });

    return (
        <main className="flex-container">
            <p>On this page you can find numerous projects which I have undertaken throughout my career and Masters degree, covering a wide rage of topics including microsimulation modelling, political, spatial, and demographic analysis, GIS-related coding projects, and web-GIS development.</p>
        </main>
    );
}

export default Portfolio;