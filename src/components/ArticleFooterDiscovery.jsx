import React from 'react';
import Link from 'next/link';
import NewsCard from './NewsCard';
import CategorySection from './CategorySection';
import { allLocalArticles, localByCategory } from '@/data/localNews';
import { getTrendingArticles } from '@/lib/articles';
import './ArticleFooterDiscovery.css';

export default async function ArticleFooterDiscovery({ currentArticleId, currentCategory }) {
    // Excluir o artigo atual da pool
    const otherArticles = allLocalArticles.filter(a => a.id !== currentArticleId);
    
    // Grid 1: Mais Notícias (9 artigos, misturados pseudo-aleatório consistente)
    const grid1Articles = otherArticles.slice(0, 9);
    
    // Grid 2: Em Destaque (6 artigos)
    const grid2Articles = otherArticles.slice(9, 15);

    // Outras Categorias (escolher 3 categorias que não sejam a atual)
    const currentCatNormalized = currentCategory ? currentCategory.toLowerCase() : '';
    const otherCats = Object.entries(localByCategory)
        .filter(([cat]) => cat.toLowerCase() !== currentCatNormalized)
        .slice(0, 3);
        
    const trendingNews = await getTrendingArticles(6);

    // Ligar a lista das Mais Lidas aos artigos completos para obter as imagens
    const mostReadWithImages = trendingNews.map(mr => {
        if (mr._fromSupabase) return mr;
        const fullArticle = allLocalArticles.find(a => a.seoMeta?.slug === mr.seoMeta?.slug);
        return { ...mr, image: fullArticle?.image || 'https://via.placeholder.com/600x400?text=Panoramas' };
    });
    
    return (
        <div className="article-footer-discovery">
            
            {/* 1. Grid Grande: Mais Notícias */}
            <div className="discovery-section">
                <div className="cat-section-header">
                    <h3 className="category-title">Mais Notícias</h3>
                    <div className="cat-header-line"></div>
                </div>
                <div className="discovery-grid grid-3">
                    {grid1Articles.map(article => (
                        <NewsCard key={article.id} news={article} variant="horizontal" showSummary={false} />
                    ))}
                </div>
            </div>

            {/* 2. As Mais Lidas */}
            <div className="discovery-section">
                <div className="mixed-band carousel-band" style={{ marginBottom: 0 }}>
                    <div className="mixed-band-header">
                        <h4 className="mixed-band-title">As Mais Lidas</h4>
                        <span className="mixed-band-subtitle">Top Atual</span>
                    </div>
                    <div className="mixed-carousel-container">
                        {mostReadWithImages.map((item, index) => (
                            <div key={item.id} className="carousel-card-wrapper">
                                <NewsCard news={item} variant="compact" showSummary={true} rankIndicator={index + 1} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. Grid Novamente: Em Destaque */}
            <div className="discovery-section">
                <div className="cat-section-header">
                    <h3 className="category-title">Em Destaque</h3>
                    <div className="cat-header-line"></div>
                </div>
                <div className="discovery-grid grid-3">
                    {grid2Articles.map(article => (
                        <NewsCard key={article.id} news={article} variant="horizontal" showSummary={false} />
                    ))}
                </div>
            </div>

            {/* 4. Outras Categorias */}
            <div className="discovery-section categories-explore">
                <div className="cat-section-header">
                    <h3 className="category-title">Explorar Outras Categorias</h3>
                    <div className="cat-header-line"></div>
                </div>
                <div className="quick-cats">
                    {otherCats.map(([catName, articles]) => (
                        <div key={catName} className="cat-explore-block">
                            <CategorySection title={catName} articles={articles.slice(0, 3)} columns={1} limit={3} />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
