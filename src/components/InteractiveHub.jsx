'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './InteractiveHub.css';

const InteractiveHub = () => {
    const [fuelData, setFuelData] = useState({
        gasolina95: '1.689',
        gasoleo: '1.549',
        gpl: '0.829',
        loading: true
    });

    useEffect(() => {
        const fetchPrices = async () => {
            try {
                const response = await fetch('/api/fuel');
                if (response.ok) {
                    const data = await response.json();
                    setFuelData({
                        gasolina95: data.gasolina95 || '1.689',
                        gasoleo: data.gasoleo || '1.549',
                        gpl: data.gpl || '0.829',
                        loading: false
                    });
                }
            } catch (error) {
                console.error('Failed to fetch fuel prices:', error);
                setFuelData(prev => ({ ...prev, loading: false }));
            }
        };

        fetchPrices();
    }, []);

    return (
        <section className="interactive-hub-section">
            <h3 className="section-title">O Centro Panorâmico</h3>
            <div className="hub-grid">
                <Link href="/games" className="hub-card games-link">
                    <div className="hub-icon">
                        <img src="/images/icon-games.png" alt="Jogos" />
                    </div>
                    <div className="hub-content">
                        <h4>Jogos Panorâmicos</h4>
                        <p>Palavras Cruzadas, Sudoku e Desafios Diários.</p>
                        <span className="hub-btn">Jogar Agora</span>
                    </div>
                </Link>
                <Link href="/discounts" className="hub-card discounts-link">
                    <div className="hub-icon">
                        <img src="/images/icon-etiqueta.png" alt="Descontos" />
                    </div>
                    <div className="hub-content">
                        <h4>Descontos Panorâmicos</h4>
                        <p>Ofertas exclusivas para leitores registados.</p>
                        <span className="hub-btn">Obter Códigos</span>
                    </div>
                </Link>
                <Link href="/meteorologia" className="hub-card weather-link">
                    <div className="hub-icon">
                        <img src="/images/icon-meteorologia.png" alt="Meteorologia" />
                    </div>
                    <div className="hub-content">
                        <h4>Meteorologia</h4>
                        <p>Confira a previsão do tempo para hoje.</p>
                        <span className="hub-btn">Ver Previsão</span>
                    </div>
                </Link>
                <div className="hub-card fuel-tracker">
                    <div className="fuel-header">
                        <span className="hub-icon">
                            <img src="/images/icon-gota.png" alt="Combustíveis" />
                        </span>
                        <h4>Combustíveis hoje</h4>
                    </div>
                    <div className="fuel-list">
                        <div className="fuel-item">
                            <span className="fuel-name">Gasolina 95</span>
                            <span className="fuel-price">
                                {fuelData.gasolina95} <small>€/l</small>
                            </span>
                        </div>
                        <div className="fuel-item highlight">
                            <span className="fuel-name">Gasóleo</span>
                            <span className="fuel-price">
                                {fuelData.gasoleo} <small>€/l</small>
                            </span>
                        </div>
                        <div className="fuel-item gpl">
                            <span className="fuel-name">GPL Auto</span>
                            <span className="fuel-price">
                                {fuelData.gpl} <small>€/l</small>
                            </span>
                        </div>
                    </div>
                    <div className="fuel-footer">Preço médio nacional • DGEG</div>
                </div>
            </div>
        </section>
    );
};

export default InteractiveHub;
