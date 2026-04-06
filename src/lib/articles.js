import { supabase } from './supabase';
import { allSatiricalArticles } from '../data/satiricalNews';

/**
 * Map a Supabase `noticias` row to the article shape used by components.
 */
export function mapSupabaseArticle(row) {
    return {
        id: row.id,
        title: row.titulo,
        summary: row.meta_description || '',
        content: row.conteudo || '',
        category: row.categoria || '',
        categorySlug: (row.categoria || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-'),
        image: row.imagem_url || '/images/almada_float.png',
        timestamp: row.created_at
            ? new Date(row.created_at).toLocaleDateString('pt-PT', { day: 'numeric', month: 'long', year: 'numeric' })
            : '',
        author: 'Redação Panoramas',
        kicker: row.categoria ? row.categoria.toUpperCase() : '',
        readTime: row.conteudo
            ? `Leitura de ${Math.max(1, Math.ceil(row.conteudo.split(/\s+/).length / 200))} min`
            : 'Leitura de 3 min',
        comments: '0',
        tags: row.tags || [],
        seoMeta: {
            slug: row.slug,
            meta_description: row.meta_description || '',
        },
        _fromSupabase: true,
    };
}

/**
 * Fetch a single article by slug. Falls back to local data.
 */
export async function getArticleBySlug(slug) {
    if (supabase) {
        try {
            const { data, error } = await supabase
                .from('noticias')
                .select('*')
                .eq('slug', slug)
                .single();

            if (data && !error) {
                return mapSupabaseArticle(data);
            }
        } catch (e) {
            console.warn('[getArticleBySlug] Supabase failed, falling back:', e.message);
        }
    }

    // Fallback to local data
    const localArticle = allSatiricalArticles.find(a => a.seoMeta?.slug === slug);
    return localArticle ? { ...localArticle, _fromSupabase: false } : null;
}

/**
 * Fetch latest articles from Supabase. Returns empty array if unavailable.
 */
export async function getLatestArticles(limit = 10) {
    if (!supabase) return [];

    try {
        const { data, error } = await supabase
            .from('noticias')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(limit);

        if (error) throw error;
        return (data || []).map(mapSupabaseArticle);
    } catch (e) {
        console.warn('[getLatestArticles] Supabase failed:', e.message);
        return [];
    }
}
