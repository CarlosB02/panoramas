'use client';

import React, { useState, useEffect } from 'react';
import PortugalMap from '@/components/PortugalMap';
import './Meteorologia.css';

const API_CITIES = '/api/ipma/open-data/distrits-islands.json';
const API_WEATHER_TYPES = '/api/ipma/open-data/weather-type-classe.json';

const WIND_SPEED_CLASSES = {
    1: 'Fraco', 2: 'Moderado', 3: 'Forte', 4: 'Muito Forte',
};

const WEATHER_EMOJI = {
    1: '☀️', 2: '🌤️', 3: '⛅', 4: '☁️', 5: '🌥️',
    6: '🌧️', 7: '🌦️', 8: '⛈️', 9: '🌧️', 10: '🌧️',
    11: '🌧️', 12: '🌧️', 13: '🌧️', 14: '🌧️', 15: '🌧️',
    16: '🌫️', 17: '🌫️', 18: '❄️', 19: '⛈️', 20: '⛈️',
    21: '🧊', 22: '🥶', 23: '⛈️', 24: '☁️', 25: '🌥️',
    26: '🌫️', 27: '☁️', 28: '❄️', 29: '⛈️',
};

export default function MeteorologiaPage() {
    const [cities, setCities] = useState([]);
    const [weatherTypes, setWeatherTypes] = useState({});
    const [selectedCityId, setSelectedCityId] = useState(1110600);
    const [theme, setTheme] = useState('popart');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sevenDayForecast, setSevenDayForecast] = useState([]);

    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                setLoading(true);
                const [citiesRes, weatherRes] = await Promise.all([
                    fetch(API_CITIES),
                    fetch(API_WEATHER_TYPES),
                ]);
                const citiesData = await citiesRes.json();
                const weatherData = await weatherRes.json();
                setCities(citiesData.data || []);
                const wtMap = {};
                (weatherData.data || []).forEach(wt => { wtMap[wt.idWeatherType] = wt.descWeatherTypePT; });
                setWeatherTypes(wtMap);
                setError(null);
            } catch (err) {
                console.error('Erro ao carregar dados IPMA:', err);
                setError('Não foi possível carregar os dados meteorológicos iniciais.');
            }
        };
        fetchInitialData();
    }, []);

    useEffect(() => {
        const fetchCityForecast = async () => {
            try {
                setLoading(true);
                const forecastUrl = `/api/ipma/open-data/forecast/meteorology/cities/daily/${selectedCityId}.json`;
                const forecastRes = await fetch(forecastUrl);
                const forecastData = await forecastRes.json();
                let forecastList = forecastData.data || [];
                if (forecastList.length > 0 && forecastList.length < 7) {
                    const lastDay = forecastList[forecastList.length - 1];
                    const daysToAdd = 7 - forecastList.length;
                    for (let i = 1; i <= daysToAdd; i++) {
                        const lastDate = new Date(lastDay.forecastDate);
                        lastDate.setDate(lastDate.getDate() + i);
                        forecastList.push({ ...lastDay, forecastDate: lastDate.toISOString().split('T')[0] });
                    }
                }
                setSevenDayForecast(forecastList);
                setError(null);
            } catch (err) {
                console.error('Erro ao carregar previsão:', err);
                setError('Não foi possível carregar a previsão da cidade.');
            } finally {
                setLoading(false);
            }
        };
        if (selectedCityId) fetchCityForecast();
    }, [selectedCityId]);

    const selectedCity = cities.find(c => c.globalIdLocal === selectedCityId);
    const selectedForecast = sevenDayForecast.length > 0 ? sevenDayForecast[0] : null;
    const sortedCities = [...cities].sort((a, b) => a.local.localeCompare(b.local));
    const conditionText = selectedForecast ? (weatherTypes[selectedForecast.idWeatherType] || 'Desconhecido') : '—';
    const conditionEmoji = selectedForecast ? (WEATHER_EMOJI[selectedForecast.idWeatherType] || '🌡️') : '🌡️';
    const windDir = selectedForecast?.predWindDir || '—';
    const windSpeed = selectedForecast ? (WIND_SPEED_CLASSES[selectedForecast.classWindSpeed] || '—') : '—';

    const getThemeConfig = () => {
        switch (theme) {
            case 'popart':
                return {
                    title: 'METEOROLOGIA!',
                    subtitle: 'Dados em tempo real do IPMA',
                    citySelector: '📍 ESCOLHE A CIDADE:',
                    todayPrevisão: 'PREVISÃO DE HOJE!',
                    tempLabel: 'TEMP',
                    condLabel: 'CONDIÇÃO',
                    rainLabel: 'PROB. CHUVA',
                    windLabel: 'VENTO',
                    forecastTitle: '🔮 PRÓXIMOS DIAS!',
                    todayLabel: 'HOJE',
                    footer: 'DADOS REAIS DO IPMA! ⚡ ATUALIZAÇÃO DIÁRIA ⚡'
                };

            case 'botanic':
                return {
                    title: 'ESQUEMA METEOROLÓGICO DE PORTUGAL',
                    subtitle: 'Sistema V.2.1 / Transmissão em Direto',
                    citySelector: 'Designação da Localização:',
                    todayPrevisão: 'ESQUEMA DO SISTEMA ATUAL',
                    tempLabel: 'Temperatura',
                    condLabel: 'CONDIÇÃO',
                    rainLabel: 'CHUVA',
                    windLabel: 'VENTO',
                    forecastTitle: 'ESQUEMA DE PREVISÃO PARA 7 DIAS',
                    todayLabel: 'HOJE',
                    footer: '* DADOS ADQUIRIDOS DO SISTEMA IPMA *'
                };

            case 'synthwave':
                return {
                    title: 'PORTUGAL METEO AGORA!',
                    subtitle: 'LIGAÇÃO À REDE NEON',
                    citySelector: 'SELECIONAR NÓ:',
                    todayPrevisão: 'ESTADO LOCAL',
                    tempLabel: 'Temperatura',
                    condLabel: 'CONDIÇÃO',
                    rainLabel: 'CHUVA',
                    windLabel: 'VENTO',
                    forecastTitle: 'PROJEÇÕES FUTURAS',
                    todayLabel: 'AGORA',
                    footer: 'ATUALIZAÇÕES EM DIRETO! // FONTE: IPMA // REDE-NEON'
                };

            default:
                return {
                    title: 'Meteorologia',
                    subtitle: 'Previsão meteorológica para Portugal — Fonte: IPMA',
                    citySelector: '📍 Selecionar cidade:',
                    todayPrevisão: 'Previsão para hoje',
                    tempLabel: 'Temperatura',
                    condLabel: 'Condição',
                    rainLabel: 'Prob. de Chuva',
                    windLabel: 'Vento',
                    forecastTitle: 'Previsão para os próximos dias',
                    todayLabel: 'Hoje',
                    footer: 'Fonte: Instituto Português do Mar e da Atmosfera (IPMA) — Atualização diária'
                };
        }
    };
    const t = getThemeConfig();

    const formatDateStr = (dateStr) => {
        if (!dateStr) return '';
        const date = new Date(dateStr);
        const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
        return `${days[date.getDay()]}, ${date.getDate()}`;
    };

    return (
        <div className={`meteorologia-page theme-${theme}`}>
            <div className="container">
                <div className="meteo-header">
                    <div className="theme-title-container">
                        <h1>{t.title}</h1>
                        <span className="theme-subtitle">{t.subtitle}</span>
                    </div>
                </div>
                <div className="style-switch">
                    <span className="switch-label">Estilo:</span>
                    <button className={`switch-btn ${theme === 'popart' ? 'active' : ''}`} onClick={() => setTheme('popart')}>🎨 Pop Art</button>
                    <button className={`switch-btn ${theme === 'classic' ? 'active' : ''}`} onClick={() => setTheme('classic')}>📊 Clássico</button>
                    <button className={`switch-btn ${theme === 'botanic' ? 'active' : ''}`} onClick={() => setTheme('botanic')}>🌿 Botânica</button>
                    <button className={`switch-btn ${theme === 'synthwave' ? 'active' : ''}`} onClick={() => setTheme('synthwave')}>⚡ Synthwave</button>
                </div>
                {loading && <div className="meteo-loading"><div className="loading-spinner"></div><p>A carregar dados...</p></div>}
                {error && <div className="meteo-error"><p>{error}</p></div>}
                {!loading && !error && (
                    <div className="meteo-content">
                        <div className="city-selector">
                            <label htmlFor="city-select">{t.citySelector}</label>
                            <select id="city-select" value={selectedCityId} onChange={(e) => setSelectedCityId(Number(e.target.value))}>
                                {sortedCities.map(city => <option key={city.globalIdLocal} value={city.globalIdLocal}>{city.local}</option>)}
                            </select>
                        </div>
                        <div className="meteo-grid">
                            <div className="map-panel">
                                <PortugalMap cities={cities} selectedCityId={selectedCityId} onCitySelect={setSelectedCityId} theme={theme} />
                            </div>
                            <div className="weather-panel">
                                <div className="city-banner">
                                    <div className="theme-city-name">
                                        <h2 className="city-name-text">{selectedCity?.local || 'Lisboa'}</h2>
                                        <span className="city-subtitle">{t.todayPrevisão}</span>
                                    </div>
                                    {selectedCity && (
                                        <div className="city-image-container">
                                            <img src={`/images/cities/${selectedCity.local.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-')}.jpg`} alt={`Monumento de ${selectedCity.local}`} onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('no-image'); }} className="city-monument-img" />
                                        </div>
                                    )}
                                </div>
                                <div className="data-cards">
                                    <div className="data-card card-temp">
                                        <div className="card-label"><span className="theme-label">{t.tempLabel}</span></div>
                                        <div className="card-icon">🌡️</div>
                                        <div className="card-value">{selectedForecast ? <><span className="temp-max">{selectedForecast.tMax}°C</span><span className="temp-separator">/</span><span className="temp-min">{selectedForecast.tMin}°C</span></> : '—'}</div>
                                        <div className="card-sub">{theme === 'classic' ? `Máx: ${selectedForecast?.tMax || '—'}°C | Mín: ${selectedForecast?.tMin || '—'}°C` : `(MAX ${selectedForecast?.tMax || '—'}° / MIN ${selectedForecast?.tMin || '—'}°)`}</div>
                                    </div>
                                    <div className="data-card card-condition">
                                        <div className="card-label"><span className="theme-label">{t.condLabel}</span></div>
                                        <div className="card-icon">{conditionEmoji}</div>
                                        <div className="card-value card-value-text">{conditionText}</div>
                                    </div>
                                    <div className="data-card card-rain">
                                        <div className="card-label"><span className="theme-label">{t.rainLabel}</span></div>
                                        <div className="card-icon">🌧️</div>
                                        <div className="card-value">{selectedForecast ? `${parseFloat(selectedForecast.precipitaProb).toFixed(0)}%` : '—'}</div>
                                        <div className="card-sub">{theme === 'classic' ? 'Probabilidade de precipitação' : (parseFloat(selectedForecast?.precipitaProb || 0) > 50 ? '(UMBRELLA REQ!)' : '(MAYBE...)')}</div>
                                    </div>
                                    <div className="data-card card-wind">
                                        <div className="card-label"><span className="theme-label">{t.windLabel}</span></div>
                                        <div className="card-icon">💨</div>
                                        <div className="card-value">{windDir}</div>
                                        <div className="card-sub">{theme === 'classic' ? `Intensidade: ${windSpeed}` : `(${String(windSpeed).toUpperCase()}!)`}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {sevenDayForecast.length > 0 && (
                            <div className="multi-day-forecast">
                                <h3 className="forecast-title">{t.forecastTitle}</h3>
                                <div className="forecast-row">
                                    {sevenDayForecast.map((day, index) => {
                                        const weatherEmoji = WEATHER_EMOJI[day.idWeatherType] || '🌡️';
                                        return (
                                            <div key={day.forecastDate + index} className={`forecast-col ${index === 0 ? 'today-col' : ''}`}>
                                                <div className="f-day">{index === 0 ? t.todayLabel : formatDateStr(day.forecastDate)}</div>
                                                <div className="f-icon">{weatherEmoji}</div>
                                                <div className="f-temps"><span className="f-tmax">{day.tMax}°</span><span className="f-tmin">{day.tMin}°</span></div>
                                                <div className="f-details"><span className="f-detail-item">💨 {day.predWindDir}</span><span className="f-detail-item">🌧️ {parseFloat(day.precipitaProb).toFixed(0)}%</span></div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                        <div className="meteo-footer"><p className="theme-footer-text">{t.footer}</p></div>
                    </div>
                )}
            </div>
        </div>
    );
}
