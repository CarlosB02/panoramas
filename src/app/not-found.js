import Link from 'next/link';
import './not-found.css';

export default function NotFound() {
    return (
        <div className="not-found-container">
            <div className="nf-bg-text">404</div>

            <div className="nf-content">

                <h1 className="nf-title">
                    <span>Erro 404</span>
                    Esta notícia escapou-nos!
                </h1>

                <p className="nf-description">
                    Esta página não consta nos nossos registos. A notícia pode ter sido arquivada, atualizada ou o link pode estar desatualizado.
                </p>

                <div className="nf-actions">
                    <Link href="/" className="btn-primary">
                        Voltar atrás
                    </Link>
                    <Link href="/contactos" className="btn-secondary">
                        Reportar erro
                    </Link>
                </div>

                <div className="nf-decoration">
                    <svg className="newspaper-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
                        <path d="M18 14h-8"></path>
                        <path d="M15 18h-5"></path>
                        <path d="M10 6h8v4h-8V6Z"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
}
