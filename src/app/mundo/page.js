import CategoryPage from '@/components/CategoryPage';
import { getArticlesByCategory } from '@/lib/articles';

export default async function MundoPage() {
    const articles = await getArticlesByCategory("Mundo");
    return <CategoryPage categoryName="Mundo" articles={articles} />;
}

export const revalidate = 60;
