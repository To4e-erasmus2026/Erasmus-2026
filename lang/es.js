// Spanish (Español) — translation of sites.js and of the app's buttons.
// Keep the same order of sections, table rows and quiz options as in sites.js.
window.TRANSLATIONS = window.TRANSLATIONS || {};
TRANSLATIONS.es = {
  ui: {
    allSites: "← Todos los sitios",
    sitesVisited: "{done} de {total} sitios visitados",
    quizPoints: "★ Puntos del quiz: <b>{points} de {max}</b>",
    quizHint: " — cada página termina con un breve quiz",
    mapButton: "🗺 Todos los sitios en el mapa",
    savedOffline: "✓ Guardado en este dispositivo — funciona sin internet",
    visited: "Visitado",
    cardQuiz: "★ Quiz {score} / {total}",
    stopOf: "Parada {n} de {total}",
    openInMaps: "Abrir en Mapas",
    markVisited: "Marcar como visitado",
    isVisited: "✓ Visitado",
    funFacts: "Curiosidades",
    learnMore: "Más información",
    previous: "← Anterior",
    next: "Siguiente →",
    photo: "Foto",
    viaCommons: "vía Wikimedia Commons",
    quizTitle: "Quiz rápido",
    quizIntro: "{n} preguntas sobre lo que acabas de leer.",
    quizBest: "Tu mejor resultado: <b>{best} / {n}</b>",
    correct: "✓ ¡Correcto!",
    wrong: "✗ Casi — la respuesta es <b>{answer}</b>.",
    perfect: "¡Puntuación perfecta! 🏆",
    wellDone: "¡Muy bien!",
    tryHarder: "¡Vuelve a leer la página e inténtalo otra vez!",
    tryAgain: "Intentar de nuevo",
    mapTitle: "Todos los sitios en el mapa",
    mapIntro: "Toca un número para ver el nombre del sitio y abrir su página.",
    mapLoading: "Cargando el mapa…",
    mapOffline: "El mapa necesita conexión a internet. Todo lo demás de esta guía funciona sin internet — usa la lista de abajo.",
    openPage: "Abrir página →",
    wholeTrip: "Todo el viaje",
    map: "Mapa",
    language: "Idioma",
    euFlag: "Bandera de la Unión Europea",
  },

  guide: {
    title: "Sitios Arqueológicos",
    subtitle: "Guía del Alumno",
    intro:
      "Nueve paradas en Atenas, Maratón y la Argólida — desde la Batalla de Maratón y la época de Pericles hasta los venecianos y el primer maratón olímpico. Cada sitio tiene su propia página, con su historia, qué ver y curiosidades.",
    footer: [
      "Proyecto Erasmus+ · Guía del Alumno de Sitios Arqueológicos",
      "To4E - 2025-1-RO01-KA220-SCH-000362818 Greece",
    ],
    fundingLabel: "Cofinanciado por la Unión Europea",
    fundingDisclaimer:
      "Financiado por la Unión Europea. Las opiniones y puntos de vista expresados solo comprometen a su(s) autor(es) y no reflejan necesariamente los de la Unión Europea o los de la Agencia Ejecutiva Europea de Educación y Cultura (EACEA). Ni la Unión Europea ni la EACEA pueden ser considerados responsables de ellos.",
  },

  sites: {
    // ------------------------------------------------------------ 1
    acropolis: {
      name: "La Acrópolis de Atenas",
      shortName: "Acrópolis",
      area: "Atenas",
      period: "siglo V a. C.",
      oneLine: "Partenón, Erecteion, Propileos — el programa de construcciones de Pericles",
      intro:
        "La Roca Sagrada de Atenas, de unos 150 m de altura, alberga los mayores monumentos del siglo V a. C. y es Patrimonio de la Humanidad de la UNESCO desde 1987.",
      sections: [
        {
          type: "table",
          title: "La historia de un vistazo",
          columns: ["Fecha", "Acontecimiento"],
          rows: [
            ["1300 – 1200 a. C.", "Un palacio micénico y una muralla ciclópea de 760 m de largo"],
            ["480 a. C.", "Los persas destruyen los edificios de la Roca, incluido el “Partenón Antiguo”, que estaba sin terminar"],
            ["447 – 406 a. C.", "Programa de construcciones de Pericles: Partenón, Propileos, Erecteion, Templo de Atenea Niké"],
            ["1687", "Durante el asedio veneciano (Morosini), un proyectil alcanza el Partenón, que entonces se usaba como polvorín, y destruye gran parte de él"],
            ["1975 – hoy", "Proyecto de restauración: las piezas de mármol se unen con pernos de titanio, para que cada intervención pueda deshacerse"],
            ["1987", "Declarada Patrimonio de la Humanidad por la UNESCO"],
          ],
        },
        {
          type: "table",
          title: "Los monumentos principales",
          columns: ["Monumento", "Fecha", "En qué fijarse"],
          rows: [
            ["Propileos", "437 – 432 a. C.", "La gran entrada a la Roca, diseñada por Mnesicles"],
            ["Templo de Atenea Niké", "siglo V a. C.", "Un pequeño templo jónico a la derecha de la entrada, dedicado a la victoria"],
            ["Partenón", "447 – 432 a. C.", "Templo dórico de Atenea Pártenos; arquitectos Ictino y Calícrates, esculturas supervisadas por Fidias"],
            ["Erecteion", "421 – 406 a. C.", "Las Cariátides (hoy copias; las originales están en el Museo de la Acrópolis)"],
          ],
          note: "La visión y el dinero para todo esto vinieron de Pericles (c. 495 – 429 a. C.).",
        },
        {
          type: "facts",
          items: [
            "El Partenón casi no tiene líneas perfectamente rectas: las columnas se ensanchan un poco en el centro (éntasis) y se inclinan ligeramente hacia dentro, para que el edificio parezca perfectamente recto a la vista.",
            "El Partenón ha sido templo antiguo, iglesia cristiana, mezquita y polvorín — y este último uso lo destruyó en 1687.",
            "De las seis Cariátides, cinco están en el Museo de la Acrópolis y la sexta en el Museo Británico.",
            "La muralla micénica era tan enorme que los griegos posteriores creían que la habían construido gigantes — los Cíclopes.",
            "En la restauración, las antiguas grapas de hierro, que se oxidaron y agrietaron el mármol, se sustituyen por titanio, que no se oxida.",
          ],
        },
      ],
      quiz: [
        { q: "¿Por qué las columnas del Partenón se ensanchan un poco en el centro?", options: ["Porque se dañaron en 1687", "Para que el edificio parezca perfectamente recto a la vista", "Para soportar más peso", "Porque el mármol era demasiado blando"], answer: 1 },
        { q: "¿Qué le pasó al Partenón en 1687?", options: ["Un terremoto lo derribó", "Los persas lo incendiaron", "Lo alcanzó un proyectil cuando se usaba como polvorín", "Se convirtió en un museo"], answer: 2 },
        { q: "¿Dónde está hoy la sexta Cariátide?", options: ["En el Museo Británico", "En el Museo de la Acrópolis", "En el Louvre", "Todavía en el Erecteion"], answer: 0 },
        { q: "¿Qué metal sustituye a las antiguas grapas de hierro en la restauración?", options: ["Bronce", "Acero", "Oro", "Titanio"], answer: 3 },
      ],
    },

    // ------------------------------------------------------------ 2
    agora: {
      name: "El Ágora Antigua de Atenas",
      shortName: "Ágora Antigua",
      area: "Atenas",
      period: "siglos V – II a. C.",
      oneLine: "El corazón de la democracia ateniense y el Templo de Hefesto",
      intro:
        "El Ágora, al noroeste de la Acrópolis, era el corazón de la antigua Atenas: aquí los atenienses compraban, conversaban, celebraban juicios y se gobernaban a sí mismos — la cuna de la democracia en acción.",
      sections: [
        {
          type: "table",
          title: "Qué verás",
          columns: ["Monumento", "Fecha", "Qué era"],
          rows: [
            ["Templo de Hefesto (“Theseion”)", "449 – 415 a. C.", "Templo dórico del dios del fuego y de la metalurgia, uno de los templos antiguos mejor conservados del mundo"],
            ["Estoa de Átalo", "siglo II a. C.", "Un largo edificio con tiendas; reconstruido en los años cincuenta, hoy alberga el Museo del Ágora"],
            ["Buleuterio", "siglo V a. C.", "Lugar de reunión del Consejo, que preparaba los asuntos para la Asamblea de los ciudadanos"],
            ["Tholos", "siglo V a. C.", "Edificio redondo donde comían y dormían los magistrados de guardia"],
            ["Estoa Pecile", "siglo V a. C.", "La “Estoa Pintada”, decorada con enormes pinturas — una de ellas mostraba la Batalla de Maratón"],
            ["Vía Panatenaica", "—", "El recorrido de la gran procesión hacia la Acrópolis, que cruzaba el Ágora en línea recta"],
          ],
        },
        {
          type: "facts",
          items: [
            "Al Templo de Hefesto se le llama por error “Theseion”: los viajeros del siglo XVIII vieron a Teseo en sus esculturas y pensaron que era su tumba.",
            "Se conservó casi intacto porque se convirtió en la iglesia de San Jorge; la última misa se celebró en 1833 para dar la bienvenida al nuevo rey Otón.",
            "Alrededor del templo, los arqueólogos encontraron escoria de metal y moldes de fundición — aquí trabajaban broncistas, que honraban a Hefesto.",
            "La Estoa de Átalo que ves es casi por completo una reconstrucción del siglo XX — muestra cómo era un edificio antiguo cuando era nuevo.",
            "Las excavaciones empezaron en 1931 con la Escuela Americana; en 1935 ya habían encontrado más de 41.000 monedas y unas 600 esculturas.",
            "Sócrates solía debatir con los jóvenes de Atenas en el Ágora.",
          ],
        },
      ],
      quiz: [
        { q: "Hefesto era el dios…", options: ["del mar", "del fuego y de la metalurgia", "de la sabiduría", "del vino"], answer: 1 },
        { q: "¿Por qué el Templo de Hefesto se conservó casi intacto?", options: ["Se convirtió en la iglesia de San Jorge", "Quedó enterrado bajo tierra", "Se reconstruyó en los años cincuenta", "Nadie lo usó nunca"], answer: 0 },
        { q: "¿Qué hay hoy dentro de la Estoa de Átalo?", options: ["El ayuntamiento", "Una iglesia", "El Museo del Ágora", "Una biblioteca"], answer: 2 },
        { q: "¿Qué filósofo debatía con los jóvenes atenienses en el Ágora?", options: ["Pitágoras", "Arquímedes", "Aristóteles", "Sócrates"], answer: 3 },
      ],
    },

    // ------------------------------------------------------------ 3
    "marathon-tomb": {
      name: "La Tumba de Maratón (Soros)",
      shortName: "Tumba de Maratón",
      area: "Maratón",
      period: "490 a. C.",
      oneLine: "El túmulo funerario de los 192 atenienses que cayeron en la batalla",
      intro:
        "La Tumba es la fosa común de los 192 atenienses que murieron en la Batalla de Maratón en el 490 a. C. — un montículo de tierra de 10 m de alto y 50 m de ancho.",
      sections: [
        {
          type: "text",
          title: "La batalla del 490 a. C.",
          paragraphs: [
            "Unos 10.000 atenienses y 1.000 plateos, al mando del general Milcíades, derrotaron a un ejército persa de aproximadamente el doble de tamaño. La victoria se considera una de las batallas más decisivas de la historia. Los muertos fueron enterrados donde cayeron, como un honor especial, en lugar de en el cementerio público de Atenas.",
          ],
        },
        {
          type: "table",
          title: "Qué verás",
          columns: ["Elemento", "Descripción"],
          rows: [
            ["La Tumba", "Un montículo de tierra de 10 m × 50 m en el mismo campo de batalla"],
            ["La excavación", "Valerios Staïs la excavó en 1890 – 91 y encontró huesos quemados y cerámica"],
            ["Estela de Aristión", "Estela funeraria arcaica de un hoplita, mencionada a menudo junto con la Tumba (el original está en el Museo Arqueológico Nacional)"],
            ["Museo de Maratón", "Hallazgos de las tumbas de los atenienses y los plateos, de cementerios prehistóricos y del santuario de Brexiza"],
          ],
        },
        {
          type: "facts",
          items: [
            "Los 192 muertos fueron enterrados donde cayeron — un honor poco común, porque los atenienses solían enterrar a sus caídos en guerra en el cementerio público de la ciudad.",
            "El montículo mide 10 m de alto y 50 m de ancho — más o menos la altura de un edificio de tres plantas y el ancho de medio campo de fútbol.",
            "Los atenienses y los 1.000 plateos vencieron a un ejército de aproximadamente el doble de tamaño.",
            "La carrera de maratón recibe su nombre de esta batalla (ver “El Maratón”).",
          ],
        },
      ],
      quiz: [
        { q: "¿Cuántos atenienses están enterrados en la Tumba?", options: ["48", "192", "1.000", "10.000"], answer: 1 },
        { q: "¿Qué altura tiene el montículo?", options: ["Unos 10 m", "Unos 3 m", "Unos 25 m", "Unos 50 m"], answer: 0 },
        { q: "¿Qué general dirigió a los atenienses en Maratón?", options: ["Pericles", "Leónidas", "Milcíades", "Temístocles"], answer: 2 },
        { q: "¿Quién luchó junto a los atenienses?", options: ["Los espartanos", "Los romanos", "Los persas", "Los plateos"], answer: 3 },
      ],
    },

    // ------------------------------------------------------------ 4
    "marathon-trophy": {
      name: "El Trofeo de Maratón",
      shortName: "Trofeo de Maratón",
      area: "Maratón",
      period: "c. 470 – 460 a. C.",
      oneLine: "La columna de mármol de la victoria",
      intro:
        "El Trofeo es una columna jónica de mármol de unos 10 m de altura, levantada hacia el 470 – 460 a. C. para celebrar la victoria ateniense del 490 a. C.",
      sections: [
        {
          type: "text",
          title: "Historia",
          paragraphs: [
            "Unos años después de la batalla, los atenienses levantaron en la llanura de Maratón un trofeo permanente y monumental. En lo alto del capitel había un hueco para una estatua, muy probablemente una Victoria alada (Niké). Más tarde el monumento se derrumbó y su mármol se usó para construir una torre medieval cerca de la iglesia de Panagia Mesosporitissa, donde se encontraron las piezas.",
          ],
        },
        {
          type: "table",
          title: "Qué verás",
          columns: ["Elemento", "Descripción"],
          rows: [
            ["El monumento restaurado", "La columna se ha vuelto a levantar en Mesosporitissa, donde se cree que estaba originalmente"],
            ["Los fragmentos originales", "Expuestos en el Museo Arqueológico de Maratón"],
          ],
        },
        {
          type: "facts",
          items: [
            "La palabra “trofeo” viene del griego <em>tropē</em>, “giro” — el lugar donde el enemigo se dio la vuelta y empezó a retirarse.",
            "Un trofeo normal era solo un tronco de árbol con las armas de los vencidos colgadas; después de las Guerras Médicas, los griegos convirtieron los trofeos en monumentos permanentes de mármol.",
            "El monumento a la gran victoria acabó como material de construcción de una torre medieval — y así es como se conservaron sus piezas.",
            "Era más o menos tan alto como la Tumba (10 m), así que los dos se alzaban como “gemelos” en el campo de batalla: uno por los muertos y otro por la victoria.",
          ],
        },
      ],
      quiz: [
        { q: "La palabra “trofeo” viene del griego tropē. ¿Qué significa?", options: ["Premio", "Giro", "Columna", "Victoria"], answer: 1 },
        { q: "¿De qué estilo es la columna del Trofeo?", options: ["Jónico", "Dórico", "Corintio", "Egipcio"], answer: 0 },
        { q: "¿Qué había muy probablemente en lo alto de la columna?", options: ["Una estatua de Atenea", "Un león de bronce", "Una Victoria alada (Niké)", "Una estatua de Milcíades"], answer: 2 },
        { q: "¿Cómo se conservaron las piezas del Trofeo?", options: ["Se enterraron en la Tumba", "Cayeron al mar", "Se guardaron en Atenas", "Se usaron para construir una torre medieval"], answer: 3 },
      ],
    },

    // ------------------------------------------------------------ 5
    brexiza: {
      name: "Brexiza — Santuario de los Dioses Egipcios",
      shortName: "Brexiza",
      area: "Nea Makri – Maratón",
      period: "c. 160 d. C.",
      oneLine: "El santuario de Isis de Herodes Ático y unos baños romanos",
      intro:
        "En Brexiza (entre Nea Makri y Maratón) se encuentra un raro santuario de Isis y de los dioses egipcios, construido hacia el 160 d. C., junto a unos baños romanos.",
      sections: [
        {
          type: "text",
          title: "Historia",
          paragraphs: [
            "El santuario se atribuye a Herodes Ático (101 – 177 d. C.), un rico benefactor ateniense cuya familia era de Maratón. Muestra cómo el culto a Isis se había extendido por el mundo romano en el siglo II. Las excavaciones comenzaron en 1968 y el sitio abrió al público en 2001.",
          ],
        },
        {
          type: "table",
          title: "Qué verás",
          columns: ["Elemento", "Descripción"],
          rows: [
            ["El santuario", "Una planta en forma de cruz, con un muro de piedra alrededor y una estructura escalonada en el centro"],
            ["Las puertas", "Cuatro puertas de estilo egipcio (pilonos), una hacia cada punto cardinal"],
            ["Los hallazgos", "Estatuas de Isis y Osiris, esfinges de mármol, lámparas y estatuas masculinas en pose de faraón — hoy en el Museo Arqueológico de Maratón"],
            ["Baños romanos", "Unos baños de los siglos II – III d. C., al sur del santuario, donde aún se ven la calefacción bajo el suelo (hipocausto) y los canales de agua; se usaron hasta mediados del siglo IV"],
          ],
        },
        {
          type: "facts",
          items: [
            "Un santuario egipcio en el Ática: Herodes Ático adoraba a Isis y llevó Egipto a su finca de Maratón.",
            "Las estatuas de Isis son una “mezcla”: combinan rasgos griegos arcaicos y clásicos con posturas egipcias.",
            "Las esfinges de mármol del santuario representaban al dios Horus, hijo de Isis y Osiris.",
            "Los baños tenían “calefacción central”: el aire caliente circulaba bajo los suelos, que descansaban sobre pequeños pilares de ladrillo (el hipocausto).",
            "El santuario estuvo enterrado y olvidado hasta 1968 — y no abrió a los visitantes hasta 2001.",
          ],
        },
      ],
      quiz: [
        { q: "¿Qué diosa se adoraba en el santuario?", options: ["Atenea", "Isis", "Hera", "Artemisa"], answer: 1 },
        { q: "¿A quién se atribuye el santuario?", options: ["A Herodes Ático", "A Pericles", "A Milcíades", "Al emperador Adriano"], answer: 0 },
        { q: "¿Qué era el hipocausto de los baños romanos?", options: ["Una puerta", "Un depósito de agua", "Calefacción bajo el suelo", "Una estatua de Horus"], answer: 2 },
        { q: "¿Cuándo abrió el sitio a los visitantes?", options: ["1896", "1968", "2016", "2001"], answer: 3 },
      ],
    },

    // ------------------------------------------------------------ 6
    "marathon-race": {
      name: "El Maratón",
      shortName: "El Maratón",
      area: "Maratón – Atenas",
      period: "desde 1896",
      oneLine: "De la leyenda de Filípides a Spyros Louis",
      intro:
        "El maratón nació en los primeros Juegos Olímpicos modernos, en Atenas, en 1896, en recuerdo de la victoria del 490 a. C.; el recorrido clásico empieza en Maratón y termina en el Estadio Panatenaico (Kallimarmaro).",
      sections: [
        {
          type: "table",
          title: "De la leyenda a la carrera",
          columns: ["Fecha", "Acontecimiento"],
          rows: [
            ["490 a. C.", "La leyenda del mensajero Filípides, que corrió de Maratón a Atenas para anunciar la victoria"],
            ["1894", "El profesor francés Michel Bréal propone a Coubertin una carrera de Maratón a Atenas"],
            ["1896", "Spyros Louis gana el primer maratón olímpico (unos 40 km) en 2:58:50"],
            ["1908", "Juegos Olímpicos de Londres: el recorrido mide 42,195 km — la distancia que se mantuvo después"],
            ["1924", "El COI fija la distancia en 42,195 km"],
            ["2004", "Juegos Olímpicos de Atenas: el italiano Stefano Baldini gana en el recorrido clásico en 2:10:55"],
          ],
        },
        {
          type: "table",
          title: "Qué verás",
          columns: ["Lugar", "Descripción"],
          rows: [
            ["La salida en Maratón", "Donde empieza cada año el Maratón Clásico de Atenas"],
            ["Museo de la Carrera de Maratón", "En el pueblo de Maratón; la historia de la carrera, de los olímpicos y de grandes maratonianos"],
            ["Estadio Panatenaico (Kallimarmaro)", "La meta, donde ganó Louis en 1896"],
          ],
        },
        {
          type: "facts",
          items: [
            "El maratón no era una prueba de los Juegos Olímpicos antiguos — es una idea del siglo XIX.",
            "Spyros Louis era un aguador de 23 años de Marousi y solo había quedado 5.º en la carrera de clasificación.",
            "Los extraños 42,195 km no tienen nada que ver con Maratón: es simplemente la longitud que tenía el recorrido de Londres en 1908.",
            "Heródoto cuenta que Filípides corrió de Atenas a Esparta para pedir ayuda; la historia de la carrera hasta Atenas gritando “¡Hemos vencido!” es una leyenda posterior.",
            "En 1896 Grecia todavía usaba el calendario antiguo (juliano), por eso la victoria de Louis aparece a veces el 29 de marzo y otras el 10 de abril.",
          ],
        },
      ],
      quiz: [
        { q: "¿Quién ganó el primer maratón olímpico, en 1896?", options: ["Filípides", "Spyros Louis", "Stefano Baldini", "Michel Bréal"], answer: 1 },
        { q: "¿Por qué un maratón mide 42,195 km?", options: ["Era la longitud del recorrido de Londres en 1908", "Es la distancia de Maratón a Atenas", "Es exactamente lo que corrió Filípides", "Se decidió en 1896"], answer: 0 },
        { q: "¿Dónde termina el recorrido clásico?", options: ["En la Acrópolis", "En la plaza Syntagma", "En el Estadio Panatenaico (Kallimarmaro)", "En el Ágora Antigua"], answer: 2 },
        { q: "¿Era el maratón una carrera de los Juegos Olímpicos antiguos?", options: ["Sí, desde los primeros Juegos", "Sí, pero solo para soldados", "Solo cuando los Juegos eran en Atenas", "No — es una idea del siglo XIX"], answer: 3 },
      ],
    },

    // ------------------------------------------------------------ 7
    "epidaurus-theatre": {
      name: "El Teatro Antiguo de Epidauro",
      shortName: "Teatro de Epidauro",
      area: "Argólida",
      period: "finales del siglo IV a. C.",
      oneLine: "El teatro de acústica legendaria",
      intro:
        "El teatro de Epidauro, diseñado por el arquitecto Policleto el Joven a finales del siglo IV a. C., se considera el teatro griego antiguo más perfecto por su acústica y su belleza; es Patrimonio de la Humanidad de la UNESCO desde 1988.",
      sections: [
        {
          type: "table",
          title: "El teatro en cifras",
          columns: ["Elemento", "Valor"],
          rows: [
            ["Fecha", "c. 340 – 300 a. C."],
            ["Espectadores", "13.000 – 14.000"],
            ["Diámetro de la orquesta", "20 m"],
            ["Sectores de gradas", "12 abajo y 22 arriba"],
          ],
        },
        {
          type: "text",
          title: "Historia",
          paragraphs: [
            "El teatro pertenecía al santuario de Asclepio: las obras, la música y el canto formaban parte del culto al dios sanador. Las excavaciones empezaron en 1881 con el arqueólogo Panagis Kavvadias. La primera representación moderna fue <em>Electra</em> de Sófocles en 1938, y desde 1955 el Festival de Epidauro se celebra cada verano.",
          ],
        },
        {
          type: "facts",
          items: [
            "La acústica es tan buena que un susurro en el centro de la orquesta llega a las filas de arriba — ¡pruébalo dejando caer una moneda al suelo!",
            "Los expertos explican la acústica sobre todo por la forma de las gradas, diseñadas a partir de tres centros en lugar de uno.",
            "Maria Callas cantó aquí la <em>Norma</em> de Bellini en 1960.",
            "El teatro se conservó tan bien en parte porque estuvo cubierto de tierra durante siglos.",
            "La última gran restauración duró casi 30 años (1988 – 2016).",
          ],
        },
      ],
      quiz: [
        { q: "¿Cuántos espectadores cabían aproximadamente en el teatro?", options: ["2.000", "13.000 – 14.000", "50.000", "500"], answer: 1 },
        { q: "¿Quién diseñó el teatro?", options: ["Policleto el Joven", "Fidias", "Ictino", "Mnesicles"], answer: 0 },
        { q: "¿Qué cantante famosa interpretó aquí la Norma de Bellini en 1960?", options: ["Nana Mouskouri", "Melina Mercouri", "Maria Callas", "Agnes Baltsa"], answer: 2 },
        { q: "¿Qué explica sobre todo la asombrosa acústica del teatro?", options: ["Tubos de bronce ocultos", "Un tejado que refleja el sonido", "El suelo de mármol", "La forma de las gradas, diseñadas a partir de tres centros"], answer: 3 },
      ],
    },

    // ------------------------------------------------------------ 8
    asklepieion: {
      name: "El Asclepeion de Epidauro",
      shortName: "Asclepeion de Epidauro",
      area: "Argólida",
      period: "siglo IV a. C.",
      oneLine: "El mayor centro de curación del mundo antiguo",
      intro:
        "El Asclepeion de Epidauro fue el centro de curación más importante del mundo griego y romano — el lugar donde la medicina empezó a pasar del milagro a la ciencia.",
      sections: [
        {
          type: "table",
          title: "Qué verás",
          columns: ["Monumento", "Qué era"],
          rows: [
            ["Templo de Asclepio", "El templo principal del dios sanador, obra de Teodoto y Timoteo"],
            ["Tholos (Thymele)", "Un edificio redondo (365 – 335 a. C.) con un laberinto subterráneo de tres pasillos circulares"],
            ["Ábaton", "Donde dormían los enfermos, esperando que el dios los curara en un sueño"],
            ["Estadio", "Donde se celebraban juegos atléticos en honor de Asclepio"],
            ["Katagogion", "Una gran hospedería para peregrinos y enfermos"],
          ],
        },
        {
          type: "text",
          title: "Cómo funcionaba la curación",
          paragraphs: [
            "Primero los pacientes se purificaban con ayuno y baños. Después entraban en el Ábaton y dormían allí (“incubación”), y los sacerdotes interpretaban sus sueños. Los instrumentos médicos y los frascos de medicinas encontrados en el lugar muestran que también se hacían operaciones y tratamientos con hierbas.",
          ],
        },
        {
          type: "facts",
          items: [
            "El símbolo de Asclepio era la serpiente — por eso una serpiente enroscada en un bastón sigue siendo hoy el símbolo de la medicina.",
            "El laberinto bajo el Tholos quizá simbolizaba un viaje al Inframundo y un regreso a la vida.",
            "Las curaciones se anotaban en losas de piedra, los <em>iamata</em> — algo así como los primeros historiales médicos.",
            "El Tholos se considera el edificio redondo más perfecto de la arquitectura griega antigua.",
            "Las excavaciones sacaron a la luz unos 70 monumentos dentro del santuario.",
            "El Asclepeion y el teatro son juntos Patrimonio de la Humanidad de la UNESCO desde 1988.",
          ],
        },
      ],
      quiz: [
        { q: "¿Qué animal era el símbolo de Asclepio?", options: ["El búho", "La serpiente", "El águila", "El león"], answer: 1 },
        { q: "¿Qué pasaba en el Ábaton?", options: ["Los enfermos dormían allí, esperando que el dios los curara en un sueño", "Se celebraban juegos atléticos", "Los peregrinos se alojaban allí", "Se representaban obras de teatro"], answer: 0 },
        { q: "¿Qué eran los iamata?", options: ["Frascos de medicinas", "Los sacerdotes de Asclepio", "Losas de piedra donde se anotaban las curaciones", "Baños calientes"], answer: 2 },
        { q: "¿Qué hay debajo del Tholos?", options: ["Un manantial", "Una sala del tesoro", "Una tumba real", "Un laberinto de tres pasillos circulares"], answer: 3 },
      ],
    },

    // ------------------------------------------------------------ 9
    palamidi: {
      name: "Palamidi, Nauplia",
      shortName: "Palamidi",
      area: "Nauplia",
      period: "1711 – 1714",
      oneLine: "La fortaleza veneciana de los “999” escalones",
      intro:
        "Palamidi es la impresionante fortaleza veneciana que domina Nauplia, a 216 m de altura, construida en solo tres años (1711 – 1714).",
      sections: [
        {
          type: "table",
          title: "La historia de un vistazo",
          columns: ["Fecha", "Acontecimiento"],
          rows: [
            ["1711 – 1714", "Los venecianos la construyen, según el diseño del ingeniero Antonio Giancix, con obras dirigidas por el francés Pierre de la Salle"],
            ["1715", "Los otomanos toman la fortaleza, solo un año después de terminarse"],
            ["29 – 30 de noviembre de 1822", "Los revolucionarios griegos conquistan Palamidi la noche de San Andrés"],
            ["Desde 1840", "La fortaleza se convierte en cárcel durante casi un siglo; la gran escalera se construye en esta época"],
          ],
        },
        {
          type: "table",
          title: "Qué verás",
          columns: ["Elemento", "Descripción"],
          rows: [
            ["Los 8 bastiones", "Con nombres de griegos antiguos como Epaminondas, Milcíades y Leónidas"],
            ["La cárcel de Kolokotronis", "El héroe de la Revolución griega, Theodoros Kolokotronis, estuvo preso en el bastión Milcíades"],
            ["Iglesia de San Andrés", "La pequeña iglesia dentro de la fortaleza, que conmemora la liberación de 1822"],
            ["Las vistas", "Toda Nauplia, el castillo de Bourtzi en el puerto y el golfo Argólico"],
          ],
        },
        {
          type: "facts",
          items: [
            "Se dice que Palamidi tiene 999 escalones — en realidad son 857. ¡Cuéntalos!",
            "Si empiezas temprano por la mañana, la escalera está a la sombra — mejor para la subida, con agua en la mochila.",
            "Los bastiones cambiaron de nombre con cada nuevo gobernante: primero venecianos, luego turcos y, por último, nombres de griegos antiguos.",
            "Un bastión se llama “Robert”, en honor a un filoheleno francés.",
            "Los enormes aljibes de la fortaleza todavía abastecen de agua a la ciudad.",
            "Fue el último gran castillo que los venecianos construyeron fuera de sus territorios.",
          ],
        },
      ],
      quiz: [
        { q: "¿Cuántos escalones llevan realmente a Palamidi?", options: ["999", "857", "500", "1.200"], answer: 1 },
        { q: "¿Quién construyó la fortaleza?", options: ["Los venecianos", "Los otomanos", "Los bizantinos", "Los franceses"], answer: 0 },
        { q: "¿Qué héroe de la Revolución griega estuvo preso aquí?", options: ["Milcíades", "Leónidas", "Theodoros Kolokotronis", "El rey Otón"], answer: 2 },
        { q: "¿En qué año conquistaron Palamidi los revolucionarios griegos?", options: ["1714", "1840", "1896", "1822"], answer: 3 },
      ],
    },
  },
};
