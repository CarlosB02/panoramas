import CategoryPage from '@/components/CategoryPage';
import { getArticlesByCategory } from '@/lib/articles';

export default async function PortugalPage() {
    const articles = await getArticlesByCategory("Portugal");
    return <CategoryPage categoryName="Portugal" articles={articles} />;
}

export const revalidate = 60;
