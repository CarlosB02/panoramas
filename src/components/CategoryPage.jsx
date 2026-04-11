'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import './CategoryPage.css';

const CategoryPage = ({ categoryName, articles = [] }) => {
    const router = useRouter();

    if (!articles || articles.length === 0) {
        return (
            <div className="category-page-wrapper">
                <div className="ad-gutter ad-gutter-left"></div>
                <div className="category-content-column">
                    <header className="category-header">
                        <h1 className="category-page-title">{categoryName}</h1>
                        <div className="category-header-rule"></div>
                    </header>
                    <p className="category-empty">Brevemente: mais notícias nesta categoria.</p>
                </div>
                <div className="ad-gutter ad-gutter-right"></div>
            </div>
        );
    }

    return (
        <div className="category-page-wrapper">
            <div className="ad-gutter ad-gutter-left">
                <div className="ad-placeholder"><span>PUBLICIDADE</span></div>
            </div>
            <div className="category-content-column">
                <header className="category-header">
                    <h1 className="category-page-title">{categoryName}</h1>
                    <div className="category-header-rule"></div>
                    <p className="category-subtitle">As últimas notícias e análises sobre {categoryName}.</p>
                </header>
                <div className="news-grid-4col">
                    {articles.map((article, index) => {
                        const isHero = index === 0;
                        return (
                            <article
                                key={article.id}
                                className={`grid-card ${isHero ? 'grid-card--hero' : ''}`}
                                onClick={() => {
                                    const catSlug = article.categorySlug || (article.category ? article.category.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-') : 'noticia');
                                    router.push(`/${catSlug}/${article.seoMeta.slug}`);
                                }}
                            >
                                <div className="grid-card__image">
                                    <img src={article.image} alt={article.title} />
                                    {article.kicker && (
                                        <span className={`grid-card__kicker ${isHero ? 'kicker--large' : ''}`}>{article.kicker}</span>
                                    )}
                                </div>
                                <div className="grid-card__body">
                                    <h3 className={`grid-card__title ${isHero ? 'title--hero' : ''}`}>{article.title}</h3>
                                    <div className="grid-card__meta">
                                        <span className="meta__author">{article.author}</span>
                                        <span>{article.timestamp}</span>
                                        <span>💬 {article.comments}</span>
                                    </div>
                                    <p className={`grid-card__summary ${isHero ? 'summary--hero' : ''}`}>{article.summary}</p>
                                    {article.pullQuote && isHero && (
                                        <blockquote className="grid-card__pullquote">
                                            <span className="pq-mark">"</span>
                                            {article.pullQuote}
                                        </blockquote>
                                    )}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
            <div className="ad-gutter ad-gutter-right">
                <div className="ad-placeholder"><span>PUBLICIDADE</span></div>
            </div>
        </div>
    );
};

export default CategoryPage;
