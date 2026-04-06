import Link from 'next/link';

export const metadata = { title: 'Ficha Técnica' };

export default function FichaTecnicaPage() {
    return (
        <main className="container static-page" style={{ padding: '60px var(--spacing-lg)', maxWidth: '800px', margin: '0 auto' }}>
            <div className="breadcrumb" style={{ marginBottom: 'var(--spacing-lg)', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                <Link href="/" style={{ color: 'var(--color-primary)' }}>Início</Link> &gt; <span>Ficha Técnica</span>
            </div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>Ficha Técnica</h1>
            <div className="static-content" style={{ lineHeight: '1.8', color: 'var(--color-text-main)' }}>
                <p style={{ marginBottom: '1.5rem' }}><strong>Panoramas</strong> — Portal de informação generalista digital.</p>
                <p style={{ marginBottom: '1.5rem' }}><strong>Diretor:</strong> Redação Panoramas</p>
                <p style={{ marginBottom: '1.5rem' }}><strong>Sede:</strong> Lisboa, Portugal</p>
                <p style={{ marginBottom: '1.5rem' }}><strong>Contacto:</strong> geral@panoramas.pt</p>
            </div>
        </main>
    );
}
