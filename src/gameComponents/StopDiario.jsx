import React, { useState, useEffect, useRef, useCallback } from 'react';
import './StopDiario.css';

const CATEGORIES = ['Nome', 'País', 'Cidade', 'Animal', 'Fruta', 'Profissão'];
const ALPHABET = 'ABCDEFGHIJLMNOPRSTV';

export default function StopDiario() {
    const [letter, setLetter] = useState(null);
    const [answers, setAnswers] = useState(() => CATEGORIES.reduce((a, c) => ({ ...a, [c]: '' }), {}));
    const [running, setRunning] = useState(false);
    const [time, setTime] = useState(0);
    const [finished, setFinished] = useState(false);
    const timerRef = useRef(null);

    const generate = useCallback(() => {
        const l = ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
        setLetter(l);
        setAnswers(CATEGORIES.reduce((a, c) => ({ ...a, [c]: '' }), {}));
        setFinished(false);
        setTime(0);
        setRunning(true);
    }, []);

    useEffect(() => {
        if (running) {
            timerRef.current = setInterval(() => setTime(t => t + 1), 1000);
        }
        return () => clearInterval(timerRef.current);
    }, [running]);

    const handleChange = (cat, val) => {
        setAnswers(prev => ({ ...prev, [cat]: val }));
    };

    const handleStop = () => {
        setRunning(false);
        setFinished(true);
        clearInterval(timerRef.current);
    };

    const filledCount = Object.values(answers).filter(v => v.trim().length > 0).length;
    const score = filledCount * 10;
    const mm = String(Math.floor(time / 60)).padStart(2, '0');
    const ss = String(time % 60).padStart(2, '0');

    return (
        <div className="stop-page">
            <header className="stop-header">
                <span className="stop-badge-new">NOVO</span>
                <h1>🧠 Stop Diário</h1>
                <p>Lance uma letra e preencha todas as categorias o mais depressa possível!</p>
            </header>

            <div className="stop-controls">
                <div className="stop-letter-display">
                    {letter || '?'}
                </div>
                {!running && !finished && (
                    <button className="stop-btn stop-btn-gen" onClick={generate}>
                        🎲 Gerar Letra
                    </button>
                )}
                {running && (
                    <button className="stop-btn stop-btn-gen" onClick={handleStop}>
                        🛑 STOP!
                    </button>
                )}
                {finished && (
                    <button className="stop-btn stop-btn-reset" onClick={generate}>
                        🔄 Jogar Outra Vez
                    </button>
                )}
                <span className={`stop-timer ${!running ? 'stopped' : ''}`}>{mm}:{ss}</span>
            </div>

            <div className="stop-grid">
                {CATEGORIES.map(cat => (
                    <div key={cat} className={`stop-category-card ${answers[cat].trim() ? 'filled' : ''}`}>
                        <label>{cat}</label>
                        <input
                            type="text"
                            placeholder={letter ? `${cat} com "${letter}"...` : `Gere uma letra primeiro`}
                            value={answers[cat]}
                            onChange={e => handleChange(cat, e.target.value)}
                            disabled={!running}
                        />
                    </div>
                ))}
            </div>

            {finished && (
                <div className="stop-score">
                    <span className="stop-score-badge">
                        🏆 Pontuação: {score} / {CATEGORIES.length * 10} &nbsp;·&nbsp; ⏱ {mm}:{ss}
                    </span>
                </div>
            )}
        </div>
    );
}
