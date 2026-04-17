import React, { useState, useCallback } from 'react';
import './Troca.css';

const PUZZLES = [
    { scrambled: 'OTGA', answer: 'GATO' },
    { scrambled: 'RLOV', answer: 'FLOR' },
    { scrambled: 'ALUS', answer: 'LUAS' },
    { scrambled: 'OSLO', answer: 'SOLO' },
    { scrambled: 'AECL', answer: 'CELA' },
    { scrambled: 'RAMO', answer: 'AMOR' },
    { scrambled: 'ASME', answer: 'MESA' },
    { scrambled: 'RDOE', answer: 'RODE' },
];

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export default function Troca() {
    const [puzzleIdx, setPuzzleIdx] = useState(0);
    const [tiles, setTiles] = useState(() => shuffle([...PUZZLES[0].scrambled].map((ch, i) => ({ ch, id: i }))));
    const [selected, setSelected] = useState([]);
    const [msg, setMsg] = useState(null);
    const [score, setScore] = useState(0);
    const [solved, setSolved] = useState(false);
    const allDone = puzzleIdx >= PUZZLES.length - 1 && solved;

    const puzzle = PUZZLES[puzzleIdx];

    const handleTileClick = useCallback((idx) => {
        if (solved) return;
        if (selected.includes(idx)) {
            setSelected(prev => prev.filter(i => i !== idx));
        } else if (selected.length < 2) {
            const next = [...selected, idx];
            if (next.length === 2) {
                // Swap
                const newTiles = [...tiles];
                const [a, b] = next;
                [newTiles[a], newTiles[b]] = [newTiles[b], newTiles[a]];
                setTiles(newTiles);
                setSelected([]);
            } else {
                setSelected(next);
            }
        }
    }, [selected, tiles, solved]);

    const check = () => {
        const word = tiles.map(t => t.ch).join('');
        if (word === puzzle.answer) {
            setMsg({ type: 'success', text: '✅ Correto! Excelente!' });
            setScore(s => s + 10);
            setSolved(true);
        } else {
            setMsg({ type: 'error', text: '❌ Ainda não está certo. Continue a trocar!' });
            setTimeout(() => setMsg(null), 1800);
        }
    };

    const shuffleTiles = () => {
        if (solved) return;
        setTiles(shuffle(tiles));
        setSelected([]);
    };

    const nextPuzzle = () => {
        const next = puzzleIdx + 1;
        setPuzzleIdx(next);
        setTiles(shuffle([...PUZZLES[next].scrambled].map((ch, i) => ({ ch, id: i }))));
        setSelected([]);
        setMsg(null);
        setSolved(false);
    };

    const restart = () => {
        setPuzzleIdx(0);
        setTiles(shuffle([...PUZZLES[0].scrambled].map((ch, i) => ({ ch, id: i }))));
        setSelected([]);
        setMsg(null);
        setScore(0);
        setSolved(false);
    };

    return (
        <div className="troca-page">
            <header className="troca-header">
                <img src="/icons/jogos/icon-troca.png" alt="Troca" className="game-header-icon" />
                <h1>Troca</h1>
                <p>Troque letras de posição para formar a palavra correta. Selecione duas letras para as trocar!</p>
            </header>

            <div className="troca-game">
                <div className="troca-info">
                    <span className="troca-round">Ronda {puzzleIdx + 1} / {PUZZLES.length}</span>
                    <span className="troca-score-num">⭐ {score} pontos</span>
                </div>

                <div className="troca-target">
                    <div className="troca-target-label">Forme a palavra</div>
                    <div className="troca-target-word">
                        {solved ? puzzle.answer : '? '.repeat(puzzle.answer.length).trim()}
                    </div>
                </div>

                <div className="troca-tiles">
                    {tiles.map((tile, i) => {
                        let cls = 'troca-tile';
                        if (solved) cls += ' correct';
                        else if (selected.includes(i)) cls += ' selected';
                        else cls += ' unselected';
                        return (
                            <button
                                key={tile.id}
                                className={cls}
                                onClick={() => handleTileClick(i)}
                            >
                                {tile.ch}
                            </button>
                        );
                    })}
                </div>

                {!solved && (
                    <div className="troca-actions">
                        <button className="troca-btn troca-btn-check" onClick={check}>✓ Verificar</button>
                        <button className="troca-btn troca-btn-shuffle" onClick={shuffleTiles}>🔀 Baralhar</button>
                    </div>
                )}

                {msg && <div className={`troca-msg ${msg.type}`}>{msg.text}</div>}

                {solved && !allDone && (
                    <button className="troca-play-again" onClick={nextPuzzle}>➡️ Próxima Palavra</button>
                )}

                {allDone && (
                    <>
                        <div className="troca-msg complete">🏆 Completou todas as rondas! Pontuação: {score}</div>
                        <button className="troca-play-again" onClick={restart}>🔄 Jogar Outra Vez</button>
                    </>
                )}
            </div>
        </div>
    );
}
