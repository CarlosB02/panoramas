'use client';
import React, { useState, useEffect, useRef } from 'react';
import PortugalMap from '../../components/PortugalMap';
import './Meteorologia.css';

const PROXY = 'https://corsproxy.io/?';
const API_CITIES = 'https://api.ipma.pt/open-data/distrits-islands.json';
const API_FORECAST = 'https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/hp-daily-forecast-day0.json';
const API_WEATHER_TYPES = 'https://api.ipma.pt/open-data/weather-type-classe.json';

const WIND_SPEED_CLASSES = {
    1: 'Fraco', 2: 'Moderado', 3: 'Forte', 4: 'Muito Forte',
};

const WEATHER_ICONS = {
    1: 'icon-sun.png', 2: 'icon-ensolarado.png', 3: 'icon-ensolarado.png', 4: 'icon-nublado.png', 5: 'icon-nublado com sol.png',
    6: 'icon-rain.png', 7: 'icon-aguaceiros.png', 8: 'icon-trovoada.png', 9: 'icon-rain.png', 10: 'icon-rain.png',
    11: 'icon-rain.png', 12: 'icon-rain.png', 13: 'icon-rain.png', 14: 'icon-rain.png', 15: 'icon-rain.png',
    16: 'icon-fog.png', 17: 'icon-fog.png', 18: 'icon-snow.png', 19: 'icon-trovoada.png', 20: 'icon-trovoada.png',
    21: 'icon-frozen.png', 22: 'icon-frozen.png', 23: 'icon-trovoada.png', 24: 'icon-nublado.png', 25: 'icon-nublado com sol.png',
    26: 'icon-fog.png', 27: 'icon-nublado.png', 28: 'icon-snow.png', 29: 'icon-trovoada.png',
};

const getTempIcon = (tMax) => {
    const t = parseFloat(tMax);
    if (isNaN(t)) return 'icon-medium temperature.png';
    if (t <= 10) return 'icon-low temperature.png';
    if (t >= 26) return 'icon-hot temperature.png';
    return 'icon-medium temperature.png';
};

// Maps weather type IDs to atmospheric condition categories
const getWeatherCondition = (idWeatherType) => {
    if ([1, 2].includes(idWeatherType)) return 'sunny';
    if ([3, 5, 24, 25].includes(idWeatherType)) return 'partlycloudy';
    if ([4, 27].includes(idWeatherType)) return 'cloudy';
    if ([6, 7, 9, 10, 11, 12, 13, 14, 15].includes(idWeatherType)) return 'rain';
    if ([8, 19, 20, 23, 29].includes(idWeatherType)) return 'thunderstorm';
    if ([16, 17, 26].includes(idWeatherType)) return 'fog';
    if ([18, 21, 22, 28].includes(idWeatherType)) return 'snow';
    return 'cloudy';
};

// Maps IPMA city names to custom icon filenames
const getCityIcon = (cityName) => {
    if (!cityName) return null;
    const nameMap = {
        'Viana do Castelo': 'viana',
        'Faro': 'faro', // Opcional, o fallback lidaria, mas mantemos consistência
    };
    const mapped = nameMap[cityName];
    if (mapped) return `/icons/${mapped}.png`;
    
    return `/icons/${cityName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-')}.png`;
};

