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
    const { slug } = await params;
    const article = await getArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    return <ArticleContent article={article} slug={slug} />;
}
