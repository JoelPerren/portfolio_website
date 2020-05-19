import React, { useState, useEffect } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { PortfolioEntries } from '../Data/portfolio-entries';
import PortfolioItem from './PortfolioItem';
import Article from './Article';

const Portfolio = () => {

    let { path } = useRouteMatch();
    const [article, setArticle] = useState({});

    const handleLink = (selectedArticle) => {
        setArticle(selectedArticle)
    }

    useEffect(() => {
        document.title = `Joel Perren · Portfolio`;
    });

    return (
        <main>
            <Route exact path={path} render={() => 
                <div>
                    <p>On this page you can find numerous projects which I have undertaken throughout my career and Masters degree, covering a wide rage of topics including microsimulation modelling, political, spatial, and demographic analysis, GIS-related coding projects, and web-GIS development.</p>
                    {PortfolioEntries.map( (entry, index) => 
                        <PortfolioItem 
                            path={path}
                            entry={entry}
                            handleLinkClick={handleLink}
                        />
                    )}
                </div>            
            } />

            <Route exact path={`${path}/:articlePath`} render={() => <Article article={article}/> } />
            
        </main>
    );
}

export default Portfolio;