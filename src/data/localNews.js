// News Data — Panoramas (Fictional news articles)
// Each article covers topics in Portuguese society, politics, economy, and culture.

let newsId = 100;
const getNewsId = () => newsId++;

// ============================================================
// ARTICLE 1 — SAÚDE
// ============================================================
const artigo1 = {
    id: getNewsId(),
    title: "Novo Centro de Investigação Biomédica em Coimbra Promete Revolucionar Tratamento do Cancro",
    summary: "O centro, fruto de parceria entre a Universidade de Coimbra e o MIT, foca-se em terapias personalizadas com base no perfil genético de cada paciente.",
    content: `O novo Centro de Investigação Biomédica Avançada abriu oficialmente portas em Coimbra, reunindo mais de 200 investigadores de 14 nacionalidades. O projeto, com financiamento de 180 milhões de euros da UE, visa desenvolver tratamentos oncológicos de precisão.

"Estamos a entrar numa nova era da medicina", declarou a Profª. Dra. Helena Cardoso, diretora do centro. "Cada paciente terá um tratamento desenhado à medida do seu perfil genético, reduzindo efeitos secundários e aumentando a eficácia."

O centro já iniciou ensaios clínicos em três tipos de tumores — pulmão, mama e cólon — com resultados preliminares que mostram taxas de resposta 40% superiores aos tratamentos convencionais.`,
    category: "Saúde",
    categorySlug: "saude",
    image: "/images/hospital_ticket.png",
    timestamp: "há 1 hora",
    author: "Catarina Mendes",
    kicker: "INOVAÇÃO MÉDICA",
    readTime: "Leitura de 5 min",
    comments: "3.2k",
    bullet: "Os primeiros tratamentos personalizados estarão disponíveis no SNS a partir de 2027.",
    pullQuote: "Cada paciente terá um tratamento desenhado à medida do seu perfil genético.",
    expertQuote: {
        text: "Este centro coloca Portugal na vanguarda da oncologia de precisão europeia. É um marco histórico para a investigação nacional.",
        author: "Prof. Dr. Ricardo Neves",
        title: "Diretor do Instituto Português de Oncologia"
    },
    infographic: {
        title: "CENTRO BIOMÉDICO EM NÚMEROS",
        rows: [
            { label: "Investimento total", value: "€180M" },
            { label: "Investigadores", value: "200+" },
            { label: "Nacionalidades", value: "14" },
            { label: "Ensaios clínicos ativos", value: "3" },
            { label: "Melhoria na taxa de resposta", value: "+40%" }
        ]
    },
    seoMeta: {
        slug: "centro-biomedico-coimbra-cancro-tratamento",
        focus_keywords: ["centro biomédico Coimbra", "tratamento cancro personalizado"],
        meta_description: "Novo centro de investigação biomédica em Coimbra, parceria UC-MIT, promete revolucionar tratamento do cancro com terapias personalizadas."
    },
    imagePrompt: ""
};

// ============================================================
// ARTICLE 2 — POLÍTICA
// ============================================================
const artigo2 = {
    id: getNewsId(),
    title: "Portugal Assume Presidência do Conselho da UE com Agenda Focada na Transição Digital",
    summary: "O programa da presidência portuguesa prioriza a literacia digital, cibersegurança e a criação de um mercado único digital reforçado.",
    content: `Portugal assumiu a presidência rotativa do Conselho da União Europeia com uma agenda ambiciosa centrada na aceleração da transição digital europeia.

O Primeiro-Ministro apresentou em Bruxelas as três prioridades: universalização da literacia digital, reforço do quadro de cibersegurança europeu e a harmonização regulatória para criar um verdadeiro mercado único digital.

"A Europa não pode ficar para trás na corrida tecnológica global", afirmou o PM. "Portugal, como hub tecnológico emergente, está em posição única para liderar esta agenda."`,
    category: "Política",
    categorySlug: "politica",
    image: "/images/thumb_wrestling.png",
    timestamp: "há 2 horas",
    author: "Filipe Araújo",
    kicker: "PRESIDÊNCIA UE",
    readTime: "Leitura de 6 min",
    comments: "8.7k",
    bullet: "A presidência portuguesa propõe investimento de €50 mil milhões em infraestrutura digital até 2030.",
    pullQuote: "A Europa não pode ficar para trás na corrida tecnológica global.",
    expertQuote: {
        text: "Esta presidência pode ser um ponto de viragem para a política digital europeia. Portugal tem credibilidade nesta área graças ao Web Summit e ao ecossistema de startups.",
        author: "Profª. Dra. Ana Lourenço",
        title: "Catedrática de Política Europeia na Universidade Nova"
    },
    infographic: {
        title: "AGENDA DA PRESIDÊNCIA PORTUGUESA",
        rows: [
            { label: "Duração", value: "6 meses" },
            { label: "Prioridades principais", value: "3" },
            { label: "Cimeiras previstas", value: "4" },
            { label: "Investimento digital proposto", value: "€50B" },
            { label: "Estados-membros participantes", value: "27" }
        ]
    },
    seoMeta: {
        slug: "portugal-presidencia-conselho-ue-digital",
        focus_keywords: ["presidência UE Portugal", "transição digital europeia"],
        meta_description: "Portugal assume presidência do Conselho da UE com agenda focada na transição digital, cibersegurança e mercado único digital."
    },
    imagePrompt: ""
};

