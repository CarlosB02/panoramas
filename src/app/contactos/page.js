import Link from 'next/link';

export const metadata = { title: 'Contactos' };

export default function ContactosPage() {
    return (
        <main className="container static-page" style={{ padding: '60px var(--spacing-lg)', maxWidth: '800px', margin: '0 auto' }}>
            <div className="breadcrumb" style={{ marginBottom: 'var(--spacing-lg)', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                <Link href="/" style={{ color: 'var(--color-primary)' }}>Início</Link> &gt; <span>Contactos</span>
            </div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>Contactos</h1>
            <div className="static-content" style={{ lineHeight: '1.8', color: 'var(--color-text-main)' }}>
                <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Redação</h3>
                <p style={{ marginBottom: '1.5rem' }}>Para sugestões de reportagem, correções ou comentários editoriais: <strong>redacao@panoramas.pt</strong></p>
                <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Publicidade</h3>
                <p style={{ marginBottom: '1.5rem' }}>Para informações sobre espaços publicitários: <strong>publicidade@panoramas.pt</strong></p>
                <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Geral</h3>
                <p style={{ marginBottom: '1.5rem' }}>Para outros assuntos: <strong>geral@panoramas.pt</strong></p>
            </div>
        </main>
    );
}
