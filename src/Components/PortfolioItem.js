import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioItem = ({
    path, 
    entry, 
    entry: { title, summary, article }, 
    handleLinkClick
}) => {

    const thumbnail = require(`../Images/${summary.thumbnail}.png`);

    return(
        <div className="flex-container portfolio-item">
            <div className="portfolio-thumbnail">
                <img className="portfolio-thumbnail-img" src={thumbnail} alt="N/A" />
            </div>
            <div className="portfolio-summary">
                <h3>{title}</h3>
                <p>{summary.summaryText}</p>
                <p>
                    <span>« </span>
                    <Link 
                        onClick={() => handleLinkClick(entry)}
                        to={`${path}/${article.articlePath}`}
                    >Read More</Link>
                </p>
            </div>
        </div>
    );
}

export default PortfolioItem;