// ============================================================
// ARTICLE 3 — ECONOMIA
// ============================================================
const artigo3 = {
    id: getNewsId(),
    title: "Exportações Tecnológicas Portuguesas Crescem 34% e Ultrapassam Setor Têxtil pela Primeira Vez",
    summary: "O software, semicondutores e serviços digitais representam agora a maior fatia das exportações nacionais, superando o têxtil e calçado.",
    content: `As exportações de tecnologia portuguesa atingiram um marco histórico ao ultrapassarem pela primeira vez o setor têxtil e de calçado como principal fonte de receitas de exportação.

Dados do INE revelam que o setor tecnológico exportou 8,7 mil milhões de euros em 2025, um crescimento de 34% face ao ano anterior, impulsionado por empresas de software, fabrico de componentes para semicondutores e serviços de consultoria digital.

"Estamos a assistir à transformação estrutural da economia portuguesa", afirmou o Ministro da Economia. "Portugal deixou de ser apenas sol e praias para se tornar um hub tecnológico competitivo a nível global."`,
    category: "Economia",
    categorySlug: "economia",
    image: "/images/abacus_gov.png",
    timestamp: "há 3 horas",
    author: "Miguel Soares",
    kicker: "MARCO ECONÓMICO",
    readTime: "Leitura de 7 min",
    comments: "5.4k",
    bullet: "A região Norte lidera com 42% das exportações tech, seguida de Lisboa com 35%.",
    pullQuote: "Portugal deixou de ser apenas sol e praias para se tornar um hub tecnológico competitivo.",
    expertQuote: {
        text: "Esta viragem é o resultado de duas décadas de investimento em educação STEM e do ecossistema de startups que floresceu em torno de Lisboa e Porto.",
        author: "Dr. André Baptista",
        title: "Economista-Chefe da Fundação para a Ciência e Tecnologia"
    },
    infographic: {
        title: "EXPORTAÇÕES TECH EM NÚMEROS",
        rows: [
            { label: "Volume total", value: "€8.7B" },
            { label: "Crescimento anual", value: "+34%" },
            { label: "Empresas exportadoras", value: "2.400" },
            { label: "Empregos diretos", value: "180.000" },
            { label: "Principal mercado", value: "Alemanha" }
        ]
    },
    seoMeta: {
        slug: "exportacoes-tecnologia-portugal-recorde",
        focus_keywords: ["exportações tecnologia Portugal", "economia digital"],
        meta_description: "Exportações tecnológicas portuguesas crescem 34% e superam têxtil pela primeira vez. Software e semicondutores lideram."
    },
    imagePrompt: ""
};

// ============================================================
// ARTICLE 4 — JUSTIÇA/POLÍTICA
// ============================================================
const artigo4 = {
    id: getNewsId(),
    title: "Tribunal Constitucional Analisa Recurso Sobre Lei de Proteção de Dados nas Redes Sociais",
    summary: "A nova lei que obriga plataformas a verificar idade dos utilizadores gera debate sobre privacidade e direitos digitais.",
    content: `O Tribunal Constitucional iniciou a análise do recurso interposto contra a nova Lei de Proteção de Menores nas Redes Sociais, que obriga plataformas como Instagram, TikTok e YouTube a implementar sistemas de verificação de idade.

A lei, aprovada com maioria qualificada no Parlamento, exige que menores de 16 anos obtenham consentimento parental verificado para criar contas em redes sociais. As plataformas que não cumprirem enfrentam multas até 4% da receita global.

Organizações de direitos digitais argumentam que os mecanismos de verificação comprometem a privacidade de todos os utilizadores, enquanto associações de pais aplaudem a medida como "essencial para proteger as crianças".`,
    category: "Política",
    categorySlug: "politica",
    image: "/images/socrates_lawyer.png",
    timestamp: "há 4 horas",
    author: "Beatriz Oliveira",
    kicker: "DIREITOS DIGITAIS",
    readTime: "Leitura de 6 min",
    comments: "12.1k",
    bullet: "A decisão do TC é aguardada para as próximas semanas e terá impacto em toda a legislação digital europeia.",
    pullQuote: "A proteção dos menores não pode ser feita à custa da privacidade de todos os cidadãos.",
    expertQuote: {
        text: "Este caso vai definir o equilíbrio entre proteção de menores e direitos de privacidade na era digital. A decisão terá repercussões em toda a Europa.",
        author: "Prof. Dr. Nuno Teixeira",
        title: "Constitucionalista da Faculdade de Direito de Lisboa"
    },
    infographic: {
        title: "LEI DE PROTEÇÃO DIGITAL",
        rows: [
            { label: "Idade mínima", value: "16 anos" },
            { label: "Plataformas abrangidas", value: "12" },
            { label: "Multa máxima", value: "4% receita" },
            { label: "Prazo implementação", value: "12 meses" },
            { label: "Recursos apresentados", value: "3" }
        ]
    },
    seoMeta: {
        slug: "tribunal-constitucional-lei-redes-sociais-menores",
        focus_keywords: ["proteção menores redes sociais", "lei digital Portugal"],
        meta_description: "TC analisa recurso contra lei que obriga verificação de idade nas redes sociais. Debate entre proteção de menores e privacidade."
    },
    imagePrompt: ""
};

// ============================================================
// ARTICLE 5 — ECONOMIA
// ============================================================
const artigo5 = {
    id: getNewsId(),
    title: "Banco de Portugal Prevê Crescimento de 2,8% para 2026 Impulsionado por Investimento Verde",
    summary: "O relatório de primavera destaca o papel central dos fundos europeus e do setor das energias renováveis no crescimento acima da média da zona euro.",
    content: `O Banco de Portugal reviu em alta a previsão de crescimento económico para 2026, de 2,1% para 2,8%, sustentada pelo forte investimento em energias renováveis e a execução acelerada dos fundos do PRR.

O relatório destaca que Portugal está a crescer acima da média da zona euro (1,9%) pelo terceiro trimestre consecutivo, impulsionado por investimentos em parques solares, eólicos offshore e hidrogénio verde.

"A transição energética está a ser o motor da economia", concluiu o Governador do BdP. "O investimento verde cria emprego, atrai capital estrangeiro e reduz a dependência energética."`,
    category: "Economia",
    categorySlug: "economia",
    image: "/images/pastel_nata_pib.png",
    timestamp: "há 5 horas",
    author: "Raquel Tavares",
    kicker: "CRESCIMENTO VERDE",
    readTime: "Leitura de 5 min",
    comments: "6.8k",
    bullet: "O setor das renováveis criou 45.000 novos empregos em 2025, maioritariamente no Alentejo e Algarve.",
    pullQuote: "A transição energética está a ser o motor da economia portuguesa.",
    expertQuote: {
        text: "Portugal é caso de estudo na Europa. Passou de importador líquido de energia para potencial exportador em apenas uma década.",
        author: "Dra. Inês Rodrigues",
        title: "Economista Sénior do BCE"
    },
    infographic: {
        title: "ECONOMIA PORTUGUESA 2026",
        rows: [
            { label: "Previsão PIB", value: "2,8%" },
            { label: "Média zona euro", value: "1,9%" },
            { label: "Investimento verde", value: "€12B" },
            { label: "Novos empregos renováveis", value: "45.000" },
            { label: "Energia renovável no mix", value: "78%" }
        ]
    },
    seoMeta: {
        slug: "banco-portugal-crescimento-2026-investimento-verde",
        focus_keywords: ["PIB Portugal 2026", "crescimento económico verde"],
        meta_description: "Banco de Portugal prevê crescimento de 2,8% para 2026, acima da média europeia, impulsionado por investimento em energias renováveis."
    },
    imagePrompt: ""
};

