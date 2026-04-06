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
                            <li><Link href="/desporto">Desporto</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Opinião</h4>
                        <ul>
                            <li><a href="#">Editoriais</a></li>
                            <li><a href="#">Colunistas</a></li>
                            <li><a href="#">Cartas ao Diretor</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Serviços</h4>
                        <ul>
                            <li><Link href="/games">Passatempos</Link></li>
                            <li><Link href="/meteorologia">Meteorologia</Link></li>
                            <li><a href="#">Assinaturas</a></li>
                            <li><a href="#">Newsletters</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>O Jornal</h4>
                        <ul>
                            <li><Link href="/estatuto-editorial">Estatuto Editorial</Link></li>
                            <li><Link href="/ficha-tecnica">Ficha Técnica</Link></li>
                            <li><Link href="/termos-e-condicoes">Termos e Condições</Link></li>
                            <li><Link href="/politica-de-privacidade">Política de Privacidade</Link></li>
                            <li><Link href="/contactos">Contactos</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="social-links">
                        <a href="#" aria-label="Facebook">FB</a>
                        <a href="#" aria-label="Twitter">TW</a>
                        <a href="#" aria-label="Instagram">IG</a>
                        <a href="#" aria-label="LinkedIn">LI</a>
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
