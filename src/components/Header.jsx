'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import './Header.css';
import { getTrendingArticles } from '@/lib/articles';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [subCategories, setSubCategories] = useState([]);
    const [subStatus, setSubStatus] = useState('idle');
    const [trendingNews, setTrendingNews] = useState([]);
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

    const handleSubToggle = (catId) => {
        setSubCategories(prev => prev.includes(catId) ? prev.filter(c => c !== catId) : [...prev, catId]);
    };

    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (!email) return;
        setSubStatus('loading');

        try {
            const response = await fetch('/api/newsletter/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, categories: subCategories }),
            });

            const data = await response.json();

            if (response.ok) {
                setSubStatus('success');
                setTimeout(() => {
                    setIsNewsletterOpen(false);
                    setSubStatus('idle');
                    setEmail('');
                    setSubCategories([]);
                }, 3000);
            } else {
                alert(data.error || 'Ocorreu um erro ao subscrever.');
                setSubStatus('idle');
            }
        } catch (error) {
            console.error('Subscription error:', error);
            alert('Não foi possível ligar ao servidor. Tente mais tarde.');
            setSubStatus('idle');
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
        { href: '/tecnologia', label: 'Tecnologia' },
        { href: '/entretenimento', label: 'Entretenimento' },
        { href: '/desporto', label: 'Desporto' },
        { href: '/saude', label: 'Saúde' },

        { href: '/meteorologia', label: 'Meteorologia' },
    ];

    return (
        <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
            {/* 1. Top Utility Bar (Blue) */}
            <div className="utility-bar">
                <div className="container utility-container">
                    <span className="utility-date">{formattedDate}</span>
                    <div className="utility-right">
                        <button onClick={() => setIsNewsletterOpen(true)} className="utility-link newsletter-btn">Newsletter</button>
                        <Link href="/sobre-nos" className="utility-link">Sobre Panoramas</Link>
                    </div>
                </div>
            </div>

            {/* 2. Main Navigation Bar (White) - Contains Logo, Links and Search */}
            <nav className={`main-nav-bar ${isScrolled ? 'nav-sticky' : ''}`}>
                <div className="container nav-container">
                    {/* Logo on the left */}
                    <div className="nav-logo-area">
                        <Link href="/" className="logo-link">
                            <Image
                                src="/images/panoramas_logo.png"
                                alt="Panoramas Logo"
                                width={240}
                                height={48}
                                priority
                                className="main-logo-img"
                            />
                        </Link>
                    </div>

                    {/* Navigation links in the middle/right */}
                    <ul className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
                        {navLinks.map(link => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`${pathname === link.href ? 'active' : ''} ${link.href === '/meteorologia' ? 'nav-link-special' : ''}`}
                                >
                                    {link.href === '/meteorologia' && (
                                        <span className="nav-special-icon-wrapper">
                                            <svg className="nav-special-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="4"></circle>
                                                <path d="M12 2v2"></path>
                                                <path d="M12 20v2"></path>
                                                <path d="m4.93 4.93 1.41 1.41"></path>
                                                <path d="m17.66 17.66 1.41 1.41"></path>
                                                <path d="M2 12h2"></path>
                                                <path d="M20 12h2"></path>
                                                <path d="m6.34 17.66-1.41 1.41"></path>
                                                <path d="m19.07 4.93-1.41 1.41"></path>
                                            </svg>
                                        </span>
                                    )}
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Actions (Search, Hamburger) on far right */}
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

            {isNewsletterOpen && (
                <div className="newsletter-overlay" onClick={() => setIsNewsletterOpen(false)}>
                    <div className="newsletter-modal" onClick={e => e.stopPropagation()}>
                        <button className="newsletter-close" onClick={() => setIsNewsletterOpen(false)} aria-label="Fechar">×</button>
                        {subStatus === 'success' ? (
                            <div className="newsletter-success">
                                <div className="success-icon">✓</div>
                                <h3>Inscrição Concluída!</h3>
                                <p>Obrigado por se juntar à comunidade Panoramas!</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubscribe} className="newsletter-form">
                                <h3>A sua informação de confiança.</h3>
                                <p>Subscreva para receber as principais notícias diretamente no seu email.</p>

                                <label className="nl-label">E-mail</label>
                                <input
                                    type="email"
                                    className="nl-input"
                                    placeholder="O seu endereço de e-mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />

                                <label className="nl-label">Tópicos de Interesse</label>
                                <div className="nl-categories">
                                    {[
                                        { id: 'portugal', label: 'Portugal' },
                                        { id: 'politica', label: 'Política' },
                                        { id: 'economia', label: 'Economia' },
                                        { id: 'mundo', label: 'Mundo' },
                                        { id: 'tecnologia', label: 'Tecnologia' },
                                        { id: 'entretenimento', label: 'Entretenimento' },
                                        { id: 'desporto', label: 'Desporto' },
                                        { id: 'saude', label: 'Saúde' }
                                    ].map(cat => (
                                        <label key={cat.id} className={`nl-checkbox-btn ${subCategories.includes(cat.id) ? 'checked' : ''}`}>
                                            <input
                                                type="checkbox"
                                                checked={subCategories.includes(cat.id)}
                                                onChange={() => handleSubToggle(cat.id)}
                                            />
                                            {cat.label}
                                        </label>
                                    ))}
                                </div>

                                <button type="submit" className="nl-submit" disabled={subStatus === 'loading' || !email}>
                                    {subStatus === 'loading' ? 'A processar...' : 'Subscrever Notícias'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
