'use client';
import CategoryPage from '@/components/CategoryPage';
import { satiricalByCategory } from '@/data/satiricalNews';
export default function EntretenimentoPage() { const articles = satiricalByCategory["Entretenimento"] || []; return <CategoryPage categoryName="Entretenimento" articles={articles} />; }
