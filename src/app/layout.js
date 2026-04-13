import './index.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

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
