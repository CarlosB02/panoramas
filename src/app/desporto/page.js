'use client';
import CategoryPage from '@/components/CategoryPage';
import { satiricalByCategory } from '@/data/satiricalNews';
export default function DesportoPage() { const articles = satiricalByCategory["Desporto"] || []; return <CategoryPage categoryName="Desporto" articles={articles} />; }
