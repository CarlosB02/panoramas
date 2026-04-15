import './index.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Script from 'next/script';

export const metadata = {
    title: {
        default: 'Panoramas — Informação de Confiança',
        template: '%s - Panoramas',
    },
    description: 'Jornalismo de confiança, rigor e independência. Acompanhe a atualidade nacional e internacional.',
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://panoramas.pt'),
    openGraph: {
        siteName: 'Panoramas',
        locale: 'pt_PT',
        type: 'website',
    },
    icons: {
        icon: '/images/favicon.png',
        shortcut: '/images/favicon.png',
        apple: '/images/favicon.png',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt" suppressHydrationWarning>
            <body suppressHydrationWarning>
                {/* GA4 Consent Mode v2 — loads always, cookies denied by default */}
                <Script id="ga-consent-init" strategy="beforeInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}

                        // Set default consent state — denied before user choice
                        gtag('consent', 'default', {
                            'ad_storage': 'denied',
                            'ad_user_data': 'denied',
                            'ad_personalization': 'denied',
                            'analytics_storage': 'denied',
                            'wait_for_update': 500
                        });

                        gtag('js', new Date());
                        gtag('config', 'G-V7MJMLJ3E6', { 'send_page_view': true });
                    `}
                </Script>
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-V7MJMLJ3E6"
                    strategy="afterInteractive"
                />

                <div className="layout-wrapper">
                    <Header />
                    <main className="main-content">
                        {children}
                    </main>
                    <Footer />
                    <CookieConsent />
                </div>
            </body>
        </html>
    );
}
