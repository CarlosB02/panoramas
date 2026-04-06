'use client';
import CategoryPage from '@/components/CategoryPage';
import { satiricalByCategory } from '@/data/satiricalNews';

export default function EconomiaPage() {
    const articles = satiricalByCategory["Economia"] || [];
    return <CategoryPage categoryName="Economia" articles={articles} />;
}
