import Link from 'next/link';

export const metadata = { title: 'Estatuto Editorial' };

export default function EstatutoEditorialPage() {
    return (
        <main className="container static-page" style={{ padding: '60px var(--spacing-lg)', maxWidth: '800px', margin: '0 auto' }}>
            <div className="breadcrumb" style={{ marginBottom: 'var(--spacing-lg)', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                <Link href="/" style={{ color: 'var(--color-primary)' }}>Início</Link> &gt; <span>Estatuto Editorial</span>
            </div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>Estatuto Editorial</h1>
            <div className="static-content" style={{ lineHeight: '1.8', color: 'var(--color-text-main)' }}>
                <p style={{ marginBottom: '1.5rem' }}>O <strong>Panoramas</strong> é um órgão de comunicação social digital, independente e apartidário, que se rege pelos princípios fundamentais do jornalismo ético e responsável.</p>
                <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Princípios Fundamentais</h3>
                <p style={{ marginBottom: '1.5rem' }}>O Panoramas compromete-se a praticar um jornalismo rigoroso, verificado e ao serviço do interesse público. A independência editorial é um valor inegociável.</p>
                <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Compromisso com o Leitor</h3>
                <p style={{ marginBottom: '1.5rem' }}>Reconhecemos a importância da confiança do leitor e comprometemo-nos a corrigir publicamente qualquer erro factual que venha a ser identificado nas nossas publicações.</p>
            </div>
        </main>
    );
}
