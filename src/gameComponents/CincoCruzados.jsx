import React, { useState, useCallback, useEffect } from 'react';
import './CincoCruzados.css';

const WORDS = ['GATOS', 'PEIXE', 'LIVRO', 'MUNDO', 'TIGRE', 'BARCO', 'CLIMA', 'DENTE', 'FORNO', 'JOGOS',
    'NOITE', 'PORTA', 'SORTE', 'VERDE', 'BOLSO', 'CAMPO', 'FOLHA', 'LENHA', 'TELHA', 'PRATO'];
const ROWS = 6;
const COLS = 5;

function pickWord() {
    return WORDS[Math.floor(Math.random() * WORDS.length)];
}

const KB_ROWS = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫']
];

export default function CincoCruzados() {
    const [target, setTarget] = useState(pickWord);
    const [guesses, setGuesses] = useState([]);
    const [current, setCurrent] = useState('');
    const [gameOver, setGameOver] = useState(false);
    const [won, setWon] = useState(false);

    const letterStatus = {};
    guesses.forEach(g => {
        [...g].forEach((ch, i) => {
            if (ch === target[i]) letterStatus[ch] = 'correct';
            else if (target.includes(ch) && letterStatus[ch] !== 'correct') letterStatus[ch] = 'present';
            else if (!letterStatus[ch]) letterStatus[ch] = 'absent';
        });
    });

    const submit = useCallback(() => {
        if (current.length !== COLS || gameOver) return;
        const next = [...guesses, current];
        setGuesses(next);
        if (current === target) { setWon(true); setGameOver(true); }
        else if (next.length >= ROWS) { setGameOver(true); }
        setCurrent('');
    }, [current, guesses, target, gameOver]);

    const handleKey = useCallback((key) => {
        if (gameOver) return;
        if (key === '⌫') { setCurrent(c => c.slice(0, -1)); return; }
        if (key === 'ENTER') { submit(); return; }
        if (current.length < COLS) setCurrent(c => c + key);
    }, [current, gameOver, submit]);

    useEffect(() => {
        const handler = (e) => {
            if (e.key === 'Backspace') handleKey('⌫');
            else if (e.key === 'Enter') handleKey('ENTER');
            else if (/^[a-zA-Z]$/.test(e.key)) handleKey(e.key.toUpperCase());
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [handleKey]);

    const reset = () => {
        setTarget(pickWord());
        setGuesses([]);
        setCurrent('');
        setGameOver(false);
        setWon(false);
    };

    const getStatus = (guess, i) => {
        if (guess[i] === target[i]) return 'correct';
        if (target.includes(guess[i])) return 'present';
        return 'absent';
    };

    return (
        <div className="cinco-page">
            <header className="cinco-header">
                <h1>🟩 5 Cruzados</h1>
                <p>Adivinhe a palavra de 5 letras em 6 tentativas. Cores indicam quão perto está!</p>
            </header>

            <div className="cinco-board">
                {Array.from({ length: ROWS }).map((_, r) => {
                    const guess = guesses[r];
                    const isCurrentRow = r === guesses.length && !gameOver;
                    return (
                        <div key={r} className="cinco-row">
                            {Array.from({ length: COLS }).map((_, c) => {
                                let ch = '';
                                let cls = 'cinco-cell';
                                if (guess) {
                                    ch = guess[c];
                                    cls += ` ${getStatus(guess, c)}`;
                                } else if (isCurrentRow) {
                                    ch = current[c] || '';
                                    if (c === current.length) cls += ' active';
                                }
                                return <div key={c} className={cls} style={guess ? { animationDelay: `${c * 0.1}s` } : {}}>{ch}</div>;
                            })}
                        </div>
                    );
                })}
            </div>

            <div className="cinco-keyboard">
                {KB_ROWS.map((row, ri) => (
                    <div key={ri} className="cinco-kb-row">
                        {row.map(k => {
                            let cls = 'cinco-key';
                            if (k === 'ENTER' || k === '⌫') cls += ' wide';
                            if (letterStatus[k]) cls += ` key-${letterStatus[k]}`;
                            return <button key={k} className={cls} onClick={() => handleKey(k)}>{k}</button>;
                        })}
                    </div>
                ))}
            </div>

            {gameOver && (
                <div className={`cinco-msg ${won ? 'win' : 'lose'}`}>
                    {won ? '🎉 Parabéns! Acertou!' : `😞 A palavra era: ${target}`}
                </div>
            )}
            {gameOver && <button className="cinco-play-again" onClick={reset}>🔄 Jogar Outra Vez</button>}
        </div>
    );
}
