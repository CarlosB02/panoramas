'use client';

import React from 'react';

export default function DiscountsPage() {
    return (
        <div className="container" style={{ padding: '40px 0', textAlign: 'center' }}>
            <h1 className="section-title" style={{
                fontSize: '3rem',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '15px'
            }}>
                Descontos Panorâmicos
                <img src="/images/icon-etiqueta.png" alt="Etiqueta" style={{ width: '50px', height: '50px' }} />
            </h1>
            <p className="lead" style={{ fontSize: '1.2rem', marginBottom: '40px' }}>Ofertas exclusivas para leitores.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', maxWidth: '800px', margin: '0 auto' }}>
                {/* Card 1 */}
                <div style={{
                    position: 'relative',
                    border: '2px dashed #0d47a1',
                    padding: '60px 30px',
                    borderRadius: '8px',
                    backgroundColor: '#f9f9f9',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: '20px',
                        left: '50%',
                        transform: 'translateX(-50%) rotate(-10deg)',
                        fontSize: '2.5rem',
                        fontWeight: '900',
                        color: 'rgba(13, 71, 161, 0.2)',
                        whiteSpace: 'nowrap',
                        pointerEvents: 'none',
                        textTransform: 'uppercase'
                    }}>
                        Em breve
                    </div>
                    <div style={{
                        fontSize: '1.8rem',
                        fontWeight: 'bold',
                        color: '#0d47a1',
                        transform: 'rotate(-5deg)',
                        border: '3px solid #0d47a1',
                        padding: '10px 20px',
                        textTransform: 'uppercase'
                    }}>
                        Em breve
                    </div>
                </div>

                {/* Card 2 */}
                <div style={{
                    position: 'relative',
                    border: '2px dashed #0d47a1',
                    padding: '60px 30px',
                    borderRadius: '8px',
                    backgroundColor: '#f9f9f9',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: '20px',
                        left: '50%',
                        transform: 'translateX(-50%) rotate(-10deg)',
                        fontSize: '2.5rem',
                        fontWeight: '900',
                        color: 'rgba(13, 71, 161, 0.2)',
                        whiteSpace: 'nowrap',
                        pointerEvents: 'none',
                        textTransform: 'uppercase'
                    }}>
                        Em breve
                    </div>
                    <div style={{
                        fontSize: '1.8rem',
                        fontWeight: 'bold',
                        color: '#0d47a1',
                        transform: 'rotate(-5deg)',
                        border: '3px solid #0d47a1',
                        padding: '10px 20px',
                        textTransform: 'uppercase'
                    }}>
                        Em breve
                    </div>
                </div>
            </div>
        </div>
    );
}
