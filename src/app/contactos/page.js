import React from 'react';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import './Contactos.css';

export const metadata = { title: 'Contactos | Panoramas' };

export default function ContactosPage() {
    return (
        <main className="contactos-page">
            
            {/* Header / Hero Section */}
            <section className="contactos-header-section">
                <div className="contactos-header-wrapper">
                    <div className="contactos-breadcrumb">
                        <Link href="/">Início</Link> &gt; <span>Contactos</span>
                    </div>
                    <h1 className="contactos-title">Fale Connosco</h1>
                    <p className="contactos-subtitle">
                        Valorizamos a sua opinião. Seja para sugestões de reportagem, denúncias, ou propostas de negócio, encontra aqui todos os canais abertos para nos alcançar diretamente.
                    </p>
                </div>
            </section>

            {/* Main Interactive Grid */}
            <section className="contactos-main-content">
                <div className="contactos-grid">
                    
                    {/* Left Column - Contact Form */}
                    <div className="contact-form-container">
                        <ContactForm />
                    </div>

                    {/* Right Column - Directory Cards */}
                    <div className="contact-info-column">
                        
                        <div className="info-card">
                            <div className="info-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                </svg>
                            </div>
                            <div className="info-content">
                                <h3>Redação e Denúncias</h3>
                                <p>Para contacto com a equipa jornalística, envio de *press-releases*, correções a artigos ou denúncias (garantimos confidencialidade total da fonte).</p>
                                <strong>redacao@panoramas.pt</strong>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                    <line x1="8" y1="21" x2="16" y2="21"></line>
                                    <line x1="12" y1="17" x2="12" y2="21"></line>
                                </svg>
                            </div>
                            <div className="info-content">
                                <h3>Parcerias e Publicidade</h3>
                                <p>Fale diretamente com os nossos departamentos comercial e criativo para obter o kit comercial, espaços no site ou parcerias editoriais.</p>
                                <strong>publicidade@panoramas.pt</strong>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                    <polyline points="2 17 12 22 22 17"></polyline>
                                    <polyline points="2 12 12 17 22 12"></polyline>
                                </svg>
                            </div>
                            <div className="info-content">
                                <h3>Sede Institucional</h3>
                                <p>Panoramas - O maior pilar da imprensa digital livre.</p>
                                <strong>Edifício Office Park<br/>Lisboa, PT</strong>
                            </div>
                        </div>
                        
                        <div className="social-connect">
                            <h3>Siga as nossas emissões</h3>
                            <div className="social-icons-wrapper">
                                <a href="#" className="social-icon-btn" aria-label="Twitter">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5 0.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                                </a>
                                <a href="#" className="social-icon-btn" aria-label="Facebook">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                </a>
                                <a href="#" className="social-icon-btn" aria-label="Instagram">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                </a>
                                <a href="#" className="social-icon-btn" aria-label="LinkedIn">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    );
}
