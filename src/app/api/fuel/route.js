import { NextResponse } from 'next/server';
import { fetchFuelPrices } from '@/lib/fuel';

/**
 * API Route Handler for fuel prices
 * Provides a backend proxy for the DGEG API to avoid CORS and handle caching.
 */
export async function GET() {
    try {
        const prices = await fetchFuelPrices();
        
        if (!prices || (!prices.gasolina95 && !prices.gasoleo && !prices.gpl)) {
            return NextResponse.json(
                { error: 'Could not fetch prices from DGEG' },
                { status: 503 }
            );
        }

        return NextResponse.json(prices, {
            headers: {
                'Cache-Control': 'public, s-maxage=21600, stale-while-revalidate=86400', // 6 hours
            },
        });
    } catch (error) {
        console.error('[API Fuel] Handler error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
