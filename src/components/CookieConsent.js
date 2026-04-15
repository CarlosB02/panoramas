"use client";

import { useState, useEffect } from 'react';
import './CookieConsent.css';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const consent = localStorage.getItem('panoramas_consent');

    if (consent === 'true') {
      // User already accepted — upgrade consent immediately
      grantConsent();
    } else if (consent === null) {
      // First visit — show the banner
      setIsVisible(true);
    }
    // If 'false', keep the defaults (denied) — no banner shown again
  }, []);

  const grantConsent = () => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'analytics_storage': 'granted',
      });
    }
  };

  const handleAccept = () => {
    localStorage.setItem('panoramas_consent', 'true');
    grantConsent();
    setIsVisible(false);
    setShowFeedback(true);
    setTimeout(() => setShowFeedback(false), 3000);
  };

  const handleDecline = () => {
    localStorage.setItem('panoramas_consent', 'false');
    // Consent stays denied (GA Consent Mode default), no update needed
    setIsVisible(false);
  };

  if (!mounted) return null;

  return (
    <>
      <div className="cookie-overlay">
        <div className={`cookie-banner ${isVisible ? 'visible' : ''}`}>
          <div className="cookie-content">
            <h3>Nós valorizamos a sua privacidade</h3>
            <p>Utilizamos cookies para melhorar a sua experiência no nosso site, analisar o tráfego e personalizar o conteúdo de acordo com os seus interesses. Ao clicar em "Aceitar Tudo", concorda com a nossa utilização de cookies. Pode também escolher recusar.</p>
          </div>
          <div className="cookie-actions">
            <button onClick={handleDecline} className="btn btn-decline">
              Recusar
            </button>
            <button onClick={handleAccept} className="btn btn-primary">
              Aceitar Tudo
            </button>
          </div>
        </div>
      </div>

      <div className={`cookie-feedback ${showFeedback ? 'visible' : ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <span>Preferências guardadas!</span>
      </div>
    </>
  );
}
