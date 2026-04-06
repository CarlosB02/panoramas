// Helper to generate IDs
let idCounter = 1;
const getId = () => idCounter++;

export const breakingNews = [
  "Última Hora: Novo telescópio europeu deteta sinais promissores de exoplaneta habitável.",
  "Atualização: Bolsas europeias disparam com acordo comercial transatlântico.",
  "Alerta: Vaga de calor recorde esperada para o sul da Península Ibérica."
];

export const featuredNews = {
  id: getId(),
  title: "Acordo Histórico na UE Estabelece Metas Ambiciosas de Energia Renovável até 2030",
  summary: "Os 27 estados-membros chegaram a consenso sobre um plano que prevê 80% de energia limpa na rede elétrica europeia, com investimentos significativos em infraestrutura solar e eólica.",
  content: "Conteúdo completo do artigo em desenvolvimento...",
  category: "Mundo",
  image: "/images/climate.png",
  timestamp: "há 2 horas",
  author: "Mariana Ferreira",
  featured: true,
  kicker: "MARCO EUROPEU",
  readTime: "Leitura de 8 min",
  comments: "15k",
  bullet: "Tratado assinado após negociações maratona de 48 horas; setor energético celebra viragem histórica."
};

export const categories = [
  {
    name: "Política",
    articles: [
      {
        id: getId(),
        title: "Autarquias Adotam Orçamentos Participativos com Recorde de Adesão",
        summary: "Mais de 200 municípios implementaram plataformas digitais que permitem aos cidadãos votar diretamente na alocação de verbas locais.",
        category: "Política",
        image: "/images/cat_mayor.png",
        timestamp: "há 4 horas",
        kicker: "DEMOCRACIA LOCAL",
        readTime: "Leitura de 4 min",
        comments: "1.2k",
        bullet: "Lisboa e Porto lideram com mais de 50.000 participantes cada no último ciclo orçamental."
      },
      {
        id: getId(),
        title: "Parlamento Aprova Reforma da Justiça com Apoio Bipartidário",
        summary: "Nova legislação promete reduzir tempo médio de processos judiciais de 3 anos para 18 meses com digitalização total dos tribunais.",
        category: "Política",
        image: "/images/sleeping.png",
        timestamp: "há 6 horas",
        kicker: "REFORMA JUDICIAL",
        readTime: "Leitura de 3 min",
        comments: "854",
        bullet: "Associação de juízes manifesta apoio cauteloso e pede mais recursos humanos."
      },
      {
        id: getId(),
        title: "Cimeira Ibérica Reforça Cooperação Transfronteiriça em Cinco Eixos",
        summary: "Portugal e Espanha assinam acordo para ligações ferroviárias de alta velocidade e partilha de infraestruturas de saúde nas zonas de fronteira.",
        category: "Política",
        image: "/images/diplomat.png",
        timestamp: "há 1 dia",
        kicker: "PARCERIA IBÉRICA",
        readTime: "Leitura de 5 min",
        comments: "2.3k",
        bullet: "Linha de TGV Lisboa-Madrid prevista para 2031, com paragem em Badajoz e Évora."
      }
    ]
  },
  {
    name: "Tecnologia",
    articles: [
      {
        id: getId(),
        title: "Startup Portuguesa Desenvolve Processador Quântico de Baixo Custo",
        summary: "O novo chip Q-Luso promete democratizar a computação quântica, tornando-a acessível a universidades e PMEs europeias.",
        category: "Tecnologia",
        image: "/images/quantum.png",
        timestamp: "há 3 horas",
        kicker: "INOVAÇÃO LUSA",
        readTime: "Leitura de 6 min",
        comments: "4k"
      },
      {
        id: getId(),
        title: "Inteligência Artificial Portuguesa Revoluciona Diagnóstico Médico",
        summary: "Sistema desenvolvido no IST consegue identificar tumores com 99,2% de precisão, superando radiologistas experientes.",
        category: "Tecnologia",
        image: "/images/evil_ai.png",
        timestamp: "há 5 horas",
        kicker: "IA MÉDICA",
        readTime: "Leitura de 2 min",
        comments: "156",
        bullet: "Hospital de Santa Maria já utiliza o sistema em fase piloto desde janeiro."
      },
      {
        id: getId(),
        title: "Portugal Lança Rede 6G Experimental em Lisboa e Porto",
        summary: "Projeto piloto em parceria com a UE visa testar velocidades 100x superiores ao 5G em ambientes urbanos densos.",
        category: "Tecnologia",
        image: "/images/no_screen.png",
        timestamp: "há 8 horas",
        kicker: "CONECTIVIDADE FUTURA",
        readTime: "Leitura de 8 min",
        comments: "99+"
      }
    ]
  }
];

export const latestNews = [
  {
    id: getId(),
    title: "Tráfego Fluvial no Tejo Bate Recorde com Nova Linha de Ferry Elétrico",
    summary: "A nova embarcação 100% elétrica transportou 12.000 passageiros no primeiro dia de operação.",
    timestamp: "há 10 minutos"
  },
  {
    id: getId(),
    title: "Investigadores do Porto Descobrem Nova Propriedade do Grafeno",
    summary: "A descoberta pode revolucionar o armazenamento de energia em baterias de próxima geração.",
    timestamp: "há 15 minutos"
  },
  {
    id: getId(),
    title: "Festival de Cinema de Lisboa Abre com Filme Português em Competição",
    summary: "Longa-metragem de realizador alentejano estreia com ovação de pé e críticas entusiastas.",
    timestamp: "há 32 minutos"
  },
  {
    id: getId(),
    title: "Exportações de Vinho Português Crescem 18% no Primeiro Trimestre",
    summary: "Vinhos do Douro e Alentejo lideram crescimento, com mercados asiáticos a registar maior procura.",
    timestamp: "há 45 minutos"
  },
  {
    id: getId(),
    title: "Nova Ciclovia Urbana Liga Parque das Nações a Belém",
    summary: "O percurso de 14 km ao longo do rio inclui estações de carregamento para bicicletas elétricas.",
    timestamp: "há 1 hora"
  }
];

export const mostRead = [
  { id: getId(), title: "Acordo Europeu de Energia Renovável: O Que Muda", views: "1.2M" },
  { id: getId(), title: "Top 10 Destinos Portugueses Para 2026", views: "980k" },
  { id: getId(), title: "Como a IA Está a Transformar a Medicina Portuguesa", views: "850k" },
  { id: getId(), title: "Mercado Imobiliário: Novas Tendências e Previsões", views: "720k" }
];

export const updatingNow = [
  { id: getId(), title: "Direto: Sessão Plenária na Assembleia da República", status: "Em curso" },
  { id: getId(), title: "Direto: Web Summit Lisboa — Dia 2", status: "Painel IA" }
];