// ============================================================
// ARTICLE 6 — PORTUGAL (Featured)
// ============================================================
const artigo6 = {
    id: getNewsId(),
    title: "Metro de Lisboa Inaugura Expansão Histórica com Quatro Novas Estações e Ligação ao Aeroporto",
    summary: "A maior expansão em 30 anos liga finalmente o aeroporto Humberto Delgado à rede de metro, reduzindo o tempo de viagem ao centro para 18 minutos.",
    content: `O Metro de Lisboa inaugurou esta manhã a expansão mais significativa da sua história, com quatro novas estações que estendem a linha vermelha até ao Aeroporto Humberto Delgado e ao Hospital Beatriz Ângelo em Loures.

A cerimónia contou com a presença do Presidente da República e do Presidente da Câmara de Lisboa. O primeiro comboio partiu às 06h00 com lotação esgotada de convidados e jornalistas.

"Esta obra muda a mobilidade da região metropolitana de Lisboa", declarou o presidente da câmara. "Ligamos o aeroporto ao centro em 18 minutos e retiramos milhares de carros das estradas todos os dias."

A expansão, financiada em 60% por fundos europeus, custou 1,2 mil milhões de euros e demorou 5 anos a construir.`,
    category: "Portugal",
    categorySlug: "portugal",
    image: "/images/almada_float.png",
    timestamp: "há 6 horas",
    author: "Tiago Martins",
    kicker: "MOBILIDADE URBANA",
    readTime: "Leitura de 8 min",
    comments: "15.3k",
    bullet: "A linha transportará 80.000 passageiros diários, reduzindo emissões de CO2 em 12.000 toneladas/ano.",
    pullQuote: "Ligamos o aeroporto ao centro em 18 minutos e retiramos milhares de carros das estradas.",
    expertQuote: {
        text: "Esta expansão coloca Lisboa ao nível das melhores capitais europeias em termos de conectividade aeroportuária via transporte público.",
        author: "Eng.ª Sofia Correia",
        title: "Especialista em Mobilidade Urbana do IST"
    },
    infographic: {
        title: "EXPANSÃO DO METRO DE LISBOA",
        rows: [
            { label: "Novas estações", value: "4" },
            { label: "Investimento", value: "€1.2B" },
            { label: "Tempo aeroporto-centro", value: "18 min" },
            { label: "Passageiros/dia previstos", value: "80.000" },
            { label: "Redução CO2 anual", value: "12.000 ton" }
        ]
    },
    seoMeta: {
        slug: "metro-lisboa-expansao-aeroporto-novas-estacoes",
        focus_keywords: ["metro Lisboa expansão", "ligação aeroporto metro"],
        meta_description: "Metro de Lisboa inaugura maior expansão em 30 anos com 4 novas estações e ligação ao aeroporto em 18 minutos."
    },
    imagePrompt: ""
};

// ============================================================
// ADDITIONAL COMPACT ARTICLES
// ============================================================

// --- POLÍTICA extra ---
const politica3 = {
    id: getNewsId(), title: "Parlamento Aprova Orçamento Participativo Nacional Inédito",
    summary: "Cidadãos poderão decidir a alocação de 500 milhões de euros em projetos locais através de plataforma digital.",
    category: "Política", categorySlug: "politica", image: "/images/parliament_rhyme.png",
    timestamp: "há 7 horas", author: "Joana Vieira", kicker: "DEMOCRACIA DIRETA",
    readTime: "Leitura de 4 min", comments: "4.1k",
    bullet: "Mais de 2 milhões de cidadãos já se registaram na plataforma antes do lançamento oficial.",
    pullQuote: "É o maior exercício de democracia participativa da história de Portugal.",
    expertQuote: { text: "Este modelo pode servir de referência para toda a Europa.", author: "Prof. Luís Campos", title: "Politólogo da Universidade de Lisboa" },
    seoMeta: { slug: "parlamento-orcamento-participativo-nacional", focus_keywords: ["orçamento participativo", "democracia direta"], meta_description: "Parlamento aprova orçamento participativo nacional de 500 milhões de euros." }
};
const politica4 = {
    id: getNewsId(), title: "Governo Lança Programa de Literacia Digital Para Idosos com Meta de 500 Mil Formandos",
    summary: "O programa 'Portugal Conectado' disponibiliza tablets e formação gratuita a maiores de 65 anos em todo o país.",
    category: "Política", categorySlug: "politica", image: "/images/ministry_humor.png",
    timestamp: "há 8 horas", author: "Carlos Figueiredo", kicker: "INCLUSÃO DIGITAL",
    readTime: "Leitura de 3 min", comments: "7.2k",
    bullet: "Juntas de freguesia servirão como centros de formação com voluntários universitários.",
    pullQuote: "Ninguém pode ficar para trás na transição digital.",
    expertQuote: { text: "A exclusão digital dos idosos é um problema de saúde pública que este programa pode resolver.", author: "Dra. Marta Alves", title: "Geriatra do Hospital de São João" },
    seoMeta: { slug: "programa-literacia-digital-idosos", focus_keywords: ["literacia digital idosos", "Portugal Conectado"], meta_description: "Governo lança programa de literacia digital para 500 mil idosos com tablets gratuitos." }
};
const politica5 = {
    id: getNewsId(), title: "Câmaras Municipais Adotam Modelo de Cidades Inteligentes com Sensores IoT",
    summary: "Lisboa, Porto e Braga lideram projeto-piloto que monitoriza qualidade do ar, tráfego e consumo energético em tempo real.",
    category: "Política", categorySlug: "politica", image: "/images/rotunda_gps.png",
    timestamp: "há 10 horas", author: "Rui Pereira", kicker: "CIDADES INTELIGENTES",
    readTime: "Leitura de 4 min", comments: "3.8k",
    bullet: "Os dados recolhidos são públicos e acessíveis através de app gratuita para cidadãos.",
    pullQuote: "Sensores em cada esquina permitem decisões baseadas em dados, não em intuição.",
    expertQuote: { text: "As smart cities portuguesas estão entre as top 20 da Europa em maturidade digital.", author: "Eng. Paulo Henriques", title: "Coordenador do Smart Cities Portugal" },
    seoMeta: { slug: "cidades-inteligentes-sensores-iot-portugal", focus_keywords: ["cidades inteligentes Portugal", "IoT municipal"], meta_description: "Lisboa, Porto e Braga implementam sensores IoT para monitorização urbana em tempo real." }
};
const politica6 = {
    id: getNewsId(), title: "Nova Lei de Transparência Obriga Autarcas a Publicar Despesas em Tempo Real",
    summary: "Todas as despesas públicas acima de 500€ serão automaticamente publicadas num portal aberto acessível a qualquer cidadão.",
    category: "Política", categorySlug: "politica", image: "/images/rain_ban.png",
    timestamp: "há 12 horas", author: "Teresa Santos", kicker: "TRANSPARÊNCIA TOTAL",
    readTime: "Leitura de 5 min", comments: "9.3k",
    bullet: "O portal já está em fase de testes em 12 municípios com resultados positivos.",
    pullQuote: "A transparência não é opcional, é a base da confiança democrática.",
    expertQuote: { text: "Portugal passa a ter o sistema de transparência municipal mais avançado da Europa.", author: "Dr. Manuel Braga", title: "Especialista em Governance Pública" },
    seoMeta: { slug: "lei-transparencia-despesas-autarcas", focus_keywords: ["transparência autarquias", "despesas públicas"], meta_description: "Nova lei obriga publicação automática de despesas públicas acima de 500€ em portal aberto." }
};

