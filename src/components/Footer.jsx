import React from 'react';
import Link from 'next/link';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <span className="logo-name">PANORAMAS</span>
                        </div>
                        <p className="brand-desc">
                            Jornalismo de confiança, rigor e independência. Acompanhe a atualidade nacional e internacional com a profundidade que exige.
                        </p>
                    </div>
                </div>

                <div className="footer-grid">
                    <div className="footer-col">
                        <h4>Secções</h4>
                        <ul>
                            <li><Link href="/portugal">Portugal</Link></li>
                            <li><Link href="/politica">Política</Link></li>
                            <li><Link href="/economia">Economia</Link></li>
                            <li><Link href="/mundo">Mundo</Link></li>
                            <li><Link href="/tecnologia">Tecnologia</Link></li>
                            <li><Link href="/entretenimento">Entretenimento</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Secções</h4>
                        <ul>
                            <li><Link href="/desporto">Desporto</Link></li>
                            <li><Link href="/saude">Saúde</Link></li>
                            <li><Link href="/estilo-de-vida">Estilo de Vida</Link></li>

                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Serviços</h4>
                        <ul>
                            <li><Link href="/games">Passatempos</Link></li>
                            <li><Link href="/meteorologia">Meteorologia</Link></li>
                            <li><a href="#">Newsletters</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>O Jornal</h4>
                        <ul>
                            <li><Link href="/sobre-nos">Sobre Panoramas</Link></li>
                            <li><Link href="/estatuto-editorial">Estatuto Editorial</Link></li>
                            <li><Link href="/termos-e-condicoes">Termos e Condições</Link></li>
                            <li><Link href="/politica-de-privacidade">Política de Privacidade</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="social-links">
                        <a href="#" aria-label="Facebook">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>
                        <a href="#" aria-label="X (Twitter)">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z"></path></svg>
                        </a>
                        <a href="#" aria-label="Instagram">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                    </div>
                    <div className="copyright">
                        &copy; {new Date().getFullYear()} Panoramas. Todos os direitos reservados.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
