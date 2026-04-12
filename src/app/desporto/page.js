import CategoryPage from '@/components/CategoryPage';
import { getArticlesByCategory } from '@/lib/articles';

export default async function DesportoPage() {
    const articles = await getArticlesByCategory("Desporto");
    return <CategoryPage categoryName="Desporto" articles={articles} />;
}

export const revalidate = 60;
