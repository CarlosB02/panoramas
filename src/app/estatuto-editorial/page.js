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
                <ol style={{ paddingLeft: '0', listStyleType: 'none' }}>
                    <li style={{ marginBottom: '1.5rem', paddingLeft: '2.5rem', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: '0', color: 'var(--color-primary)', fontWeight: '700' }}>1 —</span>
                        O <strong>PANORAMAS</strong> define-se como publicação periódica informativa e não doutrinária, predominantemente consagrada à informação geral, sem excluir, em limites adequados de extensão e profundidade, a informação especializada.
                    </li>
                    <li style={{ marginBottom: '1.5rem', paddingLeft: '2.5rem', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: '0', color: 'var(--color-primary)', fontWeight: '700' }}>2 —</span>
                        O <strong>PANORAMAS</strong> é independente do poder político, designadamente do Governo e da Administração Pública, bem como de grupos económicos, sociais e religiosos, regendo-se por critérios de pluralismo, isenção e apartidarismo, o que implica estilo e forma distanciados na abordagem de quaisquer temas.
                    </li>
                    <li style={{ marginBottom: '1.5rem', paddingLeft: '2.5rem', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: '0', color: 'var(--color-primary)', fontWeight: '700' }}>3 —</span>
                        O <strong>PANORAMAS</strong> adota como propósito uma informação rigorosa e competente (no sentido do mais completo possível apuramento dos factos), equilibrada (na audição dos interesses envolvidos) e objetiva (ainda quando interprete os acontecimentos).
                    </li>
                    <li style={{ marginBottom: '1.5rem', paddingLeft: '2.5rem', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: '0', color: 'var(--color-primary)', fontWeight: '700' }}>4 —</span>
                        O <strong>PANORAMAS</strong> respeita e prossegue a sua honrosa missão de porta-voz dos interesses e dos direitos das camadas menos favorecidas da sociedade portuguesa, sem que tal orientação signifique transigência com práticas demagógicas ou sensacionalistas.
                    </li>
                    <li style={{ marginBottom: '1.5rem', paddingLeft: '2.5rem', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: '0', color: 'var(--color-primary)', fontWeight: '700' }}>5 —</span>
                        O <strong>PANORAMAS</strong>, por intermédio dos seus jornalistas e sob a responsabilidade do seu diretor, compromete-se a respeitar a legislação aplicável à atividade jornalística, designadamente a Lei da Imprensa, bem como os princípios éticos e deontológicos da profissão.
                    </li>
                </ol>

                <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)', fontWeight: '700', color: 'var(--color-primary)', textAlign: 'right', fontSize: '1rem', letterSpacing: '0.05em' }}>
                    A ADMINISTRAÇÃO
                </div>
            </div>
        </main>
    );
}
