const fs = require('fs');

const svgSource = fs.readFileSync('public/images/distritos.svg', 'utf8');

const regex = /<path[^>]+data-z=\"(\d+)\"[^>]+d=\"([^\"]+)\"[^>]*\/>/g;
const paths = [];
let match;
while ((match = regex.exec(svgSource)) !== null) {
  paths.push({ z: match[1], d: match[2] });
}

// Write the PortugalMap.jsx code
const componentCode = \`import React from 'react';

// Lat/Lon bounds to align cities with the new SVGs 12969x26674 viewBox
const LAT_MIN = 36.95;
const LAT_MAX = 42.15;
const LON_MIN = -9.5;
const LON_MAX = -6.19;
const SVG_W = 12969;
const SVG_H = 26674;

const latLonToSvg = (lat, lon) => {
    const x = ((lon - LON_MIN) / (LON_MAX - LON_MIN)) * SVG_W;
    // Map projection skew adjustment (basic Mercator approximation for Portugal)
    const latRad = lat * Math.PI / 180;
    const mercN = Math.log(Math.tan((Math.PI / 4) + (latRad / 2)));
    const latMinRad = LAT_MIN * Math.PI / 180;
    const mercMin = Math.log(Math.tan((Math.PI / 4) + (latMinRad / 2)));
    const latMaxRad = LAT_MAX * Math.PI / 180;
    const mercMax = Math.log(Math.tan((Math.PI / 4) + (latMaxRad / 2)));
    
    // Instead of linear, use a direct linear for simplicity since the SVG might just be flat
    const y = ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * SVG_H;
    return { x: x * 1.05 - 500, y: y * 0.98 + 300 }; // small manual offsets to align with this specific SVG
};

const PortugalMap = ({ cities, selectedCityId, onCitySelect, theme }) => {
    const isPopArt = theme === 'popart';
    const isBotanic = theme === 'botanic';
    
    const fillBase = isPopArt ? '#FFD700' : (isBotanic ? '#a3b18a' : '#e8f4e8');
    const strokeBase = isPopArt ? '#000' : (isBotanic ? '#344e41' : '#2d6a4f');

    return (
        <div className={\`portugal-map-wrapper \${isPopArt ? 'popart' : 'classic'}\`}>
            <svg
                viewBox="0 0 12969 26674"
                xmlns="http://www.w3.org/2000/svg"
                className="portugal-map-svg"
            >
                <defs>
                    {isPopArt && (
                        <pattern id="halftone-map" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <circle cx="50" cy="50" r="20" fill="rgba(0,0,0,0.15)" />
                        </pattern>
                    )}
                </defs>

                {/* Continental districts */}
                <g stroke={strokeBase} strokeWidth={isPopArt ? 60 : 30}>
\${paths.map(p => 
  \`                    <path 
                        key="\${p.z}" 
                        d="\${p.d}" 
                        fill={fillBase} 
                    />\`
).join('\\n')}
                </g>

                {/* Pop art halftone overlay */}
                {isPopArt && (
                    <g pointerEvents="none">
\${paths.map(p => 
  \`                        <path key="ht-\${p.z}" d="\${p.d}" fill="url(#halftone-map)" />\`
).join('\\n')}
                    </g>
                )}

                {/* City markers overlay */}
                {cities.map(city => {
                    const { x, y } = latLonToSvg(
                        parseFloat(city.latitude),
                        parseFloat(city.longitude)
                    );
                    const isSelected = city.globalIdLocal === selectedCityId;

                    if (parseFloat(city.latitude) < LAT_MIN || parseFloat(city.latitude) > LAT_MAX) return null;
                    if (parseFloat(city.longitude) < LON_MIN || parseFloat(city.longitude) > LON_MAX) return null;

                    return (
                        <g
                            key={city.globalIdLocal}
                            onClick={() => onCitySelect(city.globalIdLocal)}
                            style={{ cursor: 'pointer' }}
                        >
                            {isSelected && (
                                <circle
                                    cx={x} cy={y} r={isPopArt ? 400 : 300}
                                    fill="none"
                                    stroke={isPopArt ? '#FF0000' : '#d00000'}
                                    strokeWidth={isPopArt ? 80 : 50}
                                    className="city-pulse"
                                />
                            )}
                            <circle
                                cx={x} cy={y}
                                r={isSelected ? 180 : 120}
                                fill={isSelected
                                    ? (isPopArt ? '#FF0000' : '#1b4332')
                                    : (isPopArt ? '#0d47a1' : '#52b788')
                                }
                                stroke={isPopArt ? '#000' : '#fff'}
                                strokeWidth={isPopArt ? 60 : 30}
                            />
                            {isSelected && (
                                <>
                                    {isPopArt ? (
                                        <>
                                            <rect
                                                x={x + 250} y={y - 350}
                                                width={city.local.length * 160 + 200}
                                                height={500}
                                                rx={80}
                                                fill="#fff"
                                                stroke="#000"
                                                strokeWidth={50}
                                            />
                                            <text
                                                x={x + 350} y={y}
                                                fontSize="300"
                                                fontWeight="900"
                                                fontFamily="'Bangers', cursive, sans-serif"
                                                fill="#000"
                                            >
                                                {city.local}
                                            </text>
                                        </>
                                    ) : (
                                        <text
                                            x={x + 250} y={y + 100}
                                            fontSize="250"
                                            fontWeight="800"
                                            fill={isBotanic ? '#1a3a2a' : '#1b4332'}
                                            style={{ textShadow: '20px 20px 40px #fff, -20px -20px 40px #fff' }}
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
\`;

fs.writeFileSync('src/components/PortugalMap.jsx', componentCode);
console.log('Successfully generated PortugalMap.jsx using SVG paths.');