// --- ECONOMIA extra ---
const economia3 = {
    id: getNewsId(), title: "Portugal Torna-se Terceiro Maior Exportador de Hidrogénio Verde na Europa",
    summary: "Parques de produção no Alentejo e Algarve colocam Portugal como referência europeia em energia limpa.",
    category: "Economia", categorySlug: "economia", image: "/images/sardinha_moeda.png",
    timestamp: "há 9 horas", author: "Gonçalo Reis", kicker: "HIDROGÉNIO VERDE",
    readTime: "Leitura de 4 min", comments: "4.5k",
    bullet: "A Alemanha é o principal comprador, absorvendo 45% da produção portuguesa.",
    pullQuote: "O hidrogénio verde é o novo petróleo, e Portugal tem sol ilimitado para produzi-lo.",
    expertQuote: { text: "A posição geográfica de Portugal, aliada à capacidade solar, cria uma vantagem competitiva imbatível.", author: "Dr. Vasco Moreira", title: "Diretor da Agência Portuguesa de Energia" },
    seoMeta: { slug: "portugal-exportador-hidrogenio-verde-europa", focus_keywords: ["hidrogénio verde Portugal", "energia limpa exportação"], meta_description: "Portugal terceiro maior exportador de hidrogénio verde na Europa." }
};
const economia4 = {
    id: getNewsId(), title: "Mercado Imobiliário Estabiliza com Novo Programa de Habitação Acessível",
    summary: "Construção de 30.000 fogos a preços controlados em parceria público-privada começa a produzir efeitos nos preços de arrendamento.",
    category: "Economia", categorySlug: "economia", image: "/images/castle_vs_t1.png",
    timestamp: "há 11 horas", author: "Ana Monteiro", kicker: "HABITAÇÃO ACESSÍVEL",
    readTime: "Leitura de 5 min", comments: "11.2k",
    bullet: "As rendas em Lisboa desceram 8% no último trimestre, a primeira queda em 6 anos.",
    pullQuote: "A solução para a crise habitacional exige escala e parceria entre público e privado.",
    expertQuote: { text: "O programa está a funcionar. Pela primeira vez em anos, vemos inversão na tendência de subida das rendas.", author: "Profª. Luísa Marques", title: "Economista Imobiliária da FEUP" },
    seoMeta: { slug: "habitacao-acessivel-mercado-imobiliario", focus_keywords: ["habitação acessível", "rendas Lisboa"], meta_description: "Novo programa de habitação acessível com 30.000 fogos começa a baixar rendas em Lisboa." }
};
const economia5 = {
    id: getNewsId(), title: "Turismo Sustentável Cresce 28% e Alentejo Lidera Procura Internacional",
    summary: "Ecoturismo, turismo rural e experiências gastronómicas autênticas atraem viajantes premium ao interior de Portugal.",
    category: "Economia", categorySlug: "economia", image: "/images/coffee_tax.png",
    timestamp: "há 14 horas", author: "Isabel Costa", kicker: "ECOTURISMO",
    readTime: "Leitura de 3 min", comments: "18.7k",
    bullet: "O Alentejo ultrapassou o Algarve em receitas de turismo premium pela primeira vez.",
    pullQuote: "Os viajantes querem experiências autênticas, não resorts genéricos.",
    expertQuote: { text: "O interior de Portugal tem tudo o que o turista moderno procura: autenticidade, gastronomia e paisagem intocada.", author: "Dr. Pedro Lopes", title: "Presidente do Turismo de Portugal" },
    seoMeta: { slug: "turismo-sustentavel-alentejo-crescimento", focus_keywords: ["turismo sustentável Portugal", "ecoturismo Alentejo"], meta_description: "Turismo sustentável cresce 28% com Alentejo a liderar procura internacional por experiências premium." }
};
const economia6 = {
    id: getNewsId(), title: "Indústria do Vinho Português Bate Recorde de Exportações com Abertura do Mercado Chinês",
    summary: "Acordo bilateral permite entrada de vinhos portugueses na China sem tarifas, abrindo mercado de 1,4 mil milhões de consumidores.",
    category: "Economia", categorySlug: "economia", image: "/images/saudade_export.png",
    timestamp: "há 16 horas", author: "Ricardo Pinto", kicker: "VINHOS DO MUNDO",
    readTime: "Leitura de 6 min", comments: "5.6k",
    bullet: "Vinhos do Porto e Douro são os mais procurados, com encomendas que triplicaram em 3 meses.",
    pullQuote: "O vinho português é o embaixador cultural mais eficaz que temos.",
    expertQuote: { text: "A China vai ser o maior mercado de vinhos do mundo em 2030. Estar lá primeiro é uma vantagem estratégica enorme.", author: "Dra. Fernanda Rocha", title: "Presidente do Instituto do Vinho e da Vinha" },
    seoMeta: { slug: "exportacoes-vinho-portugues-china-recorde", focus_keywords: ["vinho português China", "exportações vinho"], meta_description: "Vinhos portugueses entram na China sem tarifas. Exportações batem recorde histórico." }
};

