'use client';
import CategoryPage from '@/components/CategoryPage';
import { satiricalByCategory } from '@/data/satiricalNews';
export default function IAPage() { const articles = satiricalByCategory["IA"] || []; return <CategoryPage categoryName="IA" articles={articles} />; }
