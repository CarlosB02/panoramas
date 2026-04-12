import CategoryPage from '@/components/CategoryPage';
import { getArticlesByCategory } from '@/lib/articles';

export default async function EntretenimentoPage() {
    const articles = await getArticlesByCategory("Entretenimento");
    return <CategoryPage categoryName="Entretenimento" articles={articles} />;
}

export const revalidate = 60;
