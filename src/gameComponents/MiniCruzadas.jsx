import React, { useState } from 'react';
import './MiniCruzadas.css';

/* 5x5 mini crossword — null = black, '' = editable */
const TEMPLATE = [
    [{ n: 1 }, '', { n: 2 }, '', { n: 3 }],
    ['', null, '', null, ''],
    [{ n: 4 }, '', '', '', ''],
    ['', null, '', null, ''],
    [{ n: 5 }, '', '', '', ''],
];

const SOLUTION = [
    ['L', 'U', 'A', 'R', 'E'],
    ['I', null, 'M', null, 'S'],
    ['V', 'I', 'O', 'L', 'A'],
    ['R', null, 'R', null, 'R'],
    ['O', 'V', 'O', 'S', 'E'],
];

const ACROSS = [
    { num: 1, clue: 'Clarão noturno (5)', row: 0, col: 0, len: 5, dir: 'across' },
    { num: 4, clue: 'Instrumento de cordas (5)', row: 2, col: 0, len: 5, dir: 'across' },
    { num: 5, clue: 'Produto da galinha (plural) (4)', row: 4, col: 0, len: 5, dir: 'across' },
];

const DOWN = [
    { num: 1, clue: 'Obra literária (5)', row: 0, col: 0, len: 5, dir: 'down' },
    { num: 2, clue: 'Sentimento de carinho (5)', row: 0, col: 2, len: 5, dir: 'down' },
    { num: 3, clue: 'Tipo de construção (5)', row: 0, col: 4, len: 5, dir: 'down' },
];

export default function MiniCruzadas() {
    const [board, setBoard] = useState(() =>
        TEMPLATE.map(row => row.map(cell => {
            if (cell === null) return null;
            return { value: '', num: cell.n || null };
        }))
    );
    const [selected, setSelected] = useState(null);
    const [complete, setComplete] = useState(false);

    const handleInput = (r, c, val) => {
        if (board[r][c] === null) return;
        const ch = val.slice(-1).toUpperCase();
        if (ch && !/^[A-Z]$/.test(ch)) return;
        const nb = board.map(row => row.map(cell => cell ? { ...cell } : null));
        nb[r][c].value = ch;
        setBoard(nb);

        let done = true;
        for (let ri = 0; ri < nb.length; ri++) {
            for (let ci = 0; ci < nb[ri].length; ci++) {
                if (SOLUTION[ri][ci] !== null && (nb[ri][ci]?.value || '') !== SOLUTION[ri][ci]) {
                    done = false;
                }
            }
        }
        if (done) setComplete(true);
    };

    const reset = () => {
        setBoard(TEMPLATE.map(row => row.map(cell => {
            if (cell === null) return null;
            return { value: '', num: cell.n || null };
        })));
        setSelected(null);
        setComplete(false);
    };

    const checkWord = (cl) => {
        for (let i = 0; i < cl.len; i++) {
            const r = cl.dir === 'down' ? cl.row + i : cl.row;
            const c = cl.dir === 'across' ? cl.col + i : cl.col;
            if (SOLUTION[r][c] === null) continue;
            if ((board[r]?.[c]?.value || '') !== SOLUTION[r][c]) return false;
        }
        return true;
    };

    return (
        <div className="mini-page">
            <header className="mini-header">
                <h1>✏️ Mini Cruzadas</h1>
                <p>Um puzzle rápido e satisfatório! Preencha a grelha 5×5 com as palavras corretas.</p>
            </header>

            <div className="mini-game">
                <div className="mini-layout">
                    <div className="mini-grid-wrapper">
                        <div className="mini-grid">
                            {board.map((row, r) =>
                                row.map((cell, c) => {
                                    if (cell === null) return <div key={`${r}-${c}`} className="mini-cell black" />;
                                    let cls = 'mini-cell empty';
                                    if (selected && selected[0] === r && selected[1] === c) cls += ' selected';
                                    if (complete && cell.value) cls += ' correct';
                                    return (
                                        <div key={`${r}-${c}`} className={cls} onClick={() => setSelected([r, c])}>
                                            {cell.num && <span className="mini-cell-num">{cell.num}</span>}
                                            <input
                                                type="text"
                                                value={cell.value}
                                                onChange={e => handleInput(r, c, e.target.value)}
                                                maxLength={2}
                                            />
                                        </div>
                                    );
                                })
                            )}
                        </div>
                    </div>

                    <div className="mini-clues">
                        <div className="mini-clue-section">
                            <h3>→ Horizontal</h3>
                            <ul className="mini-clue-list">
                                {ACROSS.map(cl => (
                                    <li key={`a${cl.num}`} className={checkWord(cl) ? 'solved' : ''}>
                                        <span className="c-num">{cl.num}.</span> {cl.clue}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mini-clue-section">
                            <h3>↓ Vertical</h3>
                            <ul className="mini-clue-list">
                                {DOWN.map(cl => (
                                    <li key={`d${cl.num}`} className={checkWord(cl) ? 'solved' : ''}>
                                        <span className="c-num">{cl.num}.</span> {cl.clue}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mini-controls">
                    <button className="mini-btn secondary" onClick={reset}>🔄 Recomeçar</button>
                </div>

                {complete && <div className="mini-msg">🎉 Excelente! Completou as Mini Cruzadas!</div>}
            </div>
        </div>
    );
}
