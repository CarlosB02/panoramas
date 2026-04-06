'use client';
import CategoryPage from '@/components/CategoryPage';
import { satiricalByCategory } from '@/data/satiricalNews';
export default function SaudePage() { const articles = satiricalByCategory["Saúde"] || []; return <CategoryPage categoryName="Saúde" articles={articles} />; }
