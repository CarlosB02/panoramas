import Link from 'next/link';

export const metadata = { title: 'Termos e Condições' };

export default function TermosPage() {
    return (
        <main className="container static-page" style={{ padding: '60px var(--spacing-lg)', maxWidth: '800px', margin: '0 auto' }}>
            <div className="breadcrumb" style={{ marginBottom: 'var(--spacing-lg)', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                <Link href="/" style={{ color: 'var(--color-primary)' }}>Início</Link> &gt; <span>Termos e Condições</span>
            </div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>Termos e Condições de Utilização</h1>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-xl)' }}>Data de Eficácia: Janeiro de 2026</p>
            <div className="static-content" style={{ lineHeight: '1.8', color: 'var(--color-text-main)' }}>
                <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>1. Objeto do Portal</h3>
                <p style={{ marginBottom: '1.5rem' }}>Bem-vindo(a) ao <strong>Panoramas</strong>. O acesso e utilização deste portal pelo leitor estão sujeitos aos presentes termos. Ao navegar pelo site <code>panoramas.pt</code>, reconhece implicitamente as condições abaixo descritas.</p>
                <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>2. Direitos de Autor e Propriedade Intelectual</h3>
                <p style={{ marginBottom: '1.5rem' }}>Todo o conteúdo do portal (textos, imagens, logótipos e multimédia) é pertença exclusiva da Panoramas e dos fornecedores da marca. Não é autorizada a cópia, republicação, adaptação ou extração dos conteúdos sem permissão expressa e por escrito.</p>
                <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>3. Comentários e Comunidade</h3>
                <p style={{ marginBottom: '1.5rem' }}>Qualquer participação dos leitores na caixa de comentários de artigos está sujeita a aprovação prévia. Não são tolerados insultos, ofensas morais, incitação ao ódio, nem disseminação de campanhas comerciais ou correntes de spam.</p>
                <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>4. Isenção de Responsabilidade</h3>
                <p style={{ marginBottom: '1.5rem' }}>O Panoramas não se responsabiliza por eventuais perdas ou suspensões de dados associadas à falha dos servidores.</p>
                <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>5. Alteração dos Termos</h3>
                <p style={{ marginBottom: '1.5rem' }}>O Panoramas tem o direito de aplicar reajustes no design, acesso aos planos, subscrição, e nas presentes normativas legais.</p>
            </div>
        </main>
    );
}