// --- SAÚDE extra ---
const saude2 = {
    id: getNewsId(), title: "SNS Implementa Telemedicina Universal com Consultas Disponíveis em 24 Horas",
    summary: "Nova plataforma permite a qualquer utente agendar videoconsulta para o mesmo dia em 15 especialidades médicas.",
    category: "Saúde", categorySlug: "saude", image: "/images/curandeiro.png",
    timestamp: "há 8 horas", author: "Marta Lopes", kicker: "SAÚDE DIGITAL",
    readTime: "Leitura de 5 min", comments: "6.3k",
    bullet: "Mais de 100.000 consultas realizadas no primeiro mês de funcionamento.",
    pullQuote: "A telemedicina não substitui o médico presencial, mas democratiza o acesso.",
    expertQuote: { text: "Este sistema elimina as deslocações desnecessárias e reduz a pressão sobre as urgências hospitalares.", author: "Dr. Jorge Valente", title: "Diretor do Serviço Nacional de Saúde Digital" },
    seoMeta: { slug: "sns-telemedicina-universal-consultas", focus_keywords: ["telemedicina SNS", "consultas digitais"], meta_description: "SNS lança telemedicina universal com consultas disponíveis em 24 horas em 15 especialidades." }
};
const saude3 = {
    id: getNewsId(), title: "Investigadores da UP Desenvolvem Vacina Inovadora Contra Bactérias Resistentes a Antibióticos",
    summary: "Vacina baseada em nanopartículas mostra eficácia de 92% contra superbactérias em ensaios pré-clínicos.",
    category: "Saúde", categorySlug: "saude", image: "/images/bill_shock.png",
    timestamp: "há 13 horas", author: "Sofia Carvalho", kicker: "COMBATE BACTERIANO",
    readTime: "Leitura de 3 min", comments: "8.9k",
    bullet: "A OMS classifica a resistência antimicrobiana como uma das 10 maiores ameaças à saúde global.",
    pullQuote: "Esta vacina pode salvar milhões de vidas nas próximas décadas.",
    expertQuote: { text: "Os resultados são extraordinários. Se confirmados em humanos, será uma revolução no combate às superbactérias.", author: "Profª. Dra. Clara Sousa", title: "Microbióloga da Universidade do Porto" },
    seoMeta: { slug: "vacina-bacterias-resistentes-universidade-porto", focus_keywords: ["vacina superbactérias", "resistência antibióticos"], meta_description: "UP desenvolve vacina com 92% de eficácia contra bactérias resistentes a antibióticos." }
};
const saude4 = {
    id: getNewsId(), title: "Programa Nacional de Saúde Mental Duplica Número de Psicólogos nos Centros de Saúde",
    summary: "Investimento de 200 milhões de euros garante acesso a consultas de psicologia em todos os concelhos do país.",
    category: "Saúde", categorySlug: "saude", image: "/images/climate.png",
    timestamp: "há 15 horas", author: "André Lima", kicker: "SAÚDE MENTAL",
    readTime: "Leitura de 4 min", comments: "12.4k",
    bullet: "O tempo médio de espera para primeira consulta desceu de 6 meses para 3 semanas.",
    pullQuote: "A saúde mental é saúde. Não pode continuar a ser tratada como luxo.",
    expertQuote: { text: "Este investimento vai poupar ao Estado milhares de milhões em baixas médicas e incapacidade.", author: "Dr. Paulo Gonçalves", title: "Presidente da Ordem dos Psicólogos" },
    seoMeta: { slug: "programa-saude-mental-psicologos-centros-saude", focus_keywords: ["saúde mental Portugal", "psicólogos SNS"], meta_description: "Programa nacional duplica psicólogos nos centros de saúde com investimento de 200 milhões." }
};
const saude5 = {
    id: getNewsId(), title: "Hospital de São João Realiza Primeira Cirurgia Robótica Assistida por IA em Portugal",
    summary: "Sistema combina inteligência artificial e braços robóticos para cirurgias de precisão submimérica.",
    category: "Saúde", categorySlug: "saude", image: "/images/quantum.png",
    timestamp: "há 18 horas", author: "Helena Martins", kicker: "CIRURGIA DO FUTURO",
    readTime: "Leitura de 5 min", comments: "7.1k",
    bullet: "O procedimento reduziu o tempo de recuperação do paciente de 2 semanas para 3 dias.",
    pullQuote: "A IA não substitui o cirurgião — amplifica as suas capacidades para além do humanamente possível.",
    expertQuote: { text: "Este é o futuro da cirurgia. Precisão ao nível do décimo de milímetro, impossível para a mão humana.", author: "Prof. Dr. Alberto Machado", title: "Chefe de Cirurgia do HSJ" },
    seoMeta: { slug: "cirurgia-robotica-ia-hospital-sao-joao", focus_keywords: ["cirurgia robótica IA", "Hospital São João"], meta_description: "Hospital de São João realiza primeira cirurgia robótica assistida por IA em Portugal." }
};

// --- PORTUGAL extra ---
const portugal2 = {
    id: getNewsId(), title: "Ferrovia de Alta Velocidade Lisboa-Porto Entra em Fase Final de Construção",
    summary: "A ligação promete reduzir o tempo de viagem entre as duas cidades para 1 hora e 15 minutos.",
    category: "Portugal", categorySlug: "portugal", image: "/images/sleeping.png",
    timestamp: "há 9 horas", author: "Diogo Fernandes", kicker: "ALTA VELOCIDADE",
    readTime: "Leitura de 4 min", comments: "8.2k",
    bullet: "Os bilhetes para as primeiras viagens de teste já esgotaram em 47 minutos.",
    pullQuote: "Esta ferrovia vai mudar a forma como os portugueses vivem e trabalham.",
    expertQuote: { text: "É a infraestrutura mais transformadora desde a Ponte Vasco da Gama.", author: "Eng. Rosa Valente", title: "Presidente da Infraestruturas de Portugal" },
    seoMeta: { slug: "alta-velocidade-lisboa-porto-construcao", focus_keywords: ["TGV Lisboa Porto", "alta velocidade Portugal"], meta_description: "Ferrovia de alta velocidade Lisboa-Porto em fase final. Viagem em 1h15." }
};
const portugal3 = {
    id: getNewsId(), title: "Programa de Reflorestação Planta 50 Milhões de Árvores Nativas no Interior",
    summary: "O maior projeto ambiental da história de Portugal visa restaurar ecossistemas e prevenir incêndios com espécies autóctones.",
    category: "Portugal", categorySlug: "portugal", image: "/images/cat_mayor.png",
    timestamp: "há 11 horas", author: "Madalena Cruz", kicker: "FLORESTA FUTURA",
    readTime: "Leitura de 5 min", comments: "6.7k",
    bullet: "O eucalipto será gradualmente substituído por carvalhos, castanheiros e sobreiros em 200.000 hectares.",
    pullQuote: "Reflorestamos com o que era nosso antes. A floresta autóctone é a melhor defesa contra incêndios.",
    expertQuote: { text: "Este programa é o investimento mais inteligente que Portugal pode fazer na luta contra as alterações climáticas.", author: "Prof. Francisco Silva", title: "Ecologista do ICNF" },
    seoMeta: { slug: "reflorestacao-50-milhoes-arvores-portugal", focus_keywords: ["reflorestação Portugal", "árvores nativas interior"], meta_description: "Programa planta 50 milhões de árvores nativas para restaurar floresta portuguesa." }
};
const portugal4 = {
    id: getNewsId(), title: "Açores Inauguram Maior Reserva Marinha do Atlântico Norte",
    summary: "Área protegida de 600.000 km² preserva ecossistemas únicos e posiciona Portugal como líder em conservação oceânica.",
    category: "Portugal", categorySlug: "portugal", image: "/images/diplomat.png",
    timestamp: "há 14 horas", author: "Leonor Azevedo", kicker: "OCEANO PROTEGIDO",
    readTime: "Leitura de 4 min", comments: "5.4k",
    bullet: "A reserva alberga mais de 1.200 espécies marinhas, incluindo 30 endémicas dos Açores.",
    pullQuote: "Portugal tem a maior zona económica exclusiva da Europa e a responsabilidade de a proteger.",
    expertQuote: { text: "Esta reserva coloca os Açores no mapa global da conservação marinha.", author: "Dra. Alice Marques", title: "Bióloga Marinha da Universidade dos Açores" },
    seoMeta: { slug: "acores-reserva-marinha-atlantico-norte", focus_keywords: ["reserva marinha Açores", "conservação oceânica"], meta_description: "Açores inauguram maior reserva marinha do Atlântico Norte com 600.000 km² protegidos." }
};
const portugal5 = {
    id: getNewsId(), title: "Aldeias do Interior Revitalizam-se com Programa de Nómadas Digitais",
    summary: "Incentivos fiscais e internet de alta velocidade atraem 15.000 trabalhadores remotos para concelhos despovoados.",
    category: "Portugal", categorySlug: "portugal", image: "/images/no_screen.png",
    timestamp: "há 17 horas", author: "Bernardo Almeida", kicker: "INTERIOR DIGITAL",
    readTime: "Leitura de 6 min", comments: "4.8k",
    bullet: "As escolas rurais registaram aumento de 200% nas inscrições com a chegada de novas famílias.",
    pullQuote: "O interior de Portugal tem qualidade de vida que as capitais europeias invejariam.",
    expertQuote: { text: "Este programa prova que a desertificação do interior não é inevitável quando se criam as condições certas.", author: "Profª. Rita Duarte", title: "Socióloga da Universidade da Beira Interior" },
    seoMeta: { slug: "aldeias-interior-nomadas-digitais-revitalizacao", focus_keywords: ["nómadas digitais interior", "revitalização aldeias"], meta_description: "Programa atrai 15.000 nómadas digitais para aldeias do interior com incentivos fiscais e fibra óptica." }
};

