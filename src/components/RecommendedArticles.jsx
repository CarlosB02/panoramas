'use client';

import React, { useEffect, useState } from 'react';
import { getTopPreference, recordCategoryView } from '@/lib/userPreferences';
import { allSatiricalArticles } from '@/data/satiricalNews';
import MixedNewsBand from './MixedNewsBand';

export default function RecommendedArticles({ currentArticleId, fallbackCategory }) {
    const [recommended, setRecommended] = useState([]);

    useEffect(() => {
        // Registar visualização desta categoria
        recordCategoryView(fallbackCategory);
        
        // Identificar a categoria principal do utilizador
        const preferredCat = getTopPreference(fallbackCategory);
        
        // Obter os artigos dessa mesma categoria
        let candidates = allSatiricalArticles.filter(a => 
            a.id !== currentArticleId && 
            (a.categorySlug === preferredCat || a.category === preferredCat)
        );
        
        // Se a categoria tiver poucos artigos, misturar com artigos gerais para não ficar vazio
        if (candidates.length < 4) {
            const others = allSatiricalArticles.filter(a => 
                a.id !== currentArticleId && 
                a.categorySlug !== preferredCat
            );
            // Aleatorizar um pouco os outros (pseudo-random para dar vibe diferente)
            const shuffledOthers = others.sort(() => 0.5 - Math.random());
            candidates = [...candidates, ...shuffledOthers].slice(0, 6);
        } else {
            // Aleatorizar dentro da categoria também é fixe
            candidates = candidates.sort(() => 0.5 - Math.random()).slice(0, 6);
        }
        
        setRecommended(candidates);
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
