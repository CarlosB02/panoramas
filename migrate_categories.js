const fs = require('fs');
const path = require('path');

const categories = [
    { key: 'portugal', label: 'Portugal', func: 'Portugal' },
    { key: 'politica', label: 'Política', func: 'Politica' },
    { key: 'economia', label: 'Economia', func: 'Economia' },
    { key: 'mundo', label: 'Mundo', func: 'Mundo' },
    { key: 'media', label: 'Média', func: 'Media' },
    { key: 'entretenimento', label: 'Entretenimento', func: 'Entretenimento' },
    { key: 'desporto', label: 'Desporto', func: 'Desporto' },
    { key: 'saude', label: 'Saúde', func: 'Saude' },
    { key: 'estilo-de-vida', label: 'Estilo de Vida', func: 'EstiloDeVida' },
    { key: 'ia', label: 'Inteligência Artificial', func: 'IA' },
];

categories.forEach(c => {
    const filePath = path.join(__dirname, 'src', 'app', c.key, 'page.js');
    if (fs.existsSync(filePath)) {
        const content = `import CategoryPage from '@/components/CategoryPage';
import { getArticlesByCategory } from '@/lib/articles';

export default async function ${c.func}Page() {
    const articles = await getArticlesByCategory("${c.label}");
    return <CategoryPage categoryName="${c.label}" articles={articles} />;
}
`;
        fs.writeFileSync(filePath, content);
    }
});

console.log('Category pages migrated to Server Components!');
