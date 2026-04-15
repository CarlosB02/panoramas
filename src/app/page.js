'use client';

import React from 'react';
import Link from 'next/link';
import BreakingNews from '@/components/BreakingNews';
import NewsCard from '@/components/NewsCard';
import CategorySection from '@/components/CategorySection';
import InteractiveHub from '@/components/InteractiveHub';
import MixedNewsBand from '@/components/MixedNewsBand';
import { localFeatured, localByCategory, localBreaking, localMostRead, localLive, allLocalArticles } from '@/data/localNews';
import { getTrendingArticles, getLatestArticles } from '@/lib/articles';
import { supabase } from '@/lib/supabase';
import { mapSupabaseArticle } from '@/lib/articles';
import '@/styles/Home.css';

/**
 * Deterministic daily shuffle based on a seed derived from today's date.
 * Same seed → same order throughout the day; different seed → different order the next day.
 */
function seededShuffle(array, seed) {
    const arr = [...array];
    let s = seed;
    for (let i = arr.length - 1; i > 0; i--) {
        s = (s * 1664525 + 1013904223) & 0xffffffff;
        const j = Math.abs(s) % (i + 1);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function getDailySeed() {
    const d = new Date();
    // Produces a numeric seed unique per calendar day
    return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
}

/**
 * Group an array of articles by their category field.
 * Categories are shown in a preferred order; any extra categories come last.
 */
const CATEGORY_ORDER = ['Política', 'Economia', 'Saúde', 'Portugal', 'Mundo', 'Entretenimento', 'Desporto', 'IA', 'Estilo de Vida', 'Descontos'];

function groupByCategory(articles) {
    const groups = {};
    for (const article of articles) {
        const cat = article.category || 'Geral';
        if (!groups[cat]) groups[cat] = [];
        groups[cat].push(article);
    }
    // Sort by preferred order
    const sorted = {};
    for (const cat of CATEGORY_ORDER) {
        if (groups[cat]) sorted[cat] = groups[cat];
    }
    // Any remaining categories not in preferred order
    for (const cat of Object.keys(groups)) {
        if (!sorted[cat]) sorted[cat] = groups[cat];
    }
    return sorted;
}

export default function HomePage() {
    const [allSupabaseArticles, setAllSupabaseArticles] = React.useState([]);
    const [mostReadArticles, setMostReadArticles] = React.useState(localMostRead);
    const [latestArticles, setLatestArticles] = React.useState([]);
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        // Fetch trending (most read) articles
        getTrendingArticles(5).then(data => {
            if (data && data.length > 0) setMostReadArticles(data);
        });

        // Fetch latest articles for breaking news / ao minuto / top stories
        getLatestArticles(20).then(data => {
            if (data && data.length > 0) setLatestArticles(data);
        });

        // Fetch all articles from Supabase for full page population
        if (supabase) {
            supabase
                .from('noticias')
                .select('*')
                .order('created_at', { ascending: false })
                .limit(200)
                .then(({ data, error }) => {
                    if (data && !error && data.length > 0) {
                        setAllSupabaseArticles(data.map(mapSupabaseArticle));
                    }
                    setLoaded(true);
                });
        } else {
            setLoaded(true);
        }
    }, []);

    // --- Article pool: use Supabase if available, otherwise local fallback ---
    const articlePool = allSupabaseArticles.length > 0 ? allSupabaseArticles : allLocalArticles;

    // Daily seed for consistent-but-rotating content
    const seed = getDailySeed();

    // Shuffle the full pool once per day
    const dailyShuffled = React.useMemo(() => seededShuffle(articlePool, seed), [articlePool, seed]);

    // --- Lead / Featured story: first article in daily shuffle ---
    const featuredArticle = latestArticles.length > 0
        ? latestArticles[0]
        : (dailyShuffled[0] || localFeatured);

    // --- Top stories sidebar (4 articles, skip the featured one) ---
    const topStoriesColumn = latestArticles.length > 0
        ? latestArticles.slice(1, 5)
        : dailyShuffled.slice(1, 5);

    // --- "Ao Minuto" live list (3 most recent) ---
    const liveItems = latestArticles.length > 0
        ? latestArticles.slice(0, 3)
        : localLive.slice(0, 3);

    // --- Analysis / Opinion band: 4 articles from a rotated offset ---
    const opinionBand = dailyShuffled.slice(5, 9);

    // --- Category sections: group the shuffled pool ---
    const byCategory = React.useMemo(() => {
        if (allSupabaseArticles.length > 0) {
            return groupByCategory(dailyShuffled);
        }
        return localByCategory;
    }, [allSupabaseArticles, dailyShuffled]);

    const categorySections = Object.entries(byCategory).map(([name, articles]) => ({
        name,
        articles,
    }));

    // --- Mixed bands: slice different windows from the shuffled pool ---
    const getMixedArticles = (index) => {
        const start = (10 + index * 12) % Math.max(dailyShuffled.length, 1);
        const slice = dailyShuffled.slice(start, start + 12);
        // If we're near the end, wrap around
        if (slice.length < 10) {
            return [...slice, ...dailyShuffled.slice(0, 10 - slice.length)];
        }
        return slice;
    };

    // Breaking news headlines
    const breakingHeadlines = latestArticles.length > 0
        ? latestArticles.slice(0, 5).map(a => a.title)
        : localBreaking;

    return (
        <div className="home-page">
            <div className="container">
                <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>Panoramas - Informação de Confiança e Última Hora</h1>
                <BreakingNews headlines={breakingHeadlines} />

                {/* EDITORIAL TOP SECTION */}
                <div className="editorial-top">
                    <div className="lead-story-area">
                        <NewsCard news={featuredArticle} variant="lead" showSummary={true} />
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
                                {liveItems.map((item, idx) => {
                                    let timeStr = 'Agora';
                                    if (item.rawDate) {
                                        const d = new Date(item.rawDate);
                                        timeStr = `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
                                    } else if (item.status) {
                                        timeStr = item.status.split(' ')[0];
                                    }

                                    return (
                                        <li key={item.id || idx}>
                                            <div className="live-time">{timeStr}</div>
                                            <Link href={`/${item.categorySlug || 'noticia'}/${item.seoMeta?.slug}`} className="live-link">{item.title}</Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </aside>
                </div>

                {/* SECONDARY BAND — Análise & Perspectiva */}
                <div className="analysis-band">
                    <div className="section-header">
                        <h2 className="section-header-title">Análise &amp; Perspectiva</h2>
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
                                {mostReadArticles.map((item, index) => (
                                    <li key={item.id}>
                                        <span className="rank">{index + 1}</span>
                                        <div className="read-content">
                                            <Link href={`/${item.categorySlug || 'noticia'}/${item.seoMeta?.slug}`}>{item.title}</Link>
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
