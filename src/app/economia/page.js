import CategoryPage from '@/components/CategoryPage';
import { getArticlesByCategory } from '@/lib/articles';

export default async function EconomiaPage() {
    const articles = await getArticlesByCategory("Economia");
    return <CategoryPage categoryName="Economia" articles={articles} />;
}

export const revalidate = 60;
