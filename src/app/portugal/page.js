'use client';
import CategoryPage from '@/components/CategoryPage';
import { satiricalByCategory } from '@/data/satiricalNews';

export default function PortugalPage() {
    const articles = satiricalByCategory["Portugal"] || [];
    return <CategoryPage categoryName="Portugal" articles={articles} />;
}