// Rain particle component
const RainCanvas = ({ intensity = 1, active }) => {
    const canvasRef = useRef(null);
    const animRef = useRef(null);

    useEffect(() => {
        if (!active) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const drops = Array.from({ length: Math.floor(80 * intensity) }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            speed: 8 + Math.random() * 8,
            length: 12 + Math.random() * 16,
            opacity: 0.25 + Math.random() * 0.4,
        }));

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drops.forEach(d => {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(174, 214, 241, ${d.opacity})`;
                ctx.lineWidth = 1;
                ctx.moveTo(d.x, d.y);
                ctx.lineTo(d.x - 2, d.y + d.length);
                ctx.stroke();
                d.y += d.speed;
                if (d.y > canvas.height) {
                    d.y = -d.length;
                    d.x = Math.random() * canvas.width;
                }
            });
            animRef.current = requestAnimationFrame(draw);
        };
        draw();
        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener('resize', resize);
        };
    }, [active, intensity]);

    if (!active) return null;
    return <canvas ref={canvasRef} className="weather-canvas rain-canvas" />;
};

// Snow particle component
const SnowCanvas = ({ active }) => {
    const canvasRef = useRef(null);
    const animRef = useRef(null);

    useEffect(() => {
        if (!active) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
        resize();
        window.addEventListener('resize', resize);

        const flakes = Array.from({ length: 60 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: 2 + Math.random() * 4,
            speed: 1 + Math.random() * 2,
            drift: (Math.random() - 0.5) * 0.5,
            opacity: 0.5 + Math.random() * 0.5,
        }));

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            flakes.forEach(f => {
                ctx.beginPath();
                ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${f.opacity})`;
                ctx.fill();
                f.y += f.speed;
                f.x += f.drift;
                if (f.y > canvas.height) { f.y = -10; f.x = Math.random() * canvas.width; }
            });
            animRef.current = requestAnimationFrame(draw);
        };
        draw();
        return () => { cancelAnimationFrame(animRef.current); window.removeEventListener('resize', resize); };
    }, [active]);

    if (!active) return null;
    return <canvas ref={canvasRef} className="weather-canvas snow-canvas" />;
};

// Lightning flash component
const LightningEffect = ({ active }) => {
    const [flash, setFlash] = useState(false);
    useEffect(() => {
        if (!active) return;
        const interval = setInterval(() => {
            const r = Math.random();
            if (r > 0.7) {
                setFlash(true);
                setTimeout(() => setFlash(false), 80 + Math.random() * 120);
            }
        }, 2000 + Math.random() * 3000);
        return () => clearInterval(interval);
    }, [active]);
    if (!active) return null;
    return <div className={`lightning-flash ${flash ? 'visible' : ''}`} />;
};

