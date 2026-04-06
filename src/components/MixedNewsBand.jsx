import React from 'react';
import NewsCard from './NewsCard';
import './MixedNewsBand.css';

const MixedNewsBand = ({ articles, variant = 'mosaic' }) => {
    if (!articles || articles.length === 0) return null;

    if (variant === 'featured-band') {
        const displayArticles = articles.slice(0, 3);
        return (
            <div className="mixed-band featured-band">
                <div className="mixed-band-header">
                    <h4 className="mixed-band-title">Em Destaque</h4>
                    <span className="mixed-band-subtitle">Seleção Editorial</span>
                </div>
                <div className="featured-grid-3">
                    {displayArticles.map(article => (
                        <div key={article.id} className="featured-card-wrapper">
                            <NewsCard news={article} variant="compact" showSummary={true} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (variant === 'carousel-band') {
        return (
            <div className="mixed-band carousel-band">
                <div className="mixed-band-header">
                    <h4 className="mixed-band-title">Na Ordem do Dia</h4>
                    <span className="mixed-band-subtitle">Destaques</span>
                </div>
                <div className="mixed-carousel-container">
                    {articles.map(article => (
                        <div key={article.id} className="carousel-card-wrapper">
                            <NewsCard news={article} variant="compact" showSummary={true} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    const displayArticles = articles.slice(0, 6);
    const mainArticle = displayArticles[0];
    const sideArticles = displayArticles.slice(1);

    return (
        <div className="mixed-band light">
            <div className="mixed-band-header">
                <h4 className="mixed-band-title">Leitura Recomendada</h4>
                <div className="mixed-band-line"></div>
            </div>
            <div className="mixed-mosaic">
                <div className="mosaic-main">
                    {mainArticle && <NewsCard news={mainArticle} variant="standard" showSummary={true} />}
                </div>
                <div className="mosaic-side">
                    {sideArticles.map(article => (
                        <NewsCard key={article.id} news={article} variant="horizontal" showSummary={false} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MixedNewsBand;
