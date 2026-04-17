import { supabase } from './supabase';

/**
 * Map a Supabase `noticias` row to the article shape used by components.
 */
export function mapSupabaseArticle(row) {
    const title = row.titulo || row.titulo_reescrito || '';
    const content = row.conteudo || row.conteudo_markdown || '';
    
    // Attempt to parse a summary if missing
    let summary = row.meta_description || '';
    if (!summary && content) {
        // Strip markdown headers and take the first real paragraph as a fallback summary
        const paragraphs = content.split('\n').filter(p => p.trim() !== '' && !p.startsWith('#'));
        if (paragraphs.length > 0) {
            summary = paragraphs[0].substring(0, 200);
            if (summary.length === 200) summary += '...';
        }
    }

    return {
        id: row.id,
        title: title,
        summary: summary,
        content: content,
        category: row.categoria || '',
        categorySlug: (row.categoria || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-'),
        image: row.imagem_url || row.image_url || null,
        timestamp: row.created_at
            ? new Date(row.created_at).toLocaleDateString('pt-PT', { day: 'numeric', month: 'long', year: 'numeric' })
            : '',
        rawDate: row.created_at || null,
        author: 'Redação Panoramas',
        kicker: row.categoria ? row.categoria.toUpperCase() : '',
        readTime: row.leitura_estimada || (content
            ? `Leitura de ${Math.max(1, Math.ceil(content.split(/\s+/).length / 200))} min`
            : 'Leitura de 3 min'),
        comments: '0',
        tags: row.tags || [],
        seoMeta: {
            slug: row.slug,
            meta_description: summary,
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

    // No data found
    return null;
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

/**
 * Fetch most viewed articles from Supabase. Falls back to local data.
 */
export async function getTrendingArticles(limit = 6) {
    if (supabase) {
        try {
            const { data, error } = await supabase
                .from('noticias')
                .select('*')
                .order('views', { ascending: false })
                .limit(limit);

            if (data && !error && data.length > 0) {
                return data.map(mapSupabaseArticle);
            }
        } catch (e) {
            console.warn('[getTrendingArticles] Supabase failed, falling back:', e.message);
        }
    }

    return [];
}

/**
 * Search articles from Supabase and merge with local data.
 */
export async function searchArticles(queryStr) {
    if (!queryStr) return [];
    
    let supabaseResults = [];
    if (supabase) {
        try {
            const unaccentedQuery = queryStr.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            let orQuery = `titulo_reescrito.ilike.%${queryStr}%,conteudo_markdown.ilike.%${queryStr}%,categoria.ilike.%${queryStr}%`;
            if (unaccentedQuery !== queryStr) {
                orQuery += `,titulo_reescrito.ilike.%${unaccentedQuery}%,conteudo_markdown.ilike.%${unaccentedQuery}%,categoria.ilike.%${unaccentedQuery}%`;
            }
            
            const { data, error } = await supabase
                .from('noticias')
                .select('*')
                .or(orQuery)
                .limit(50);

            if (data && !error) {
                supabaseResults = data.map(mapSupabaseArticle);
            }
        } catch (e) {
            console.warn('[searchArticles] Supabase failed:', e.message);
        }
    }

    return supabaseResults;
}

/**
 * Fetch articles for a specific category from Supabase and merge with local data.
 */
export async function getArticlesByCategory(categoryName) {
    if (!categoryName) return [];
    
    let supabaseResults = [];
    if (supabase) {
        try {
            const unaccentedCategory = categoryName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            const { data, error } = await supabase
                .from('noticias')
                .select('*')
                .or(`categoria.ilike.%${categoryName}%,categoria.ilike.%${unaccentedCategory}%`)
                .order('created_at', { ascending: false })
                .limit(20);

            if (data && !error) {
                supabaseResults = data.map(mapSupabaseArticle);
            }
        } catch (e) {
            console.warn('[getArticlesByCategory] Supabase failed:', e.message);
        }
    }

    return supabaseResults;
}
