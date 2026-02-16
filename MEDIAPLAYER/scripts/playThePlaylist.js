// function defineNumberOfNextSong() {
//     let auswahl = Math.round(Math.random() * (lieder.length - 1));
//     return auswahl
// }


function playNextSong(nummer) {
    console.log(meinePlaylist[nummer].titel)
    // neuesAudio.src = lieder[nummer].titel;
    // neuesAudio.src = meinePlaylist[nummer].titel;
    // let titel = lieder[nummer].titel.split("/").slice(-1);
    // titel = lieder[nummer].artist + " - " + titel;
    let titel = meinePlaylist[nummer].titel.split("/").slice(-1);
    titel = meinePlaylist[nummer].artist + " - " + titel;
    aktuellerTitelname.textContent = titel;

    function loadSong(src, callback) {
        // neuesAudio.src = meinePlaylist[nummer].titel;
        neuesAudio.src = src;
        neuesAudio.addEventListener("loadeddata", (event) => {
            callback(neuesAudio)
        });
    }

    // loadSong(titel, neuesAudio => { aktuellerAbschnitt.appendChild(neuesAudio) });
    loadSong(meinePlaylist[nummer].titel, neuesAudio => { aktuellerAbschnitt.appendChild(neuesAudio) });

    // aktuellerAbschnitt.appendChild(neuesAudio);

    // gespielten Titel aus der Liste löschen
    lieder.splice(nummer, 1);
}

// ################################
// Alles oberhalb von hier ist alt?
// ################################

function selectNextSong(allSongs) {

    function defineNumberOfNextSong() {
        let auswahl = Math.round(Math.random() * (allSongs.length - 1));
        return auswahl
    }

    // console.log("xx", allSongs)
    // let zaehler = 0;
    let zaehler = defineNumberOfNextSong();
    if (allSongs.length > 0) {
        console.log(zaehler, allSongs[zaehler].webkitRelativePath, allSongs.length);
        // console.log("aa", allSongs)
        playTheSong(allSongs[zaehler]);
        allSongs.splice(zaehler, 1);
    }

    function weiterGehts() {

        zaehler = defineNumberOfNextSong();

        if (allSongs.length > 0) {
            console.log(zaehler, allSongs[zaehler].webkitRelativePath, allSongs.length);
            playTheSong(allSongs[zaehler]);
            allSongs.splice(zaehler, 1); // gespielten Titel aus der Liste löschen
            // console.log("bb", allSongs)
        }
    }

    neuesAudio.addEventListener("ended", weiterGehts);
    document.addEventListener('keydown', function (event) {
        if (event.code == "ArrowRight") {
            console.log("Spiel das nächste Lied");
            weiterGehts();
        }
    });
}

function playTheSong(song) {
    // console.log(song)
    const reader = new FileReader();
    reader.onload = () => {
        neuesAudio.src = reader.result;
        aktuellerAbschnitt.appendChild(neuesAudio);
        globaleVariableFuerTitelpfadAufDieBlacklist = song;
        let band = song.webkitRelativePath.split("/")[1];
        // console.log(band)
        let liedname = song.name.split(".");
        liedname = liedname.slice(0, liedname.length - 1).join(" "); // schneidet das '.mp3' weg
        liedname = liedname.split(" ");
        liedname = liedname.slice(-(liedname.length - 1)).join(" "); // schneidet vorn die Nummer weg
        aktuellerTitelname.textContent = band + ": " + liedname;
        bereitsGespielteTitel.push(song.webkitRelativePath)
        // console.log(bereitsGespielteTitel)
        // console.log(bereitsGespielteTitel.slice(-1))
        // console.log(bereitsGespielteTitel.slice(-1)[0].webkitRelativePath)
    };
    reader.readAsDataURL(song);
}

