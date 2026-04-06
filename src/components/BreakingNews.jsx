import React from 'react';
import './BreakingNews.css';

const BreakingNews = ({ headlines }) => {
    return (
        <div className="breaking-news-container">
            <div className="breaking-label">
                <span className="breaking-word">ÚLTIMA</span>
                <span className="breaking-word">HORA</span>
            </div>
            <div className="breaking-ticker">
                <div className="ticker-track">
                    {headlines.map((headline, index) => (
                        <span key={index} className="ticker-item">
                            {headline} <span className="separator">///</span>
                        </span>
                    ))}
                    {headlines.map((headline, index) => (
                        <span key={`dup-${index}`} className="ticker-item">
                            {headline} <span className="separator">///</span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BreakingNews;
