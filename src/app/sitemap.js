import { getLatestArticles } from '@/lib/articles';

export default async function sitemap() {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://panoramas.pt';
    
    // Base static routes
    const routes = [
        '',
        '/portugal',
        '/politica',
        '/economia',
        '/mundo',
        '/media',
        '/entretenimento',
        '/desporto',
        '/saude',
        '/estilo-de-vida',
        '/sobre-nos',
        '/meteorologia'
    ].map(route => ({
        url: `${siteUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic articles
    let articles = [];
    try {
        articles = await getLatestArticles(1000);
    } catch (err) {
        console.warn('Failed to fetch articles for sitemap', err);
    }

    const articleRoutes = articles.map(article => ({
        url: `${siteUrl}/${article.categorySlug || 'noticia'}/${article.seoMeta?.slug || 'sem-slug'}`,
        lastModified: article.rawDate ? new Date(article.rawDate) : new Date(),
        changeFrequency: 'never', // News articles typically don't change
        priority: 0.6,
    }));

    return [...routes, ...articleRoutes];
}
