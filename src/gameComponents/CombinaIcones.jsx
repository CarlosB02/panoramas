import React, { useState, useEffect, useCallback } from 'react';
import './CombinaIcones.css';

const EMOJIS = ['🐶', '🐱', '🦊', '🐻', '🐼', '🦁', '🐸', '🐵'];

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function buildDeck() {
    const pairs = [...EMOJIS, ...EMOJIS];
    return shuffle(pairs).map((emoji, i) => ({ id: i, emoji, matched: false }));
}

export default function CombinaIcones() {
    const [cards, setCards] = useState(buildDeck);
    const [flipped, setFlipped] = useState([]);
    const [moves, setMoves] = useState(0);
    const [locked, setLocked] = useState(false);

    const matched = cards.filter(c => c.matched).length;
    const allMatched = matched === cards.length;

    const handleClick = useCallback((idx) => {
        if (locked) return;
        if (flipped.includes(idx) || cards[idx].matched) return;

        const next = [...flipped, idx];
        setFlipped(next);

        if (next.length === 2) {
            setMoves(m => m + 1);
            setLocked(true);
            const [a, b] = next;
            if (cards[a].emoji === cards[b].emoji) {
                setTimeout(() => {
                    setCards(prev => prev.map((c, i) =>
                        i === a || i === b ? { ...c, matched: true } : c
                    ));
                    setFlipped([]);
                    setLocked(false);
                }, 500);
            } else {
                setTimeout(() => {
                    setFlipped([]);
                    setLocked(false);
                }, 900);
            }
        }
    }, [flipped, cards, locked]);

    const restart = () => {
        setCards(buildDeck());
        setFlipped([]);
        setMoves(0);
        setLocked(false);
    };

    return (
        <div className="combina-page">
            <header className="combina-header">
                <img src="/icons/jogos/icon-combina.png" alt="Combina Ícones" className="game-header-icon" />
                <h1>Combina Ícones</h1>
                <p>Encontre todos os pares de emojis! Vire duas cartas de cada vez e treine a sua memória.</p>
            </header>

            <div className="combina-game">
                <div className="combina-stats">
                    <div className="combina-stat">Jogadas: <span>{moves}</span></div>
                    <div className="combina-stat">Pares: <span>{matched / 2} / {EMOJIS.length}</span></div>
                </div>

                <div className="combina-grid">
                    {cards.map((card, i) => {
                        const isFlipped = flipped.includes(i) || card.matched;
                        let cls = 'combina-card';
                        if (isFlipped) cls += ' flipped';
                        if (card.matched) cls += ' matched';
                        return (
                            <div key={card.id} className={cls} onClick={() => handleClick(i)}>
                                <div className="combina-card-inner">
                                    <div className="combina-card-front">?</div>
                                    <div className="combina-card-back">{card.emoji}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {allMatched && (
                    <>
                        <div className="combina-msg">🎉 Parabéns! Encontrou todos os pares em {moves} jogadas!</div>
                        <button className="combina-play-again" onClick={restart}>🔄 Jogar Outra Vez</button>
                    </>
                )}
            </div>
        </div>
    );
}
