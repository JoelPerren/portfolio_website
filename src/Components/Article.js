import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const Article = () => {
    const history = useHistory();
    const location = useLocation();
    const article = location.state.article;
    const images = article.images.map((name, index) => {
        return (
            // NOTE: Consider adding modal popup.
            <img key={index} className="article-image" alt="" src={require(`../Images/${name}.png`)} />
        )
    });

    return (
        <main className="flex-container">
            <div className="skills-demonstrated">
                {/* <h4>Skills Demonstrated:</h4>
                <ul>
                    {article.skills.map((skill, index) =>
                        <li key={index}>{skill}</li>
                    )}
                </ul> */}
            </div>
            <div className="portfolio-article-content">
                <h3>{article.title}</h3>
                {article.articleText.map((para, index) => 
                    <p key={index} dangerouslySetInnerHTML={ { __html: para } }></p>
                )}
                <p className="inline-link bold">
                    <span className="accent1">«</span>
                    <button className="button-link smaller" onClick={history.goBack}>Back</button>
                </p>
                <div className="article-image-container">
                    {images}
                </div>
            </div>
        </main>
    )
};

export default Article;