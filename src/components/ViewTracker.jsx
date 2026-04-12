'use client';

import { useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export default function ViewTracker({ slug }) {
    useEffect(() => {
        if (!slug || !supabase) return;

        const viewed = sessionStorage.getItem(`viewed_${slug}`);
        if (viewed) return;

        supabase.rpc("increment_views", {
            article_slug: slug,
        }).then(() => {
            sessionStorage.setItem(`viewed_${slug}`, "true");
        }).catch(err => {
            console.warn('Failed to increment views. Checking if Supabase functions exist.', err);
        });
    }, [slug]);

    return null;
}
