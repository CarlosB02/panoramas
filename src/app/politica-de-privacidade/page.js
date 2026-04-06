import Link from 'next/link';

export const metadata = { title: 'Política de Privacidade' };

export default function PrivacidadePage() {
    return (
        <main className="container static-page" style={{ padding: '60px var(--spacing-lg)', maxWidth: '800px', margin: '0 auto' }}>
            <div className="breadcrumb" style={{ marginBottom: 'var(--spacing-lg)', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                <Link href="/" style={{ color: 'var(--color-primary)' }}>Início</Link> &gt; <span>Política de Privacidade</span>
            </div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>Política de Privacidade</h1>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-xl)' }}>Última atualização: Janeiro de 2026</p>
            <div className="static-content" style={{ lineHeight: '1.8', color: 'var(--color-text-main)' }}>
                <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>1. Responsável pelo Tratamento</h3>
                <p style={{ marginBottom: '1.5rem' }}>O Panoramas é o responsável pelo tratamento dos dados pessoais recolhidos através deste portal, em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD).</p>
                <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>2. Dados Recolhidos</h3>
                <p style={{ marginBottom: '1.5rem' }}>Recolhemos apenas os dados estritamente necessários para o funcionamento do serviço: endereço de email (para newsletters), dados de navegação para fins estatísticos e cookies técnicos essenciais.</p>
                <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>3. Direitos do Titular</h3>
                <p style={{ marginBottom: '1.5rem' }}>Os utilizadores têm o direito de aceder, retificar, apagar e portar os seus dados pessoais, podendo exercer esses direitos através do email: privacidade@panoramas.pt.</p>
            </div>
        </main>
    );
}
