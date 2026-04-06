'use client';
import CategoryPage from '@/components/CategoryPage';
import { satiricalByCategory } from '@/data/satiricalNews';

export default function PoliticaPage() {
    const articles = satiricalByCategory["Política"] || [];
    return <CategoryPage categoryName="Política" articles={articles} />;
}
