import React from 'react';
import Link from 'next/link';
import './InteractiveHub.css';

const InteractiveHub = () => {
    return (
        <section className="interactive-hub-section">
            <h3 className="section-title">O Centro Panorâmico</h3>
            <div className="hub-grid">
                <Link href="/games" className="hub-card games-link">
                    <div className="hub-icon">🧩</div>
                    <div className="hub-content">
                        <h4>Jogos Panorâmicos</h4>
                        <p>Palavras Cruzadas, Sudoku e Desafios Diários.</p>
                        <span className="hub-btn">Jogar Agora</span>
                    </div>
                </Link>
                <Link href="/discounts" className="hub-card discounts-link">
                    <div className="hub-icon">🏷️</div>
                    <div className="hub-content">
                        <h4>Descontos Panorâmicos</h4>
                        <p>Ofertas exclusivas para leitores registados.</p>
                        <span className="hub-btn">Obter Códigos</span>
                    </div>
                </Link>
                <Link href="/meteorologia" className="hub-card weather-link">
                    <div className="hub-icon">🌤️</div>
                    <div className="hub-content">
                        <h4>Meteorologia</h4>
                        <p>Confira a previsão do tempo para hoje.</p>
                        <span className="hub-btn">Ver Previsão</span>
                    </div>
                </Link>
                <div className="hub-card fuel-tracker">
                    <div className="fuel-header">
                        <span className="hub-icon">⛽</span>
                        <h4>Combustíveis hoje</h4>
                    </div>
                    <div className="fuel-list">
                        <div className="fuel-item">
                            <span className="fuel-name">Gasolina 95</span>
                            <span className="fuel-price">1.689 <small>€/l</small></span>
                        </div>
                        <div className="fuel-item highlight">
                            <span className="fuel-name">Gasóleo</span>
                            <span className="fuel-price">1.549 <small>€/l</small></span>
                        </div>
                        <div className="fuel-item gpl">
                            <span className="fuel-name">GPL Auto</span>
                            <span className="fuel-price">0.829 <small>€/l</small></span>
                        </div>
                    </div>
                    <div className="fuel-footer">Preço médio nacional</div>
                </div>
            </div>
        </section>
    );
};

export default InteractiveHub;