const Meteorologia = () => {
    const [cities, setCities] = useState([]);
    const [weatherTypes, setWeatherTypes] = useState({});
    const [selectedCityId, setSelectedCityId] = useState(1110600);
    const [theme, setTheme] = useState('classic');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sevenDayForecast, setSevenDayForecast] = useState([]);

    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                setLoading(true);
                const [citiesRes, weatherRes] = await Promise.all([
                    fetch(PROXY + encodeURIComponent(API_CITIES)),
                    fetch(PROXY + encodeURIComponent(API_WEATHER_TYPES)),
                ]);
                const citiesData = await citiesRes.json();
                const weatherData = await weatherRes.json();
                setCities(citiesData.data || []);
                const wtMap = {};
                (weatherData.data || []).forEach(wt => { wtMap[wt.idWeatherType] = wt.descWeatherTypePT; });
                setWeatherTypes(wtMap);
                setError(null);
            } catch (err) {
                setError('Não foi possível carregar os dados meteorológicos iniciais.');
            }
        };
        fetchInitialData();
    }, []);

    useEffect(() => {
        const fetchCityForecast = async () => {
            try {
                setLoading(true);
                const forecastUrl = `https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${selectedCityId}.json`;
                const forecastRes = await fetch(PROXY + encodeURIComponent(forecastUrl));
                const forecastData = await forecastRes.json();
                let forecastList = forecastData.data || [];
                if (forecastList.length > 0 && forecastList.length < 7) {
                    const lastDay = forecastList[forecastList.length - 1];
                    for (let i = 1; i <= 7 - forecastList.length; i++) {
                        const d = new Date(lastDay.forecastDate);
                        d.setDate(d.getDate() + i);
                        forecastList.push({ ...lastDay, forecastDate: d.toISOString().split('T')[0] });
                    }
                }
                setSevenDayForecast(forecastList);
                setError(null);
            } catch (err) {
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
    const conditionIcon = selectedForecast ? (WEATHER_ICONS[selectedForecast.idWeatherType] || 'icon-medium temperature.png') : 'icon-medium temperature.png';
    const windDir = selectedForecast?.predWindDir || '—';
    const windSpeed = selectedForecast ? (WIND_SPEED_CLASSES[selectedForecast.classWindSpeed] || '—') : '—';
    const weatherCondition = selectedForecast ? getWeatherCondition(selectedForecast.idWeatherType) : 'cloudy';

    const getThemeConfig = () => {
        switch (theme) {
            case 'dynamic': return {
                title: 'Meteorologia',
                subtitle: 'Previsão meteorológica para Portugal — Fonte: IPMA',
                citySelector: 'Selecionar cidade:',
                todayPrevisão: 'Previsão para hoje',
                tempLabel: 'Temperatura', condLabel: 'Condição', rainLabel: 'Prob. de Chuva', windLabel: 'Vento',
                forecastTitle: 'Previsão para os próximos dias', todayLabel: 'Hoje',
                footer: 'Fonte: Instituto Português do Mar e da Atmosfera (IPMA) — Atualização diária'
            };
            case 'classic':
            default: return {
                title: 'Meteorologia',
                subtitle: 'Previsão meteorológica para Portugal — Fonte: IPMA',
                citySelector: <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><img src="/icons/meteorologia/icon-select.png" width="18" height="18" alt="select"/>Selecionar cidade:</span>,
                todayPrevisão: 'Previsão para hoje',
                tempLabel: 'Temperatura', condLabel: 'Condição', rainLabel: 'Prob. de Chuva', windLabel: 'Vento',
                forecastTitle: 'Previsão para os próximos dias', todayLabel: 'Hoje',
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

    const isDynamic = theme === 'dynamic';
    const isRain = isDynamic && ['rain'].includes(weatherCondition);
    const isThunder = isDynamic && weatherCondition === 'thunderstorm';
    const isSnow = isDynamic && weatherCondition === 'snow';

    return (
        <div className={`meteorologia-page theme-${theme} ${isDynamic ? `dynamic-${weatherCondition}` : ''}`}>
            {/* Weather FX Layer */}
            {isDynamic && (
                <div className="weather-fx-layer">
                    <RainCanvas active={isRain} intensity={1} />
                    <RainCanvas active={isThunder} intensity={1.5} />
                    <SnowCanvas active={isSnow} />
                    <LightningEffect active={isThunder} />
                    {weatherCondition === 'fog' && <div className="fog-overlay" />}
                    {weatherCondition === 'sunny' && <div className="sun-glow" />}
                    {weatherCondition === 'partlycloudy' && <div className="sun-glow dim" />}
                </div>
            )}

            <div className="container">
                {/* Page Title */}
                <div className="meteo-header">
                    <div className="theme-title-container">
                        <h1>{t.title}</h1>
                        <span className="theme-subtitle">{t.subtitle}</span>
                    </div>
                </div>

                {/* Style Switch */}
                <div className="style-switch">
                    <span className="switch-label">Estilo:</span>
                    <button className={`switch-btn ${theme === 'classic' ? 'active' : ''}`} onClick={() => setTheme('classic')} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        <img src="/icons/meteorologia/icon-classico.png" width="16" height="16" alt=""/> Clássico
                    </button>
                    <button className={`switch-btn ${theme === 'dynamic' ? 'active' : ''}`} onClick={() => setTheme('dynamic')} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        <img src="/icons/meteorologia/icon-aguaceiros.png" width="16" height="16" alt=""/> Dinâmico
                    </button>
                </div>

                {loading && (
                    <div className="meteo-loading">
                        <div className="loading-spinner"></div>
                        <p>A carregar dados...</p>
                    </div>
                )}

                {error && <div className="meteo-error"><p>{error}</p></div>}

                {!loading && !error && (
                    <div className="meteo-content">
                        {/* City Selector */}
                        <div className="city-selector">
                            <label htmlFor="city-select">{t.citySelector}</label>
                            <select id="city-select" value={selectedCityId} onChange={(e) => setSelectedCityId(Number(e.target.value))}>
                                {sortedCities.map(city => (
                                    <option key={city.globalIdLocal} value={city.globalIdLocal}>{city.local}</option>
                                ))}
                            </select>
                        </div>

                        <div className="meteo-grid">
                            {/* Map Panel */}
                            <div className="map-panel">
                                <PortugalMap cities={cities} selectedCityId={selectedCityId} onCitySelect={setSelectedCityId} theme={theme} />
                            </div>

                            {/* Weather Cards Panel */}
                            <div className="weather-panel">
                                {/* City Name Banner */}
                                <div className="city-banner">
                                    <div className="theme-city-name">
                                        <div className="city-name-with-icon">
                                            {selectedCity && (
                                                <img 
                                                    src={getCityIcon(selectedCity.local)} 
                                                    alt={`Ícone de ${selectedCity.local}`} 
                                                    className="district-icon"
                                                    onError={(e) => { 
                                                        console.error('Erro ao carregar o ícone:', getCityIcon(selectedCity.local));
                                                    }}
                                                />
                                            )}
                                            <h2 className="city-name-text">{selectedCity?.local || 'Lisboa'}</h2>
                                        </div>
                                        <span className="city-subtitle">{t.todayPrevisão}</span>
                                    </div>
                                    {selectedCity && (
                                        <div className="city-image-container">
                                            <img
                                                src={`/images/cities/${selectedCity.local.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-')}.jpg`}
                                                alt={`Monumento de ${selectedCity.local}`}
                                                onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('no-image'); }}
                                                className="city-monument-img"
                                            />
                                        </div>
                                    )}
                                </div>

                                {/* Data Cards Grid */}
                                <div className="data-cards">
                                    <div className="data-card card-temp">
                                        <div className="card-label"><span className="theme-label">{t.tempLabel}</span></div>
                                        <div className="card-icon">
                                            <img src={`/icons/meteorologia/${getTempIcon(selectedForecast?.tMax)}`} width="36" height="36" alt="temperatura"/>
                                        </div>
                                        <div className="card-value">
                                            {selectedForecast ? (
                                                <><span className="temp-max">{selectedForecast.tMax}°C</span><span className="temp-separator">/</span><span className="temp-min">{selectedForecast.tMin}°C</span></>
                                            ) : '—'}
                                        </div>
                                        <div className="card-sub">Máx: {selectedForecast?.tMax || '—'}°C | Mín: {selectedForecast?.tMin || '—'}°C</div>
                                    </div>

                                    <div className="data-card card-condition">
                                        <div className="card-label"><span className="theme-label">{t.condLabel}</span></div>
                                        <div className="card-icon">
                                            <img src={`/icons/meteorologia/${conditionIcon}`} width="36" height="36" alt="condição"/>
                                        </div>
                                        <div className="card-value card-value-text">{conditionText}</div>
                                    </div>

                                    <div className="data-card card-rain">
                                        <div className="card-label"><span className="theme-label">{t.rainLabel}</span></div>
                                        <div className="card-icon">
                                            <img src="/icons/meteorologia/icon-rain.png" width="36" height="36" alt="chuva"/>
                                        </div>
                                        <div className="card-value">{selectedForecast ? `${parseFloat(selectedForecast.precipitaProb).toFixed(0)}%` : '—'}</div>
                                        <div className="card-sub">Probabilidade de precipitação</div>
                                    </div>

                                    <div className="data-card card-wind">
                                        <div className="card-label"><span className="theme-label">{t.windLabel}</span></div>
                                        <div className="card-icon">
                                            <img src="/icons/meteorologia/icon-wind.png" width="36" height="36" alt="vento"/>
                                        </div>
                                        <div className="card-value">{windDir}</div>
                                        <div className="card-sub">Intensidade: {windSpeed}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Multi-Day Forecast */}
                        {sevenDayForecast.length > 0 && (
                            <div className="multi-day-forecast">
                                <h3 className="forecast-title">{t.forecastTitle}</h3>
                                <div className="forecast-row">
                                    {sevenDayForecast.map((day, index) => (
                                        <div key={day.forecastDate + index} className={`forecast-col ${index === 0 ? 'today-col' : ''}`}>
                                            <div className="f-day">{index === 0 ? t.todayLabel : formatDateStr(day.forecastDate)}</div>
                                            <div className="f-icon">
                                                <img src={`/icons/meteorologia/${WEATHER_ICONS[day.idWeatherType] || 'icon-medium temperature.png'}`} width="28" height="28" alt="condição" style={{margin: '0 auto', display: 'block'}}/>
                                            </div>
                                            <div className="f-temps">
                                                <span className="f-tmax">{day.tMax}°</span>
                                                <span className="f-tmin">{day.tMin}°</span>
                                            </div>
                                            <div className="f-details">
                                                <span className="f-detail-item" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><img src="/icons/meteorologia/icon-wind.png" width="14" height="14" alt=""/>{day.predWindDir}</span>
                                                <span className="f-detail-item" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><img src="/icons/meteorologia/icon-rain.png" width="14" height="14" alt=""/>{parseFloat(day.precipitaProb).toFixed(0)}%</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="meteo-footer">
                            <p className="theme-footer-text">{t.footer}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Meteorologia;
