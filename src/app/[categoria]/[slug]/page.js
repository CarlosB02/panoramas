import { getArticleBySlug } from '@/lib/articles';
import { notFound } from 'next/navigation';
import ArticleContent from './ArticleContent';

export async function generateMetadata({ params }) {
    const { slug, categoria } = await params;
    const article = await getArticleBySlug(slug);

    if (!article) {
        return { title: 'Artigo não encontrado' };
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://panoramas.pt';

    return {
        title: article.title,
        description: article.seoMeta?.meta_description || article.summary,
        openGraph: {
            title: `${article.title} - Panoramas`,
            description: article.seoMeta?.meta_description || article.summary,
            url: `${siteUrl}/${categoria}/${slug}`,
            type: 'article',
            images: [
                {
                    url: article.image?.startsWith('http') ? article.image : `${siteUrl}${article.image}`,
                    width: 1200,
                    height: 630,
                    alt: article.title,
                },
            ],
            locale: 'pt_PT',
            siteName: 'Panoramas',
        },
        twitter: {
            card: 'summary_large_image',
            title: article.title,
            description: article.seoMeta?.meta_description || article.summary,
            images: [article.image?.startsWith('http') ? article.image : `${siteUrl}${article.image}`],
        },
        alternates: {
            canonical: `${siteUrl}/${categoria}/${slug}`,
        },
    };
}

export default async function ArticlePage({ params }) {
    const { slug, categoria } = await params;
    const article = await getArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://panoramas.pt';

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: article.title,
        image: article.image?.startsWith('http') ? article.image : `${siteUrl}${article.image}`,
        datePublished: article.rawDate ? new Date(article.rawDate).toISOString() : new Date().toISOString(),
        dateModified: article.rawDate ? new Date(article.rawDate).toISOString() : new Date().toISOString(),
        author: [{
            '@type': 'Organization',
            name: article.author || 'Redação Panoramas',
            url: siteUrl
        }],
        publisher: {
            '@type': 'Organization',
            name: 'Panoramas',
            logo: {
                '@type': 'ImageObject',
                url: `${siteUrl}/images/almada_float.png`
            }
        },
        description: article.summary
    };

    const breadcrumbLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Início',
                item: siteUrl
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: article.category || categoria,
                item: `${siteUrl}/${categoria}`
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: article.title,
                item: `${siteUrl}/${categoria}/${slug}`
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <ArticleContent article={article} slug={slug} />
        </>
    );
}
