/*
  ============================================================
  ALL THE CONTENT OF THE APP LIVES IN THIS FILE.
  ============================================================
  To change a text: find it below, edit the words between the
  quotes, save, and upload the file again to GitHub.

  Tips:
  - Keep the quotes " " around every text.
  - Keep the commas at the end of lines.
  - To add a photo to a site, put the image file in the
    "images" folder and add a line like:
        image: "images/acropolis.jpg",
    right under the "name:" line of that site.
  ============================================================
*/

const GUIDE = {
  title: "To4e",
  subtitle: "Student Guide",
  intro:
    "Nine stops in Athens, Marathon and the Argolid — from the Battle of Marathon and the age of Pericles to the Venetians and the first Olympic marathon. Each site has its own page with its story, what to see and fun facts.",
};

const SITES = [
  // ------------------------------------------------------------ 1
  {
    id: "acropolis",
    name: "The Acropolis of Athens",
    shortName: "Acropolis",
    area: "Athens",
    period: "5th century BC",
    oneLine: "Parthenon, Erechtheion, Propylaia — Pericles' building programme",
    map: "Acropolis of Athens",
    intro:
      "The Sacred Rock of Athens, about 150 m high, holds the greatest monuments of the 5th century BC and has been a UNESCO World Heritage Site since 1987.",
    sections: [
      {
        type: "table",
        title: "History at a glance",
        columns: ["Date", "Event"],
        rows: [
          ["1300 – 1200 BC", "A Mycenaean palace and a Cyclopean wall 760 m long"],
          ["480 BC", "The Persians destroy the buildings on the Rock, including the unfinished “Older Parthenon”"],
          ["447 – 406 BC", "Pericles' building programme: Parthenon, Propylaia, Erechtheion, Temple of Athena Nike"],
          ["1687", "During the Venetian siege (Morosini) a shell hits the Parthenon, then used as a gunpowder store, and blows much of it apart"],
          ["1975 – today", "Restoration project: marble pieces are rejoined with titanium dowels, so every intervention can be undone"],
          ["1987", "Listed as a UNESCO World Heritage Site"],
        ],
      },
      {
        type: "table",
        title: "The main monuments",
        columns: ["Monument", "Date", "What to look for"],
        rows: [
          ["Propylaia", "437 – 432 BC", "The grand entrance to the Rock, designed by Mnesikles"],
          ["Temple of Athena Nike", "5th century BC", "A small Ionic temple to the right of the entrance, dedicated to victory"],
          ["Parthenon", "447 – 432 BC", "Doric temple of Athena Parthenos; architects Iktinos and Kallikrates, sculptures supervised by Pheidias"],
          ["Erechtheion", "421 – 406 BC", "The Caryatids (today copies; the originals are in the Acropolis Museum)"],
        ],
        note: "The vision and the funding for all this came from Pericles (c. 495 – 429 BC).",
      },
      {
        type: "facts",
        items: [
          "The Parthenon has almost no perfectly straight lines: the columns bulge slightly in the middle (entasis) and lean a little inwards, so the building looks perfectly straight to the eye.",
          "The Parthenon has been an ancient temple, a Christian church, a mosque and a gunpowder store — and that last use destroyed it in 1687.",
          "Of the six Caryatids, five are in the Acropolis Museum and the sixth is in the British Museum.",
          "The Mycenaean wall was so huge that later Greeks believed it had been built by giants — the Cyclopes.",
          "In the restoration, the old iron clamps, which rusted and cracked the marble, are replaced with titanium, which does not rust.",
        ],
      },
    ],
    sources: [
      { label: "Acropolis of Athens — Wikipedia", url: "https://en.wikipedia.org/wiki/Acropolis_of_Athens" },
    ],
  },

  // ------------------------------------------------------------ 2
  {
    id: "agora",
    name: "The Ancient Agora of Athens",
    shortName: "Ancient Agora",
    area: "Athens",
    period: "5th – 2nd century BC",
    oneLine: "The heart of Athenian democracy and the Temple of Hephaestus",
    map: "Ancient Agora of Athens",
    intro:
      "The Agora, northwest of the Acropolis, was the heart of ancient Athens: here Athenians shopped, talked, held trials and governed themselves — the birthplace of democracy in action.",
    sections: [
      {
        type: "table",
        title: "What you will see",
        columns: ["Monument", "Date", "What it was"],
        rows: [
          ["Temple of Hephaestus (“Theseion”)", "449 – 415 BC", "Doric temple of the god of fire and metalwork, one of the best-preserved ancient temples anywhere"],
          ["Stoa of Attalos", "2nd century BC", "A long building lined with shops; rebuilt in the 1950s, it now houses the Agora Museum"],
          ["Bouleuterion", "5th century BC", "Meeting place of the Council, which prepared business for the citizens' Assembly"],
          ["Tholos", "5th century BC", "Round building where the officials on duty ate and slept"],
          ["Stoa Poikile", "5th century BC", "The “Painted Stoa”, decorated with huge paintings — one of them showed the Battle of Marathon"],
          ["Panathenaic Way", "—", "The route of the great procession to the Acropolis, running straight through the Agora"],
        ],
      },
      {
        type: "facts",
        items: [
          "The Temple of Hephaestus is wrongly called the “Theseion”: 18th-century travellers saw Theseus in its sculptures and thought it was his tomb.",
          "It survived almost intact because it became the church of St George; the last service was held in 1833 to welcome the new King Otto.",
          "Around the temple, archaeologists found metal slag and casting moulds — bronze-smiths worked here, honouring Hephaestus.",
          "The Stoa of Attalos you see is almost entirely a 20th-century reconstruction — it shows what an ancient building looked like when new.",
          "Excavations began in 1931 by the American School; by 1935 they had already found over 41,000 coins and about 600 sculptures.",
          "Socrates used to debate with the young people of Athens in the Agora.",
        ],
      },
    ],
    sources: [
      { label: "Ancient Agora of Athens — Wikipedia", url: "https://en.wikipedia.org/wiki/Ancient_Agora_of_Athens" },
      { label: "Temple of Hephaestus — Wikipedia", url: "https://en.wikipedia.org/wiki/Temple_of_Hephaestus" },
    ],
  },

  // ------------------------------------------------------------ 3
  {
    id: "marathon-tomb",
    name: "The Marathon Tomb (Soros)",
    shortName: "Marathon Tomb",
    area: "Marathon",
    period: "490 BC",
    oneLine: "The burial mound of the 192 Athenians who fell in the battle",
    map: "Tomb of the Athenians Marathon",
    intro:
      "The Tomb is the mass grave of the 192 Athenians who fell at the Battle of Marathon in 490 BC — an earth mound 10 m high and 50 m across.",
    sections: [
      {
        type: "text",
        title: "The Battle of 490 BC",
        paragraphs: [
          "About 10,000 Athenians and 1,000 Plataeans, led by the general Miltiades, defeated a Persian army roughly twice their size. The victory is seen as one of the most decisive battles in history. The dead were buried where they fell, as a special honour, instead of in the public cemetery of Athens.",
        ],
      },
      {
        type: "table",
        title: "What you will see",
        columns: ["Feature", "Description"],
        rows: [
          ["The Tomb", "An earth mound 10 m × 50 m on the battlefield itself"],
          ["The excavation", "Valerios Staïs excavated it in 1890 – 91 and found burnt bones and pottery"],
          ["Stele of Aristion", "Archaic grave stele of a hoplite often mentioned together with the Tomb (the original is in the National Archaeological Museum)"],
          ["Marathon Museum", "Finds from the tombs of the Athenians and the Plataeans, prehistoric cemeteries and the Brexiza sanctuary"],
        ],
      },
      {
        type: "facts",
        items: [
          "The 192 dead were buried where they fell — a rare honour, because Athenians normally buried their war dead in the city's public cemetery.",
          "The mound is 10 m high and 50 m across — about as tall as a three-storey building and as wide as half a football pitch.",
          "The Athenians and 1,000 Plataeans beat an army about twice their size.",
          "The marathon race takes its name from this battle (see “The Marathon Race”).",
        ],
      },
    ],
    sources: [
      { label: "We Love Marathon — The Tomb of Marathon", url: "https://www.welovemarathon.gr/post/tumvos-tou-marathona" },
      { label: "Archaeological Museum of Marathon — archaeologicalmuseums.gr", url: "https://archaeologicalmuseums.gr/el/museum/5df34af3deca5e2d79e8c18a/archaeological-museum-of-marathon" },
    ],
  },

  // ------------------------------------------------------------ 4
  {
    id: "marathon-trophy",
    name: "The Marathon Trophy",
    shortName: "Marathon Trophy",
    area: "Marathon",
    period: "c. 470 – 460 BC",
    oneLine: "The marble victory column",
    map: "Trophy of Marathon Mesosporitissa",
    intro:
      "The Trophy is a marble Ionic column about 10 m high, set up around 470 – 460 BC to celebrate the Athenian victory of 490 BC.",
    sections: [
      {
        type: "text",
        title: "History",
        paragraphs: [
          "A few years after the battle, the Athenians raised a permanent, monumental trophy on the plain of Marathon. On top of the capital there was a hollow for a statue, most likely a winged Victory (Nike). Later the monument collapsed, and its marble was built into a medieval tower near the church of Panagia Mesosporitissa, where the pieces were found.",
        ],
      },
      {
        type: "table",
        title: "What you will see",
        columns: ["Feature", "Description"],
        rows: [
          ["The restored monument", "The column has been set up again at Mesosporitissa, where it is thought to have stood originally"],
          ["The original fragments", "On display in the Archaeological Museum of Marathon"],
        ],
      },
      {
        type: "facts",
        items: [
          "The word “trophy” comes from the Greek <em>tropē</em>, “turning” — the spot where the enemy turned around and began to retreat.",
          "A normal trophy was just a tree trunk hung with the weapons of the defeated; after the Persian Wars the Greeks made trophies into permanent marble monuments.",
          "The monument to the great victory ended up as building material for a medieval tower — which is how its pieces survived.",
          "It was about as tall as the Tomb (10 m), so the two stood like “twins” on the battlefield: one for the dead, one for the victory.",
        ],
      },
    ],
    sources: [
      { label: "Ephorate of Antiquities of East Attica — Marathon, Trophy of the Battle", url: "https://www.efaanat.gr/index.php/portfolio/marathonas-tropaio/" },
      { label: "Archaeological Museum of Marathon — archaeologicalmuseums.gr", url: "https://archaeologicalmuseums.gr/el/museum/5df34af3deca5e2d79e8c18a/archaeological-museum-of-marathon" },
    ],
  },

  // ------------------------------------------------------------ 5
  {
    id: "brexiza",
    name: "Brexiza — Sanctuary of the Egyptian Gods",
    shortName: "Brexiza",
    area: "Nea Makri – Marathon",
    period: "c. AD 160",
    oneLine: "Herodes Atticus' sanctuary of Isis and a Roman bath",
    map: "Sanctuary of the Egyptian Gods Brexiza Marathon",
    intro:
      "At Brexiza (between Nea Makri and Marathon) stands a rare sanctuary of Isis and the Egyptian gods, built around AD 160, together with a Roman bath next to it.",
    sections: [
      {
        type: "text",
        title: "History",
        paragraphs: [
          "The sanctuary is attributed to Herodes Atticus (AD 101 – 177), a wealthy Athenian benefactor whose family came from Marathon. It shows how the worship of Isis had spread across the Roman world by the 2nd century. Excavations began in 1968 and the site opened to the public in 2001.",
        ],
      },
      {
        type: "table",
        title: "What you will see",
        columns: ["Feature", "Description"],
        rows: [
          ["The sanctuary", "A cross-shaped plan with a stone enclosure wall and a stepped structure in the centre"],
          ["The gates", "Four Egyptian-style gateways (pylons), one at each point of the compass"],
          ["The finds", "Statues of Isis and Osiris, marble sphinxes, lamps and male statues in a pharaoh's pose — now in the Archaeological Museum of Marathon"],
          ["Roman bath", "A 2nd – 3rd century AD bath south of the sanctuary, with its underfloor heating (hypocaust) and water channels still visible; used until the mid-4th century"],
        ],
      },
      {
        type: "facts",
        items: [
          "An Egyptian sanctuary in Attica: Herodes Atticus worshipped Isis and brought Egypt to his estate at Marathon.",
          "The statues of Isis are a “mix”: they combine archaic and classical Greek features with Egyptian poses.",
          "The marble sphinxes of the sanctuary stood for the god Horus, son of Isis and Osiris.",
          "The bath had “central heating”: hot air flowed under the floors, which rested on small brick pillars (the hypocaust).",
          "The sanctuary lay buried and forgotten until 1968 — and only opened to visitors in 2001.",
        ],
      },
    ],
    sources: [
      { label: "Athinodromio — The Sanctuary of the Egyptian Gods and the Roman Bath", url: "https://www.athinodromio.gr/" },
    ],
  },

  // ------------------------------------------------------------ 6
  {
    id: "marathon-race",
    name: "The Marathon Race",
    shortName: "The Marathon Race",
    area: "Marathon – Athens",
    period: "since 1896",
    oneLine: "From the legend of Pheidippides to Spyros Louis",
    map: "Marathon Run Museum",
    intro:
      "The marathon was born at the first modern Olympic Games in Athens in 1896, in memory of the victory of 490 BC; the classic route starts at Marathon and finishes at the Panathenaic Stadium (Kallimarmaro).",
    sections: [
      {
        type: "table",
        title: "From legend to race",
        columns: ["Date", "Event"],
        rows: [
          ["490 BC", "The legend of the messenger Pheidippides, who ran from Marathon to Athens to announce the victory"],
          ["1894", "French professor Michel Bréal suggests to Coubertin a race from Marathon to Athens"],
          ["1896", "Spyros Louis wins the first Olympic marathon (about 40 km) in 2:58:50"],
          ["1908", "London Olympics: the course is 42.195 km — the length that was later kept"],
          ["1924", "The IOC fixes the distance at 42.195 km"],
          ["2004", "Athens Olympics: Italy's Stefano Baldini wins on the classic route in 2:10:55"],
        ],
      },
      {
        type: "table",
        title: "What you will see",
        columns: ["Place", "Description"],
        rows: [
          ["The start at Marathon", "Where the Athens Classic Marathon starts every year"],
          ["Marathon Run Museum", "In Marathon town; the history of the race, Olympians and great marathon runners"],
          ["Panathenaic Stadium (Kallimarmaro)", "The finish, where Louis won in 1896"],
        ],
      },
      {
        type: "facts",
        items: [
          "The marathon was not an event at the ancient Olympic Games — it is a 19th-century idea.",
          "Spyros Louis was a 23-year-old water carrier from Marousi, and he had finished only 5th in the trial race.",
          "The odd 42.195 km has nothing to do with Marathon: it is simply the length the London course happened to have in 1908.",
          "Herodotus says Pheidippides ran from Athens to Sparta to ask for help; the story of the run to Athens shouting “We have won!” is a later legend.",
          "In 1896 Greece still used the old (Julian) calendar, so Louis' victory is dated sometimes 29 March and sometimes 10 April.",
        ],
      },
    ],
    sources: [
      { label: "San Simera — The history of the Marathon race", url: "https://www.sansimera.gr/articles/696" },
      { label: "Marathon Run Museum — marathonrun.gr", url: "https://marathonrun.gr/en/marathon-road-race/" },
    ],
  },

  // ------------------------------------------------------------ 7
  {
    id: "epidaurus-theatre",
    name: "The Ancient Theatre of Epidaurus",
    shortName: "Theatre of Epidaurus",
    area: "Argolid",
    period: "late 4th century BC",
    oneLine: "The theatre with legendary acoustics",
    map: "Ancient Theatre of Epidaurus",
    intro:
      "The theatre of Epidaurus, designed by the architect Polykleitos the Younger in the late 4th century BC, is considered the most perfect ancient Greek theatre for acoustics and beauty; it has been a UNESCO World Heritage Site since 1988.",
    sections: [
      {
        type: "table",
        title: "The theatre in numbers",
        columns: ["Feature", "Value"],
        rows: [
          ["Date", "c. 340 – 300 BC"],
          ["Spectators", "13,000 – 14,000"],
          ["Diameter of the orchestra", "20 m"],
          ["Seating sections", "12 lower and 22 upper"],
        ],
      },
      {
        type: "text",
        title: "History",
        paragraphs: [
          "The theatre belonged to the sanctuary of Asklepios: plays, music and song were part of the worship of the healing god. Excavation began in 1881 under the archaeologist Panagis Kavvadias. The first modern performance was Sophocles' <em>Electra</em> in 1938, and since 1955 the Epidaurus Festival has been held every summer.",
        ],
      },
      {
        type: "facts",
        items: [
          "The acoustics are so good that a whisper in the centre of the orchestra reaches the top rows — try it with a coin dropped on the ground!",
          "Experts explain the acoustics mainly by the shape of the seating area, designed from three centre points instead of one.",
          "Maria Callas sang Bellini's <em>Norma</em> here in 1960.",
          "The theatre survived so well partly because for centuries it lay covered by earth.",
          "The latest major restoration lasted almost 30 years (1988 – 2016).",
        ],
      },
    ],
    sources: [
      { label: "Theatre of Epidaurus — Wikipedia", url: "https://en.wikipedia.org/wiki/Theatre_of_Epidaurus" },
    ],
  },

  // ------------------------------------------------------------ 8
  {
    id: "asklepieion",
    name: "The Asklepieion of Epidaurus",
    shortName: "Asklepieion of Epidaurus",
    area: "Argolid",
    period: "4th century BC",
    oneLine: "The greatest healing centre of the ancient world",
    map: "Sanctuary of Asklepios Epidaurus",
    intro:
      "The Asklepieion of Epidaurus was the most important healing centre of the Greek and Roman world — the place where medicine began to move from miracle to science.",
    sections: [
      {
        type: "table",
        title: "What you will see",
        columns: ["Monument", "What it was"],
        rows: [
          ["Temple of Asklepios", "The main temple of the healing god, the work of Theodotos and Timotheos"],
          ["Tholos (Thymele)", "A round building (365 – 335 BC) with an underground labyrinth of three circular corridors"],
          ["Abaton", "Where the sick slept, waiting for the god to heal them in a dream"],
          ["Stadium", "Where athletic games were held in honour of Asklepios"],
          ["Katagogion", "A large guesthouse for pilgrims and patients"],
        ],
      },
      {
        type: "text",
        title: "How healing worked",
        paragraphs: [
          "Patients first purified themselves by fasting and bathing. Then they entered the Abaton and slept there (“incubation”), and the priests interpreted their dreams. Medical instruments and medicine jars found on the site show that surgery and herbal treatments also took place.",
        ],
      },
      {
        type: "facts",
        items: [
          "The symbol of Asklepios was the snake — which is why a snake coiled around a staff is still the symbol of medicine today.",
          "The labyrinth under the Tholos may have symbolised a journey to the Underworld and a return to life.",
          "Cures were recorded on stone slabs, the <em>iamata</em> — a bit like the first medical records.",
          "The Tholos is considered the most perfect round building of ancient Greek architecture.",
          "Excavations uncovered about 70 monuments inside the sanctuary.",
          "The Asklepieion and the theatre together have been a UNESCO World Heritage Site since 1988.",
        ],
      },
    ],
    sources: [
      { label: "Ephorate of Antiquities of Argolida — Sanctuary of Asklepios at Epidaurus", url: "https://www.argolisculture.gr/el/lista-mnimeion/arhaiologikos-horos-asklipieiou-epidayrou/" },
      { label: "Travel.gr — Visiting the Asklepieion of Epidaurus", url: "https://www.travel.gr/experiences/taxidi-me-paidia-episkepsi-sto-asklipie/" },
    ],
  },

  // ------------------------------------------------------------ 9
  {
    id: "palamidi",
    name: "Palamidi, Nafplio",
    shortName: "Palamidi",
    area: "Nafplio",
    period: "1711 – 1714",
    oneLine: "The Venetian fortress with the “999” steps",
    map: "Palamidi Fortress Nafplio",
    intro:
      "Palamidi is the impressive Venetian fortress above Nafplio, 216 m high, built in just three years (1711 – 1714).",
    sections: [
      {
        type: "table",
        title: "History at a glance",
        columns: ["Date", "Event"],
        rows: [
          ["1711 – 1714", "The Venetians build it, designed by the engineer Antonio Giancix and built by the Frenchman Pierre de la Salle"],
          ["1715", "The Ottomans take the fortress, just one year after it was finished"],
          ["29 – 30 November 1822", "Greek revolutionaries capture Palamidi on the night of St Andrew's Day"],
          ["From 1840", "The fortress becomes a prison for almost a century; the great stairway is built at this time"],
        ],
      },
      {
        type: "table",
        title: "What you will see",
        columns: ["Feature", "Description"],
        rows: [
          ["The 8 bastions", "Named after ancient Greeks such as Epaminondas, Miltiades and Leonidas"],
          ["Kolokotronis' prison", "The hero of the Greek Revolution, Theodoros Kolokotronis, was held in the Miltiades bastion"],
          ["St Andrew's church", "The small church inside the fortress, which commemorates the liberation of 1822"],
          ["The view", "All of Nafplio, the Bourtzi castle in the harbour and the Argolic Gulf"],
        ],
      },
      {
        type: "facts",
        items: [
          "People say Palamidi has 999 steps — in reality there are 857. Count them!",
          "If you start early in the morning the stairway is in shade — good for the climb, with water in your bag.",
          "The bastions changed names with every new ruler: first Venetian, then Turkish, and finally names of ancient Greeks.",
          "One bastion is called “Robert”, in honour of a French philhellene.",
          "The fortress's huge water tanks still supply the town today.",
          "It was the last great castle the Venetians built outside their own lands.",
        ],
      },
    ],
    sources: [
      { label: "Palamidi — Wikipedia", url: "https://en.wikipedia.org/wiki/Palamidi" },
      { label: "Visit Nafplio — Palamidi", url: "https://www.visitnafplio.com/palamidi.html" },
    ],
  },
];
