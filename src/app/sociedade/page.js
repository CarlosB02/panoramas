import CategoryPage from '@/components/CategoryPage';
import { getArticlesByCategory } from '@/lib/articles';

export default async function SociedadePage() {
    const articles = await getArticlesByCategory("Sociedade");
    return <CategoryPage categoryName="Sociedade" articles={articles} />;
}

export const revalidate = 60;
