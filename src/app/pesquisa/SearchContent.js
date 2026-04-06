'use client';

import React, { useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { allSatiricalArticles } from '@/data/satiricalNews';
import '@/components/CategoryPage.css';

export default function SearchContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const query = searchParams.get('q') || '';

    const results = useMemo(() => {
        if (!query.trim()) return [];
        const lowerQuery = query.toLowerCase();
        return allSatiricalArticles.filter(article => {
            return (
                article.title.toLowerCase().includes(lowerQuery) ||
                article.summary.toLowerCase().includes(lowerQuery) ||
                article.category.toLowerCase().includes(lowerQuery) ||
                (article.content && article.content.toLowerCase().includes(lowerQuery))
            );
        });
    }, [query]);

    return (
        <div className="category-page-wrapper">
            <div className="ad-gutter ad-gutter-left">
                <div className="ad-placeholder"><span>PUBLICIDADE</span></div>
            </div>
            <div className="category-content-column">
                <header className="category-header">
                    <h1 className="category-page-title">
                        {query ? `Resultados para: "${query}"` : 'Pesquisa'}
                    </h1>
                    <div className="category-header-rule"></div>
                    <p className="category-subtitle">
                        {results.length === 1
                            ? 'Encontrámos 1 artigo correspondente.'
                            : `Encontrámos ${results.length} artigos correspondentes.`}
                    </p>
                </header>
                {results.length > 0 ? (
                    <div className="news-grid-4col">
                        {results.map((article, index) => {
                            const isHero = index === 0 && results.length > 2;
                            return (
                                <article
                                    key={article.id}
                                    className={`grid-card ${isHero ? 'grid-card--hero' : ''}`}
                                    onClick={() => router.push(`/noticia/${article.seoMeta.slug}`)}
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
                                        </div>
                                        <p className={`grid-card__summary ${isHero ? 'summary--hero' : ''}`}>{article.summary}</p>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                ) : (
                    <p className="category-empty" style={{ marginTop: '2rem', textAlign: 'center' }}>
                        Não encontrámos notícias para a sua pesquisa. Quer tentar outro termo?
                    </p>
                )}
            </div>
            <div className="ad-gutter ad-gutter-right">
                <div className="ad-placeholder"><span>PUBLICIDADE</span></div>
            </div>
        </div>
    );
}
