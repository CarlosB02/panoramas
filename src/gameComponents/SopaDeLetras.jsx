import React, { useState, useMemo } from 'react';
import './SopaDeLetras.css';

const SIZE = 10;
const WORDS = ['GATO', 'SOL', 'MAR', 'FLOR', 'CASA', 'RIO', 'MESA', 'LUA'];
const ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function buildGrid(words) {
    const grid = Array.from({ length: SIZE }, () => Array(SIZE).fill(''));
    const placed = [];

    words.forEach(word => {
        let tries = 0;
        while (tries < 80) {
            const dir = Math.random() < 0.5 ? 'H' : 'V';
            const maxR = dir === 'V' ? SIZE - word.length : SIZE - 1;
            const maxC = dir === 'H' ? SIZE - word.length : SIZE - 1;
            const r = Math.floor(Math.random() * (maxR + 1));
            const c = Math.floor(Math.random() * (maxC + 1));

            let fits = true;
            for (let i = 0; i < word.length; i++) {
                const cr = dir === 'V' ? r + i : r;
                const cc = dir === 'H' ? c + i : c;
                if (grid[cr][cc] !== '' && grid[cr][cc] !== word[i]) { fits = false; break; }
            }
            if (fits) {
                const cells = [];
                for (let i = 0; i < word.length; i++) {
                    const cr = dir === 'V' ? r + i : r;
                    const cc = dir === 'H' ? c + i : c;
                    grid[cr][cc] = word[i];
                    cells.push(`${cr}-${cc}`);
                }
                placed.push({ word, cells });
                break;
            }
            tries++;
        }
    });

    for (let r = 0; r < SIZE; r++) {
        for (let c = 0; c < SIZE; c++) {
            if (grid[r][c] === '') grid[r][c] = ALPHA[Math.floor(Math.random() * ALPHA.length)];
        }
    }
    return { grid, placed };
}

export default function SopaDeLetras() {
    const [key, setKey] = useState(0);
    const { grid, placed } = useMemo(() => buildGrid(WORDS), [key]);
    const [selected, setSelected] = useState([]);
    const [foundWords, setFoundWords] = useState([]);
    const [foundCells, setFoundCells] = useState(new Set());

    const toggleCell = (r, c) => {
        const id = `${r}-${c}`;
        if (foundCells.has(id)) return;
        setSelected(prev => {
            if (prev.includes(id)) return prev.filter(x => x !== id);
            const next = [...prev, id];
            // Check if selection matches a word
            for (const p of placed) {
                if (p.cells.length === next.length && p.cells.every(cell => next.includes(cell)) && !foundWords.includes(p.word)) {
                    setFoundWords(fw => [...fw, p.word]);
                    setFoundCells(fc => {
                        const s = new Set(fc);
                        p.cells.forEach(c => s.add(c));
                        return s;
                    });
                    return [];
                }
            }
            return next;
        });
    };

    const allFound = foundWords.length === placed.length;

    const restart = () => {
        setKey(k => k + 1);
        setSelected([]);
        setFoundWords([]);
        setFoundCells(new Set());
    };

    return (
        <div className="sopa-page">
            <header className="sopa-header">
                <h1>🔍 Sopa de Letras</h1>
                <p>Encontre todas as palavras ocultas na grelha. Clique nas letras para as selecionar!</p>
            </header>

            <div className="sopa-game">
                <div className="sopa-words-bar">
                    {WORDS.map(w => (
                        <span key={w} className={`sopa-word-tag ${foundWords.includes(w) ? 'found' : ''}`}>{w}</span>
                    ))}
                </div>

                <div className="sopa-grid" style={{ gridTemplateColumns: `repeat(${SIZE}, 1fr)` }}>
                    {grid.map((row, r) =>
                        row.map((ch, c) => {
                            const id = `${r}-${c}`;
                            let cls = 'sopa-cell';
                            if (foundCells.has(id)) cls += ' found-cell';
                            else if (selected.includes(id)) cls += ' selected';
                            return <div key={id} className={cls} onClick={() => toggleCell(r, c)}>{ch}</div>;
                        })
                    )}
                </div>

                {allFound && <div className="sopa-msg">🎉 Encontrou todas as palavras! Parabéns!</div>}
                {allFound && <button className="sopa-play-again" onClick={restart}>🔄 Jogar Outra Vez</button>}
            </div>
        </div>
    );
}
