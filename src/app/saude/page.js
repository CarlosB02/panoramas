import CategoryPage from '@/components/CategoryPage';
import { getArticlesByCategory } from '@/lib/articles';

export default async function SaudePage() {
    const articles = await getArticlesByCategory("Saúde");
    return <CategoryPage categoryName="Saúde" articles={articles} />;
}

export const revalidate = 60;
