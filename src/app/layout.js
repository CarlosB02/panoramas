import './index.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt" suppressHydrationWarning>
            <head>
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-V7MJMLJ3E6"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-V7MJMLJ3E6');
                    `}
                </Script>
            </head>
            <body suppressHydrationWarning>
                <div className="layout-wrapper">
                    <Header />
                    <main className="main-content">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
