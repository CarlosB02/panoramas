'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { searchArticles } from '@/lib/articles';
import '@/components/CategoryPage.css';

export default function SearchContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const query = searchParams.get('q') || '';
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!query.trim()) {
            setResults([]);
            return;
        }
        
        let isMounted = true;
        setLoading(true);
        searchArticles(query.trim()).then(res => {
            if (isMounted) {
                setResults(res);
                setLoading(false);
            }
        });

        return () => { isMounted = false; };
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
                        {loading ? 'A pesquisar...' : (results.length === 1
                            ? 'Encontrámos 1 artigo correspondente.'
                            : `Encontrámos ${results.length} artigos correspondentes.`)}
                    </p>
                </header>
                {!loading && results.length > 0 ? (
                    <div className="news-grid-4col">
                        {results.map((article, index) => {
                            const isHero = index === 0 && results.length > 2;
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
                                        <Image src={article.image || 'https://via.placeholder.com/600x400?text=Panoramas'} alt={article.title} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
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
                ) : (!loading && <p className="category-empty" style={{ marginTop: '2rem', textAlign: 'center' }}>
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
