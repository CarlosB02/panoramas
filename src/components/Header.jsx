'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import './Header.css';
import { localMostRead } from '../data/localNews';
import { getTrendingArticles } from '@/lib/articles';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [trendingNews, setTrendingNews] = useState(localMostRead.slice(0, 5));
    const pathname = usePathname();
    const router = useRouter();
    const searchInputRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 120);
        };
        window.addEventListener('scroll', handleScroll);
        
        // Fetch real trending dynamics
        getTrendingArticles(5).then(data => {
            if (data && data.length > 0) setTrendingNews(data);
        });
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
        setIsSearchOpen(false);
    }, [pathname]);

    // Prevent body scroll when menu is open (Fixed for mobile Safari)
    useEffect(() => {
        if (isMenuOpen) {
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
            // Store it to retrieve when closing
            document.body.dataset.scrollY = scrollY;
        } else {
            const scrollY = document.body.dataset.scrollY;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            if (scrollY) {
                window.scrollTo(0, parseInt(scrollY));
            }
        }
        
        return () => {
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
        };
    }, [isMenuOpen]);

    // Auto-focus search input when it opens
    useEffect(() => {
        if (isSearchOpen && searchInputRef.current) {
            setTimeout(() => {
                searchInputRef.current.focus();
            }, 50);
        }
    }, [isSearchOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) setIsSearchOpen(false);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/pesquisa?q=${encodeURIComponent(searchQuery.trim())}`);
            setIsSearchOpen(false);
            setSearchQuery('');
        }
    };

    const today = new Date();
    const formattedDate = today.toLocaleDateString('pt-PT', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const navLinks = [
        { href: '/portugal', label: 'Portugal' },
        { href: '/politica', label: 'Política' },
        { href: '/economia', label: 'Economia' },
        { href: '/mundo', label: 'Mundo' },
        { href: '/media', label: 'Média' },
        { href: '/entretenimento', label: 'Entretenimento' },
        { href: '/desporto', label: 'Desporto' },
        { href: '/saude', label: 'Saúde' },
        { href: '/estilo-de-vida', label: 'Estilo de Vida' },
        { href: '/ia', label: 'IA' },
        { href: '/meteorologia', label: 'Meteorologia' },
        { href: '/mais', label: 'Mais' },
    ];

    return (
        <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
            {/* Logo Bar */}
            <div className="logo-bar">
                <div className="container logo-container">
                    <Link href="/" className="logo-link">
                        <div className="logo-main">
                            <span className="logo-name">PANORAMAS</span>
                        </div>
                        <span className="logo-tagline">Informação de Confiança</span>
                    </Link>
                </div>
            </div>

            {/* Top Utility Bar */}
            <div className="utility-bar">
                <div className="container utility-container">
                    <span className="utility-date">{formattedDate}</span>
                    <div className="utility-right">
                        <Link href="/newsletter" className="utility-link">Newsletter</Link>
                        <Link href="/contactos" className="utility-link">Contactos</Link>
                        <a href="#" className="utility-link login-link">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            Entrar
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className={`main-nav-bar ${isScrolled ? 'nav-sticky' : ''}`}>
                <div className="container nav-container">
                    {isScrolled && (
                        <Link href="/" className="sticky-logo">
                            <span>P</span>
                        </Link>
                    )}

                    <ul className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
                        {navLinks.map(link => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={pathname === link.href ? 'active' : ''}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="nav-actions">
                        <div className="search-container">
                            <button className="btn-search" onClick={() => setIsSearchOpen(!isSearchOpen)} aria-label="Pesquisar">
                                {isSearchOpen ? (
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                ) : (
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                )}
                            </button>
                            <form className={`search-form ${isSearchOpen ? 'open' : ''}`} onSubmit={handleSearchSubmit}>
                                <input 
                                    ref={searchInputRef}
                                    type="text" 
                                    placeholder="Pesquisar notícias..." 
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="search-input"
                                />
                                <button type="submit" className="search-submit">Ir</button>
                            </form>
                        </div>
                        <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Menu de navegação">
                            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </button>
                    </div>
                </div>
            </nav>

            {isMenuOpen && <div className="mobile-overlay" onClick={() => setIsMenuOpen(false)} />}

            {/* Trending Bar */}
            <div className="trending-bar">
                <div className="container trending-container">
                    <span className="trending-label">
                        <span className="trending-dot"></span>
                        Tendências
                    </span>
                    <ul className="trending-links">
                        {trendingNews.map((item) => (
                            <li key={item.id}>
                                <Link href={`/${item.categorySlug || 'noticia'}/${item.seoMeta.slug}`}>{item.kicker || (item.category || '').toUpperCase() || 'NOTÍCIA'}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
