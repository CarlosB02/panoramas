import { allLocalArticles } from '../data/localNews';

export const NewsGenerator = {
    generateNews: (count = 3, prefs = { categories: {} }) => {
        const sortedPrefs = Object.entries(prefs.categories || {})
            .sort(([, a], [, b]) => b - a)
            .map(([cat]) => cat);

        let availableArticles = [...allLocalArticles];
        const generated = [];

        // Try to pick articles from preferred categories first
        for (const preferredCat of sortedPrefs) {
            if (generated.length >= count) break;

            const matchingArticles = availableArticles.filter(a => a.category === preferredCat);
            if (matchingArticles.length > 0) {
                // Shuffle matching articles
                const shuffled = matchingArticles.sort(() => 0.5 - Math.random());
                generated.push(shuffled[0]);

                // Remove the selected article from available pool
                availableArticles = availableArticles.filter(a => a.id !== shuffled[0].id);
            }
        }

        // Fill remaining slots with random articles
        while (generated.length < count && availableArticles.length > 0) {
            const RandomIndex = Math.floor(Math.random() * availableArticles.length);
            generated.push(availableArticles[RandomIndex]);
            availableArticles.splice(RandomIndex, 1);
        }

        // Add generated timestamps
        const now = new Date();
        return generated.map((article, index) => ({
            ...article,
            // Override timestamp for newly generated daily news
            timestamp: `há ${index + 1} hora(s)`
        }));
    }
};
