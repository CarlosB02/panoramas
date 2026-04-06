import React from 'react';
import './ArticleSkeleton.css';

export const ArticlePageSkeleton = () => (
    <div className="article-page-wrapper">
        <div className="ad-gutter ad-gutter-left" />
        <div className="article-skeleton">
            <div className="skeleton-block sk-kicker" />
            <div className="skeleton-block sk-title" />
            <div className="skeleton-block sk-title-2" />
            <div className="skeleton-block sk-summary" />
            <div className="skeleton-block sk-summary-2" />
            <div className="skeleton-block sk-meta-bar" />
            <div className="skeleton-block sk-hero-image" />
            {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="skeleton-block sk-paragraph" />
            ))}
        </div>
        <div className="ad-gutter ad-gutter-right" />
    </div>
);

export const NewsCardSkeleton = () => (
    <div className="news-card-skeleton">
        <div className="skeleton-block sk-card-image" />
        <div className="skeleton-block sk-card-kicker" />
        <div className="skeleton-block sk-card-title" />
        <div className="skeleton-block sk-card-title-2" />
        <div className="skeleton-block sk-card-meta" />
    </div>
);

export const LatestNewsSkeleton = ({ count = 6 }) => (
    <div className="latest-news-skeleton-grid">
        {Array.from({ length: count }).map((_, i) => (
            <NewsCardSkeleton key={i} />
        ))}
    </div>
);
