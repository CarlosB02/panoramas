import React from 'react';
import Link from 'next/link';
import './SobreNos.css';

export const metadata = {
    title: 'Sobre Panoramas | Panoramas',
    description: 'A visão, os valores e a equipa por detrás do Panoramas, o jornal digital de referência.',
};

export default function SobreNosPage() {
    return (
        <main className="sobre-page">

            {/* Hero Section */}
            <section className="sobre-hero">
                <div className="sobre-hero-content">
                    <div className="sobre-badge">O Nosso Manifesto</div>
                    <h1 className="sobre-title">A Nossa Visão.<br />A Sua Realidade.</h1>
                    <p className="sobre-subtitle">
                        Mais do que noticiar, o Panoramas nasceu da vontade de compreender o mundo em profundidade.
                        Somos um projeto periodístico livre, criado para leitores que exigem mais do que o óbvio.
                    </p>
                </div>
            </section>

            {/* Story / Context Section */}
            <section className="sobre-story">
                <div className="container story-grid">
                    <div className="story-text">
                        <h2>Jornalismo que importa.</h2>
                        <p>
                            Vivemos na era da informação instantânea e do ruído constante. O Panoramas surgiu como
                            um antídoto: um espaço focado no rigor, na investigação e na capacidade de contar
                            histórias que realmente importam para a nossa sociedade e para o mundo.
                        </p>
                        <p>
                            Não nos limitamos à espuma dos dias. O nosso compromisso é com a verdade factual,
                            o debate construtivo e o respeito absoluto pela inteligência dos nossos leitores.
                        </p>

                        <div className="story-stats">
                            <div className="stat-item">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Independência Editorial</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">24/7</span>
                                <span className="stat-label">Rigor Informativo</span>
                            </div>
                        </div>
                    </div>

                    <div className="story-image-box">
                        <div className="story-image-placeholder">
                            {/* Represents an editorial / drafting room aesthetic */}
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values / Pillars */}
            <section className="sobre-values">
                <div className="container">
                    <div className="values-header">
                        <h2>Os Nossos Pilares</h2>
                        <p>Valores inegociáveis que guiam as nossas redações todos os dias.</p>
                    </div>

                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                            </div>
                            <h3>Rigor e Veracidade</h3>
                            <p>O fact-checking é a nossa base. Verificamos as fontes múltiplas vezes antes de publicarmos qualquer informação. A precisão vem sempre antes da rapidez.</p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 12 20 22 4 22 4 12"></polyline>
                                    <rect x="2" y="7" width="20" height="5"></rect>
                                    <line x1="12" y1="22" x2="12" y2="7"></line>
                                    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                                    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                                </svg>
                            </div>
                            <h3>Independência</h3>
                            <p>Não estamos vinculados a interesses corporativos, políticos ou económicos ocultos. Respondemos apenas perante a lei e os nossos leitores.</p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                    <path d="M2 15h10"></path>
                                    <path d="m9 18 3-3-3-3"></path>
                                </svg>
                            </div>
                            <h3>Profundidade</h3>
                            <p>Procuramos ir além da manchete. Contextualizamos dados, ouvimos especialistas e preparamos reportagens imersivas que explicam o 'porquê' dos eventos.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA to get in touch */}
            <section className="sobre-cta">
                <div className="container">
                    <div className="sobre-cta-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>

                        <div className="sobre-cta-content" style={{ margin: 0, height: '100%', maxWidth: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h2>Tem uma história para nós?</h2>
                            <p>O bom jornalismo faz-se em conjunto. Se tem uma denúncia, informação relevante ou sugestão de pauta, a nossa equipa investigativa está à escuta.</p>
                            <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                                <a href="mailto:geral@panoramas.pt" className="btn-cta-primary">
                                    Falar com a Redação
                                </a>
                            </div>
                        </div>

                        <div className="sobre-cta-content" style={{ margin: 0, height: '100%', maxWidth: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#f8fafc' }}>
                            <h2>Contactos Gerais</h2>
                            <p style={{ marginBottom: '1.5rem' }}>Valorizamos a sua opinião. Seja para propostas comerciais, marketing ou outras informações, encontra aqui o canal direto para o nosso painel interno.</p>
                            <div className="contact-card" style={{ padding: '1.5rem', background: 'white', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(13, 71, 161, 0.1)', marginTop: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-primary-darker)' }}>Contacto Geral</h3>
                                <strong style={{ fontSize: '1.1rem', color: 'var(--color-text-main)' }}>geral@panoramas.pt</strong>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    );
}