// --- MUNDO ---
const mundo1 = {
    id: getNewsId(), title: "ONU Adota Tratado Histórico de Regulação Internacional da Inteligência Artificial",
    summary: "Os 193 estados-membros concordam em princípios vinculativos para desenvolvimento responsável de IA.",
    category: "Mundo", categorySlug: "mundo", image: "/images/evil_ai.png",
    timestamp: "há 6 horas", author: "Daniela Rocha", kicker: "IA REGULADA",
    readTime: "Leitura de 4 min", comments: "9.1k",
    bullet: "O tratado inclui proibição de armas autónomas letais e exigência de transparência algorítmica.",
    pullQuote: "A IA é demasiado poderosa para ser deixada ao critério exclusivo das empresas tecnológicas.",
    expertQuote: { text: "Este é o momento Paris Agreement para a inteligência artificial.", author: "Prof. Tomás Ribeiro", title: "Investigador de Ética em IA na ONU" },
    seoMeta: { slug: "onu-tratado-regulacao-inteligencia-artificial", focus_keywords: ["regulação IA ONU", "tratado inteligência artificial"], meta_description: "ONU adota primeiro tratado vinculativo de regulação de IA com 193 países." }
};
const mundo2 = {
    id: getNewsId(), title: "Missão Europeia a Marte Recolhe Primeiras Amostras de Solo com Sinais de Vida Microbiana",
    summary: "A sonda ExoMars encontra compostos orgânicos complexos em amostras subterrâneas, gerando entusiasmo na comunidade científica.",
    category: "Mundo", categorySlug: "mundo", image: "/images/quantum.png",
    timestamp: "há 10 horas", author: "Marco Silveira", kicker: "VIDA EM MARTE?",
    readTime: "Leitura de 5 min", comments: "14.3k",
    bullet: "As amostras serão enviadas à Terra em 2028 para análise laboratorial definitiva.",
    pullQuote: "Se confirmado, será a maior descoberta científica da história da humanidade.",
    expertQuote: { text: "Os compostos encontrados são consistentes com atividade biológica. Mas precisamos de cautela científica antes de conclusões definitivas.", author: "Dra. Aurora Estrela", title: "Astrobióloga da ESA" },
    seoMeta: { slug: "missao-europeia-marte-sinais-vida", focus_keywords: ["ExoMars vida microbiana", "amostras Marte"], meta_description: "Sonda europeia recolhe amostras em Marte com sinais de vida microbiana. Cientistas cautelosamente otimistas." }
};
const mundo3 = {
    id: getNewsId(), title: "Índia e UE Assinam Maior Acordo Comercial da Década com Impacto Global",
    summary: "Tratado elimina tarifas em 95% dos produtos e cria corredor digital para startups entre os dois blocos.",
    category: "Mundo", categorySlug: "mundo", image: "/images/thumb_wrestling.png",
    timestamp: "há 13 horas", author: "Vera Nunes", kicker: "COMÉRCIO GLOBAL",
    readTime: "Leitura de 3 min", comments: "5.2k",
    bullet: "Empresas portuguesas de tecnologia veem o acordo como porta de entrada para o mercado indiano.",
    pullQuote: "Este acordo redefine as alianças comerciais do século XXI.",
    expertQuote: { text: "Para Portugal, o acesso preferencial ao mercado indiano pode valer 2 mil milhões em exportações adicionais.", author: "Dr. António Ferreira", title: "Economista do Comércio Internacional" },
    seoMeta: { slug: "india-ue-acordo-comercial-historico", focus_keywords: ["acordo comercial Índia UE", "tratado comércio global"], meta_description: "Índia e UE assinam maior acordo comercial da década. Portugal beneficia de acesso a mercado de 1,4 mil milhões." }
};
const mundo4 = {
    id: getNewsId(), title: "Regiões Polares Registam Recuperação Inédita de Gelo Após Acordo Climático de 2024",
    summary: "Dados de satélite confirmam aumento de 4% na extensão do gelo ártico, o primeiro em 30 anos.",
    category: "Mundo", categorySlug: "mundo", image: "/images/climate.png",
    timestamp: "há 15 horas", author: "Luís Cavalcanti", kicker: "CLIMA POSITIVO",
    readTime: "Leitura de 4 min", comments: "3.9k",
    bullet: "Cientistas alertam que a tendência precisa de se manter durante 10 anos para ser considerada reversão.",
    pullQuote: "Pela primeira vez em décadas, os dados climáticos dão-nos razão para otimismo cauteloso.",
    expertQuote: { text: "A redução drástica de emissões desde 2024 está a ter efeito mensurável. A natureza responde quando lhe damos hipótese.", author: "Profª. Cristina Gelo", title: "Climatóloga do IPMA" },
    seoMeta: { slug: "gelo-artico-recuperacao-acordo-climatico", focus_keywords: ["recuperação gelo ártico", "acordo climático resultados"], meta_description: "Gelo ártico regista primeira expansão em 30 anos após acordo climático global de 2024." }
};

