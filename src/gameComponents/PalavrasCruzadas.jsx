import React, { useState } from 'react';
import './PalavrasCruzadas.css';

/*
  Simple 7x7 crossword puzzle.
  null = black cell, '' = empty white cell, letter = pre-filled
*/
const GRID_TEMPLATE = [
    [null, null, { n: 1 }, '', '', '', null],
    [{ n: 2 }, '', '', '', null, null, null],
    [null, null, '', null, null, { n: 3 }, ''],
    [null, null, '', null, null, '', ''],
    [{ n: 4 }, '', '', '', '', '', ''],
    [null, null, null, null, null, '', null],
    [null, null, null, null, null, '', null],
];

const SOLUTION = [
    [null, null, 'G', 'A', 'T', 'O', null],
    ['S', 'O', 'L', 'A', null, null, null],
    [null, null, 'O', null, null, 'R', 'I'],
    [null, null, 'B', null, null, 'I', 'O'],
    ['M', 'E', 'S', 'A', 'R', 'I', 'A'],
    [null, null, null, null, null, 'R', null],
    [null, null, null, null, null, null, null],
];

const ACROSS = [
    { num: 1, clue: 'Animal doméstico que mia (4 letras)', row: 0, col: 2, len: 4, dir: 'across' },
    { num: 2, clue: 'Estrela do dia (4 letras)', row: 1, col: 0, len: 4, dir: 'across' },
    { num: 4, clue: 'Mesa + cozinha = ? (7 letras)', row: 4, col: 0, len: 7, dir: 'across' },
];

const DOWN = [
    { num: 1, clue: 'Esférico, podemos jogar com ele (5 letras)', row: 0, col: 2, len: 5, dir: 'down' },
    { num: 3, clue: 'Grande massa de água (3 letras) → Rio (down from r2c5)', row: 2, col: 5, len: 5, dir: 'down' },
];

export default function PalavrasCruzadas() {
    const [board, setBoard] = useState(() =>
        GRID_TEMPLATE.map(row => row.map(cell => {
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
        const newBoard = board.map(row => row.map(cell => cell ? { ...cell } : null));
        newBoard[r][c].value = ch;
        setBoard(newBoard);

        // Check completion
        let done = true;
        for (let ri = 0; ri < newBoard.length; ri++) {
            for (let ci = 0; ci < newBoard[ri].length; ci++) {
                if (SOLUTION[ri][ci] !== null && (newBoard[ri][ci]?.value || '') !== SOLUTION[ri][ci]) {
                    done = false;
                }
            }
        }
        if (done) setComplete(true);
    };

    const reset = () => {
        setBoard(GRID_TEMPLATE.map(row => row.map(cell => {
            if (cell === null) return null;
            return { value: '', num: cell.n || null };
        })));
        setSelected(null);
        setComplete(false);
    };

    const checkWord = (clue) => {
        for (let i = 0; i < clue.len; i++) {
            const r = clue.dir === 'down' ? clue.row + i : clue.row;
            const c = clue.dir === 'across' ? clue.col + i : clue.col;
            if ((board[r]?.[c]?.value || '') !== SOLUTION[r][c]) return false;
        }
        return true;
    };

    const cols = GRID_TEMPLATE[0].length;

    return (
        <div className="cruzadas-page">
            <header className="cruzadas-header">
                <h1>📰 Palavras Cruzadas</h1>
                <p>Preencha a grelha com as respostas corretas usando as pistas fornecidas!</p>
            </header>

            <div className="cruzadas-layout">
                <div className="cruzadas-grid-wrapper">
                    <div className="cruzadas-grid" style={{ gridTemplateColumns: `repeat(${cols}, 42px)` }}>
                        {board.map((row, r) =>
                            row.map((cell, c) => {
                                if (cell === null) {
                                    return <div key={`${r}-${c}`} className="cruzadas-cell black" />;
                                }
                                const isCorrect = complete || (cell.value && cell.value === SOLUTION[r][c]);
                                let cls = 'cruzadas-cell empty';
                                if (selected && selected[0] === r && selected[1] === c) cls += ' selected';
                                if (cell.value) cls += ' filled';
                                if (isCorrect && cell.value) cls += ' correct';
                                return (
                                    <div key={`${r}-${c}`} className={cls} onClick={() => setSelected([r, c])}>
                                        {cell.num && <span className="cruzadas-cell-num">{cell.num}</span>}
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

                <div className="cruzadas-clues">
                    <div className="cruzadas-clue-group">
                        <h3>→ Horizontal</h3>
                        <ul className="cruzadas-clue-list">
                            {ACROSS.map(cl => (
                                <li key={`a${cl.num}`} className={checkWord(cl) ? 'solved' : ''}>
                                    <span className="clue-num">{cl.num}.</span> {cl.clue}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="cruzadas-clue-group">
                        <h3>↓ Vertical</h3>
                        <ul className="cruzadas-clue-list">
                            {DOWN.map(cl => (
                                <li key={`d${cl.num}`} className={checkWord(cl) ? 'solved' : ''}>
                                    <span className="clue-num">{cl.num}.</span> {cl.clue}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="cruzadas-controls">
                    <button className="cruzadas-btn secondary" onClick={reset}>🔄 Recomeçar</button>
                </div>

                {complete && <div className="cruzadas-msg">🎉 Parabéns! Completou as palavras cruzadas!</div>}
            </div>
        </div>
    );
}
