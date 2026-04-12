import CategoryPage from '@/components/CategoryPage';
import { getArticlesByCategory } from '@/lib/articles';

export default async function PoliticaPage() {
    const articles = await getArticlesByCategory("Política");
    return <CategoryPage categoryName="Política" articles={articles} />;
}

export const revalidate = 60;
