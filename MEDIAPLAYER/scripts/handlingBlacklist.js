// ##########################################
// localSorage komplett Daten als json rausschreiben
// ##########################################
const jsonKomplett = document.querySelector("#jsonKomplett");
jsonKomplett.addEventListener("click", () => {
    alert("Sicherung aller Daten")
    alsDateiSpeichern(JSON.stringify(datenVonLocalStorage), "json")
});

function alsDateiSpeichern(ausgabedaten, extension) {
    const blob = new Blob([ausgabedaten], { type: "text.csv" });
    const url = URL.createObjectURL(blob);
    // console.log(url)
    const link = document.createElement('a');
    link.href = url;
    let dateiname = (new Date).toISOString().split(":", 2).join("h") + "_Sicherung_LocalStorage."
    // link.download = "ausgabe." + extension;
    link.download = dateiname + extension;
    link.click();
}

// ##########################################
// komplettes localStorage json aus Datei einlesen und localStorage ueberschreiben
// ##########################################
// Datei lesen
function readFile(input) {
    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function () {
        sicherungEinlesen(reader.result)
    };
    reader.onerror = function () {
        console.log(reader.error);
    };
}

function sicherungEinlesen(datei) {
    let inhaltDerSicherung = JSON.parse(datei);
    // console.log("Das ist das wieder Eingelesene")
    // console.log(inhaltDerSicherung)
    // console.log("xx")

    let wirklichUeberschreiben = false;
    wirklichUeberschreiben = confirm("Bist Du sicher?");
    if (wirklichUeberschreiben) {
        for (let key of Object.keys(inhaltDerSicherung)) {
            // console.log("sik", key, inhaltDerSicherung[key])
            localStorage.setItem(key, inhaltDerSicherung[key])
        }
        // erfassterArbeitstag = inhaltDerSicherung;
        // localStorage.removeItem("zeiten");
        // localStorage.setItem("zeiten", JSON.stringify(erfassterArbeitstag));
        // reset();
    };
    // console.log(localStorage.getItem("datenMediaplayer"))
    // console.log("Inhalt von localStorage datenMediaPlayer")
    // let schnulli = localStorage.getItem("datenMediaplayer")
    // console.log(schnulli)
    // let bulli = JSON.parse(schnulli);
    // console.log("Inhalt von blacklist")
    // console.log(bulli.blacklist)
}

// ########################
// Ausführung des Programms
// ########################

let datenVonLocalStorage = {};

// console.log("Inhalt von localStorage:")
// console.log(localStorage);
for (let entry of Object.keys(localStorage)) {
    // console.log(entry)
    // console.log(JSON.parse(localStorage[entry]))
    // console.log(localStorage[entry])
    datenVonLocalStorage[entry] = localStorage[entry]
}


// console.log(localStorage);
// console.log(datenVonLocalStorage)
// let x1 = JSON.parse(datenVonLocalStorage.datenMediaplayer);
// console.log(x1)
// console.log(x1.blacklist)