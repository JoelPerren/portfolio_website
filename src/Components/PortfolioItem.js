import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioItem = ({
    path,
    item, 
    item: { title, articlePath, summaryText, thumbnail }, 
}) => {

    const thumbnailImg = require(`../Images/${thumbnail}.png`);

    return(
        <div className="portfolio-item">
            <div className="portfolio-thumbnail">
                <img className="portfolio-thumbnail-img" src={thumbnailImg} alt="N/A" />
            </div>
            <div className="portfolio-summary">
                <h3>{title}</h3>
                <p className="reduced-margin">{summaryText}</p>
                <p className="inline-link bold">
                    <span className="orange">» </span>
                    <Link 
                        to={{
                            pathname: `${path}/${articlePath}`,
                            state: { article: item }
                            }}
                    >
                        <span className="smaller">Read More</span>
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default PortfolioItem;