// --- DESPORTO ---
const desporto1 = {
    id: getNewsId(), title: "Seleção Portuguesa Vence Liga das Nações com Geração de Ouro da Formação Nacional",
    summary: "Portugal conquista o troféu com equipa composta maioritariamente por jogadores formados nas academias nacionais.",
    category: "Desporto", categorySlug: "desporto", image: "/images/sleeping.png",
    timestamp: "há 7 horas", author: "Nuno Ribeiro", kicker: "CAMPEÕES",
    readTime: "Leitura de 4 min", comments: "22.3k",
    bullet: "Oito dos onze titulares foram formados em Portugal, um recorde na história da seleção.",
    pullQuote: "A formação portuguesa é, a par da espanhola, a melhor do mundo.",
    expertQuote: { text: "Esta geração é fruto de 15 anos de investimento nas academias. Portugal colhe agora o que semeou.", author: "Rui Costa", title: "Presidente da FPF" },
    seoMeta: { slug: "selecao-portuguesa-liga-nacoes-formacao", focus_keywords: ["seleção Portugal Liga Nações", "formação portuguesa futebol"], meta_description: "Portugal vence Liga das Nações com equipa formada em academias nacionais." }
};
const desporto2 = {
    id: getNewsId(), title: "Atleta Portuguesa Bate Recorde Mundial de Maratona nos Jogos Olímpicos",
    summary: "Clara Monteiro cruza a meta em 2h14m32s, tornando-se a maratonista mais rápida de sempre.",
    category: "Desporto", categorySlug: "desporto", image: "/images/cat_mayor.png",
    timestamp: "há 12 horas", author: "José Andrade", kicker: "RECORDE MUNDIAL",
    readTime: "Leitura de 5 min", comments: "35.1k",
    bullet: "O feito coloca Portugal no top 3 de medalhas em atletismo na história dos Jogos.",
    pullQuote: "Corri por mim, pela minha família e por todos os que me disseram que era impossível.",
    expertQuote: { text: "Tecnicamente perfeita, mentalmente inabalável. Clara reescreveu os limites do possível.", author: "Prof. Mário Treinador", title: "Treinador Nacional de Atletismo" },
    seoMeta: { slug: "atleta-portuguesa-recorde-maratona-olimpicos", focus_keywords: ["recorde maratona Portugal", "Clara Monteiro atletismo"], meta_description: "Atleta portuguesa bate recorde mundial de maratona nos Jogos Olímpicos com 2h14m32s." }
};

// --- ENTRETENIMENTO ---
const entreter1 = {
    id: getNewsId(), title: "Filme Português Vence Palma de Ouro em Cannes — Primeira Vez na História",
    summary: "O filme 'Maresia' do realizador António Vaz conquista o prémio máximo do festival mais prestigiado do mundo.",
    category: "Entretenimento", categorySlug: "entretenimento", image: "/images/diplomat.png",
    timestamp: "há 5 horas", author: "Paula Freitas", kicker: "CINEMA DE OURO",
    readTime: "Leitura de 4 min", comments: "7.8k",
    bullet: "O filme arrecadou ovação de 12 minutos de pé e já tem distribuição confirmada em 47 países.",
    pullQuote: "Este filme é sobre Portugal, mas fala uma linguagem universal.",
    expertQuote: { text: "A Palma de Ouro para Portugal é o reconhecimento de décadas de cinema de autor de qualidade mundial.", author: "Profª. Maria Barroso", title: "Crítica de Cinema do Expresso" },
    seoMeta: { slug: "filme-portugues-palma-ouro-cannes", focus_keywords: ["Palma de Ouro Portugal", "filme Maresia Cannes"], meta_description: "Filme português 'Maresia' vence Palma de Ouro em Cannes pela primeira vez na história do cinema nacional." }
};
const entreter2 = {
    id: getNewsId(), title: "Festival NOS Alive Anuncia Edição Especial com Maior Cartaz de Sempre",
    summary: "O festival de Oeiras confirma 120 artistas de 30 países, incluindo 5 headliners exclusivos para Portugal.",
    category: "Entretenimento", categorySlug: "entretenimento", image: "/images/no_screen.png",
    timestamp: "há 9 horas", author: "André Moreira", kicker: "FESTIVAL ÉPICO",
    readTime: "Leitura de 3 min", comments: "6.5k",
    bullet: "Os passes gerais esgotaram em 6 horas, batendo o recorde anterior de 2 dias.",
    pullQuote: "Este é o maior investimento cultural que já fizemos em Portugal.",
    expertQuote: { text: "O NOS Alive posiciona-se ao nível de Glastonbury e Coachella como referência mundial.", author: "Álvaro Covões", title: "Diretor do Festival NOS Alive" },
    seoMeta: { slug: "nos-alive-edicao-especial-cartaz-recorde", focus_keywords: ["NOS Alive 2026", "festival música Portugal"], meta_description: "NOS Alive anuncia edição especial com 120 artistas de 30 países. Passes esgotaram em 6 horas." }
};

