/**
 * Utility to fetch fuel prices from DGEG (Direção-Geral de Energia e Geologia)
 */

const FUEL_IDS = {
    GASOLINA_95: 3201,
    GASOLEO_SIMPLES: 2101,
    GPL_AUTO: 1120
};

const BASE_URL = 'https://precoscombustiveis.dgeg.gov.pt/api/PrecoComb/PMD';

export async function fetchFuelPrices() {
    const today = new Date();
    const lastWeek = new Date();
    lastWeek.setDate(today.getDate() - 7);

    const formatDate = (date) => date.toISOString().split('T')[0];

    const dataIni = formatDate(lastWeek);
    const dataFim = formatDate(today);

    const results = {
        gasolina95: null,
        gasoleo: null,
        gpl: null,
        lastUpdate: new Date().toISOString()
    };

    try {
        // Fetch all 3 main fuels
        const requests = Object.entries(FUEL_IDS).map(async ([key, id]) => {
            const url = `${BASE_URL}?idsTiposComb=${id}&dataIni=${dataIni}&dataFim=${dataFim}&qtdPorPagina=5&pagina=1&orderDesc=1`;
            
            try {
                const response = await fetch(url, {
                    headers: {
                        'Accept': 'application/json',
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
                    },
                    next: { revalidate: 21600 } // Cache for 6 hours
                });

                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                
                const data = await response.json();
                
                // The API returns { resultado: [...] }
                if (data && data.resultado && data.resultado.length > 0) {
                    const latest = data.resultado[0];
                    // Price usually comes as "1,689 €" or similar string
                    const priceRaw = latest.PrecoMedio || "";
                    // Keep just the numeric part and normalize for our UI
                    const priceFormatted = priceRaw.replace(',', '.').replace(' €', '').trim();
                    
                    if (key === 'GASOLINA_95') results.gasolina95 = priceFormatted;
                    if (key === 'GASOLEO_SIMPLES') results.gasoleo = priceFormatted;
                    if (key === 'GPL_AUTO') results.gpl = priceFormatted;
                }
            } catch (err) {
                console.error(`Error fetching fuel ${key}:`, err.message);
            }
        });

        await Promise.all(requests);
        return results;

    } catch (error) {
        console.error('Failed to fetch fuel prices:', error);
        return null;
    }
}
