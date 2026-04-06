export default function DiscountsPage() {
    return (
        <div className="container" style={{ padding: '40px 0', textAlign: 'center' }}>
            <h1 className="section-title" style={{ fontSize: '3rem', marginBottom: '20px' }}>Descontos Panorâmicos 🏷️</h1>
            <p className="lead" style={{ fontSize: '1.2rem', marginBottom: '40px' }}>Ofertas exclusivas para leitores registados.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
                <div style={{ border: '2px dashed #0d47a1', padding: '30px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#cc0000' }}>50% DESCONTO</div>
                    <h3>Assinatura Premium</h3>
                    <p>Acesso ilimitado a todo o conteúdo.</p>
                    <div style={{ background: '#eee', padding: '10px', marginTop: '10px', fontFamily: 'monospace' }}>CÓDIGO: PANORAMAS50</div>
                </div>
                <div style={{ border: '2px dashed #0d47a1', padding: '30px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#cc0000' }}>COMPRE 1 LEVE 2</div>
                    <h3>Newsletter Exclusiva</h3>
                    <p>Análises especiais em primeira mão.</p>
                    <div style={{ background: '#eee', padding: '10px', marginTop: '10px', fontFamily: 'monospace' }}>CÓDIGO: LEITOR-VIP</div>
                </div>
            </div>
        </div>
    );
}
