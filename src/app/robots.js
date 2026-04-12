export default function robots() {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://panoramas.pt';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/admin/'],
        },
        sitemap: `${siteUrl}/sitemap.xml`,
    };
}
