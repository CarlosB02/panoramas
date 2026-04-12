import CategoryPage from '@/components/CategoryPage';
import { getArticlesByCategory } from '@/lib/articles';

export default async function EstiloDeVidaPage() {
    const articles = await getArticlesByCategory("Estilo de Vida");
    return <CategoryPage categoryName="Estilo de Vida" articles={articles} />;
}

export const revalidate = 60;
