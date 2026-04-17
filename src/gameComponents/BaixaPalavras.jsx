import React, { useState, useCallback } from 'react';
import './BaixaPalavras.css';

const LEVELS = [
    { words: ['GATO', 'RATO', 'MATO', 'PATO'], hint: 'Palavras que rimam com _ATO' },
    { words: ['MESA', 'PESA', 'TESA', 'BESA'], hint: 'Palavras que rimam com _ESA' },
    { words: ['BOLO', 'SOLO', 'POLO', 'MOLO'], hint: 'Palavras que rimam com _OLO' },
    { words: ['FILA', 'VILA', 'MILA', 'PILA'], hint: 'Palavras que rimam com _ILA' },
];

export default function BaixaPalavras() {
    const [levelIdx, setLevelIdx] = useState(0);
    const [found, setFound] = useState([]);
    const [input, setInput] = useState('');
    const [showHint, setShowHint] = useState(false);
    const [msg, setMsg] = useState('');

    const level = LEVELS[levelIdx];
    const allFound = found.length === level.words.length;
    const gameComplete = levelIdx >= LEVELS.length - 1 && allFound;

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        const word = input.trim().toUpperCase();
        if (!word) return;
        if (found.includes(word)) {
            setMsg('Já encontrou essa palavra!');
            setTimeout(() => setMsg(''), 1500);
        } else if (level.words.includes(word)) {
            setFound(prev => [...prev, word]);
            setMsg('');
        } else {
            setMsg('Palavra não válida. Tente outra!');
            setTimeout(() => setMsg(''), 1500);
        }
        setInput('');
    }, [input, found, level]);

    const nextLevel = () => {
        setLevelIdx(i => i + 1);
        setFound([]);
        setShowHint(false);
        setMsg('');
    };

    const restart = () => {
        setLevelIdx(0);
        setFound([]);
        setShowHint(false);
        setMsg('');
        setInput('');
    };

    return (
        <div className="baixa-page">
            <header className="baixa-header">
                <img src="/icons/jogos/icon-baixa palavras.png" alt="BaixaPalavras" className="game-header-icon" />
                <h1>BaixaPalavras</h1>
                <p>Descubra todas as palavras ocultas em cada nível. Encontre padrões e pavimente o caminho!</p>
            </header>

            <div className="baixa-game">
                <div className="baixa-info-bar">
                    <span className="baixa-level">Nível {levelIdx + 1} / {LEVELS.length}</span>
                    <span className="baixa-score-display">{found.length} / {level.words.length} palavras</span>
                </div>

                <div className="baixa-column">
                    {level.words.map((word, wi) => {
                        const isFound = found.includes(word);
                        return (
                            <div key={wi} className="baixa-word-row">
                                {[...word].map((ch, ci) => {
                                    let cls = 'baixa-letter-cell';
                                    if (isFound) cls += ' found';
                                    else if (showHint && ci === 0) cls += ' hint';
                                    return (
                                        <div key={ci} className={cls}>
                                            {isFound ? ch : (showHint && ci === 0 ? ch : '?')}
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>

                {!allFound && (
                    <form onSubmit={handleSubmit} className="baixa-input-area">
                        <input
                            type="text"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            placeholder="Escreva uma palavra..."
                            maxLength={6}
                        />
                        <button type="submit" className="baixa-submit-btn">Tentar</button>
                    </form>
                )}

                {!showHint && !allFound && (
                    <button className="baixa-hint-btn" onClick={() => setShowHint(true)}>
                        💡 Pista: {level.hint}
                    </button>
                )}

                {msg && <div className="baixa-msg">{msg}</div>}

                <div className="baixa-found-words">
                    {found.map(w => <span key={w} className="baixa-found-word">✅ {w}</span>)}
                </div>

                {allFound && !gameComplete && (
                    <button className="baixa-play-again" onClick={nextLevel}>
                        ➡️ Próximo Nível
                    </button>
                )}

                {gameComplete && (
                    <>
                        <div className="baixa-msg">🎉 Completou todos os níveis! Parabéns!</div>
                        <button className="baixa-play-again" onClick={restart}>🔄 Jogar Outra Vez</button>
                    </>
                )}
            </div>
        </div>
    );
}
