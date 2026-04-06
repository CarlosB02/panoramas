import React from 'react';
import NewsCard from './NewsCard';
import './CategorySection.css';

const CategorySection = ({ title, articles, columns = 2 }) => {
    if (!articles || articles.length === 0) return null;
    const displayArticles = articles.slice(0, 6);

    return (
        <section className="category-section">
            <div className="cat-section-header">
                <h3 className="category-title">{title}</h3>
                <div className="cat-header-line"></div>
            </div>
            <div className={`cat-uniform-grid cols-${columns}`}>
                {displayArticles.map(article => (
                    <NewsCard key={article.id} news={article} variant="horizontal" showSummary={false} />
                ))}
            </div>
        </section>
    );
};

export default CategorySection;
