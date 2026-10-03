// Romanian (Română) — translation of sites.js and of the app's buttons.
// Keep the same order of sections, table rows and quiz options as in sites.js.
window.TRANSLATIONS = window.TRANSLATIONS || {};
TRANSLATIONS.ro = {
  ui: {
    allSites: "← Toate siturile",
    sitesVisited: "{done} din {total} situri vizitate",
    quizPoints: "★ Puncte la quiz: <b>{points} din {max}</b>",
    quizHint: " — fiecare pagină se încheie cu un scurt quiz",
    mapButton: "🗺 Toate siturile pe hartă",
    savedOffline: "✓ Salvat pe acest dispozitiv — funcționează fără internet",
    visited: "Vizitat",
    cardQuiz: "★ Quiz {score} / {total}",
    stopOf: "Oprirea {n} din {total}",
    openInMaps: "Deschide în Hărți",
    markVisited: "Marchează ca vizitat",
    isVisited: "✓ Vizitat",
    funFacts: "Lucruri interesante",
    learnMore: "Află mai multe",
    previous: "← Anterior",
    next: "Următor →",
    photo: "Foto",
    viaCommons: "prin Wikimedia Commons",
    quizTitle: "Quiz rapid",
    quizIntro: "{n} întrebări despre ce ai citit.",
    quizBest: "Cel mai bun scor: <b>{best} / {n}</b>",
    correct: "✓ Corect!",
    wrong: "✗ Nu chiar — răspunsul corect este <b>{answer}</b>.",
    perfect: "Punctaj maxim! 🏆",
    wellDone: "Bravo!",
    tryHarder: "Mai citește o dată pagina și încearcă din nou!",
    tryAgain: "Încearcă din nou",
    mapTitle: "Toate siturile pe hartă",
    mapIntro: "Atinge un număr ca să vezi numele sitului și să deschizi pagina lui.",
    mapLoading: "Se încarcă harta…",
    mapOffline: "Harta are nevoie de internet. Restul ghidului funcționează și fără internet — folosește lista de mai jos.",
    openPage: "Deschide pagina →",
    wholeTrip: "Toată excursia",
    map: "Hartă",
    language: "Limbă",
    euFlag: "Drapelul Uniunii Europene",
  },

  guide: {
    title: "Situri arheologice",
    subtitle: "Ghidul elevului",
    intro:
      "Nouă opriri în Atena, Maraton și Argolida — de la Bătălia de la Maraton și epoca lui Pericle până la venețieni și primul maraton olimpic. Fiecare sit are propria pagină, cu povestea lui, ce poți vedea și lucruri interesante.",
    footer: [
      "Proiect Erasmus+ · Ghidul elevului pentru situri arheologice",
      "To4E - 2025-1-RO01-KA220-SCH-000362818 Greece",
    ],
    fundingLabel: "Cofinanțat de Uniunea Europeană",
    fundingDisclaimer:
      "Finanțat de Uniunea Europeană. Punctele de vedere și opiniile exprimate aparțin însă exclusiv autorului (autorilor) și nu reflectă neapărat punctele de vedere și opiniile Uniunii Europene sau ale Agenției Executive pentru Educație și Cultură (EACEA). Nici Uniunea Europeană, nici EACEA nu pot fi considerate răspunzătoare pentru acestea.",
  },

  sites: {
    // ------------------------------------------------------------ 1
    acropolis: {
      name: "Acropola din Atena",
      shortName: "Acropola",
      area: "Atena",
      period: "secolul al V-lea î.Hr.",
      oneLine: "Partenonul, Erechteionul, Propileele — programul de construcții al lui Pericle",
      intro:
        "Stânca Sacră a Atenei, înaltă de aproximativ 150 m, adăpostește cele mai mari monumente ale secolului al V-lea î.Hr. și este sit al Patrimoniului Mondial UNESCO din 1987.",
      sections: [
        {
          type: "table",
          title: "Istoria pe scurt",
          columns: ["Data", "Eveniment"],
          rows: [
            ["1300 – 1200 î.Hr.", "Un palat micenian și un zid ciclopic lung de 760 m"],
            ["480 î.Hr.", "Perșii distrug clădirile de pe Stâncă, inclusiv „Vechiul Partenon”, care nu era terminat"],
            ["447 – 406 î.Hr.", "Programul de construcții al lui Pericle: Partenonul, Propileele, Erechteionul, Templul Atenei Nike"],
            ["1687", "În timpul asediului venețian (Morosini), un obuz lovește Partenonul, folosit atunci ca depozit de praf de pușcă, și distruge o mare parte din el"],
            ["1975 – azi", "Proiectul de restaurare: bucățile de marmură sunt reunite cu știfturi de titan, astfel încât fiecare intervenție poate fi anulată"],
            ["1987", "Înscrisă pe lista Patrimoniului Mondial UNESCO"],
          ],
        },
        {
          type: "table",
          title: "Monumentele principale",
          columns: ["Monument", "Data", "La ce să fii atent"],
          rows: [
            ["Propileele", "437 – 432 î.Hr.", "Intrarea monumentală pe Stâncă, proiectată de Mnesicle"],
            ["Templul Atenei Nike", "secolul al V-lea î.Hr.", "Un mic templu ionic în dreapta intrării, închinat victoriei"],
            ["Partenonul", "447 – 432 î.Hr.", "Templu doric al Atenei Parthenos; arhitecți Ictinos și Calicrates, sculpturi supravegheate de Fidias"],
            ["Erechteionul", "421 – 406 î.Hr.", "Cariatidele (azi copii; originalele sunt în Muzeul Acropolei)"],
          ],
          note: "Viziunea și banii pentru toate acestea au venit de la Pericle (cca. 495 – 429 î.Hr.).",
        },
        {
          type: "facts",
          items: [
            "Partenonul aproape că nu are linii perfect drepte: coloanele sunt puțin bombate la mijloc (entasis) și ușor înclinate spre interior, ca să pară perfect drepte privite cu ochiul liber.",
            "Partenonul a fost templu antic, biserică creștină, moschee și depozit de praf de pușcă — iar această ultimă folosință l-a distrus în 1687.",
            "Dintre cele șase Cariatide, cinci sunt în Muzeul Acropolei, iar a șasea este în British Museum.",
            "Zidul micenian era atât de uriaș încât grecii de mai târziu credeau că fusese construit de giganți — ciclopii.",
            "La restaurare, vechile scoabe de fier, care ruginiseră și crăpaseră marmura, sunt înlocuite cu titan, care nu ruginește.",
          ],
        },
      ],
      quiz: [
        { q: "De ce sunt coloanele Partenonului puțin bombate la mijloc?", options: ["Pentru că au fost avariate în 1687", "Ca clădirea să pară perfect dreaptă privită cu ochiul liber", "Ca să susțină mai multă greutate", "Pentru că marmura era prea moale"], answer: 1 },
        { q: "Ce s-a întâmplat cu Partenonul în 1687?", options: ["Un cutremur l-a dărâmat", "Perșii l-au incendiat", "L-a lovit un obuz în timp ce era folosit ca depozit de praf de pușcă", "A fost transformat în muzeu"], answer: 2 },
        { q: "Unde se află azi a șasea Cariatidă?", options: ["În British Museum", "În Muzeul Acropolei", "În Luvru", "Tot pe Erechteion"], answer: 0 },
        { q: "Ce metal înlocuiește vechile scoabe de fier la restaurare?", options: ["Bronzul", "Oțelul", "Aurul", "Titanul"], answer: 3 },
      ],
    },

    // ------------------------------------------------------------ 2
    agora: {
      name: "Agora antică din Atena",
      shortName: "Agora antică",
      area: "Atena",
      period: "sec. V – II î.Hr.",
      oneLine: "Inima democrației ateniene și Templul lui Hefaistos",
      intro:
        "Agora, la nord-vest de Acropolă, era inima Atenei antice: aici atenienii făceau cumpărături, discutau, judecau procese și se conduceau singuri — locul de naștere al democrației în practică.",
      sections: [
        {
          type: "table",
          title: "Ce vei vedea",
          columns: ["Monument", "Data", "Ce era"],
          rows: [
            ["Templul lui Hefaistos („Theseion”)", "449 – 415 î.Hr.", "Templu doric al zeului focului și al prelucrării metalelor, unul dintre cele mai bine păstrate temple antice din lume"],
            ["Stoa lui Attalos", "secolul al II-lea î.Hr.", "O clădire lungă cu magazine; reconstruită în anii 1950, adăpostește azi Muzeul Agorei"],
            ["Bouleuterionul", "secolul al V-lea î.Hr.", "Locul de întâlnire al Consiliului, care pregătea problemele pentru Adunarea cetățenilor"],
            ["Tholos", "secolul al V-lea î.Hr.", "Clădire rotundă unde magistrații de serviciu mâncau și dormeau"],
            ["Stoa Poikile", "secolul al V-lea î.Hr.", "„Stoa pictată”, decorată cu picturi uriașe — una dintre ele înfățișa Bătălia de la Maraton"],
            ["Calea Panatenaică", "—", "Traseul marii procesiuni spre Acropolă, care traversa Agora în linie dreaptă"],
          ],
        },
        {
          type: "facts",
          items: [
            "Templul lui Hefaistos este numit greșit „Theseion”: călătorii din secolul al XVIII-lea l-au recunoscut pe Tezeu în sculpturile lui și au crezut că este mormântul acestuia.",
            "A rămas aproape intact pentru că a devenit biserica Sfântul Gheorghe; ultima slujbă a avut loc în 1833, pentru a-l întâmpina pe noul rege Otto.",
            "În jurul templului, arheologii au găsit zgură de metal și tipare de turnare — aici lucrau meșteri în bronz, care îl cinsteau pe Hefaistos.",
            "Stoa lui Attalos pe care o vezi este aproape în întregime o reconstrucție din secolul XX — arată cum arăta o clădire antică atunci când era nouă.",
            "Săpăturile au început în 1931, conduse de Școala Americană; până în 1935 găsiseră deja peste 41.000 de monede și aproximativ 600 de sculpturi.",
            "Socrate obișnuia să discute cu tinerii Atenei în Agora.",
          ],
        },
      ],
      quiz: [
        { q: "Hefaistos era zeul…", options: ["mării", "focului și al prelucrării metalelor", "înțelepciunii", "vinului"], answer: 1 },
        { q: "De ce a rămas Templul lui Hefaistos aproape intact?", options: ["A devenit biserica Sfântul Gheorghe", "A fost îngropat sub pământ", "A fost reconstruit în anii 1950", "Nu l-a folosit nimeni niciodată"], answer: 0 },
        { q: "Ce se află azi în Stoa lui Attalos?", options: ["Primăria", "O biserică", "Muzeul Agorei", "O bibliotecă"], answer: 2 },
        { q: "Ce filozof discuta cu tinerii atenieni în Agora?", options: ["Pitagora", "Arhimede", "Aristotel", "Socrate"], answer: 3 },
      ],
    },

    // ------------------------------------------------------------ 3
    "marathon-tomb": {
      name: "Movila funerară de la Maraton (Soros)",
      shortName: "Movila de la Maraton",
      area: "Maraton",
      period: "490 î.Hr.",
      oneLine: "Movila funerară a celor 192 de atenieni căzuți în bătălie",
      intro:
        "Movila este mormântul comun al celor 192 de atenieni care au murit în Bătălia de la Maraton din 490 î.Hr. — o movilă de pământ înaltă de 10 m și lată de 50 m.",
      sections: [
        {
          type: "text",
          title: "Bătălia din 490 î.Hr.",
          paragraphs: [
            "Aproximativ 10.000 de atenieni și 1.000 de plateeni, conduși de generalul Miltiade, au învins o armată persană de aproape două ori mai mare. Victoria este considerată una dintre cele mai decisive bătălii din istorie. Morții au fost îngropați acolo unde au căzut, ca o cinste deosebită, și nu în cimitirul public al Atenei.",
          ],
        },
        {
          type: "table",
          title: "Ce vei vedea",
          columns: ["Element", "Descriere"],
          rows: [
            ["Movila", "O movilă de pământ de 10 m × 50 m, chiar pe câmpul de luptă"],
            ["Săpăturile", "Valerios Staïs a săpat-o în 1890 – 91 și a găsit oase arse și vase de ceramică"],
            ["Stela lui Aristion", "Stelă funerară arhaică a unui hoplit, pomenită adesea împreună cu Movila (originalul este în Muzeul Național de Arheologie)"],
            ["Muzeul din Maraton", "Descoperiri din mormintele atenienilor și ale plateenilor, din necropole preistorice și din sanctuarul de la Brexiza"],
          ],
        },
        {
          type: "facts",
          items: [
            "Cei 192 de morți au fost îngropați acolo unde au căzut — o cinste rară, pentru că atenienii își îngropau de obicei morții din război în cimitirul public al orașului.",
            "Movila are 10 m înălțime și 50 m lățime — cam cât o clădire cu trei etaje în înălțime și cât jumătate de teren de fotbal în lățime.",
            "Atenienii și cei 1.000 de plateeni au învins o armată de aproape două ori mai mare.",
            "Cursa de maraton își ia numele de la această bătălie (vezi „Cursa de maraton”).",
          ],
        },
      ],
      quiz: [
        { q: "Câți atenieni sunt îngropați în Movilă?", options: ["48", "192", "1.000", "10.000"], answer: 1 },
        { q: "Cât de înaltă este movila?", options: ["Aproximativ 10 m", "Aproximativ 3 m", "Aproximativ 25 m", "Aproximativ 50 m"], answer: 0 },
        { q: "Ce general i-a condus pe atenieni la Maraton?", options: ["Pericle", "Leonida", "Miltiade", "Temistocle"], answer: 2 },
        { q: "Cine a luptat alături de atenieni?", options: ["Spartanii", "Romanii", "Perșii", "Plateenii"], answer: 3 },
      ],
    },

    // ------------------------------------------------------------ 4
    "marathon-trophy": {
      name: "Trofeul de la Maraton",
      shortName: "Trofeul de la Maraton",
      area: "Maraton",
      period: "cca. 470 – 460 î.Hr.",
      oneLine: "Coloana de marmură a victoriei",
      intro:
        "Trofeul este o coloană ionică de marmură înaltă de aproximativ 10 m, ridicată în jurul anilor 470 – 460 î.Hr. pentru a sărbători victoria atenienilor din 490 î.Hr.",
      sections: [
        {
          type: "text",
          title: "Istorie",
          paragraphs: [
            "La câțiva ani după bătălie, atenienii au ridicat pe câmpia de la Maraton un trofeu permanent, monumental. În vârful capitelului era o adâncitură pentru o statuie, cel mai probabil o Victorie înaripată (Nike). Mai târziu monumentul s-a prăbușit, iar marmura lui a fost zidită într-un turn medieval de lângă biserica Panagia Mesosporitissa, unde au fost găsite bucățile.",
          ],
        },
        {
          type: "table",
          title: "Ce vei vedea",
          columns: ["Element", "Descriere"],
          rows: [
            ["Monumentul restaurat", "Coloana a fost ridicată din nou la Mesosporitissa, unde se crede că stătea la început"],
            ["Fragmentele originale", "Expuse în Muzeul Arheologic din Maraton"],
          ],
        },
        {
          type: "facts",
          items: [
            "Cuvântul „trofeu” vine din grecescul <em>tropē</em>, „întoarcere” — locul unde dușmanul s-a întors și a început să se retragă.",
            "Un trofeu obișnuit era doar un trunchi de copac pe care se atârnau armele învinșilor; după Războaiele Medice, grecii au transformat trofeele în monumente permanente de marmură.",
            "Monumentul marii victorii a ajuns material de construcție pentru un turn medieval — și tocmai așa s-au păstrat bucățile lui.",
            "Era cam la fel de înalt ca Movila (10 m), așa că cele două stăteau ca niște „gemeni” pe câmpul de luptă: unul pentru morți, unul pentru victorie.",
          ],
        },
      ],
      quiz: [
        { q: "Cuvântul „trofeu” vine din grecescul tropē. Ce înseamnă?", options: ["Premiu", "Întoarcere", "Coloană", "Victorie"], answer: 1 },
        { q: "În ce stil este coloana Trofeului?", options: ["Ionic", "Doric", "Corintic", "Egiptean"], answer: 0 },
        { q: "Ce stătea, cel mai probabil, în vârful coloanei?", options: ["O statuie a Atenei", "Un leu de bronz", "O Victorie înaripată (Nike)", "O statuie a lui Miltiade"], answer: 2 },
        { q: "Cum s-au păstrat bucățile Trofeului?", options: ["Au fost îngropate în Movilă", "Au căzut în mare", "Au fost păstrate la Atena", "Au fost zidite într-un turn medieval"], answer: 3 },
      ],
    },

    // ------------------------------------------------------------ 5
    brexiza: {
      name: "Brexiza — Sanctuarul zeilor egipteni",
      shortName: "Brexiza",
      area: "Nea Makri – Maraton",
      period: "cca. 160 d.Hr.",
      oneLine: "Sanctuarul Isidei construit de Herodes Atticus și o baie romană",
      intro:
        "La Brexiza (între Nea Makri și Maraton) se află un sanctuar rar al Isidei și al zeilor egipteni, construit în jurul anului 160 d.Hr., împreună cu o baie romană alături.",
      sections: [
        {
          type: "text",
          title: "Istorie",
          paragraphs: [
            "Sanctuarul este atribuit lui Herodes Atticus (101 – 177 d.Hr.), un binefăcător atenian bogat, a cărui familie era din Maraton. El arată cum se răspândise cultul Isidei în lumea romană până în secolul al II-lea. Săpăturile au început în 1968, iar situl a fost deschis publicului în 2001.",
          ],
        },
        {
          type: "table",
          title: "Ce vei vedea",
          columns: ["Element", "Descriere"],
          rows: [
            ["Sanctuarul", "Un plan în formă de cruce, cu un zid de incintă din piatră și o construcție în trepte în centru"],
            ["Porțile", "Patru porți în stil egiptean (piloni), câte una spre fiecare punct cardinal"],
            ["Descoperirile", "Statui ale Isidei și ale lui Osiris, sfincși de marmură, lămpi și statui de bărbați în poziție de faraon — azi în Muzeul Arheologic din Maraton"],
            ["Baia romană", "O baie din secolele II – III d.Hr., la sud de sanctuar, la care se văd încă încălzirea prin pardoseală (hipocaustul) și canalele de apă; folosită până la mijlocul secolului al IV-lea"],
          ],
        },
        {
          type: "facts",
          items: [
            "Un sanctuar egiptean în Attica: Herodes Atticus o venera pe Isis și a adus Egiptul pe moșia sa de la Maraton.",
            "Statuile Isidei sunt un „amestec”: combină trăsături grecești arhaice și clasice cu poziții egiptene.",
            "Sfincșii de marmură ai sanctuarului îl reprezentau pe zeul Horus, fiul Isidei și al lui Osiris.",
            "Baia avea „încălzire centrală”: aerul cald circula pe sub pardoseli, care se sprijineau pe stâlpișori de cărămidă (hipocaustul).",
            "Sanctuarul a stat îngropat și uitat până în 1968 — și a fost deschis vizitatorilor abia în 2001.",
          ],
        },
      ],
      quiz: [
        { q: "Ce zeiță era venerată la sanctuar?", options: ["Atena", "Isis", "Hera", "Artemis"], answer: 1 },
        { q: "Cui îi este atribuit sanctuarul?", options: ["Lui Herodes Atticus", "Lui Pericle", "Lui Miltiade", "Împăratului Hadrian"], answer: 0 },
        { q: "Ce era hipocaustul băii romane?", options: ["O poartă", "Un rezervor de apă", "Încălzirea prin pardoseală", "O statuie a lui Horus"], answer: 2 },
        { q: "Când a fost deschis situl pentru vizitatori?", options: ["1896", "1968", "2016", "2001"], answer: 3 },
      ],
    },

    // ------------------------------------------------------------ 6
    "marathon-race": {
      name: "Cursa de maraton",
      shortName: "Cursa de maraton",
      area: "Maraton – Atena",
      period: "din 1896",
      oneLine: "De la legenda lui Fidipide la Spyros Louis",
      intro:
        "Maratonul s-a născut la primele Jocuri Olimpice moderne, la Atena, în 1896, în amintirea victoriei din 490 î.Hr.; traseul clasic pornește din Maraton și se termină pe Stadionul Panatenaic (Kallimarmaro).",
      sections: [
        {
          type: "table",
          title: "De la legendă la cursă",
          columns: ["Data", "Eveniment"],
          rows: [
            ["490 î.Hr.", "Legenda mesagerului Fidipide, care a alergat de la Maraton la Atena ca să anunțe victoria"],
            ["1894", "Profesorul francez Michel Bréal îi propune lui Coubertin o cursă de la Maraton la Atena"],
            ["1896", "Spyros Louis câștigă primul maraton olimpic (aproximativ 40 km) în 2:58:50"],
            ["1908", "Jocurile Olimpice de la Londra: traseul are 42,195 km — lungimea păstrată mai târziu"],
            ["1924", "CIO stabilește distanța la 42,195 km"],
            ["2004", "Jocurile Olimpice de la Atena: italianul Stefano Baldini câștigă pe traseul clasic în 2:10:55"],
          ],
        },
        {
          type: "table",
          title: "Ce vei vedea",
          columns: ["Loc", "Descriere"],
          rows: [
            ["Startul de la Maraton", "De aici pornește în fiecare an Maratonul Clasic al Atenei"],
            ["Muzeul Cursei de Maraton", "În orașul Maraton; istoria cursei, olimpici și mari maratoniști"],
            ["Stadionul Panatenaic (Kallimarmaro)", "Sosirea, unde a câștigat Louis în 1896"],
          ],
        },
        {
          type: "facts",
          items: [
            "Maratonul nu a fost probă la Jocurile Olimpice antice — este o idee din secolul al XIX-lea.",
            "Spyros Louis era un cărăuș de apă de 23 de ani din Marousi și terminase doar pe locul 5 la cursa de selecție.",
            "Ciudata distanță de 42,195 km nu are nicio legătură cu Maratonul: este pur și simplu lungimea pe care a avut-o traseul de la Londra în 1908.",
            "Herodot spune că Fidipide a alergat de la Atena la Sparta ca să ceară ajutor; povestea alergării la Atena strigând „Am învins!” este o legendă de mai târziu.",
            "În 1896 Grecia folosea încă vechiul calendar (iulian), așa că victoria lui Louis este datată uneori 29 martie și alteori 10 aprilie.",
          ],
        },
      ],
      quiz: [
        { q: "Cine a câștigat primul maraton olimpic, în 1896?", options: ["Fidipide", "Spyros Louis", "Stefano Baldini", "Michel Bréal"], answer: 1 },
        { q: "De ce are un maraton 42,195 km?", options: ["Atât avea traseul de la Londra în 1908", "Este distanța de la Maraton la Atena", "Exact atât a alergat Fidipide", "Așa s-a hotărât în 1896"], answer: 0 },
        { q: "Unde se termină traseul clasic?", options: ["La Acropolă", "În Piața Syntagma", "Pe Stadionul Panatenaic (Kallimarmaro)", "În Agora antică"], answer: 2 },
        { q: "Era maratonul o cursă la Jocurile Olimpice antice?", options: ["Da, de la primele Jocuri", "Da, dar numai pentru soldați", "Numai când Jocurile aveau loc la Atena", "Nu — este o idee din secolul al XIX-lea"], answer: 3 },
      ],
    },

    // ------------------------------------------------------------ 7
    "epidaurus-theatre": {
      name: "Teatrul antic din Epidaur",
      shortName: "Teatrul din Epidaur",
      area: "Argolida",
      period: "sfârșitul sec. al IV-lea î.Hr.",
      oneLine: "Teatrul cu o acustică legendară",
      intro:
        "Teatrul din Epidaur, proiectat de arhitectul Policlet cel Tânăr la sfârșitul secolului al IV-lea î.Hr., este considerat cel mai desăvârșit teatru grecesc antic ca acustică și frumusețe; este sit al Patrimoniului Mondial UNESCO din 1988.",
      sections: [
        {
          type: "table",
          title: "Teatrul în cifre",
          columns: ["Element", "Valoare"],
          rows: [
            ["Data", "cca. 340 – 300 î.Hr."],
            ["Spectatori", "13.000 – 14.000"],
            ["Diametrul orchestrei", "20 m"],
            ["Secțiuni de locuri", "12 jos și 22 sus"],
          ],
        },
        {
          type: "text",
          title: "Istorie",
          paragraphs: [
            "Teatrul aparținea sanctuarului lui Asclepios: piesele, muzica și cântecul făceau parte din cultul zeului vindecător. Săpăturile au început în 1881, sub conducerea arheologului Panagis Kavvadias. Primul spectacol modern a fost <em>Electra</em> lui Sofocle, în 1938, iar din 1955 Festivalul de la Epidaur are loc în fiecare vară.",
          ],
        },
        {
          type: "facts",
          items: [
            "Acustica este atât de bună încât o șoaptă din centrul orchestrei se aude până pe rândurile de sus — încearcă scăpând o monedă pe jos!",
            "Specialiștii explică acustica mai ales prin forma gradenelor, proiectate pornind de la trei centre în loc de unul.",
            "Maria Callas a cântat aici <em>Norma</em> de Bellini, în 1960.",
            "Teatrul s-a păstrat atât de bine și pentru că a stat secole întregi acoperit de pământ.",
            "Ultima restaurare mare a durat aproape 30 de ani (1988 – 2016).",
          ],
        },
      ],
      quiz: [
        { q: "Cam câți spectatori încăpeau în teatru?", options: ["2.000", "13.000 – 14.000", "50.000", "500"], answer: 1 },
        { q: "Cine a proiectat teatrul?", options: ["Policlet cel Tânăr", "Fidias", "Ictinos", "Mnesicle"], answer: 0 },
        { q: "Ce cântăreață celebră a interpretat aici Norma de Bellini, în 1960?", options: ["Nana Mouskouri", "Melina Mercouri", "Maria Callas", "Agnes Baltsa"], answer: 2 },
        { q: "Ce explică în principal acustica uimitoare a teatrului?", options: ["Țevi de bronz ascunse", "Un acoperiș care reflectă sunetul", "Pardoseala de marmură", "Forma gradenelor, proiectate pornind de la trei centre"], answer: 3 },
      ],
    },

    // ------------------------------------------------------------ 8
    asklepieion: {
      name: "Asclepieionul din Epidaur",
      shortName: "Asclepieionul din Epidaur",
      area: "Argolida",
      period: "secolul al IV-lea î.Hr.",
      oneLine: "Cel mai mare centru de vindecare al lumii antice",
      intro:
        "Asclepieionul din Epidaur a fost cel mai important centru de vindecare al lumii grecești și romane — locul în care medicina a început să treacă de la miracol la știință.",
      sections: [
        {
          type: "table",
          title: "Ce vei vedea",
          columns: ["Monument", "Ce era"],
          rows: [
            ["Templul lui Asclepios", "Templul principal al zeului vindecător, opera lui Theodotos și Timotheos"],
            ["Tholos (Thymele)", "O clădire rotundă (365 – 335 î.Hr.) cu un labirint subteran din trei coridoare circulare"],
            ["Abaton", "Locul unde dormeau bolnavii, așteptând ca zeul să-i vindece în vis"],
            ["Stadionul", "Unde aveau loc întreceri atletice în cinstea lui Asclepios"],
            ["Katagogion", "O casă de oaspeți mare pentru pelerini și bolnavi"],
          ],
        },
        {
          type: "text",
          title: "Cum se făcea vindecarea",
          paragraphs: [
            "Bolnavii se purificau mai întâi prin post și băi. Apoi intrau în Abaton și dormeau acolo („incubație”), iar preoții le interpretau visele. Instrumentele medicale și vasele pentru leacuri găsite pe sit arată că se făceau și operații și tratamente cu plante.",
          ],
        },
        {
          type: "facts",
          items: [
            "Simbolul lui Asclepios era șarpele — de aceea un șarpe încolăcit pe un toiag este și azi simbolul medicinei.",
            "Labirintul de sub Tholos ar fi putut simboliza o călătorie în Lumea de Dincolo și o întoarcere la viață.",
            "Vindecările erau scrise pe plăci de piatră, <em>iamata</em> — cam ca primele fișe medicale.",
            "Tholosul este considerat cea mai desăvârșită clădire rotundă a arhitecturii grecești antice.",
            "Săpăturile au scos la iveală aproximativ 70 de monumente în interiorul sanctuarului.",
            "Asclepieionul și teatrul sunt împreună sit al Patrimoniului Mondial UNESCO din 1988.",
          ],
        },
      ],
      quiz: [
        { q: "Ce animal era simbolul lui Asclepios?", options: ["Bufnița", "Șarpele", "Vulturul", "Leul"], answer: 1 },
        { q: "Ce se întâmpla în Abaton?", options: ["Bolnavii dormeau acolo, sperând ca zeul să-i vindece în vis", "Aveau loc întreceri atletice", "Pelerinii stăteau acolo ca oaspeți", "Se jucau piese de teatru"], answer: 0 },
        { q: "Ce erau iamata?", options: ["Vase pentru leacuri", "Preoții lui Asclepios", "Plăci de piatră pe care erau scrise vindecările", "Băi calde"], answer: 2 },
        { q: "Ce se află sub Tholos?", options: ["Un izvor", "O cameră cu comori", "Un mormânt regal", "Un labirint din trei coridoare circulare"], answer: 3 },
      ],
    },

    // ------------------------------------------------------------ 9
    palamidi: {
      name: "Palamidi, Nafplio",
      shortName: "Palamidi",
      area: "Nafplio",
      period: "1711 – 1714",
      oneLine: "Fortăreața venețiană cu „999” de trepte",
      intro:
        "Palamidi este impresionanta fortăreață venețiană de deasupra orașului Nafplio, la 216 m înălțime, construită în doar trei ani (1711 – 1714).",
      sections: [
        {
          type: "table",
          title: "Istoria pe scurt",
          columns: ["Data", "Eveniment"],
          rows: [
            ["1711 – 1714", "Venețienii o construiesc, după planurile inginerului Antonio Giancix, iar lucrările sunt conduse de francezul Pierre de la Salle"],
            ["1715", "Otomanii cuceresc fortăreața, la doar un an după ce fusese terminată"],
            ["29 – 30 noiembrie 1822", "Revoluționarii greci cuceresc Palamidi în noaptea de Sfântul Andrei"],
            ["Din 1840", "Fortăreața devine închisoare timp de aproape un secol; marea scară este construită în această perioadă"],
          ],
        },
        {
          type: "table",
          title: "Ce vei vedea",
          columns: ["Element", "Descriere"],
          rows: [
            ["Cele 8 bastioane", "Poartă numele unor greci antici, ca Epaminonda, Miltiade și Leonida"],
            ["Închisoarea lui Kolokotronis", "Eroul Revoluției grecești, Theodoros Kolokotronis, a fost închis în bastionul Miltiade"],
            ["Biserica Sfântul Andrei", "Mica biserică din interiorul fortăreței, care comemorează eliberarea din 1822"],
            ["Priveliștea", "Tot orașul Nafplio, castelul Bourtzi din port și Golful Argolic"],
          ],
        },
        {
          type: "facts",
          items: [
            "Se spune că Palamidi are 999 de trepte — în realitate sunt 857. Numără-le!",
            "Dacă pornești dimineața devreme, scara este la umbră — bine pentru urcuș, cu apă în rucsac.",
            "Bastioanele și-au schimbat numele cu fiecare nou stăpân: întâi venețiene, apoi turcești și, în final, nume de greci antici.",
            "Un bastion se numește „Robert”, în cinstea unui filoelen francez.",
            "Rezervoarele uriașe de apă ale fortăreței alimentează și azi orașul.",
            "A fost ultimul mare castel construit de venețieni în afara teritoriilor lor.",
          ],
        },
      ],
      quiz: [
        { q: "Câte trepte duc, în realitate, până la Palamidi?", options: ["999", "857", "500", "1.200"], answer: 1 },
        { q: "Cine a construit fortăreața?", options: ["Venețienii", "Otomanii", "Bizantinii", "Francezii"], answer: 0 },
        { q: "Ce erou al Revoluției grecești a fost închis aici?", options: ["Miltiade", "Leonida", "Theodoros Kolokotronis", "Regele Otto"], answer: 2 },
        { q: "În ce an au cucerit revoluționarii greci Palamidi?", options: ["1714", "1840", "1896", "1822"], answer: 3 },
      ],
    },
  },
};
