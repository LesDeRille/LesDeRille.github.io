function erzeugekomplettePlaylist(liederliste) {
  class Lieder {
    constructor(titel, artist, tags) {
      this.titel = titel;
      this.artist = artist;
      this.tags = tags;
    }
  }
  let playlist = [];
  for (let zeile of liederliste) {
    playlist.push(new Lieder(zeile.titel, zeile.artist, ["Frühstück"]))
  }
  return playlist
}

function erzeugePlaylistAufTagbasis(gewaehlterTag) {
  // let linkedSongs = [
  //   { "titel": "T1", "artist": "A1" },
  //   { "titel": "T2", "artist": "A2" },
  //   { "titel": "T3", "artist": "A3" },
  // ];
  let aktuellePlaylist = [];
  let komplettePlaylist = (erzeugekomplettePlaylist(lieder))
  // testhalber Titel 2 ohne Tag Frühstück
  komplettePlaylist[1].tags = [];
  for (let item of komplettePlaylist) {
    if (item.tags.includes(gewaehlterTag)) aktuellePlaylist.push(item)
  }
  return aktuellePlaylist
}

// ################################
// Alles oberhalb von hier ist alt?
// ################################

function machPlaylist(alleSongs, checkboxAuswahl) {
  // localStorage.removeItem("mediaplayerBlacklist");

  // let blacklist = localStorage.getItem("mediaplayerBlacklist");
  // let blacklistArrayWiederhergestellt = JSON.parse(blacklist);
  // console.log("xx", blacklistArrayWiederhergestellt);
  // blacklistArray = blacklistArrayWiederhergestellt;

  if (localStorage.getItem("datenMediaplayer")) {
    console.log("localStorage vorhanden")
  } else {
    alert("LocalStorage wird angelegt");
    let dummydaten = {
      gespielteTitel: [],
      blacklist: []
    };
    let ablage = JSON.stringify(dummydaten)
    localStorage.setItem("datenMediaplayer", ablage)
  }

  // console.log(localStorage.getItem("dummydatenFuerMediaplayer"))

  datenMediaplayer = localStorage.getItem("datenMediaplayer");
  // console.log("xx", datenMediaplayer)
  datenMediaplayerWiederhergestellt = JSON.parse(datenMediaplayer);
  // console.log(datenMediaplayerWiederhergestellt)

  blacklistArray = datenMediaplayerWiederhergestellt.blacklist;
  console.log("Ich bin die Blacklist:")
  console.log(blacklistArray)

  bereitsGespielteTitel = datenMediaplayerWiederhergestellt.gespielteTitel;
  // console.log(bereitsGespielteTitel)

  // // Was ist das los?
  // let schnulli = localStorage.getItem("datenMediaplayer")
  // console.log("Ich bin Schnulli")
  // console.log(schnulli)
  // let bulli = JSON.parse(schnulli);
  // console.log("Ich bin Bulli")
  // console.log(bulli.blacklist)
  // // Ende Was ist das los?


  let playlist = [];
  let ausschluss = ["A Smooth Jazz Christmas [f.y.e. Exclusive]", "Abstuerzende Brieftauben", "Abwärts",
    "AC_DC", "Academia España", "Accept", "Adagio", "Adesso", "Agent Orange", "András Schiff", "Andrea Bocelli",
    "Andreas Eschbach", "Anna Netrebko & Orchestra dell'Accademia Nazionale di Santa Cecilia & Antonio Pappano",
    "Audio Wortschatztrainer", "AudioNovo", "Bastian Sick", "Beethoven", "Berlitz", "Billy Idol", "Black Sabbath",
    "Bob Dylan", "Bocelli Andrea", "Branford Marsalis & The Orpheus Chamber Orchestra", "brigitte wellness schön entspannt 2",
    "Captain Cook und Seine Singenden Saxophone", "Celine Dion", "Celline Dion", "Christmas for Lovers",
    "Christmas for Lovers [Verve]", "Classic Meets Rock", "Claude Debussy", "Creme Fraiche",
    "Day Dreams_ Music for Romantic Moments, Vol. 2", "Dead Kennedys", "Deep Purple", "Depeche Mode",
    "Die Ärzte", "Die Goldenen Zitronen", "Die Hit Giganten - Best Of Italo Hits", "Die Roten Rosen",
    "Die Toten Hosen", "Dimple Minds", "Famous_ The Finest Female Jazz Today", "famous- the finest female jazz today 2",
    "Fehlfarben", "Fine Frenzy", "Finest in Female Vocal Jazz", "Franz Joseph Haydn", "Frédéric Chopin",
    "Für Elise_ Romantic Piano Pieces", "Für Sie Yoga", "Fury in the Slaughterhouse", "Gary Moore",
    "Gilles David Orchestra", "Gipsy Kings", "Gottfried Bottger", "Gotthard", "Guns N' Roses", "Hanne Haller",
    "Hans Zimmer", "Heinrich Böll", "Helloween", "Herbert von Karajan", "Il Divo", "Ildefonso Falcones gelesen von Wolfgang Condrus",
    "Instituto Italiano", "Iron Maiden", "Ironman Roth 2000", "Italienisch", "Italienisch Kurs Fortlaufende Geschichte",
    "Jan Weiler", "Jazz (08.06.2012 16_16_00)", "Jazz For Dinner", "Jazz For Dinner 2", "Jazz for Dinner, Vol. 1_ Brigitte Edition",
    "Jazz for lovers", "Jean-Louis Aubert", "Jerry Lee Lewis", "John Denver + Placido Domingo", "John Legend & the Roots",
    "John Lennon", "Johnny Thunders & the Heartbreakers", "Jose Carreras & Friends", "Karo", "Kate Rusby", "Kathy Kelly",
    "Kaye-Ree", "Kaye-Ree & Kaye-Ree", "Klassik zum Kochen", "Klazz Brothers_Cuba Percussion", "Kuschel Jazz (CD1)",
    "Kuschel Jazz (CD2)", "Kuschel Jazz 2", "Kuschel Jazz, Vol. 1_ From Lounge With Love", "Kuschel Klassik 2",
    "Kuschel Klassik 2 Disc 2", "Kuschel Klassik Piano Dreams Disc 2", "Kuschel Klassik, Vol. 1 Disc 1",
    "Kuschel Klassik, Vol. 1 Disc 2", "KuschelJazz Vol. 2 - CD1", "Kuscheljazz Vol. 2 - CD2", "Kuscheljazz, Vol. 4 Disc 1",
    "Kuscheljazz, Vol. 4 Disc 2", "Kuschelklassik 7 ( CD 1 )", "Les Misérables - 10th Anniversary Concert", "Liebesgedichte",
    "Little Richard", "Louis Armstrong", "Luciano Pavarotti",
    "Marcello Viotti and Orchestra Sinfonica e Coro di Milano Giuseppe Verdi and Plácido Domingo and Sissel",
    "Maria Callas & The Great Sopranos", "Maria ihm schmeckts nicht", "Mathieu Carriere", "Maurice Ravel", "Meat Loaf",
    "Metallica", "Midori, Lloyd Webber, Romero, Zam", "Momentos Estelares de la Música Clasica, Vol. 14", "Montserrat Caballé",
    "Movie Classics_ Music from Famous Films", "Mozart", "Night Music 7", "Night Music 8_ Classical Favourites for Relaxing and Dreaming",
    "Night Music 9", "Nina Hagen Band", "Nina Hagen_Leipzig Big Band", "Nirvana", "Oper (06.10.2012 19_08_34)", "Parmesan",
    "Paul Anka", "Paul Potts", "Pavarotti + Neville", "Pavarotti + Sting", "Peter Tschaikowsky", "Phantom of the Opera",
    "Placido Domingo_Kaas_Fernandez_Mercurio", "Police", "PONS", "Progressive Muskelentspannung", "Ralf Schmitz",
    "Rammstein", "Rat Pack Fun", "Reinhard Mey", "Robert Meadmore", "Rodgau Monotones", "Roy Orbison", "S.Y.P.H",
    "saint-saens", "Santana", "Scorpions", "Scottish Songs For My Scottish Mother", "Sinner", "Spanisch Kurs CE3",
    "spotlight", "Status Quo", "Stiff Little Fingers", "Stigers, Curtis", "Sunday Morning", "Sylvia Capova",
    "Techniker Krankenkasse", "Téléphone", "The B-52's", "The Best of Schmaltz Vol. 2", "The Cars", "The Cure",
    "The Doors", "The Hives", "The Jam", "The Platters", "The Ramones", "The Sex Pistols", "The Stranglers",
    "The Vibrators", "Till Brönner", "Toto Cutugno", "U2", "Udo Jürgens", "Udo Jürgens & seine Gäste", "Uschi Wittich",
    "Valentinstag Hits - Die 65 Schönsten Love Songs", "Vanessa-Mae", "Virtuosi Saxoniae", "Weihnachtslieder",
    "When I Look in Your Eyes", "Wolfgang Amadeus Mozart", "Yann Tiersen"];
  // let ausschluss = ["Abstuerzende Brieftauben", "Abwärts", "AC_DC", "Academia España", "Accept", "Adesso",
  //   "Agent Orange", "Andreas Eschbach", "Audio Wortschatztrainer", "AudioNovo", "Bastian Sick", "Berlitz",
  //   "Black Sabbath", "Captain Cook und Seine Singenden Saxophone", "Celine Dion", "Celline Dion",
  //   "Dead Kennedys", "Deep Purple", "Die Ärzte", "Die Goldenen Zitronen",
  //   "Die Hit Giganten - Best Of Italo Hits", "Die Roten Rosen", "Die Toten Hosen", "Dimple Minds",
  //   "Fehlfarben", "Für Sie Yoga", "Fury in the Slaughterhouse", "Guns N' Roses", "Heinrich Böll",
  //   "Helloween", "Ildefonso Falcones gelesen von Wolfgang Condrus", "Instituto Italiano",
  //   "Iron Maiden", "Ironman Roth 2000", "Italienisch", "Italienisch Kurs Fortlaufende Geschichte",
  //   "Jan Weiler", "John Lennon & Yoko Ono", "Johnny Thunders & the Heartbreakers", "Karo",
  //   "Liebesgedichte", "Maria ihm schmeckts nicht", "Metallica", "Nina Hagen Band",
  //   "Nina Hagen_Leipzig Big Band", "Nirvana", "Oper (06.10.2012 19_08_34)", "Phantom of the Opera",
  //   "PONS", "Progressive Muskelentspannung", "Ralf Schmitz", "Rammstein", "S.Y.P.H", "Scorpions",
  //   "Sinner", "Spanisch Kurs CE3", "spotlight", "Stiff Little Fingers", "Techniker Krankenkasse",
  //   "The Hives", "The Jam", "The Ramones", "The Sex Pistols", "The Stranglers", "The Vibrators", "Weihnachtslieder"];

  for (let titel of alleSongs) {
    let pfad = titel.webkitRelativePath.toLowerCase();
    // console.log(pfad)    
    let inListeAufnehmen = true;


    // Ausschlussliste berücksichtigen
    for (let gruppe of ausschluss) {
      if (pfad.includes(gruppe.toLowerCase())) {
        inListeAufnehmen = false;
      }
    }

    // Blacklist berücksichtigen
    let pfadArray = pfad.split("/");
    let aktuellerTitel = pfadArray.pop();
    let aktuellesAlbum = pfadArray.pop();
    // console.log(aktuellerTitel, aktuellesAlbum)
    // console.log(blacklistArray)

    for (let entry of blacklistArray) {
      let entryArray = entry.split("/");
      let entryTitel = entryArray.pop();
      let entryAlbum = entryArray.pop();
      // console.log("######## START ########")
      // console.log(entry, pfad)
      // console.log(aktuellerTitel, aktuellesAlbum)
      // console.log(entryTitel, entryAlbum)
      // console.log("######## ENDE ########")
      let pruefstringEntry = entryAlbum + entryTitel
      pruefstringEntry = pruefstringEntry.toLowerCase();
      let pruefstringAktuell = aktuellesAlbum + aktuellerTitel

      // if (entry == titel.webkitRelativePath) {
      if (pruefstringEntry == pruefstringAktuell) {
        console.log("Ich bin auf der Blacklist:")
        console.log(entry)
        console.log(titel.webkitRelativePath)
        inListeAufnehmen = false;
      }
    }

    // Hier müssen die bereits gespielten Titel behandelt werden
    // console.log(bereitsGespielteTitel)
    for (let entry of bereitsGespielteTitel) {
      // console.log(pfad,entry)
      if (pfad.includes(entry.toLowerCase())) {
        console.log("Ich wurde schon mal gespielt:")
        console.log(entry)
        inListeAufnehmen = false;
      }
    }

    // So sollen alle Titel gespielt werden, auch wenn sie in Blacklist und/oder Ausschluss 
    // sind oder bereits gespielt wurden. Schön programmiert ist das nicht. Besser wäre, wenn 
    // dann die Abfragen auf Vorhandensein in der Blacklist und so gar nicht erst machen würde. 
    // Das würde CPU sparen
    // console.log(checkboxAuswahl)
    if (checkboxAuswahl.includes("Blacklist und Co ignorieren")) inListeAufnehmen = true;

    if (inListeAufnehmen) {
      playlist.push(titel);
    }
  }
  // console.log(playlist)
  selectNextSong(playlist)
}

