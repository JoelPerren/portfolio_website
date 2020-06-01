import React from 'react';

const CVEmploymentHistory = () => (
    <div>
        <div className="cv-subheading">
            <h3>Employment History</h3>
            {/* <span className="references">
                References available upon request
            </span> */}
        </div>

        <div className="cv-content">
            <h3>Trainee Software Engineer, Ordnance Survey <span className="not-bold">⬩ 2020 — Present</span></h3>
            <p>I am currently employed as a trainee software developer at Ordnance Survey.</p>

            <h3>Transport Planner, Fore Consulting Limited <span className="not-bold">⬩ 2017 — 2020</span></h3>
            <p>At Fore I was responsible for the development and operation of microsimulation transport models and for the development and introduction of GIS tools and processes into the company’s workflows.</p>
            <p>This included the development of a web-GIS program to estimate of the distribution of vehicle trips from development sites using the Google Maps JavaScript API and the development of a method of automatically generating accessibility isochrones for proposed development sites using OpenStreetMap data, QGIS, and the GRASS vector network analysis toolbox. Compared to a manual approach, these GIS workflows have greatly expediated these processes and minimised the potential for errors.</p>
            <p>I also developed important skills working collaboratively on complex projects with internal and external team members, clients, and other stakeholders such as Councils and Combined Authorities.</p>
        
            <h3>Business Development Assistant, Spire Leeds Hospital <span className="not-bold">⬩ 2013 — 2017</span></h3>
            <p>I worked at Spire Leeds Hospital for over 4 years and undertook a wide range of jobs and responsibilities within multiple departments of the hospital including the NHS and self-pay departments, business admin, and marketing.</p>
            <p>I accomplished a variety of jobs including: analysing data on the procedures undertaken in the hospital for marketing purposes; writing promotional leaflets for hospital services and working with an external design company to produce them; researching and setting up an email marketing system for advertising purposes; and posting internal finance reports and handling billing errors on the hospital computer system.</p>
            <p>Through this experience I developed abilities to efficiently and accurately learn and shoulder new roles in both an independent, and team-based capacity. It also provided invaluable experience of the structure and proceedings within a company and allowed me to advance my adaptability and interpersonal, creative, and problem-solving skills.</p>
        </div>
    </div>
);

export default CVEmploymentHistory;