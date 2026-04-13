'use client';
import React, { useEffect, useState } from 'react';
import './ShareButtons.css';

export default function ShareButtons({ title, image }) {
    const [url, setUrl] = useState('');

    useEffect(() => {
        setUrl(window.location.href);
    }, []);

    // Se estiver no SSR, renderiza null ou URLs vazios temporários
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    const shareLinks = {
        twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
        whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`
    };

    return (
        <>
            {/* Inline version for desktop */}
            <div className="share-buttons-container desktop-inline">
                <span className="share-action-text">Partilhar Artigo</span>
                <ShareLinks links={shareLinks} />
            </div>

            {/* Fixed version for mobile */}
            <div className="share-buttons-container mobile-fixed">
                <div className="mobile-share-handle"></div>
                <ShareLinks links={shareLinks} />
            </div>
        </>
    );
}

function ShareLinks({ links }) {
    return (
        <>
            <a href={links.twitter} target="_blank" rel="noopener noreferrer" className="share-btn twitter" aria-label="Partilhar no X (Twitter)">
                {/* X / Twitter SVG */}
                <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href={links.facebook} target="_blank" rel="noopener noreferrer" className="share-btn facebook" aria-label="Partilhar no Facebook">
                {/* Facebook SVG */}
                <svg viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="share-btn linkedin" aria-label="Partilhar no LinkedIn">
                {/* LinkedIn SVG */}
                <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="share-btn whatsapp" aria-label="Partilhar no WhatsApp">
                 {/* WhatsApp SVG */}
                 <svg viewBox="0 0 24 24"><path d="M11.996 2a9.98 9.98 0 0110 10c0 5.514-4.484 10-9.996 10a9.96 9.96 0 01-5.11-1.408l-5.69 1.493 1.516-5.548A9.957 9.957 0 012.001 12c0-5.514 4.485-10 9.995-10zm0 1.673a8.312 8.312 0 00-8.324 8.327c0 1.83.593 3.528 1.624 4.935l.26.353-1.012 3.712 3.82-.999.34.202a8.272 8.272 0 004.292 1.196 8.313 8.313 0 008.327-8.326 8.313 8.313 0 00-8.327-8.327zm4.568 11.393c-.25.126-1.488.736-1.718.82-.23.084-.397.126-.564-.125-.167-.251-.647-.82-.793-1.03-.146-.209-.292-.25-.542-.376-.25-.125-1.06-.39-2.02-1.25-.747-.67-1.253-1.498-1.4-1.748-.147-.251-.016-.388.109-.513.113-.113.25-.292.375-.438.125-.146.167-.25.25-.418.083-.167.042-.313-.021-.439-.063-.125-.563-1.353-.771-1.85-.203-.483-.41-.418-.564-.425-.146-.008-.312-.008-.479-.008-.167 0-.438.063-.667.314-.23.251-.876.857-.876 2.091s.897 2.425 1.022 2.593c.125.167 1.767 2.698 4.282 3.784.598.258 1.065.412 1.428.528.6.19 1.147.163 1.578.099.48-.071 1.488-.609 1.698-1.198.21-.59.21-1.096.147-1.198-.063-.105-.23-.167-.48-.293z"/></svg>
            </a>
        </>
    );
}
