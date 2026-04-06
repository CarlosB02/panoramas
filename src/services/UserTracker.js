const PREFS_KEY = 'fn_user_prefs';

export const UserTracker = {
    getPreferences: () => {
        try {
            const prefs = localStorage.getItem(PREFS_KEY);
            if (prefs) {
                return JSON.parse(prefs);
            }
        } catch (e) {
            console.error("Failed to parse user preferences", e);
        }
        return { categories: {} };
    },

    trackCategoryClick: (category) => {
        try {
            const prefs = UserTracker.getPreferences();
            prefs.categories[category] = (prefs.categories[category] || 0) + 1;
            localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
        } catch (e) {
            console.error("Failed to save user preferences", e);
        }
    }
};
