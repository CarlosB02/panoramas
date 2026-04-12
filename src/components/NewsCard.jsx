'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import './NewsCard.css';

const NewsCard = ({ news, variant = 'standard', showSummary = true, rankIndicator = null }) => {
    const router = useRouter();
    const [imageLoaded, setImageLoaded] = useState(false);
    const { title, summary, category, image, timestamp, featured, kicker, readTime, comments, bullet, seoMeta } = news;

    const handleClick = () => {
        if (seoMeta?.slug) {
            const catSlug = news.categorySlug || (category ? category.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-') : 'noticia');
            router.push(`/${catSlug}/${seoMeta.slug}`);
        }
    };

    const renderTitle = () => {
        if (seoMeta?.slug) {
            const catSlug = news.categorySlug || (category ? category.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-') : 'noticia');
            return <Link href={`/${catSlug}/${seoMeta.slug}`} onClick={(e) => e.stopPropagation()}>{title}</Link>;
        }
        return <a href="#">{title}</a>;
    };

    const getClickbaitLabel = (text) => {
        const hash = (text.length * 13 + (text.charCodeAt(0) || 0) * 7 + (text.charCodeAt(text.length - 1) || 0)) % 100;
        if (hash > 35) return null;
        const labels = [
            "Exclusivo e urgente",
            "+50 mil leituras na última hora",
            "O assunto do momento",
            "Em atualização",
            "A bater recordes de partilhas",
            "Notícia de última hora"
        ];
        return labels[hash % labels.length];
    };

    const clickbaitText = getClickbaitLabel(title);

    const renderMetaLabel = () => {
        if (clickbaitText) {
            return <span className="clickbait-trigger">{clickbaitText}</span>;
        }
        return <span className="normal-time">{timestamp || 'Há ' + ((title.length % 11) + 1) + 'h'}</span>;
    };

    if (variant === 'text-only') {
        return (
            <article className="news-card text-only clickable" onClick={handleClick}>
                {kicker && <span className="kicker-text">{kicker}</span>}
                <h3 className="title">{renderTitle()}</h3>
                <div className="meta-text dynamic-meta">{renderMetaLabel()}</div>
            </article>
        );
    }

    if (variant === 'horizontal') {
        return (
            <article className="news-card horizontal clickable" onClick={handleClick}>
                <div className="card-image-wrapper">
                    {!imageLoaded && <div className="image-placeholder" />}
                    <Image src={image || 'https://via.placeholder.com/600x400?text=Panoramas'} alt={title || 'Noticia'} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={`card-img ${imageLoaded ? 'loaded' : ''}`} onLoad={() => setImageLoaded(true)} loading="lazy" style={{ objectFit: "cover" }} />
                </div>
                <div className="card-content">
                    {kicker && <span className="kicker-text">{kicker}</span>}
                    <h3 className="title">{renderTitle()}</h3>
                    <div className="meta-text dynamic-meta">{renderMetaLabel()}</div>
                </div>
            </article>
        );
    }

    if (variant === 'lead') {
        return (
            <article className="news-card lead clickable" onClick={handleClick}>
                <div className="card-image-wrapper">
                    {!imageLoaded && <div className="image-placeholder" />}
                    <Image src={image || 'https://via.placeholder.com/600x400?text=Panoramas'} alt={title || 'Noticia'} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 50vw" className={`card-img ${imageLoaded ? 'loaded' : ''}`} onLoad={() => setImageLoaded(true)} loading="lazy" style={{ objectFit: "cover" }} />
                </div>
                <div className="card-content">
                    {kicker && <span className="kicker-text">{kicker}</span>}
                    <h2 className="title" style={{ fontSize: '2.2rem' }}>{renderTitle()}</h2>
                    {showSummary && summary && <p className="summary">{summary}</p>}
                    {bullet && (
                        <div className="bullet-highlight">
                            <span className="bullet-dot">•</span>
                            <span className="bullet-text">{bullet}</span>
                        </div>
                    )}
                    <div className="meta-text dynamic-meta lead-meta">
                        {renderMetaLabel()}
                        <span className="separator" style={{ margin: '0 8px', color: 'var(--color-border)' }}>•</span>
                        Por <span className="author">Redação</span>
                    </div>
                </div>
            </article>
        );
    }

    return (
        <article className={`news-card ${variant} clickable`} onClick={handleClick}>
            <div className="card-image-wrapper">
                {!imageLoaded && <div className="image-placeholder" />}
                <Image src={image || 'https://via.placeholder.com/600x400?text=Panoramas'} alt={title || 'Noticia'} fill sizes="(max-width: 768px) 100vw, 33vw" className={`card-img ${imageLoaded ? 'loaded' : ''}`} onLoad={() => setImageLoaded(true)} loading="lazy" style={{ objectFit: "cover" }} />
                {variant === 'standard' && kicker && <span className="kicker-badge">{kicker}</span>}
                <div className="image-overlay" />
                {rankIndicator && <div className="card-rank-indicator">{rankIndicator}</div>}
            </div>
            <div className="card-content">
                {variant === 'compact' && kicker && <span className="kicker-text">{kicker}</span>}
                <h2 className="title">{renderTitle()}</h2>
                {showSummary && summary && variant === 'standard' && <p className="summary">{summary}</p>}
                {variant === 'standard' && (
                    <div className="card-meta-line meta-bar">{renderMetaLabel()}</div>
                )}
                {variant === 'compact' && (
                    <div className="meta-text dynamic-meta">{renderMetaLabel()}</div>
                )}
            </div>
        </article>
    );
};

export default NewsCard;
