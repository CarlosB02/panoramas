import CategoryPage from '@/components/CategoryPage';
import { getArticlesByCategory } from '@/lib/articles';

export default async function IAPage() {
    const articles = await getArticlesByCategory("Inteligência Artificial");
    return <CategoryPage categoryName="Inteligência Artificial" articles={articles} />;
}

export const revalidate = 60;
