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
    { key: 'meteorologia', label: 'Meteorologia', func: 'Meteorologia' } // Assuming this exists just in case
];

categories.forEach(c => {
    const filePath = path.join(__dirname, 'src', 'app', c.key, 'page.js');
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        if (!content.includes('export const revalidate')) {
            content += `\nexport const revalidate = 60;\n`;
            fs.writeFileSync(filePath, content);
        }
    }
});

console.log('Added ISR revalidate to category pages!');
