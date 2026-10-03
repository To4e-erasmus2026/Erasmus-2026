// Turkish (Türkçe) — translation of sites.js and of the app's buttons.
// Keep the same order of sections, table rows and quiz options as in sites.js.
window.TRANSLATIONS = window.TRANSLATIONS || {};
TRANSLATIONS.tr = {
  ui: {
    allSites: "← Tüm yerler",
    sitesVisited: "{total} yerden {done} tanesi ziyaret edildi",
    quizPoints: "★ Quiz puanı: <b>{max} üzerinden {points}</b>",
    quizHint: " — her sayfanın sonunda kısa bir quiz var",
    mapButton: "🗺 Tüm yerler haritada",
    savedOffline: "✓ Bu cihaza kaydedildi — internetsiz de çalışır",
    visited: "Ziyaret edildi",
    cardQuiz: "★ Quiz {score} / {total}",
    stopOf: "Durak {n} / {total}",
    openInMaps: "Haritada aç",
    markVisited: "Ziyaret edildi olarak işaretle",
    isVisited: "✓ Ziyaret edildi",
    funFacts: "İlginç bilgiler",
    learnMore: "Daha fazla bilgi",
    previous: "← Önceki",
    next: "Sonraki →",
    photo: "Fotoğraf",
    viaCommons: "Wikimedia Commons aracılığıyla",
    quizTitle: "Kısa quiz",
    quizIntro: "Az önce okuduklarınla ilgili {n} soru.",
    quizBest: "En iyi skorun: <b>{best} / {n}</b>",
    correct: "✓ Doğru!",
    wrong: "✗ Pek değil — doğru cevap: <b>{answer}</b>.",
    perfect: "Tam puan! 🏆",
    wellDone: "Aferin!",
    tryHarder: "Sayfayı bir daha oku ve yeniden dene!",
    tryAgain: "Yeniden dene",
    mapTitle: "Tüm yerler haritada",
    mapIntro: "Yerin adını görmek ve sayfasını açmak için bir numaraya dokun.",
    mapLoading: "Harita yükleniyor…",
    mapOffline: "Harita için internet bağlantısı gerekiyor. Rehberin geri kalanı internetsiz de çalışır — aşağıdaki listeyi kullan.",
    openPage: "Sayfayı aç →",
    wholeTrip: "Tüm gezi",
    map: "Harita",
    language: "Dil",
    euFlag: "Avrupa Birliği bayrağı",
  },

  guide: {
    title: "Arkeolojik Alanlar",
    subtitle: "Öğrenci Rehberi",
    intro:
      "Atina, Maraton ve Argolis'te dokuz durak — Maraton Savaşı'ndan ve Perikles çağından Venediklilere ve ilk olimpik maratona kadar. Her yerin kendi sayfası var: hikâyesi, görülecek yerleri ve ilginç bilgileriyle.",
    footer: [
      "Erasmus+ projesi · Arkeolojik Alanlar Öğrenci Rehberi",
      "To4E - 2025-1-RO01-KA220-SCH-000362818 Greece",
    ],
    fundingLabel: "Avrupa Birliği tarafından finanse edilmektedir",
    fundingDisclaimer:
      "Avrupa Birliği tarafından finanse edilmiştir. Ancak ifade edilen görüş ve düşünceler yalnızca yazar(lar)a aittir ve Avrupa Birliği'nin veya Avrupa Eğitim ve Kültür Yürütme Ajansı'nın (EACEA) görüşlerini yansıtmayabilir. Bunlardan ne Avrupa Birliği ne de EACEA sorumlu tutulabilir.",
  },

  sites: {
    // ------------------------------------------------------------ 1
    acropolis: {
      name: "Atina Akropolisi",
      shortName: "Akropolis",
      area: "Atina",
      period: "MÖ 5. yüzyıl",
      oneLine: "Parthenon, Erekteion, Propylaia — Perikles'in inşaat programı",
      intro:
        "Yaklaşık 150 m yüksekliğindeki Atina'nın Kutsal Kayası, MÖ 5. yüzyılın en büyük anıtlarını barındırır ve 1987'den beri UNESCO Dünya Mirası'dır.",
      sections: [
        {
          type: "table",
          title: "Kısaca tarih",
          columns: ["Tarih", "Olay"],
          rows: [
            ["MÖ 1300 – 1200", "Bir Miken sarayı ve 760 m uzunluğunda bir Kiklopik sur"],
            ["MÖ 480", "Persler, tamamlanmamış “Eski Parthenon” da dahil olmak üzere Kaya'daki yapıları yıkar"],
            ["MÖ 447 – 406", "Perikles'in inşaat programı: Parthenon, Propylaia, Erekteion, Athena Nike Tapınağı"],
            ["1687", "Venedik kuşatması sırasında (Morosini), o dönem barut deposu olarak kullanılan Parthenon'a bir mermi isabet eder ve yapının büyük kısmı havaya uçar"],
            ["1975 – günümüz", "Restorasyon projesi: mermer parçalar titanyum pimlerle birleştirilir, böylece her müdahale geri alınabilir"],
            ["1987", "UNESCO Dünya Mirası Listesi'ne alınır"],
          ],
        },
        {
          type: "table",
          title: "Başlıca anıtlar",
          columns: ["Anıt", "Tarih", "Nelere bakmalı"],
          rows: [
            ["Propylaia", "MÖ 437 – 432", "Mnesikles'in tasarladığı, Kaya'ya çıkan görkemli giriş"],
            ["Athena Nike Tapınağı", "MÖ 5. yüzyıl", "Girişin sağında, zafere adanmış küçük bir İon tapınağı"],
            ["Parthenon", "MÖ 447 – 432", "Athena Parthenos'un Dor tapınağı; mimarları İktinos ve Kallikrates, heykelleri Fidias'ın denetiminde"],
            ["Erekteion", "MÖ 421 – 406", "Karyatidler (bugün kopyalar; orijinalleri Akropolis Müzesi'nde)"],
          ],
          note: "Bütün bunların fikri ve parası Perikles'ten (y. MÖ 495 – 429) geldi.",
        },
        {
          type: "facts",
          items: [
            "Parthenon'da neredeyse hiç tam düz çizgi yoktur: sütunlar ortada hafifçe şişkindir (entasis) ve biraz içe eğiktir; böylece bina göze tamamen düz görünür.",
            "Parthenon antik tapınak, Hristiyan kilisesi, cami ve barut deposu oldu — ve bu son kullanım onu 1687'de yıktı.",
            "Altı Karyatidden beşi Akropolis Müzesi'nde, altıncısı ise British Museum'dadır.",
            "Miken suru o kadar büyüktü ki sonraki dönemlerin Yunanlıları onu devlerin — Kikloplar'ın — yaptığına inanıyordu.",
            "Restorasyonda, paslanıp mermeri çatlatan eski demir kenetlerin yerine paslanmayan titanyum kullanılır.",
          ],
        },
      ],
      quiz: [
        { q: "Parthenon'un sütunları neden ortada hafifçe şişkindir?", options: ["1687'de hasar gördükleri için", "Bina göze tamamen düz görünsün diye", "Daha fazla ağırlık taşısınlar diye", "Mermer çok yumuşak olduğu için"], answer: 1 },
        { q: "1687'de Parthenon'a ne oldu?", options: ["Bir deprem onu yıktı", "Persler onu yaktı", "Barut deposu olarak kullanılırken bir mermi isabet etti", "Müzeye dönüştürüldü"], answer: 2 },
        { q: "Altıncı Karyatid bugün nerede?", options: ["British Museum'da", "Akropolis Müzesi'nde", "Louvre'da", "Hâlâ Erekteion'da"], answer: 0 },
        { q: "Restorasyonda eski demir kenetlerin yerine hangi metal kullanılıyor?", options: ["Bronz", "Çelik", "Altın", "Titanyum"], answer: 3 },
      ],
    },

    // ------------------------------------------------------------ 2
    agora: {
      name: "Atina Antik Agorası",
      shortName: "Antik Agora",
      area: "Atina",
      period: "MÖ 5. – 2. yüzyıl",
      oneLine: "Atina demokrasisinin kalbi ve Hephaistos Tapınağı",
      intro:
        "Akropolis'in kuzeybatısındaki Agora, antik Atina'nın kalbiydi: Atinalılar burada alışveriş yapar, sohbet eder, davalara bakar ve kendilerini yönetirdi — demokrasinin uygulamada doğduğu yer.",
      sections: [
        {
          type: "table",
          title: "Neler göreceksin",
          columns: ["Anıt", "Tarih", "Ne idi"],
          rows: [
            ["Hephaistos Tapınağı (“Theseion”)", "MÖ 449 – 415", "Ateş ve metal işçiliği tanrısının Dor tapınağı; dünyanın en iyi korunmuş antik tapınaklarından biri"],
            ["Attalos Stoası", "MÖ 2. yüzyıl", "Dükkânlarla dolu uzun bir yapı; 1950'lerde yeniden inşa edildi ve bugün Agora Müzesi'ne ev sahipliği yapıyor"],
            ["Buleuterion", "MÖ 5. yüzyıl", "Vatandaş Meclisi için konuları hazırlayan Konsey'in toplantı yeri"],
            ["Tholos", "MÖ 5. yüzyıl", "Görevdeki yöneticilerin yemek yiyip uyuduğu yuvarlak yapı"],
            ["Stoa Poikile", "MÖ 5. yüzyıl", "Dev resimlerle süslü “Boyalı Stoa” — resimlerden biri Maraton Savaşı'nı gösteriyordu"],
            ["Panathenaia Yolu", "—", "Akropolis'e giden büyük alayın yolu; Agora'nın ortasından dümdüz geçiyordu"],
          ],
        },
        {
          type: "facts",
          items: [
            "Hephaistos Tapınağı'na yanlışlıkla “Theseion” denir: 18. yüzyıl gezginleri heykellerinde Theseus'u gördüler ve onun mezarı sandılar.",
            "Neredeyse bozulmadan kaldı, çünkü Aziz Yorgi kilisesi oldu; son ayin 1833'te yeni Kral Otto'yu karşılamak için yapıldı.",
            "Arkeologlar tapınağın çevresinde metal cürufu ve döküm kalıpları buldu — burada Hephaistos'u onurlandıran bronz ustaları çalışıyordu.",
            "Gördüğün Attalos Stoası neredeyse tamamen 20. yüzyıla ait bir yeniden yapım — antik bir binanın yeniyken nasıl göründüğünü gösteriyor.",
            "Kazılara 1931'de Amerikan Okulu başladı; 1935'e kadar 41.000'den fazla sikke ve yaklaşık 600 heykel bulunmuştu.",
            "Sokrates, Agora'da Atinalı gençlerle tartışırdı.",
          ],
        },
      ],
      quiz: [
        { q: "Hephaistos neyin tanrısıydı?", options: ["Denizin", "Ateşin ve metal işçiliğinin", "Bilgeliğin", "Şarabın"], answer: 1 },
        { q: "Hephaistos Tapınağı neden neredeyse bozulmadan kaldı?", options: ["Aziz Yorgi kilisesi oldu", "Toprağın altında gömülü kaldı", "1950'lerde yeniden inşa edildi", "Hiç kimse onu kullanmadı"], answer: 0 },
        { q: "Bugün Attalos Stoası'nın içinde ne var?", options: ["Belediye binası", "Bir kilise", "Agora Müzesi", "Bir kütüphane"], answer: 2 },
        { q: "Hangi filozof Agora'da Atinalı gençlerle tartışırdı?", options: ["Pisagor", "Arşimet", "Aristoteles", "Sokrates"], answer: 3 },
      ],
    },

    // ------------------------------------------------------------ 3
    "marathon-tomb": {
      name: "Maraton Mezarı (Soros)",
      shortName: "Maraton Mezarı",
      area: "Maraton",
      period: "MÖ 490",
      oneLine: "Savaşta ölen 192 Atinalının mezar höyüğü",
      intro:
        "Mezar, MÖ 490'daki Maraton Savaşı'nda ölen 192 Atinalının toplu mezarıdır — 10 m yüksekliğinde ve 50 m genişliğinde bir toprak höyük.",
      sections: [
        {
          type: "text",
          title: "MÖ 490 Savaşı",
          paragraphs: [
            "General Miltiades komutasındaki yaklaşık 10.000 Atinalı ve 1.000 Plataialı, kendilerinin aşağı yukarı iki katı büyüklüğündeki bir Pers ordusunu yendi. Bu zafer, tarihin en belirleyici savaşlarından biri olarak görülür. Ölüler, özel bir onur olarak, Atina'nın kamu mezarlığı yerine düştükleri yere gömüldü.",
          ],
        },
        {
          type: "table",
          title: "Neler göreceksin",
          columns: ["Öğe", "Açıklama"],
          rows: [
            ["Mezar", "Savaş alanının tam ortasında 10 m × 50 m'lik bir toprak höyük"],
            ["Kazı", "Valerios Staïs 1890 – 91'de kazdı ve yanmış kemikler ile çanak çömlek buldu"],
            ["Aristion Steli", "Mezarla birlikte sık sık anılan, bir hoplite ait Arkaik mezar steli (orijinali Ulusal Arkeoloji Müzesi'nde)"],
            ["Maraton Müzesi", "Atinalıların ve Plataialıların mezarlarından, tarih öncesi mezarlıklardan ve Brexiza tapınağından buluntular"],
          ],
        },
        {
          type: "facts",
          items: [
            "192 ölü düştükleri yere gömüldü — nadir bir onur, çünkü Atinalılar savaşta ölenleri normalde şehrin kamu mezarlığına gömerdi.",
            "Höyük 10 m yüksekliğinde ve 50 m genişliğindedir — yaklaşık üç katlı bir bina kadar yüksek ve yarım futbol sahası kadar geniş.",
            "Atinalılar ve 1.000 Plataialı, kendilerinin yaklaşık iki katı büyüklüğündeki bir orduyu yendi.",
            "Maraton koşusu adını bu savaştan alır (bkz. “Maraton Koşusu”).",
          ],
        },
      ],
      quiz: [
        { q: "Mezarda kaç Atinalı gömülü?", options: ["48", "192", "1.000", "10.000"], answer: 1 },
        { q: "Höyük ne kadar yüksek?", options: ["Yaklaşık 10 m", "Yaklaşık 3 m", "Yaklaşık 25 m", "Yaklaşık 50 m"], answer: 0 },
        { q: "Maraton'da Atinalılara hangi general komuta etti?", options: ["Perikles", "Leonidas", "Miltiades", "Themistokles"], answer: 2 },
        { q: "Atinalıların yanında kim savaştı?", options: ["Spartalılar", "Romalılar", "Persler", "Plataialılar"], answer: 3 },
      ],
    },

    // ------------------------------------------------------------ 4
    "marathon-trophy": {
      name: "Maraton Zafer Anıtı",
      shortName: "Maraton Zafer Anıtı",
      area: "Maraton",
      period: "y. MÖ 470 – 460",
      oneLine: "Mermer zafer sütunu",
      intro:
        "Zafer Anıtı (tropaion), MÖ 490'daki Atina zaferini kutlamak için yaklaşık MÖ 470 – 460'ta dikilmiş, yaklaşık 10 m yüksekliğinde mermer bir İon sütunudur.",
      sections: [
        {
          type: "text",
          title: "Tarihçe",
          paragraphs: [
            "Savaştan birkaç yıl sonra Atinalılar, Maraton ovasına kalıcı ve anıtsal bir zafer anıtı diktiler. Sütun başlığının tepesinde bir heykel için oyuk vardı; büyük olasılıkla kanatlı bir Zafer (Nike) heykeli. Daha sonra anıt yıkıldı ve mermeri, parçaların bulunduğu Panagia Mesosporitissa kilisesinin yakınındaki bir Orta Çağ kulesinde yapı malzemesi olarak kullanıldı.",
          ],
        },
        {
          type: "table",
          title: "Neler göreceksin",
          columns: ["Öğe", "Açıklama"],
          rows: [
            ["Restore edilmiş anıt", "Sütun, ilk başta durduğu düşünülen Mesosporitissa'da yeniden dikildi"],
            ["Orijinal parçalar", "Maraton Arkeoloji Müzesi'nde sergileniyor"],
          ],
        },
        {
          type: "facts",
          items: [
            "“Trofe” (tropaion) kelimesi Yunanca <em>tropē</em>, yani “dönüş” kelimesinden gelir — düşmanın geri dönüp çekilmeye başladığı yer.",
            "Sıradan bir zafer anıtı, yenilenlerin silahlarının asıldığı bir ağaç gövdesinden ibaretti; Pers Savaşları'ndan sonra Yunanlılar bunları kalıcı mermer anıtlara dönüştürdü.",
            "Büyük zaferin anıtı sonunda bir Orta Çağ kulesinin yapı malzemesi oldu — parçaları da tam bu sayede günümüze ulaştı.",
            "Yüksekliği Mezar'la (10 m) hemen hemen aynıydı; ikisi savaş alanında “ikizler” gibi duruyordu: biri ölüler, biri zafer için.",
          ],
        },
      ],
      quiz: [
        { q: "“Trofe” kelimesi Yunanca tropē'den gelir. Anlamı nedir?", options: ["Ödül", "Dönüş", "Sütun", "Zafer"], answer: 1 },
        { q: "Zafer Anıtı'nın sütunu hangi düzendedir?", options: ["İon", "Dor", "Korint", "Mısır"], answer: 0 },
        { q: "Sütunun tepesinde büyük olasılıkla ne vardı?", options: ["Bir Athena heykeli", "Bronz bir aslan", "Kanatlı bir Zafer (Nike)", "Bir Miltiades heykeli"], answer: 2 },
        { q: "Zafer Anıtı'nın parçaları nasıl günümüze ulaştı?", options: ["Mezar'a gömüldüler", "Denize düştüler", "Atina'da saklandılar", "Bir Orta Çağ kulesinin duvarlarında kullanıldılar"], answer: 3 },
      ],
    },

    // ------------------------------------------------------------ 5
    brexiza: {
      name: "Brexiza — Mısır Tanrıları Tapınağı",
      shortName: "Brexiza",
      area: "Nea Makri – Maraton",
      period: "y. MS 160",
      oneLine: "Herodes Atticus'un İsis tapınağı ve bir Roma hamamı",
      intro:
        "Brexiza'da (Nea Makri ile Maraton arasında) yaklaşık MS 160'ta inşa edilmiş, İsis'e ve Mısır tanrılarına adanmış ender bir tapınak ve hemen yanında bir Roma hamamı bulunur.",
      sections: [
        {
          type: "text",
          title: "Tarihçe",
          paragraphs: [
            "Tapınak, ailesi Maraton'dan gelen zengin Atinalı hayırsever Herodes Atticus'a (MS 101 – 177) atfedilir. İsis kültünün 2. yüzyılda Roma dünyasına ne kadar yayıldığını gösterir. Kazılar 1968'de başladı ve alan 2001'de ziyarete açıldı.",
          ],
        },
        {
          type: "table",
          title: "Neler göreceksin",
          columns: ["Öğe", "Açıklama"],
          rows: [
            ["Tapınak", "Taş bir çevre duvarı ve ortasında basamaklı bir yapı bulunan haç biçimli bir plan"],
            ["Kapılar", "Her biri bir ana yöne bakan dört Mısır tarzı kapı (pilon)"],
            ["Buluntular", "İsis ve Osiris heykelleri, mermer sfenksler, kandiller ve firavun pozunda erkek heykelleri — bugün Maraton Arkeoloji Müzesi'nde"],
            ["Roma hamamı", "Tapınağın güneyinde MS 2. – 3. yüzyıla ait bir hamam; yerden ısıtma sistemi (hipokaust) ve su kanalları hâlâ görülebiliyor; 4. yüzyılın ortalarına kadar kullanıldı"],
          ],
        },
        {
          type: "facts",
          items: [
            "Attika'da bir Mısır tapınağı: Herodes Atticus İsis'e tapardı ve Mısır'ı Maraton'daki arazisine getirdi.",
            "İsis heykelleri bir “karışım”dır: Arkaik ve Klasik Yunan özelliklerini Mısır duruşlarıyla birleştirir.",
            "Tapınaktaki mermer sfenksler, İsis ile Osiris'in oğlu tanrı Horus'u temsil ediyordu.",
            "Hamamın “kalorifer”i vardı: sıcak hava, küçük tuğla ayaklar (hipokaust) üzerinde duran zeminlerin altından dolaşırdı.",
            "Tapınak 1968'e kadar toprak altında ve unutulmuş olarak kaldı — ve ancak 2001'de ziyaretçilere açıldı.",
          ],
        },
      ],
      quiz: [
        { q: "Tapınakta hangi tanrıçaya tapılıyordu?", options: ["Athena", "İsis", "Hera", "Artemis"], answer: 1 },
        { q: "Tapınak kime atfedilir?", options: ["Herodes Atticus'a", "Perikles'e", "Miltiades'e", "İmparator Hadrianus'a"], answer: 0 },
        { q: "Roma hamamındaki hipokaust neydi?", options: ["Bir kapı", "Bir su deposu", "Yerden ısıtma sistemi", "Bir Horus heykeli"], answer: 2 },
        { q: "Alan ziyaretçilere ne zaman açıldı?", options: ["1896", "1968", "2016", "2001"], answer: 3 },
      ],
    },

    // ------------------------------------------------------------ 6
    "marathon-race": {
      name: "Maraton Koşusu",
      shortName: "Maraton Koşusu",
      area: "Maraton – Atina",
      period: "1896'dan beri",
      oneLine: "Pheidippides efsanesinden Spyros Louis'ye",
      intro:
        "Maraton, MÖ 490 zaferinin anısına 1896'da Atina'daki ilk modern Olimpiyat Oyunları'nda doğdu; klasik parkur Maraton'dan başlar ve Panathenaik Stadyumu'nda (Kallimarmaro) biter.",
      sections: [
        {
          type: "table",
          title: "Efsaneden koşuya",
          columns: ["Tarih", "Olay"],
          rows: [
            ["MÖ 490", "Zaferi haber vermek için Maraton'dan Atina'ya koşan haberci Pheidippides efsanesi"],
            ["1894", "Fransız profesör Michel Bréal, Coubertin'e Maraton'dan Atina'ya bir koşu önerir"],
            ["1896", "Spyros Louis ilk olimpik maratonu (yaklaşık 40 km) 2:58:50'de kazanır"],
            ["1908", "Londra Olimpiyatları: parkur 42,195 km'dir — daha sonra korunan uzunluk"],
            ["1924", "IOC mesafeyi 42,195 km olarak sabitler"],
            ["2004", "Atina Olimpiyatları: İtalyan Stefano Baldini klasik parkurda 2:10:55 ile kazanır"],
          ],
        },
        {
          type: "table",
          title: "Neler göreceksin",
          columns: ["Yer", "Açıklama"],
          rows: [
            ["Maraton'daki başlangıç", "Atina Klasik Maratonu'nun her yıl başladığı yer"],
            ["Maraton Koşusu Müzesi", "Maraton kasabasında; koşunun, olimpiyatçıların ve büyük maratoncuların tarihi"],
            ["Panathenaik Stadyumu (Kallimarmaro)", "Louis'nin 1896'da kazandığı bitiş noktası"],
          ],
        },
        {
          type: "facts",
          items: [
            "Maraton, antik Olimpiyat Oyunları'nda bir yarış değildi — 19. yüzyıla ait bir fikirdir.",
            "Spyros Louis, Marousi'den 23 yaşında bir sakaydı ve seçme yarışında yalnızca 5. olmuştu.",
            "Garip 42,195 km'nin Maraton'la hiçbir ilgisi yoktur: 1908'de Londra parkuru tesadüfen bu uzunluktaydı.",
            "Herodot'a göre Pheidippides yardım istemek için Atina'dan Sparta'ya koştu; “Kazandık!” diye bağırarak Atina'ya koşma hikâyesi sonradan çıkmış bir efsanedir.",
            "Yunanistan 1896'da hâlâ eski (Jülyen) takvimi kullanıyordu; bu yüzden Louis'nin zaferi bazen 29 Mart, bazen 10 Nisan olarak geçer.",
          ],
        },
      ],
      quiz: [
        { q: "1896'daki ilk olimpik maratonu kim kazandı?", options: ["Pheidippides", "Spyros Louis", "Stefano Baldini", "Michel Bréal"], answer: 1 },
        { q: "Maraton neden 42,195 km'dir?", options: ["1908'deki Londra parkuru bu uzunluktaydı", "Maraton ile Atina arasındaki mesafedir", "Pheidippides tam olarak bu kadar koştu", "1896'da böyle karar verildi"], answer: 0 },
        { q: "Klasik parkur nerede biter?", options: ["Akropolis'te", "Sintagma Meydanı'nda", "Panathenaik Stadyumu'nda (Kallimarmaro)", "Antik Agora'da"], answer: 2 },
        { q: "Maraton, antik Olimpiyat Oyunları'nda bir yarış mıydı?", options: ["Evet, ilk Oyunlardan beri", "Evet, ama sadece askerler için", "Sadece Oyunlar Atina'dayken", "Hayır — 19. yüzyıla ait bir fikir"], answer: 3 },
      ],
    },

    // ------------------------------------------------------------ 7
    "epidaurus-theatre": {
      name: "Epidavros Antik Tiyatrosu",
      shortName: "Epidavros Tiyatrosu",
      area: "Argolis",
      period: "MÖ 4. yüzyıl sonu",
      oneLine: "Efsanevi akustiğe sahip tiyatro",
      intro:
        "MÖ 4. yüzyılın sonunda mimar Genç Poliklitos tarafından tasarlanan Epidavros tiyatrosu, akustiği ve güzelliğiyle en kusursuz antik Yunan tiyatrosu kabul edilir; 1988'den beri UNESCO Dünya Mirası'dır.",
      sections: [
        {
          type: "table",
          title: "Rakamlarla tiyatro",
          columns: ["Özellik", "Değer"],
          rows: [
            ["Tarih", "y. MÖ 340 – 300"],
            ["Seyirci", "13.000 – 14.000"],
            ["Orkestranın çapı", "20 m"],
            ["Oturma bölümleri", "12 alt ve 22 üst"],
          ],
        },
        {
          type: "text",
          title: "Tarihçe",
          paragraphs: [
            "Tiyatro Asklepios tapınağına aitti: oyunlar, müzik ve şarkılar, şifa tanrısına yapılan ibadetin bir parçasıydı. Kazılar 1881'de arkeolog Panagis Kavvadias yönetiminde başladı. İlk modern gösteri 1938'de Sofokles'in <em>Elektra</em>'sıydı ve 1955'ten beri Epidavros Festivali her yaz düzenleniyor.",
          ],
        },
        {
          type: "facts",
          items: [
            "Akustik o kadar iyidir ki orkestranın ortasındaki bir fısıltı en üst sıralara ulaşır — yere bir bozuk para düşürerek dene!",
            "Uzmanlar akustiği esas olarak tek bir merkez yerine üç merkez noktasından tasarlanan oturma alanının biçimiyle açıklar.",
            "Maria Callas 1960'ta burada Bellini'nin <em>Norma</em>'sını söyledi.",
            "Tiyatronun bu kadar iyi korunmasının bir nedeni de yüzyıllarca toprakla kaplı kalmasıdır.",
            "Son büyük restorasyon yaklaşık 30 yıl sürdü (1988 – 2016).",
          ],
        },
      ],
      quiz: [
        { q: "Tiyatro yaklaşık kaç seyirci alıyordu?", options: ["2.000", "13.000 – 14.000", "50.000", "500"], answer: 1 },
        { q: "Tiyatroyu kim tasarladı?", options: ["Genç Poliklitos", "Fidias", "İktinos", "Mnesikles"], answer: 0 },
        { q: "1960'ta burada Bellini'nin Norma'sını hangi ünlü şarkıcı söyledi?", options: ["Nana Mouskouri", "Melina Mercouri", "Maria Callas", "Agnes Baltsa"], answer: 2 },
        { q: "Tiyatronun muhteşem akustiğini en çok ne açıklar?", options: ["Gizli bronz borular", "Sesi yansıtan bir çatı", "Mermer zemin", "Üç merkez noktasından tasarlanan oturma alanının biçimi"], answer: 3 },
      ],
    },

    // ------------------------------------------------------------ 8
    asklepieion: {
      name: "Epidavros Asklepieionu",
      shortName: "Epidavros Asklepieionu",
      area: "Argolis",
      period: "MÖ 4. yüzyıl",
      oneLine: "Antik dünyanın en büyük şifa merkezi",
      intro:
        "Epidavros Asklepieionu, Yunan ve Roma dünyasının en önemli şifa merkeziydi — tıbbın mucizeden bilime geçmeye başladığı yer.",
      sections: [
        {
          type: "table",
          title: "Neler göreceksin",
          columns: ["Anıt", "Ne idi"],
          rows: [
            ["Asklepios Tapınağı", "Şifa tanrısının ana tapınağı; Theodotos ve Timotheos'un eseri"],
            ["Tholos (Thymele)", "Yeraltında üç dairesel koridordan oluşan bir labirenti olan yuvarlak bir yapı (MÖ 365 – 335)"],
            ["Abaton", "Hastaların, tanrının onları rüyada iyileştirmesini bekleyerek uyudukları yer"],
            ["Stadyum", "Asklepios onuruna atletizm yarışmalarının yapıldığı yer"],
            ["Katagogion", "Hacılar ve hastalar için büyük bir konukevi"],
          ],
        },
        {
          type: "text",
          title: "Tedavi nasıl yapılırdı",
          paragraphs: [
            "Hastalar önce oruç tutarak ve yıkanarak arınırdı. Sonra Abaton'a girip orada uyurlar (“inkübasyon”), rahipler de rüyalarını yorumlardı. Alanda bulunan tıbbi aletler ve ilaç kapları, burada ameliyatların ve bitkisel tedavilerin de yapıldığını gösteriyor.",
          ],
        },
        {
          type: "facts",
          items: [
            "Asklepios'un simgesi yılandı — bu yüzden bir asaya sarılmış yılan bugün hâlâ tıbbın simgesidir.",
            "Tholos'un altındaki labirent, Yeraltı Dünyası'na bir yolculuğu ve hayata dönüşü simgeliyor olabilir.",
            "İyileşmeler <em>iamata</em> denen taş levhalara yazılırdı — bir bakıma ilk hasta kayıtları gibi.",
            "Tholos, antik Yunan mimarisinin en kusursuz yuvarlak yapısı kabul edilir.",
            "Kazılarda tapınak alanında yaklaşık 70 anıt gün ışığına çıkarıldı.",
            "Asklepieion ve tiyatro birlikte 1988'den beri UNESCO Dünya Mirası'dır.",
          ],
        },
      ],
      quiz: [
        { q: "Asklepios'un simgesi hangi hayvandı?", options: ["Baykuş", "Yılan", "Kartal", "Aslan"], answer: 1 },
        { q: "Abaton'da ne olurdu?", options: ["Hastalar, tanrının onları rüyada iyileştirmesini umarak orada uyurdu", "Atletizm yarışmaları yapılırdı", "Hacılar orada konaklardı", "Tiyatro oyunları sahnelenirdi"], answer: 0 },
        { q: "İamata neydi?", options: ["İlaç kapları", "Asklepios'un rahipleri", "İyileşmelerin yazıldığı taş levhalar", "Sıcak banyolar"], answer: 2 },
        { q: "Tholos'un altında ne var?", options: ["Bir kaynak", "Bir hazine odası", "Bir kral mezarı", "Üç dairesel koridordan oluşan bir labirent"], answer: 3 },
      ],
    },

    // ------------------------------------------------------------ 9
    palamidi: {
      name: "Palamidi, Nafplio",
      shortName: "Palamidi",
      area: "Nafplio",
      period: "1711 – 1714",
      oneLine: "“999” basamaklı Venedik kalesi",
      intro:
        "Palamidi, Nafplio'nun üzerinde, 216 m yükseklikteki etkileyici Venedik kalesidir; yalnızca üç yılda (1711 – 1714) inşa edilmiştir.",
      sections: [
        {
          type: "table",
          title: "Kısaca tarih",
          columns: ["Tarih", "Olay"],
          rows: [
            ["1711 – 1714", "Venedikliler kaleyi mühendis Antonio Giancix'in tasarımıyla inşa eder; yapımı Fransız Pierre de la Salle yönetir"],
            ["1715", "Osmanlılar, tamamlanmasından yalnızca bir yıl sonra kaleyi alır"],
            ["29 – 30 Kasım 1822", "Yunan devrimciler Aziz Andreas Gecesi'nde Palamidi'yi ele geçirir"],
            ["1840'tan itibaren", "Kale yaklaşık bir yüzyıl boyunca hapishane olur; büyük merdiven bu dönemde yapılır"],
          ],
        },
        {
          type: "table",
          title: "Neler göreceksin",
          columns: ["Öğe", "Açıklama"],
          rows: [
            ["8 burç", "Epaminondas, Miltiades ve Leonidas gibi antik Yunanlıların adlarını taşır"],
            ["Kolokotronis'in hücresi", "Yunan Devrimi'nin kahramanı Theodoros Kolokotronis, Miltiades burcunda hapsedildi"],
            ["Aziz Andreas Kilisesi", "Kalenin içinde, 1822'deki kurtuluşu anan küçük kilise"],
            ["Manzara", "Bütün Nafplio, limandaki Burtzi kalesi ve Argolis Körfezi"],
          ],
        },
        {
          type: "facts",
          items: [
            "Palamidi'nin 999 basamağı olduğu söylenir — gerçekte 857 tane. Say bakalım!",
            "Sabah erkenden başlarsan merdiven gölgede olur — çantanda suyla tırmanmak için iyi bir zaman.",
            "Burçların adları her yeni yönetimle değişti: önce Venedikçe, sonra Türkçe ve en sonunda antik Yunanlıların adları.",
            "Burçlardan birinin adı, Fransız bir Helen dostunun onuruna “Robert”tir.",
            "Kalenin dev su sarnıçları bugün hâlâ kasabaya su sağlıyor.",
            "Venediklilerin kendi toprakları dışında inşa ettiği son büyük kaleydi.",
          ],
        },
      ],
      quiz: [
        { q: "Palamidi'ye gerçekte kaç basamak çıkar?", options: ["999", "857", "500", "1.200"], answer: 1 },
        { q: "Kaleyi kim inşa etti?", options: ["Venedikliler", "Osmanlılar", "Bizanslılar", "Fransızlar"], answer: 0 },
        { q: "Yunan Devrimi'nin hangi kahramanı burada hapsedildi?", options: ["Miltiades", "Leonidas", "Theodoros Kolokotronis", "Kral Otto"], answer: 2 },
        { q: "Yunan devrimciler Palamidi'yi hangi yıl ele geçirdi?", options: ["1714", "1840", "1896", "1822"], answer: 3 },
      ],
    },
  },
};
