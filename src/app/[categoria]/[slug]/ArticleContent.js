import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '@/styles/ArticlePage.css';
import ShareButtons from '@/components/ShareButtons';
import RecommendedArticles from '@/components/RecommendedArticles';
import ArticleFooterDiscovery from '@/components/ArticleFooterDiscovery';
import ViewTracker from '@/components/ViewTracker';

export default function ArticleContent({ article, slug }) {
    const articleTags = article.tags || [];

    return (
        <React.Fragment>
            <ViewTracker slug={slug} />
            <div className="article-page-wrapper">
                <div className="ad-gutter ad-gutter-left">
                    <div className="ad-placeholder"><span>PUBLICIDADE</span></div>
                </div>

                <main className="article-content-column">
                    <nav className="article-breadcrumb">
                    <Link href="/">Início</Link> &gt;
                    {article.categorySlug && (
                        <Link href={`/${article.categorySlug}`}> {article.category}</Link>
                    )}
                </nav>

                <header className="article-header">
                    {article.kicker && <span className="article-kicker">{article.kicker}</span>}
                    <h1 className="article-title">{article.title}</h1>
                    <p className="article-summary">{article.summary}</p>

                    <div className="article-meta-bar">
                        <div className="author-info">
                            <span className="author-name">Por {article.author || 'Redação Panoramas'}</span>
                        </div>
                        <div className="time-info">
                            <span>{article.timestamp}</span>
                            {article.readTime && (
                                <>
                                    <span className="divider">•</span>
                                    <span>{article.readTime}</span>
                                </>
                            )}
                        </div>
                    </div>

                    <ShareButtons title={article.title} image={article.image} />
                </header>

                <figure className="article-hero-image" style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
                    <Image src={article.image || 'https://via.placeholder.com/1200x630?text=Panoramas'} alt={article.title || 'Noticia'} fill style={{ objectFit: 'cover' }} priority />
                    <figcaption style={{ position: 'absolute', bottom: '-25px' }}>Panoramas — Imagem Ilustrativa</figcaption>
                </figure>

                <div className="article-body">
                    {article.content && article.content.split('\n\n').map((block, i) => {
                        const trimmed = block.trim();
                        if (!trimmed) return null;
                        if (trimmed.startsWith('### ')) {
                            return <h4 key={i} className="article-subtitle" style={{marginTop: '1.5em', marginBottom: '0.8em', fontSize: '1.2rem'}}>{trimmed.substring(4)}</h4>;
                        } else if (trimmed.startsWith('## ')) {
                            return <h3 key={i} className="article-subtitle" style={{marginTop: '1.5em', marginBottom: '0.8em', fontSize: '1.4rem'}}>{trimmed.substring(3)}</h3>;
                        } else if (trimmed.startsWith('# ')) {
                            return <h2 key={i} className="article-subtitle" style={{marginTop: '1.5em', marginBottom: '0.8em', fontSize: '1.6rem'}}>{trimmed.substring(2)}</h2>;
                        } else {
                            // Basic bold matching for simple markdown support
                            const htmlContent = trimmed
                                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                .replace(/\*(.*?)\*/g, '<em>$1</em>');
                            return <p key={i} dangerouslySetInnerHTML={{ __html: htmlContent }}></p>;
                        }
                    })}

                    {article.pullQuote && (
                        <blockquote className="article-pullquote">
                            <span className="pq-mark">&quot;</span>
                            {article.pullQuote}
                        </blockquote>
                    )}

                    {article.expertQuote && (
                        <div className="article-expert-quote">
                             <span className="eq-icon">💡</span>
                            <blockquote>&quot;{article.expertQuote.text}&quot;</blockquote>
                            <cite>— <strong>{article.expertQuote.author}</strong>, {article.expertQuote.title}</cite>
                        </div>
                    )}

                    {article.infographic && (
                        <div className="article-infographic">
                            <h4>{article.infographic.title}</h4>
                            <table>
                                <tbody>
                                    {article.infographic.rows.map((row, i) => (
                                        <tr key={i}>
                                            <td>{row.label}</td>
                                            <td><strong>{row.value}</strong></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {article.bullet && (
                        <div className="article-bullet">
                            <span className="bullet-dot">●</span> {article.bullet}
                        </div>
                    )}
                </div>

                {articleTags.length > 0 && (
                    <div className="article-tags">
                        {articleTags.map((tag, i) => (
                            <span key={i} className="article-tag">{tag}</span>
                        ))}
                    </div>
                )}
            </main>

            <div className="ad-gutter ad-gutter-right">
                <div className="ad-placeholder"><span>PUBLICIDADE</span></div>
            </div>
        </div>

        <div className="container article-discovery-container" style={{ paddingBottom: '4rem' }}>
            <RecommendedArticles currentArticleId={article.id} fallbackCategory={article.categorySlug} />
            <ArticleFooterDiscovery currentArticleId={article.id} currentCategory={article.categorySlug} />
        </div>
        </React.Fragment>
    );
}
