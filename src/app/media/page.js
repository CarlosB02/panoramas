import CategoryPage from '@/components/CategoryPage';
import { getArticlesByCategory } from '@/lib/articles';

export default async function MediaPage() {
    const articles = await getArticlesByCategory("Média");
    return <CategoryPage categoryName="Média" articles={articles} />;
}

export const revalidate = 60;
