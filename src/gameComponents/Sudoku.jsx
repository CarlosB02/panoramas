import React, { useState, useCallback } from 'react';
import './Sudoku.css';

/* A simple pre-built puzzle (0 = empty) */
const PUZZLE = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

const SOLUTION = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

export default function Sudoku() {
    const [board, setBoard] = useState(() => PUZZLE.map(r => [...r]));
    const [selected, setSelected] = useState(null);
    const [errors, setErrors] = useState(new Set());
    const [complete, setComplete] = useState(false);

    const isGiven = (r, c) => PUZZLE[r][c] !== 0;

    const place = useCallback((num) => {
        if (!selected || isGiven(selected[0], selected[1])) return;
        const [r, c] = selected;
        const newBoard = board.map(row => [...row]);
        newBoard[r][c] = num;
        setBoard(newBoard);

        // Check errors
        const newErrors = new Set();
        if (num !== 0 && num !== SOLUTION[r][c]) {
            newErrors.add(`${r}-${c}`);
        }
        setErrors(newErrors);

        // Check completion
        const isDone = newBoard.every((row, ri) => row.every((v, ci) => v === SOLUTION[ri][ci]));
        if (isDone) setComplete(true);
    }, [selected, board]);

    const reset = () => {
        setBoard(PUZZLE.map(r => [...r]));
        setSelected(null);
        setErrors(new Set());
        setComplete(false);
    };

    return (
        <div className="sudoku-page">
            <header className="sudoku-header">
                <h1>🔢 Sudoku</h1>
                <p>Preencha a grelha para que cada linha, coluna e bloco 3×3 contenha os dígitos de 1 a 9.</p>
            </header>

            <div className="sudoku-controls">
                <button className="sudoku-btn primary" onClick={reset}>🔄 Recomeçar</button>
            </div>

            <div className="sudoku-grid-wrapper">
                <div className="sudoku-grid">
                    {board.map((row, r) =>
                        row.map((val, c) => {
                            let cls = 'sudoku-cell';
                            if (isGiven(r, c)) cls += ' given';
                            else if (val !== 0) cls += ' user-input';
                            if (selected && selected[0] === r && selected[1] === c) cls += ' selected';
                            if (errors.has(`${r}-${c}`)) cls += ' error';
                            if ((c + 1) % 3 === 0 && c < 8) cls += ' br-right';
                            if ((r + 1) % 3 === 0 && r < 8) cls += ' br-bottom';
                            return (
                                <div
                                    key={`${r}-${c}`}
                                    className={cls}
                                    onClick={() => !complete && setSelected([r, c])}
                                >
                                    {val !== 0 ? val : ''}
                                </div>
                            );
                        })
                    )}
                </div>
            </div>

            <div className="sudoku-numpad">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => (
                    <button key={n} className="sudoku-num-btn" onClick={() => place(n)}>{n}</button>
                ))}
                <button className="sudoku-num-btn erase" onClick={() => place(0)}>✕</button>
            </div>

            {complete && <div className="sudoku-msg">🎉 Parabéns! Completou o Sudoku!</div>}
        </div>
    );
}
