const fs = require('fs');
const path = require('path');

const categories = [
    { key: 'portugal', label: 'Portugal' },
    { key: 'politica', label: 'Política' },
    { key: 'economia', label: 'Economia' },
    { key: 'mundo', label: 'Mundo' },
    { key: 'media', label: 'Média' },
    { key: 'entretenimento', label: 'Entretenimento' },
    { key: 'desporto', label: 'Desporto' },
    { key: 'saude', label: 'Saúde' },
    { key: 'estilo-de-vida', label: 'Estilo de Vida' },
    { key: 'ia', label: 'Inteligência Artificial' },
    { key: 'meteorologia', label: 'Meteorologia' }
];

categories.forEach(c => {
    const dirPath = path.join(__dirname, 'src', 'app', c.key);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
    const layoutPath = path.join(dirPath, 'layout.js');
    const content = `export const metadata = {
    title: 'Notícias de ${c.label} | Panoramas',
    description: 'Últimas notícias e atualidades sobre ${c.label} no Panoramas.'
};

export default function ${c.key.replace(/-/g, '')}Layout({ children }) {
    return children;
}
`;
    fs.writeFileSync(layoutPath, content);
});

console.log('Layouts generated for SEO!');
