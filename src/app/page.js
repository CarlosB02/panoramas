'use client';

import React from 'react';
import Link from 'next/link';
import BreakingNews from '@/components/BreakingNews';
import NewsCard from '@/components/NewsCard';
import CategorySection from '@/components/CategorySection';
import InteractiveHub from '@/components/InteractiveHub';
import MixedNewsBand from '@/components/MixedNewsBand';
import { satiricalFeatured, satiricalByCategory, satiricalBreaking, satiricalMostRead, satiricalLive, allSatiricalArticles } from '@/data/satiricalNews';
import '@/styles/Home.css';

export default function HomePage() {
    const categorySections = Object.entries(satiricalByCategory).map(([name, articles]) => ({
        name,
        articles
    }));

    const topStoriesColumn = allSatiricalArticles.slice(0, 4);
    const opinionBand = allSatiricalArticles.slice(4, 8);

    const getMixedArticles = (index) => {
        const start = (8 + (index * 10)) % allSatiricalArticles.length;
        return allSatiricalArticles.slice(start, start + 10);
    };

    return (
        <div className="home-page">
            <div className="container">
                <BreakingNews headlines={satiricalBreaking} />

                {/* EDITORIAL TOP SECTION */}
                <div className="editorial-top">
                    <div className="lead-story-area">
                        <NewsCard news={satiricalFeatured} variant="lead" showSummary={true} />
                    </div>
                    <aside className="top-stories-sidebar">
                        <div className="sidebar-header">
                            <h3 className="sidebar-title">Mais Recentes</h3>
                        </div>
                        <div className="top-stories-list">
                            {topStoriesColumn.map(article => (
                                <NewsCard key={article.id} news={article} variant="horizontal" showSummary={false} />
                            ))}
                        </div>
                        <div className="live-updates-box">
                            <div className="sidebar-header mt-4">
                                <h3 className="sidebar-title">
                                    <span className="live-dot"></span> Ao Minuto
                                </h3>
                            </div>
                            <ul className="live-list">
                                {satiricalLive.slice(0, 3).map(item => (
                                    <li key={item.id}>
                                        <div className="live-time">{item.status?.split(' ')[0] || '12:00'}</div>
                                        <Link href={`/${item.categorySlug || 'noticia'}/${item.seoMeta.slug}`} className="live-link">{item.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>

                {/* SECONDARY BAND */}
                <div className="analysis-band">
                    <div className="section-header">
                        <h2 className="section-header-title">Análise & Perspectiva</h2>
                        <a href="#" className="section-header-link">Ver tudo</a>
                    </div>
                    <div className="analysis-grid">
                        {opinionBand.map(article => (
                            <NewsCard key={article.id} news={article} variant="compact" showSummary={false} />
                        ))}
                    </div>
                </div>

                <InteractiveHub />

                {/* MAIN CONTENT GRID */}
                <div className="editorial-main-grid">
                    <div className="content-col">
                        {categorySections.length > 0 && (
                            <CategorySection title={categorySections[0].name} articles={categorySections[0].articles} columns={2} />
                        )}
                        {categorySections.length > 1 && (
                            <MixedNewsBand articles={getMixedArticles(0)} variant="featured-band" />
                        )}
                    </div>
                    <aside className="right-sidebar">
                        <div className="sticky-box">
                            <div className="sidebar-header">
                                <h3 className="sidebar-title">As Mais Lidas</h3>
                            </div>
                            <ol className="most-read-list">
                                {satiricalMostRead.map((item, index) => (
                                    <li key={item.id}>
                                        <span className="rank">{index + 1}</span>
                                        <div className="read-content">
                                            <Link href={`/${item.categorySlug || 'noticia'}/${item.seoMeta.slug}`}>{item.title}</Link>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                            <div className="newsletter-box mt-4">
                                <h4>A atualidade na sua caixa de correio</h4>
                                <p>Inscreva-se na nossa newsletter diária.</p>
                                <input type="email" placeholder="O seu email" className="nl-input" />
                                <button className="nl-btn">Subscrever</button>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* FULL WIDTH LOWER CONTENT */}
                <div className="full-width-flow mt-4">
                    {categorySections.slice(1).map((cat, index) => {
                        const actualIndex = index + 1;
                        return (
                            <React.Fragment key={cat.name}>
                                <CategorySection title={cat.name} articles={cat.articles} columns={3} />
                                {actualIndex < categorySections.length - 1 && (
                                    <MixedNewsBand
                                        articles={getMixedArticles(actualIndex)}
                                        variant={actualIndex % 2 === 0 ? "carousel-band" : "mosaic"}
                                    />
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