// --- IA ---
const ia1 = {
    id: getNewsId(), title: "Universidade de Coimbra Desenvolve IA Capaz de Detetar Desinformação em Tempo Real",
    summary: "O sistema 'VeridIA' analisa notícias em português e atribui índice de fiabilidade com 96% de precisão.",
    category: "IA", categorySlug: "ia", image: "/images/evil_ai.png",
    timestamp: "há 4 horas", author: "Rodrigo Fonseca", kicker: "IA CONTRA FAKE NEWS",
    readTime: "Leitura de 5 min", comments: "11.4k",
    bullet: "Várias redações portuguesas já estão em conversações para integrar a ferramenta nos seus workflows.",
    pullQuote: "A desinformação é a maior ameaça à democracia. A IA pode ser parte da solução.",
    expertQuote: { text: "O VeridIA é o sistema mais avançado de deteção de desinformação em língua portuguesa do mundo.", author: "Prof. Dr. Henrique Matos", title: "Investigador principal do projeto VeridIA" },
    seoMeta: { slug: "universidade-coimbra-ia-desinformacao-veridia", focus_keywords: ["IA desinformação", "VeridIA Coimbra"], meta_description: "UC desenvolve IA que deteta desinformação em português com 96% de precisão." }
};
const ia2 = {
    id: getNewsId(), title: "Portugal Cria Primeiro Centro Europeu de Ética em Inteligência Artificial",
    summary: "O centro, sediado em Lisboa, reunirá filósofos, engenheiros e juristas para definir princípios éticos para o desenvolvimento de IA.",
    category: "IA", categorySlug: "ia", image: "/images/quantum.png",
    timestamp: "há 10 horas", author: "Leonor Braga", kicker: "ÉTICA DIGITAL",
    readTime: "Leitura de 4 min", comments: "8.6k",
    bullet: "O centro terá financiamento de 40 milhões de euros da UE e apoio de 12 universidades europeias.",
    pullQuote: "Não podemos desenvolver IA sem pensar primeiro nas consequências para a humanidade.",
    expertQuote: { text: "Lisboa é o local ideal para este centro: ponte entre Europa, África e América, com tradição humanista secular.", author: "Profª. Dra. Margarida Silva", title: "Filósofa da Tecnologia na UNL" },
    seoMeta: { slug: "portugal-centro-europeu-etica-ia", focus_keywords: ["centro ética IA Lisboa", "inteligência artificial ética"], meta_description: "Portugal cria primeiro centro europeu de ética em IA, sediado em Lisboa, com €40M de financiamento." }
};

// ============================================================
// EXPORTS
// ============================================================

// All articles in a flat array
export const allLocalArticles = [
    artigo1, artigo2, artigo3, artigo4, artigo5, artigo6,
    politica3, politica4, politica5, politica6,
    economia3, economia4, economia5, economia6,
    saude2, saude3, saude4, saude5,
    portugal2, portugal3, portugal4, portugal5,
    mundo1, mundo2, mundo3, mundo4,
    desporto1, desporto2,
    entreter1, entreter2,
    ia1, ia2
];

// Featured article (Metro de Lisboa)
export const localFeatured = artigo6;

// Group by category
export const localByCategory = {
    "Política": [artigo2, artigo4, politica3, politica4, politica5, politica6],
    "Economia": [artigo3, artigo5, economia3, economia4, economia5, economia6],
    "Saúde": [artigo1, saude2, saude3, saude4, saude5],
    "Portugal": [artigo6, portugal2, portugal3, portugal4, portugal5],
    "Mundo": [mundo1, mundo2, mundo3, mundo4],
    "Entretenimento": [entreter1, entreter2],
    "Desporto": [desporto1, desporto2],
    "IA": [ia1, ia2],
};

// For category pages — map slug to category name
export const categorySlugMap = {
    politica: "Política",
    economia: "Economia",
    saude: "Saúde",
    portugal: "Portugal",
    mundo: "Mundo",
    media: "Média",
    entretenimento: "Entretenimento",
    desporto: "Desporto",
    "estilo-de-vida": "Estilo de Vida",
    video: "Vídeo",
    ia: "IA",
    mais: "Mais"
};

// Breaking news headlines
export const localBreaking = [
    "ÚLTIMA HORA: Novo centro biomédico em Coimbra inicia ensaios clínicos revolucionários contra o cancro",
    "FLASH: Metro de Lisboa inaugura ligação ao aeroporto — viagem em 18 minutos ao centro da cidade",
    "URGENTE: Exportações tecnológicas ultrapassam setor têxtil pela primeira vez na história de Portugal",
    "ALERTA: Banco de Portugal revê PIB em alta para 2,8% — crescimento verde lidera economia",
    "BREAKING: Portugal assume presidência da UE com agenda digital ambiciosa de €50 mil milhões",
    "FLASH: ONU adota tratado histórico de regulação internacional de inteligência artificial",
    "URGENTE: Atleta portuguesa bate recorde mundial de maratona nos Jogos Olímpicos"
];

// Trending topics
export const localTrending = [
    "METRO MARTE",
    "TURISMO ORBITAL",
    "SOLAR ALENTEJO",
    "TUBARÃO LUZ",
    "IA COIMBRA",
    "PORTO DIGITAL"
];

// Most read
export const localMostRead = [
    { id: getNewsId(), title: "Metro de Lisboa Inaugura Ligação ao Aeroporto", kicker: "NOVA LINHA", views: "2.1M", categorySlug: "portugal", seoMeta: { slug: "metro-lisboa-expansao-aeroporto-novas-estacoes" } },
    { id: getNewsId(), title: "Exportações Tech Superam Têxtil pela Primeira Vez", kicker: "EXPORTAÇÕES TECNOLÓGICAS", views: "1.8M", categorySlug: "economia", seoMeta: { slug: "exportacoes-tecnologia-portugal-recorde" } },
    { id: getNewsId(), title: "Centro Biomédico de Coimbra Abre Portas", kicker: "INOVAÇÃO MÉDICA", views: "1.5M", categorySlug: "saude", seoMeta: { slug: "centro-biomedico-coimbra-cancro-tratamento" } },
    { id: getNewsId(), title: "ONU Adota Tratado de Regulação de IA", kicker: "REGULAÇÃO DA IA", views: "1.3M", categorySlug: "mundo", seoMeta: { slug: "onu-tratado-regulacao-inteligencia-artificial" } },
    { id: getNewsId(), title: "Portugal Assume Presidência da UE", kicker: "PRESIDÊNCIA UE", views: "1.2M", categorySlug: "politica", seoMeta: { slug: "portugal-presidencia-conselho-ue-digital" } },
    { id: getNewsId(), title: "PIB Cresce 2,8% com Investimento Verde", kicker: "ECONOMIA SUSTENTÁVEL", views: "980k", categorySlug: "economia", seoMeta: { slug: "banco-portugal-crescimento-2026-investimento-verde" } }
];

// Updating now / live
export const localLive = [
    { id: getNewsId(), title: "Direto: Sessão inaugural da presidência portuguesa da UE em Bruxelas", status: "Em curso", categorySlug: "politica", seoMeta: { slug: "portugal-presidencia-conselho-ue-digital" } },
    { id: getNewsId(), title: "Direto: Cerimónia de abertura do Centro Biomédico de Coimbra", status: "A decorrer", categorySlug: "saude", seoMeta: { slug: "centro-biomedico-coimbra-cancro-tratamento" } }
];
