'use client';

import React, { useEffect, useState } from 'react';
import { getTopPreference, recordCategoryView } from '@/lib/userPreferences';
import { getArticlesByCategory, getLatestArticles } from '@/lib/articles';
import MixedNewsBand from './MixedNewsBand';

export default function RecommendedArticles({ currentArticleId, fallbackCategory }) {
    const [recommended, setRecommended] = useState([]);

    useEffect(() => {
        // Registar visualização desta categoria
        recordCategoryView(fallbackCategory);
        
        // Identificar a categoria principal do utilizador
        const preferredCat = getTopPreference(fallbackCategory);
        
        const fetchRecommended = async () => {
            // Obter os artigos dessa mesma categoria
            let candidates = await getArticlesByCategory(preferredCat);
            candidates = candidates.filter(a => a.id !== currentArticleId);
            
            // Se a categoria tiver poucos artigos, misturar com artigos gerais para não ficar vazio
            if (candidates.length < 4) {
                let others = await getLatestArticles(15);
                others = others.filter(a => 
                    a.id !== currentArticleId && 
                    a.categorySlug !== preferredCat
                );
                // Aleatorizar um pouco os outros
                const shuffledOthers = others.sort(() => 0.5 - Math.random());
                candidates = [...candidates, ...shuffledOthers].slice(0, 6);
            } else {
                candidates = candidates.sort(() => 0.5 - Math.random()).slice(0, 6);
            }
            
            setRecommended(candidates);
        };
        
        fetchRecommended();
    }, [currentArticleId, fallbackCategory]);

    if (recommended.length === 0) return null;

    return (
        <div style={{ marginTop: '2rem' }}>
            <MixedNewsBand 
                articles={recommended} 
                variant="carousel-band" 
                title="Poderá Gostar" 
                subtitle="Recomendado para si"
            />
        </div>
    );
}
