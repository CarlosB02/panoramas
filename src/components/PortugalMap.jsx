import React from 'react';

// Simplified SVG outline of Portugal continental
// Lat/Lon bounds: lat 36.96 - 42.15, lon -9.5 - -6.19
const LAT_MIN = 36.96;
const LAT_MAX = 42.15;
const LON_MIN = -9.5;
const LON_MAX = -6.19;
const SVG_W = 200;
const SVG_H = 340;

const latLonToSvg = (lat, lon) => {
    const x = ((lon - LON_MIN) / (LON_MAX - LON_MIN)) * SVG_W;
    const y = ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * SVG_H;
    return { x, y };
};

// Simplified Portugal continental outline path
const PORTUGAL_PATH = `
M 85,5 C 78,8 70,12 65,18 C 58,26 52,35 50,42
C 48,50 55,58 58,65 C 60,72 55,80 50,88
C 45,96 42,105 40,112 C 38,120 35,128 32,135
C 30,142 28,150 30,158 C 32,166 38,172 40,180
C 42,188 38,196 35,205 C 32,212 28,220 25,228
C 22,236 20,245 22,252 C 24,260 30,265 35,270
C 40,275 42,282 45,290 C 48,298 55,305 60,308
C 65,312 72,315 78,320 C 82,324 88,328 95,330
C 100,332 108,330 115,325
C 120,320 125,312 128,305
C 130,298 128,290 125,282
C 122,275 118,268 115,260
C 112,252 115,245 118,238
C 120,230 122,222 120,215
C 118,208 115,200 112,192
C 110,185 108,178 110,170
C 112,162 118,155 120,148
C 122,140 125,132 128,125
C 130,118 132,110 130,102
C 128,95 125,88 120,82
C 115,76 110,70 108,62
C 106,55 108,48 112,42
C 115,35 118,28 115,22
C 112,16 105,12 98,8
C 92,5 88,5 85,5 Z
`;

const PortugalMap = ({ cities, selectedCityId, onCitySelect, theme }) => {
    const isPopArt = theme === 'popart';

    return (
        <div className={`portugal-map-wrapper ${isPopArt ? 'popart' : 'classic'}`}>
            <svg
                viewBox={`0 0 ${SVG_W} ${SVG_H}`}
                xmlns="http://www.w3.org/2000/svg"
                className="portugal-map-svg"
            >
                <defs>
                    {isPopArt && (
                        <pattern id="halftone-map" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
                            <circle cx="3" cy="3" r="1.2" fill="rgba(0,0,0,0.15)" />
                        </pattern>
                    )}
                </defs>

                {/* Portugal outline */}
                <path
                    d={PORTUGAL_PATH}
                    fill={isPopArt ? '#FFD700' : '#e8f4e8'}
                    stroke={isPopArt ? '#000' : '#2d6a4f'}
                    strokeWidth={isPopArt ? 3 : 1.5}
                />
                {isPopArt && (
                    <path d={PORTUGAL_PATH} fill="url(#halftone-map)" />
                )}

                {/* City markers */}
                {cities.map(city => {
                    const { x, y } = latLonToSvg(
                        parseFloat(city.latitude),
                        parseFloat(city.longitude)
                    );
                    const isSelected = city.globalIdLocal === selectedCityId;

                    // Only render if within Portugal continental bounds
                    if (parseFloat(city.latitude) < LAT_MIN || parseFloat(city.latitude) > LAT_MAX) return null;
                    if (parseFloat(city.longitude) < LON_MIN || parseFloat(city.longitude) > LON_MAX) return null;

                    return (
                        <g
                            key={city.globalIdLocal}
                            onClick={() => onCitySelect(city.globalIdLocal)}
                            style={{ cursor: 'pointer' }}
                        >
                            {/* Pulse ring for selected */}
                            {isSelected && (
                                <circle
                                    cx={x} cy={y} r={isPopArt ? 10 : 8}
                                    fill="none"
                                    stroke={isPopArt ? '#FF0000' : '#2d6a4f'}
                                    strokeWidth={isPopArt ? 2.5 : 1.5}
                                    className="city-pulse"
                                />
                            )}
                            <circle
                                cx={x} cy={y}
                                r={isSelected ? 5 : 3.5}
                                fill={isSelected
                                    ? (isPopArt ? '#FF0000' : '#1b4332')
                                    : (isPopArt ? '#0d47a1' : '#52b788')
                                }
                                stroke={isPopArt ? '#000' : '#fff'}
                                strokeWidth={isPopArt ? 1.5 : 1}
                            />
                            {/* Label for selected city */}
                            {isSelected && (
                                <>
                                    {isPopArt ? (
                                        <>
                                            <rect
                                                x={x + 8} y={y - 12}
                                                width={city.local.length * 5.5 + 8}
                                                height={16}
                                                rx={2}
                                                fill="#fff"
                                                stroke="#000"
                                                strokeWidth={1.5}
                                            />
                                            <text
                                                x={x + 12} y={y}
                                                fontSize="8"
                                                fontWeight="900"
                                                fontFamily="'Bangers', cursive, sans-serif"
                                                fill="#000"
                                            >
                                                {city.local}
                                            </text>
                                        </>
                                    ) : (
                                        <text
                                            x={x + 8} y={y + 3}
                                            fontSize="7"
                                            fontWeight="600"
                                            fill="#1b4332"
                                        >
                                            {city.local}
                                        </text>
                                    )}
                                </>
                            )}
                        </g>
                    );
                })}
            </svg>
        </div>
    );
};

export default PortugalMap;
