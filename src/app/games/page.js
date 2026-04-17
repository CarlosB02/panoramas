import Link from 'next/link';
import './Games.css';

export const metadata = { title: 'Jogos Panorâmicos' };

const gamesData = [
    { id: 1, title: "Stop Diário", description: "Jogue o Stop Diário, o nosso jogo de palavras onde lança uma letra e corre para arranjar palavras para cada categoria!", icon: "/icons/jogos/icon-stop.png", gradient: "gradient-red", isNew: true, path: "/games/stop-diario" },
    { id: 2, title: "5 Cruzados", description: "Teste as suas habilidades com 5 Cruzados, um puzzle linguístico onde deduz a palavra de cinco letras usando dicas.", icon: "/icons/jogos/icon-5 cruzados.png", gradient: "gradient-green", isNew: false, path: "/games/5-cruzados" },
    { id: 3, title: "Baixa Palavras", description: "Mergulhe no emocionante mundo do BaixaPalavras! Descubra palavras ocultas e pavimente o caminho para o tesouro.", icon: "/icons/jogos/icon-baixa palavras.png", gradient: "gradient-purple", isNew: false, path: "/games/baixapalavras" },
    { id: 4, title: "Sudoku", description: "Resolva o Sudoku de hoje online e afie as suas capacidades lógicas com este jogo diário para o cérebro.", icon: "/icons/jogos/icon-sudoku.png", gradient: "gradient-blue-purple", isNew: false, path: "/games/sudoku" },
    { id: 5, title: "Troca", description: "Desafie a sua mente trocando letras para revelar palavras escondidas neste mini-jogo.", icon: "/icons/jogos/icon-troca.png", gradient: "gradient-teal", isNew: false, path: "/games/troca" },
    { id: 6, title: "Sopa de Letras", description: "Embarque numa demanda por palavras com a nossa Sopa de Letras.", icon: "/icons/jogos/icon-sopa de letras.png", gradient: "gradient-pink", isNew: false, path: "/games/sopa-de-letras" },
    { id: 7, title: "Combina Ícones", description: "Teste o cérebro com o Combina Ícones de hoje. Combine cada emoji com a sua palavra correspondente.", icon: "/icons/jogos/icon-combina.png", gradient: "gradient-red", isNew: false, path: "/games/combina-icones" },
    { id: 8, title: "Palavras Cruzadas", description: "Envolva a sua mente com as Palavras Cruzadas.", icon: "/icons/jogos/icon-palavras cruzadas.png", gradient: "gradient-orange", isNew: false, path: "/games/palavras-cruzadas" },
    { id: 9, title: "Mini Cruzadas", description: "Jogue o nosso Mini Puzzle de Palavras Cruzadas, oferecendo desafios rápidos e satisfatórios.", icon: "/icons/jogos/icon-mini cruzadas.png", gradient: "gradient-blue", isNew: false, path: "/games/mini-cruzadas" },
];


export default function GamesPage() {
    return (
        <div className="games-container">
            <header className="games-header">
                <h1 className="games-title">Centro de Jogos Panorâmicos</h1>
                <p className="games-subtitle">Exercite o seu cérebro com a nossa coleção de puzzles e jogos diários.</p>
            </header>
            <div className="games-grid">
                {gamesData.map((game, index) => {
                    return (
                        <Link href={game.path} key={game.id} className={`game-card ${game.gradient}`} style={{ animationDelay: `${index * 0.1}s`, textDecoration: 'none' }}>
                            {game.isNew && <span className="card-badge">NOVO</span>}
                            <div className="icon-wrapper">
                                <img src={game.icon} alt={game.title} style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
                            </div>
                            <h3 className="game-title">{game.title}</h3>
                            <p className="game-description">{game.description}</p>
                            <span className="play-btn">Jogar</span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
