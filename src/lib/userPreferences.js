'use client';

const PREFS_KEY = 'panoramas_user_prefs';

export function recordCategoryView(categorySlug) {
    if (!categorySlug || typeof window === 'undefined') return;
    
    try {
        const stored = localStorage.getItem(PREFS_KEY);
        const prefs = stored ? JSON.parse(stored) : {};
        
        prefs[categorySlug] = (prefs[categorySlug] || 0) + 1;
        
        localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
    } catch (e) {
        console.warn('Could not save user preference', e);
    }
}

export function getTopPreference(fallback = null) {
    if (typeof window === 'undefined') return fallback;
    
    try {
        const stored = localStorage.getItem(PREFS_KEY);
        if (!stored) return fallback;
        
        const prefs = JSON.parse(stored);
        
        let topCategory = fallback;
        let maxViews = 0;
        
        for (const [category, views] of Object.entries(prefs)) {
            if (views > maxViews) {
                maxViews = views;
                topCategory = category;
            }
        }
        
        return topCategory || fallback;
    } catch (e) {
        return fallback;
    }
}
