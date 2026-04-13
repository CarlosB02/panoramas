import Link from 'next/link';

export const metadata = { title: 'Termos e Condições' };

export default function TermosPage() {
    return (
        <main className="container static-page" style={{ padding: '60px var(--spacing-lg)', maxWidth: '800px', margin: '0 auto' }}>
            <div className="breadcrumb" style={{ marginBottom: 'var(--spacing-lg)', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                <Link href="/" style={{ color: 'var(--color-primary)' }}>Início</Link> &gt; <span>Termos e Condições</span>
            </div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>Termos e Condições de Utilização</h1>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-xl)' }}>Última atualização: 13 de Abril de 2026</p>
            
            <div className="static-content" style={{ lineHeight: '1.8', color: 'var(--color-text-main)' }}>
                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>1. UTILIZAÇÃO DOS SITES PANORAMAS</h2>
                    <p>Os sites do Panoramas têm como principal objetivo oferecer aos seus Utilizadores diversos conteúdos, atualização de notícias e busca de artigos.</p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>2. CONTEÚDO DO SITE / PROPRIEDADE INTELECTUAL</h2>
                    <p style={{ marginBottom: '1rem' }}>Entende-se por "conteúdo do site", toda a informação presente neste portal, nomeadamente texto, imagens, ilustrações, design gráfico, webdesign e software. Todo o conteúdo deste site é protegido por Direitos de Autor e Direitos Conexos, e Direitos da Propriedade Industrial, ao abrigo das leis Portuguesas e da União Europeia.</p>
                    <p style={{ marginBottom: '1rem' }}>Os direitos de propriedade intelectual de todos os conteúdos do Panoramas, que não sejam de fornecimento externo e como tal devidamente identificados, são pertença do Panoramas. O conteúdo presente neste site não poderá ser copiado, alterado ou distribuído salvo com autorização expressa.</p>
                    <p>Está terminantemente proibida a utilização do site para fins ilegais ou quaisquer outros que possam ser considerados prejudiciais para a imagem que o Panoramas tem no mercado. O Panoramas reserva-se o direito de proceder judicialmente contra os autores de qualquer cópia, reprodução ou outra utilização não autorizada.</p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>3. EXCLUSÃO DE RESPONSABILIDADE</h2>
                    <p style={{ marginBottom: '1rem' }}>O Panoramas não controla ou gere as informações, produtos ou serviços dos conteúdos fornecidos por terceiros, bem como das hiperligações a outros sites na Internet, logo não pode ser responsabilizado por erros de qualquer natureza destes sites e/ou conteúdos.</p>
                    <p>As publicações eletrónicas contidas neste site estão submetidas à lei portuguesa, nomeadamente para efeitos de responsabilidade pelos factos, opiniões, artigos e comentários de pessoas ou organismos devidamente identificados.</p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>4. DEVERES DO UTILIZADOR / UTILIZAÇÕES PROIBIDAS</h2>
                    <p style={{ marginBottom: '1rem' }}>O Utilizador poderá descarregar ou copiar material estritamente para uso pessoal, mantendo-se o Panoramas titular dos respetivos direitos de autor.</p>
                    <p>O Utilizador obriga-se a não atacar ou usar ilicitamente os sistemas do Panoramas, sendo proibidas ações como: aceder a áreas não autorizadas, testar vulnerabilidades, instalar vírus, envio de spam (e-mails não solicitados) ou desencadear ataques tipo "denial of service".</p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>5. SUSPENSÃO OU INTERRUPÇÃO DE ACESSO</h2>
                    <p>O Panoramas reserva-se o direito de interromper ou suspender o acesso aos sites, pelo período que entenda necessário, por quaisquer razões de ordem técnica, administrativa, de força maior ou outras.</p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>6. ALERTA</h2>
                    <p>O Panoramas alerta que existem riscos relacionados com o uso da Internet, sendo possível que os dados pessoais constantes do portal possam ser captados e/ou transferidos por terceiros, sem qualquer responsabilidade do Panoramas.</p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>7. COOKIES</h2>
                    <p>Os sites Panoramas podem utilizar cookies para identificar o Utilizador e traçar o seu perfil para fins estatísticos ou de marketing. O Utilizador pode desabilitar os cookies no seu navegador, perdendo eventualmente algumas das funcionalidades do site.</p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>8. INTERPRETAÇÃO E FORO</h2>
                    <p>As condições de uso deverão ser interpretadas de acordo com a lei portuguesa. Os tribunais de Portugal terão a exclusividade jurídica em relação a quaisquer queixas ou disputas.</p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>9. COMENTÁRIOS</h2>
                    <p style={{ marginBottom: '1rem' }}>Os comentários são um recurso para manter um canal de diálogo aberto com o Utilizador. O autor de uma mensagem é o único responsável pelos conteúdos publicados.</p>
                    <p>O Panoramas reserva-se o direito de retirar qualquer mensagem que contrarie as regras da plataforma, nomeadamente conteúdos obscenos, difamatórios, ilegais ou invasivos da privacidade.</p>
                </section>
            </div>
        </main>
    );
}
