// Portuguese (Português) — translation of sites.js and of the app's buttons.
// Keep the same order of sections, table rows and quiz options as in sites.js.
window.TRANSLATIONS = window.TRANSLATIONS || {};
TRANSLATIONS.pt = {
  ui: {
    allSites: "← Todos os locais",
    sitesVisited: "{done} de {total} locais visitados",
    quizPoints: "★ Pontos no quiz: <b>{points} de {max}</b>",
    quizHint: " — cada página termina com um pequeno quiz",
    mapButton: "🗺 Todos os locais no mapa",
    savedOffline: "✓ Guardado neste dispositivo — funciona sem internet",
    visited: "Visitado",
    cardQuiz: "★ Quiz {score} / {total}",
    stopOf: "Paragem {n} de {total}",
    openInMaps: "Abrir no Mapa",
    markVisited: "Marcar como visitado",
    isVisited: "✓ Visitado",
    funFacts: "Curiosidades",
    learnMore: "Saber mais",
    previous: "← Anterior",
    next: "Seguinte →",
    photo: "Foto",
    viaCommons: "via Wikimedia Commons",
    quizTitle: "Quiz rápido",
    quizIntro: "{n} perguntas sobre o que acabaste de ler.",
    quizBest: "O teu melhor: <b>{best} / {n}</b>",
    correct: "✓ Certo!",
    wrong: "✗ Não é bem isso — a resposta é <b>{answer}</b>.",
    perfect: "Pontuação perfeita! 🏆",
    wellDone: "Muito bem!",
    tryHarder: "Lê a página outra vez e tenta de novo!",
    tryAgain: "Tentar de novo",
    mapTitle: "Todos os locais no mapa",
    mapIntro: "Toca num número para ver o nome do local e abrir a sua página.",
    mapLoading: "A carregar o mapa…",
    mapOffline: "O mapa precisa de ligação à internet. Tudo o resto neste guia funciona sem internet — usa a lista abaixo.",
    openPage: "Abrir página →",
    wholeTrip: "Viagem toda",
    map: "Mapa",
    language: "Língua",
    euFlag: "Bandeira da União Europeia",
  },

  guide: {
    title: "Sítios Arqueológicos",
    subtitle: "Guia do Aluno",
    intro:
      "Nove paragens em Atenas, Maratona e na Argólida — da Batalha de Maratona e da época de Péricles aos venezianos e à primeira maratona olímpica. Cada local tem a sua página, com a sua história, o que ver e curiosidades.",
    footer: [
      "Projeto Erasmus+ · Guia do Aluno de Sítios Arqueológicos",
      "To4E - 2025-1-RO01-KA220-SCH-000362818 Greece",
    ],
    fundingLabel: "Cofinanciado pela União Europeia",
    fundingDisclaimer:
      "Financiado pela União Europeia. Os pontos de vista e as opiniões expressos são, no entanto, da exclusiva responsabilidade do(s) autor(es) e não refletem necessariamente os da União Europeia ou da Agência de Execução Europeia da Educação e da Cultura (EACEA). Nem a União Europeia nem a EACEA podem ser tidas como responsáveis por essas opiniões.",
  },

  sites: {
    // ------------------------------------------------------------ 1
    acropolis: {
      name: "A Acrópole de Atenas",
      shortName: "Acrópole",
      area: "Atenas",
      period: "século V a.C.",
      oneLine: "Pártenon, Erecteion, Propileus — o programa de construções de Péricles",
      intro:
        "O Rochedo Sagrado de Atenas, com cerca de 150 m de altura, guarda os maiores monumentos do século V a.C. e é Património Mundial da UNESCO desde 1987.",
      sections: [
        {
          type: "table",
          title: "A história em resumo",
          columns: ["Data", "Acontecimento"],
          rows: [
            ["1300 – 1200 a.C.", "Um palácio micénico e uma muralha ciclópica com 760 m de comprimento"],
            ["480 a.C.", "Os persas destroem os edifícios do Rochedo, incluindo o “Pártenon Antigo”, que estava por acabar"],
            ["447 – 406 a.C.", "Programa de construções de Péricles: Pártenon, Propileus, Erecteion, Templo de Atena Nike"],
            ["1687", "Durante o cerco veneziano (Morosini), um projétil atinge o Pártenon, então usado como paiol de pólvora, e destrói grande parte dele"],
            ["1975 – hoje", "Projeto de restauro: as peças de mármore são unidas com pinos de titânio, para que cada intervenção possa ser desfeita"],
            ["1987", "Classificada como Património Mundial da UNESCO"],
          ],
        },
        {
          type: "table",
          title: "Os monumentos principais",
          columns: ["Monumento", "Data", "O que observar"],
          rows: [
            ["Propileus", "437 – 432 a.C.", "A grande entrada do Rochedo, projetada por Mnésicles"],
            ["Templo de Atena Nike", "século V a.C.", "Um pequeno templo jónico à direita da entrada, dedicado à vitória"],
            ["Pártenon", "447 – 432 a.C.", "Templo dórico de Atena Pártenos; arquitetos Ictino e Calícrates, esculturas supervisionadas por Fídias"],
            ["Erecteion", "421 – 406 a.C.", "As Cariátides (hoje cópias; as originais estão no Museu da Acrópole)"],
          ],
          note: "A visão e o dinheiro para tudo isto vieram de Péricles (c. 495 – 429 a.C.).",
        },
        {
          type: "facts",
          items: [
            "O Pártenon quase não tem linhas perfeitamente retas: as colunas são ligeiramente mais largas a meio (êntase) e inclinam-se um pouco para dentro, para que o edifício pareça perfeitamente reto aos nossos olhos.",
            "O Pártenon já foi templo antigo, igreja cristã, mesquita e paiol de pólvora — e esta última utilização destruiu-o em 1687.",
            "Das seis Cariátides, cinco estão no Museu da Acrópole e a sexta está no Museu Britânico.",
            "A muralha micénica era tão grande que os gregos de épocas posteriores acreditavam que tinha sido construída por gigantes — os Ciclopes.",
            "No restauro, os antigos grampos de ferro, que enferrujaram e racharam o mármore, são substituídos por titânio, que não enferruja.",
          ],
        },
      ],
      quiz: [
        { q: "Porque é que as colunas do Pártenon são ligeiramente mais largas a meio?", options: ["Porque foram danificadas em 1687", "Para que o edifício pareça perfeitamente reto aos nossos olhos", "Para aguentarem mais peso", "Porque o mármore era demasiado mole"], answer: 1 },
        { q: "O que aconteceu ao Pártenon em 1687?", options: ["Um terramoto deitou-o abaixo", "Os persas incendiaram-no", "Foi atingido por um projétil quando era usado como paiol de pólvora", "Foi transformado num museu"], answer: 2 },
        { q: "Onde está hoje a sexta Cariátide?", options: ["No Museu Britânico", "No Museu da Acrópole", "No Louvre", "Ainda no Erecteion"], answer: 0 },
        { q: "Que metal substitui os antigos grampos de ferro no restauro?", options: ["Bronze", "Aço", "Ouro", "Titânio"], answer: 3 },
      ],
    },

    // ------------------------------------------------------------ 2
    agora: {
      name: "A Ágora Antiga de Atenas",
      shortName: "Ágora Antiga",
      area: "Atenas",
      period: "séculos V – II a.C.",
      oneLine: "O coração da democracia ateniense e o Templo de Hefesto",
      intro:
        "A Ágora, a noroeste da Acrópole, era o coração da Atenas antiga: aqui os atenienses faziam compras, conversavam, realizavam julgamentos e governavam-se a si próprios — o berço da democracia em ação.",
      sections: [
        {
          type: "table",
          title: "O que vais ver",
          columns: ["Monumento", "Data", "O que era"],
          rows: [
            ["Templo de Hefesto (“Theseion”)", "449 – 415 a.C.", "Templo dórico do deus do fogo e do trabalho dos metais, um dos templos antigos mais bem conservados do mundo"],
            ["Stoa de Átalo", "século II a.C.", "Um longo edifício com lojas; reconstruído nos anos 1950, alberga hoje o Museu da Ágora"],
            ["Bouleutérion", "século V a.C.", "Local de reunião do Conselho, que preparava os assuntos para a Assembleia dos cidadãos"],
            ["Tholos", "século V a.C.", "Edifício redondo onde os magistrados de serviço comiam e dormiam"],
            ["Stoa Poikile", "século V a.C.", "A “Stoa Pintada”, decorada com enormes pinturas — uma delas mostrava a Batalha de Maratona"],
            ["Via Panatenaica", "—", "O percurso da grande procissão até à Acrópole, que atravessava a Ágora em linha reta"],
          ],
        },
        {
          type: "facts",
          items: [
            "O Templo de Hefesto é chamado, por engano, “Theseion”: viajantes do século XVIII viram Teseu nas suas esculturas e pensaram que era o seu túmulo.",
            "Sobreviveu quase intacto porque se tornou a igreja de São Jorge; a última missa foi celebrada em 1833 para receber o novo rei Otão.",
            "À volta do templo, os arqueólogos encontraram escória de metal e moldes de fundição — aqui trabalhavam fundidores de bronze, que honravam Hefesto.",
            "A Stoa de Átalo que vês é quase toda uma reconstrução do século XX — mostra como era um edifício antigo quando era novo.",
            "As escavações começaram em 1931, pela Escola Americana; em 1935 já tinham encontrado mais de 41.000 moedas e cerca de 600 esculturas.",
            "Sócrates costumava debater com os jovens de Atenas na Ágora.",
          ],
        },
      ],
      quiz: [
        { q: "Hefesto era o deus…", options: ["do mar", "do fogo e do trabalho dos metais", "da sabedoria", "do vinho"], answer: 1 },
        { q: "Porque é que o Templo de Hefesto sobreviveu quase intacto?", options: ["Tornou-se a igreja de São Jorge", "Ficou enterrado debaixo da terra", "Foi reconstruído nos anos 1950", "Nunca ninguém o usou"], answer: 0 },
        { q: "O que existe hoje dentro da Stoa de Átalo?", options: ["A câmara municipal", "Uma igreja", "O Museu da Ágora", "Uma biblioteca"], answer: 2 },
        { q: "Que filósofo debatia com os jovens atenienses na Ágora?", options: ["Pitágoras", "Arquimedes", "Aristóteles", "Sócrates"], answer: 3 },
      ],
    },

    // ------------------------------------------------------------ 3
    "marathon-tomb": {
      name: "O Túmulo de Maratona (Soros)",
      shortName: "Túmulo de Maratona",
      area: "Maratona",
      period: "490 a.C.",
      oneLine: "O monte funerário dos 192 atenienses que morreram na batalha",
      intro:
        "O Túmulo é a sepultura coletiva dos 192 atenienses que morreram na Batalha de Maratona, em 490 a.C. — um monte de terra com 10 m de altura e 50 m de largura.",
      sections: [
        {
          type: "text",
          title: "A Batalha de 490 a.C.",
          paragraphs: [
            "Cerca de 10.000 atenienses e 1.000 plateus, liderados pelo general Milcíades, derrotaram um exército persa com cerca do dobro do seu tamanho. A vitória é vista como uma das batalhas mais decisivas da história. Os mortos foram enterrados onde caíram, como uma honra especial, em vez de no cemitério público de Atenas.",
          ],
        },
        {
          type: "table",
          title: "O que vais ver",
          columns: ["Elemento", "Descrição"],
          rows: [
            ["O Túmulo", "Um monte de terra de 10 m × 50 m, no próprio campo de batalha"],
            ["A escavação", "Valerios Staïs escavou-o em 1890 – 91 e encontrou ossos queimados e cerâmica"],
            ["Estela de Aristíon", "Estela funerária arcaica de um hoplita, muitas vezes referida juntamente com o Túmulo (o original está no Museu Arqueológico Nacional)"],
            ["Museu de Maratona", "Achados dos túmulos dos atenienses e dos plateus, de cemitérios pré-históricos e do santuário de Brexiza"],
          ],
        },
        {
          type: "facts",
          items: [
            "Os 192 mortos foram enterrados onde caíram — uma honra rara, porque os atenienses normalmente enterravam os seus mortos de guerra no cemitério público da cidade.",
            "O monte tem 10 m de altura e 50 m de largura — mais ou menos a altura de um prédio de três andares e a largura de meio campo de futebol.",
            "Os atenienses e os 1.000 plateus venceram um exército com cerca do dobro do seu tamanho.",
            "A corrida da maratona tem o nome desta batalha (vê “A Maratona”).",
          ],
        },
      ],
      quiz: [
        { q: "Quantos atenienses estão enterrados no Túmulo?", options: ["48", "192", "1.000", "10.000"], answer: 1 },
        { q: "Que altura tem o monte?", options: ["Cerca de 10 m", "Cerca de 3 m", "Cerca de 25 m", "Cerca de 50 m"], answer: 0 },
        { q: "Que general liderou os atenienses em Maratona?", options: ["Péricles", "Leónidas", "Milcíades", "Temístocles"], answer: 2 },
        { q: "Quem lutou ao lado dos atenienses?", options: ["Os espartanos", "Os romanos", "Os persas", "Os plateus"], answer: 3 },
      ],
    },

    // ------------------------------------------------------------ 4
    "marathon-trophy": {
      name: "O Troféu de Maratona",
      shortName: "Troféu de Maratona",
      area: "Maratona",
      period: "c. 470 – 460 a.C.",
      oneLine: "A coluna de mármore da vitória",
      intro:
        "O Troféu é uma coluna jónica de mármore com cerca de 10 m de altura, erguida por volta de 470 – 460 a.C. para celebrar a vitória ateniense de 490 a.C.",
      sections: [
        {
          type: "text",
          title: "História",
          paragraphs: [
            "Alguns anos depois da batalha, os atenienses ergueram na planície de Maratona um troféu permanente e monumental. No topo do capitel havia uma cavidade para uma estátua, muito provavelmente uma Vitória alada (Nike). Mais tarde o monumento caiu, e o seu mármore foi usado na construção de uma torre medieval perto da igreja de Panagia Mesosporitissa, onde as peças foram encontradas.",
          ],
        },
        {
          type: "table",
          title: "O que vais ver",
          columns: ["Elemento", "Descrição"],
          rows: [
            ["O monumento restaurado", "A coluna foi novamente erguida em Mesosporitissa, onde se pensa que estava originalmente"],
            ["Os fragmentos originais", "Expostos no Museu Arqueológico de Maratona"],
          ],
        },
        {
          type: "facts",
          items: [
            "A palavra “troféu” vem do grego <em>tropē</em>, “volta” — o sítio onde o inimigo deu meia-volta e começou a recuar.",
            "Um troféu normal era apenas um tronco de árvore com as armas dos vencidos penduradas; depois das Guerras Persas, os gregos transformaram os troféus em monumentos permanentes de mármore.",
            "O monumento à grande vitória acabou como material de construção de uma torre medieval — e foi assim que as suas peças sobreviveram.",
            "Tinha mais ou menos a altura do Túmulo (10 m), por isso os dois erguiam-se como “gémeos” no campo de batalha: um para os mortos, outro para a vitória.",
          ],
        },
      ],
      quiz: [
        { q: "A palavra “troféu” vem do grego tropē. O que significa?", options: ["Prémio", "Volta", "Coluna", "Vitória"], answer: 1 },
        { q: "De que estilo é a coluna do Troféu?", options: ["Jónico", "Dórico", "Coríntio", "Egípcio"], answer: 0 },
        { q: "O que estava muito provavelmente no topo da coluna?", options: ["Uma estátua de Atena", "Um leão de bronze", "Uma Vitória alada (Nike)", "Uma estátua de Milcíades"], answer: 2 },
        { q: "Como sobreviveram as peças do Troféu?", options: ["Foram enterradas no Túmulo", "Caíram ao mar", "Foram guardadas em Atenas", "Foram usadas na construção de uma torre medieval"], answer: 3 },
      ],
    },

    // ------------------------------------------------------------ 5
    brexiza: {
      name: "Brexiza — Santuário dos Deuses Egípcios",
      shortName: "Brexiza",
      area: "Nea Makri – Maratona",
      period: "c. 160 d.C.",
      oneLine: "O santuário de Ísis de Herodes Ático e um banho romano",
      intro:
        "Em Brexiza (entre Nea Makri e Maratona) existe um raro santuário de Ísis e dos deuses egípcios, construído por volta de 160 d.C., com um banho romano ao lado.",
      sections: [
        {
          type: "text",
          title: "História",
          paragraphs: [
            "O santuário é atribuído a Herodes Ático (101 – 177 d.C.), um rico benfeitor ateniense cuja família era de Maratona. Mostra como o culto de Ísis se tinha espalhado pelo mundo romano no século II. As escavações começaram em 1968 e o local abriu ao público em 2001.",
          ],
        },
        {
          type: "table",
          title: "O que vais ver",
          columns: ["Elemento", "Descrição"],
          rows: [
            ["O santuário", "Uma planta em forma de cruz, com um muro de pedra à volta e uma estrutura em degraus no centro"],
            ["As portas", "Quatro portas de estilo egípcio (pílones), uma virada para cada ponto cardeal"],
            ["Os achados", "Estátuas de Ísis e Osíris, esfinges de mármore, lamparinas e estátuas de homens em pose de faraó — hoje no Museu Arqueológico de Maratona"],
            ["Banho romano", "Um banho dos séculos II – III d.C., a sul do santuário, onde ainda se veem o aquecimento sob o chão (hipocausto) e os canais de água; usado até meados do século IV"],
          ],
        },
        {
          type: "facts",
          items: [
            "Um santuário egípcio na Ática: Herodes Ático venerava Ísis e trouxe o Egito para a sua propriedade em Maratona.",
            "As estátuas de Ísis são uma “mistura”: juntam traços gregos arcaicos e clássicos com poses egípcias.",
            "As esfinges de mármore do santuário representavam o deus Hórus, filho de Ísis e Osíris.",
            "O banho tinha “aquecimento central”: o ar quente circulava por baixo do chão, que assentava em pequenos pilares de tijolo (o hipocausto).",
            "O santuário esteve enterrado e esquecido até 1968 — e só abriu aos visitantes em 2001.",
          ],
        },
      ],
      quiz: [
        { q: "Que deusa era venerada no santuário?", options: ["Atena", "Ísis", "Hera", "Ártemis"], answer: 1 },
        { q: "A quem é atribuído o santuário?", options: ["A Herodes Ático", "A Péricles", "A Milcíades", "Ao imperador Adriano"], answer: 0 },
        { q: "O que era o hipocausto do banho romano?", options: ["Uma porta", "Um depósito de água", "Aquecimento sob o chão", "Uma estátua de Hórus"], answer: 2 },
        { q: "Quando abriu o local aos visitantes?", options: ["1896", "1968", "2016", "2001"], answer: 3 },
      ],
    },

    // ------------------------------------------------------------ 6
    "marathon-race": {
      name: "A Maratona",
      shortName: "A Maratona",
      area: "Maratona – Atenas",
      period: "desde 1896",
      oneLine: "Da lenda de Fidípides a Spyros Louis",
      intro:
        "A maratona nasceu nos primeiros Jogos Olímpicos modernos, em Atenas, em 1896, em memória da vitória de 490 a.C.; o percurso clássico começa em Maratona e termina no Estádio Panatenaico (Kallimarmaro).",
      sections: [
        {
          type: "table",
          title: "Da lenda à corrida",
          columns: ["Data", "Acontecimento"],
          rows: [
            ["490 a.C.", "A lenda do mensageiro Fidípides, que correu de Maratona até Atenas para anunciar a vitória"],
            ["1894", "O professor francês Michel Bréal sugere a Coubertin uma corrida de Maratona a Atenas"],
            ["1896", "Spyros Louis vence a primeira maratona olímpica (cerca de 40 km) em 2:58:50"],
            ["1908", "Jogos Olímpicos de Londres: o percurso tem 42,195 km — a distância que mais tarde se manteve"],
            ["1924", "O COI fixa a distância em 42,195 km"],
            ["2004", "Jogos Olímpicos de Atenas: o italiano Stefano Baldini vence no percurso clássico em 2:10:55"],
          ],
        },
        {
          type: "table",
          title: "O que vais ver",
          columns: ["Local", "Descrição"],
          rows: [
            ["A partida em Maratona", "Onde começa todos os anos a Maratona Clássica de Atenas"],
            ["Museu da Corrida de Maratona", "Na vila de Maratona; a história da corrida, de atletas olímpicos e de grandes maratonistas"],
            ["Estádio Panatenaico (Kallimarmaro)", "A chegada, onde Louis venceu em 1896"],
          ],
        },
        {
          type: "facts",
          items: [
            "A maratona não era uma prova dos Jogos Olímpicos antigos — é uma ideia do século XIX.",
            "Spyros Louis era um aguadeiro de 23 anos de Marousi e tinha ficado apenas em 5.º lugar na corrida de seleção.",
            "Os estranhos 42,195 km não têm nada a ver com Maratona: são simplesmente o comprimento que o percurso de Londres tinha em 1908.",
            "Heródoto conta que Fidípides correu de Atenas a Esparta para pedir ajuda; a história da corrida até Atenas a gritar “Vencemos!” é uma lenda posterior.",
            "Em 1896 a Grécia ainda usava o calendário antigo (juliano), por isso a vitória de Louis aparece às vezes a 29 de março e outras a 10 de abril.",
          ],
        },
      ],
      quiz: [
        { q: "Quem venceu a primeira maratona olímpica, em 1896?", options: ["Fidípides", "Spyros Louis", "Stefano Baldini", "Michel Bréal"], answer: 1 },
        { q: "Porque é que uma maratona tem 42,195 km?", options: ["Era o comprimento do percurso de Londres em 1908", "É a distância de Maratona a Atenas", "Foi exatamente o que Fidípides correu", "Foi decidido em 1896"], answer: 0 },
        { q: "Onde termina o percurso clássico?", options: ["Na Acrópole", "Na Praça Syntagma", "No Estádio Panatenaico (Kallimarmaro)", "Na Ágora Antiga"], answer: 2 },
        { q: "A maratona era uma corrida dos Jogos Olímpicos antigos?", options: ["Sim, desde os primeiros Jogos", "Sim, mas só para soldados", "Só quando os Jogos eram em Atenas", "Não — é uma ideia do século XIX"], answer: 3 },
      ],
    },

    // ------------------------------------------------------------ 7
    "epidaurus-theatre": {
      name: "O Teatro Antigo de Epidauro",
      shortName: "Teatro de Epidauro",
      area: "Argólida",
      period: "final do século IV a.C.",
      oneLine: "O teatro de acústica lendária",
      intro:
        "O teatro de Epidauro, projetado pelo arquiteto Policleto, o Jovem, no final do século IV a.C., é considerado o mais perfeito teatro grego antigo em acústica e beleza; é Património Mundial da UNESCO desde 1988.",
      sections: [
        {
          type: "table",
          title: "O teatro em números",
          columns: ["Elemento", "Valor"],
          rows: [
            ["Data", "c. 340 – 300 a.C."],
            ["Espectadores", "13.000 – 14.000"],
            ["Diâmetro da orquestra", "20 m"],
            ["Setores de bancadas", "12 em baixo e 22 em cima"],
          ],
        },
        {
          type: "text",
          title: "História",
          paragraphs: [
            "O teatro pertencia ao santuário de Asclépio: peças, música e canto faziam parte do culto ao deus da cura. As escavações começaram em 1881, com o arqueólogo Panagis Kavvadias. A primeira representação moderna foi <em>Electra</em>, de Sófocles, em 1938, e desde 1955 o Festival de Epidauro realiza-se todos os verões.",
          ],
        },
        {
          type: "facts",
          items: [
            "A acústica é tão boa que um sussurro no centro da orquestra chega às filas de cima — experimenta deixar cair uma moeda no chão!",
            "Os especialistas explicam a acústica sobretudo pela forma das bancadas, desenhadas a partir de três centros em vez de um.",
            "Maria Callas cantou aqui a <em>Norma</em> de Bellini em 1960.",
            "O teatro conservou-se tão bem, em parte, porque esteve coberto de terra durante séculos.",
            "O último grande restauro durou quase 30 anos (1988 – 2016).",
          ],
        },
      ],
      quiz: [
        { q: "Cerca de quantos espectadores cabiam no teatro?", options: ["2.000", "13.000 – 14.000", "50.000", "500"], answer: 1 },
        { q: "Quem projetou o teatro?", options: ["Policleto, o Jovem", "Fídias", "Ictino", "Mnésicles"], answer: 0 },
        { q: "Que cantora famosa interpretou aqui a Norma de Bellini em 1960?", options: ["Nana Mouskouri", "Melina Mercouri", "Maria Callas", "Agnes Baltsa"], answer: 2 },
        { q: "O que explica sobretudo a acústica espantosa do teatro?", options: ["Tubos de bronze escondidos", "Um telhado que reflete o som", "O chão de mármore", "A forma das bancadas, desenhadas a partir de três centros"], answer: 3 },
      ],
    },

    // ------------------------------------------------------------ 8
    asklepieion: {
      name: "O Asclepieion de Epidauro",
      shortName: "Asclepieion de Epidauro",
      area: "Argólida",
      period: "século IV a.C.",
      oneLine: "O maior centro de cura do mundo antigo",
      intro:
        "O Asclepieion de Epidauro foi o centro de cura mais importante do mundo grego e romano — o lugar onde a medicina começou a passar do milagre para a ciência.",
      sections: [
        {
          type: "table",
          title: "O que vais ver",
          columns: ["Monumento", "O que era"],
          rows: [
            ["Templo de Asclépio", "O templo principal do deus da cura, obra de Teódoto e Timóteo"],
            ["Tholos (Thymele)", "Um edifício redondo (365 – 335 a.C.) com um labirinto subterrâneo de três corredores circulares"],
            ["Ábaton", "Onde os doentes dormiam, à espera de que o deus os curasse num sonho"],
            ["Estádio", "Onde se realizavam jogos atléticos em honra de Asclépio"],
            ["Katagogion", "Uma grande hospedaria para peregrinos e doentes"],
          ],
        },
        {
          type: "text",
          title: "Como funcionava a cura",
          paragraphs: [
            "Primeiro, os doentes purificavam-se com jejum e banhos. Depois entravam no Ábaton e dormiam lá (“incubação”), e os sacerdotes interpretavam os seus sonhos. Instrumentos médicos e frascos de remédios encontrados no local mostram que também se faziam cirurgias e tratamentos com plantas.",
          ],
        },
        {
          type: "facts",
          items: [
            "O símbolo de Asclépio era a serpente — é por isso que uma serpente enrolada num bastão ainda hoje é o símbolo da medicina.",
            "O labirinto debaixo do Tholos pode ter simbolizado uma viagem ao Mundo Inferior e um regresso à vida.",
            "As curas eram registadas em placas de pedra, as <em>iamata</em> — um pouco como os primeiros registos médicos.",
            "O Tholos é considerado o mais perfeito edifício redondo da arquitetura grega antiga.",
            "As escavações descobriram cerca de 70 monumentos dentro do santuário.",
            "O Asclepieion e o teatro são, juntos, Património Mundial da UNESCO desde 1988.",
          ],
        },
      ],
      quiz: [
        { q: "Que animal era o símbolo de Asclépio?", options: ["A coruja", "A serpente", "A águia", "O leão"], answer: 1 },
        { q: "O que acontecia no Ábaton?", options: ["Os doentes dormiam lá, à espera de que o deus os curasse num sonho", "Realizavam-se jogos atléticos", "Os peregrinos ficavam lá hospedados", "Representavam-se peças de teatro"], answer: 0 },
        { q: "O que eram as iamata?", options: ["Frascos de remédios", "Os sacerdotes de Asclépio", "Placas de pedra onde se registavam as curas", "Banhos quentes"], answer: 2 },
        { q: "O que há debaixo do Tholos?", options: ["Uma nascente", "Uma sala do tesouro", "Um túmulo real", "Um labirinto de três corredores circulares"], answer: 3 },
      ],
    },

    // ------------------------------------------------------------ 9
    palamidi: {
      name: "Palamidi, Nafplio",
      shortName: "Palamidi",
      area: "Nafplio",
      period: "1711 – 1714",
      oneLine: "A fortaleza veneziana dos “999” degraus",
      intro:
        "Palamidi é a impressionante fortaleza veneziana sobre Nafplio, a 216 m de altura, construída em apenas três anos (1711 – 1714).",
      sections: [
        {
          type: "table",
          title: "A história em resumo",
          columns: ["Data", "Acontecimento"],
          rows: [
            ["1711 – 1714", "Os venezianos constroem-na, segundo o projeto do engenheiro Antonio Giancix, com obras dirigidas pelo francês Pierre de la Salle"],
            ["1715", "Os otomanos tomam a fortaleza, apenas um ano depois de estar terminada"],
            ["29 – 30 de novembro de 1822", "Os revolucionários gregos conquistam Palamidi na noite de Santo André"],
            ["A partir de 1840", "A fortaleza torna-se prisão durante quase um século; a grande escadaria é construída nesta altura"],
          ],
        },
        {
          type: "table",
          title: "O que vais ver",
          columns: ["Elemento", "Descrição"],
          rows: [
            ["Os 8 bastiões", "Com nomes de gregos antigos, como Epaminondas, Milcíades e Leónidas"],
            ["A prisão de Kolokotronis", "O herói da Revolução Grega, Theodoros Kolokotronis, esteve preso no bastião Milcíades"],
            ["Igreja de Santo André", "A pequena igreja dentro da fortaleza, que celebra a libertação de 1822"],
            ["A vista", "Toda a cidade de Nafplio, o castelo de Bourtzi no porto e o Golfo Argólico"],
          ],
        },
        {
          type: "facts",
          items: [
            "Diz-se que Palamidi tem 999 degraus — na realidade são 857. Conta-os!",
            "Se começares cedo de manhã, a escadaria está à sombra — bom para a subida, com água na mochila.",
            "Os bastiões mudaram de nome a cada novo governante: primeiro venezianos, depois turcos e, por fim, nomes de gregos antigos.",
            "Um dos bastiões chama-se “Robert”, em homenagem a um filelenista francês.",
            "As enormes cisternas da fortaleza ainda hoje abastecem a cidade de água.",
            "Foi o último grande castelo que os venezianos construíram fora dos seus territórios.",
          ],
        },
      ],
      quiz: [
        { q: "Quantos degraus levam realmente a Palamidi?", options: ["999", "857", "500", "1.200"], answer: 1 },
        { q: "Quem construiu a fortaleza?", options: ["Os venezianos", "Os otomanos", "Os bizantinos", "Os franceses"], answer: 0 },
        { q: "Que herói da Revolução Grega esteve aqui preso?", options: ["Milcíades", "Leónidas", "Theodoros Kolokotronis", "O rei Otão"], answer: 2 },
        { q: "Em que ano os revolucionários gregos conquistaram Palamidi?", options: ["1714", "1840", "1896", "1822"], answer: 3 },
      ],
    },
  },
};
