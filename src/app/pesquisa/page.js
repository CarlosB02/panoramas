'use client';

import { Suspense } from 'react';
import SearchContent from './SearchContent';

export default function SearchPage() {
    return (
        <Suspense fallback={<div className="container" style={{ padding: '60px 0', textAlign: 'center' }}>A carregar resultados...</div>}>
            <SearchContent />
        </Suspense>
    );
}
