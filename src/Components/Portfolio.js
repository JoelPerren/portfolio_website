import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import PortfolioItem from './PortfolioItem';

const Portfolio = ({items}) => {

    let { path } = useRouteMatch();

    useEffect(() => {
        document.title = `Joel Perren · Portfolio`;
    });

    return (
        <main>
            <h2>Here’s my <span className="orange">Portfolio</span></h2>
            <p>On this page you can find a collection projects which I have completed throughout my career and Masters degree. These projects cover a range of topics, including: software development, microsimulation modelling, and political, spatial, and demographic analysis.</p>
            {items.map( (item, index) => 
                <PortfolioItem 
                    path={path}
                    item={item}
                    key={index}
                />
            )}
        </main>
    );
}

export default Portfolio;