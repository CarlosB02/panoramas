import Link from 'next/link';

export const metadata = { title: 'Política de Privacidade' };

export default function PrivacidadePage() {
    return (
        <main className="container static-page" style={{ padding: '60px var(--spacing-lg)', maxWidth: '800px', margin: '0 auto' }}>
            <div className="breadcrumb" style={{ marginBottom: 'var(--spacing-lg)', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                <Link href="/" style={{ color: 'var(--color-primary)' }}>Início</Link> &gt; <span>Política de Privacidade</span>
            </div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>Política de Privacidade</h1>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-xl)' }}>Última atualização: 13 de Abril de 2026</p>
            
            <div className="static-content" style={{ lineHeight: '1.8', color: 'var(--color-text-main)' }}>
                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>I. Enquadramento geral</h2>
                    <p>No desenvolvimento da sua atividade o Panoramas, necessita de proceder ao tratamento de Dados Pessoais de vários titulares de dados. O Panoramas obriga-se ao cumprimento da sua Política de Privacidade, em conformidade com o Regulamento Geral de Proteção de Dados (RGPD) 2016/679/UE.</p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>II. Aplicação</h2>
                    <p>A presente Política aplica-se às operações de Tratamento de Dados Pessoais realizadas pelo Panoramas e pelas quais esta seja responsável, enquanto Responsável pelo Tratamento e/ou entidade Subcontratante.</p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>III. Quem realiza operações de tratamento</h2>
                    <p>De acordo com a legislação europeia e portuguesa, os dados devem ser obtidos de forma justa, lícita e transparente. O Panoramas pode partilhar Dados Pessoais com Subcontratantes, desde que necessários para a normal prestação dos seus serviços, regulado por contrato formal.</p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>IV. Com quem o Panoramas pode partilhar os dados</h2>
                    <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                        <li>Prestadores de serviços de suporte informático, técnico e operacional;</li>
                        <li>Clientes e/ou Fornecedores;</li>
                        <li>Entidades em relação de coligação societária;</li>
                        <li>Órgãos Judiciais ou Autoridades Administrativas.</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>V. O que o Panoramas faz com os dados</h2>
                    <div style={{ paddingLeft: '1rem', borderLeft: '4px solid var(--color-border)' }}>
                        <p style={{ marginBottom: '1rem' }}><strong>Fins Jornalísticos:</strong> A proteção de Dados Pessoais não prejudica a liberdade de expressão e informação. No âmbito jornalístico, o Panoramas respeita a privacidade exceto quando houver interesse público.</p>
                        <p style={{ marginBottom: '1rem' }}><strong>Dados de Clientes:</strong> Tratados para garantir o cumprimento de contratos ou obrigações jurídicas.</p>
                        <p><strong>Dados de Colaboradores:</strong> Tratados no contexto do vínculo contratual e execução do contrato.</p>
                    </div>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>VI. Encarregado de Proteção de Dados (DPO)</h2>
                    <p>Nomeado em conformidade com as normas legais. Contacto: <a href="mailto:geral@panoramas.pt" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>geral@panoramas.pt</a>.</p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>VII. Direitos dos titulares dos dados</h2>
                    <p>Garantimos o exercício dos direitos de acesso, retificação, oposição e apagamento. Pedidos respondidos no prazo máximo de um mês (prorrogável até dois meses).</p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>VIII. Confidencialidade e Segurança</h2>
                    <p>Os dados são conservados no estrito cumprimento das normas pelo período indispensável às finalidades. O Panoramas utiliza uma gama de controlos de segurança monitorizados ativamente.</p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>IX. Contactos</h2>
                    <p>Para qualquer questão relacionada com a proteção de dados, contacte-nos através do email: <a href="mailto:geral@panoramas.pt" style={{ color: 'var(--color-primary)', fontWeight: '600' }}>geral@panoramas.pt</a>.</p>
                </section>
            </div>
        </main>
    );
}
