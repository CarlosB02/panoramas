'use client';
import CategoryPage from '@/components/CategoryPage';
import { satiricalByCategory } from '@/data/satiricalNews';

export default function MundoPage() {
    const articles = satiricalByCategory["Mundo"] || [];
    return <CategoryPage categoryName="Mundo" articles={articles} />;
}
