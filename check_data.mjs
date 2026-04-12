import { allSatiricalArticles } from './src/data/satiricalNews.js';

let errors = [];
allSatiricalArticles.forEach((a, i) => {
    if (typeof a.title !== 'string') errors.push(`Index ${i} missing title (type ${typeof a.title})`);
    if (typeof a.summary !== 'string') errors.push(`Index ${i} missing summary (type ${typeof a.summary})`);
    if (typeof a.category !== 'string') errors.push(`Index ${i} missing category (type ${typeof a.category})`);
});
console.log('Errors:', errors);
