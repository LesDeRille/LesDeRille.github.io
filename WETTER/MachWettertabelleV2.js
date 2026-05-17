'use strict'

let neueTabelle
let wochentage = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa",]
function legNeueTabelleAn(dickiName) {

    if (!document.getElementById(Object.keys(dickiName)[0])) {
        neueTabelle = document.createElement("table");
        neueTabelle.id = Object.keys(dickiName)[0];
        let neueUeberschrift = document.createElement("p")
        neueUeberschrift.textContent = neueTabelle.id;
        neueUeberschrift.className = "ueberschrift"
        neueUeberschrift.style.fontSize = "150%";
        neueTabelle.appendChild(neueUeberschrift);

        for (let zz in dickiName[neueTabelle.id]) {
            if (zz == "IstTag") continue
            // if (zz == "Sonne") continue
            let neueZeile = document.createElement("tr");
            let neueData = document.createElement("th");
            neueData.style.background = "lightgray"
            neueZeile.id = zz;
            neueData.textContent = zz;
            neueZeile.appendChild(neueData)
            neueTabelle.appendChild(neueZeile)
        }
        document.body.appendChild(neueTabelle)
    }

    let dict = dickiName[neueTabelle.id];

    for (let zeile in dict) {
        if (zeile == "IstTag") continue
        // if (zeile == "Sonne") continue
        let neueData = document.createElement("td")
        neueData.textContent = dict[zeile];
        neueData.style.fontSize = "medium"

        if (zeile == "Zeit") {
            // neueData = document.createElement("th")
            neueData.style.background = "lightgray"
            neueData.style.fontWeight = "bold"
            let zeiteintrag = new Date(parseInt(dict[zeile]))
            let wochentag = wochentage[zeiteintrag.getDay()];
            let uhrzeit = zeiteintrag.getHours() + ":00";
            zeiteintrag = wochentag + " " + uhrzeit;
            neueData.textContent = zeiteintrag;
        }

        if (zeile == "Datum") {
            neueData = document.createElement("th")
            neueData.style.background = "lightgray"
            let zeiteintrag = new Date(parseInt(dict[zeile]))
            let wochentag = wochentage[zeiteintrag.getDay()];
            let datum = zeiteintrag.getDate() + "." + (zeiteintrag.getMonth() + 1);
            zeiteintrag = wochentag + " " + datum;
            // console.log(zeiteintrag)
            neueData.textContent = zeiteintrag;
        }

        if (zeile == "Icon") {
            let bild = new Image();
            if (dict[zeile] < dwdWettericons.length) bild.src = dwdWettericons[dict[zeile]];
            bild.height = 50;
            neueData.textContent = "";
            neueData.appendChild(bild);
            // So klappt es auch, wenn es 'dict["IstTag"]' im dict gar nicht gibt
            // Sonst wird der Hintergrund immer dunkel, wenn es 'dict["IstTag"]' im dict gar nicht gibt
            if (dict["IstTag"] == false) neueData.style.background = "midnightblue"
        }

        // if (zeile == "Sonne") {
        //     let sonnenbild = new Image();
        //     sonnenbild.height = 50;
        //     switch (true) {
        //         case (neueData.textContent >= 2400): sonnenbild.src = dwdWettericons[0]; break
        //         case (neueData.textContent >= 1200): sonnenbild.src = dwdWettericons[1]; break
        //         case (neueData.textContent >= 100): sonnenbild.src = dwdWettericons[2]; break
        //         case (neueData.textContent < 100): sonnenbild.src = dwdWettericons[3]; break
        //     }
        //     // neueData.textContent = "";
        //     neueData.appendChild(sonnenbild);
        // }
        if (zeile == "Wind") {
            let windbild = new Image();
            windbild.height = 20;
            switch (true) {
                case (neueData.textContent < 2): windbild.src = windicons[0]; break
                case (neueData.textContent < 9): windbild.src = windicons[1]; break
                case (neueData.textContent < 19): windbild.src = windicons[2]; break
                case (neueData.textContent < 28): windbild.src = windicons[3]; break
                case (neueData.textContent < 37): windbild.src = windicons[4]; break
                case (neueData.textContent < 46): windbild.src = windicons[5]; break
                case (neueData.textContent < 56): windbild.src = windicons[6]; break
                case (neueData.textContent < 65): windbild.src = windicons[7]; break
                case (neueData.textContent <= 100): windbild.src = windicons[8]; break
                case (neueData.textContent > 100): windbild.src = windicons[9]; break
            }
            neueData.textContent = "";
            neueData.appendChild(windbild);
            let windrichtungsstring = "rotate(" + (dict.Windrichtung + 90) + "deg)";
            // bild.style.transform = "rotate(90deg)"
            windbild.style.transform = windrichtungsstring;
        }

        if (zeile.includes("Temp")) {
            let farbe = temperaturEinfaerben(neueData.textContent);
            neueData.style.color = farbe;
            neueData.style.fontSize = "large";
            neueData.style.fontWeight = "bold";
            neueData.textContent = Math.round(neueData.textContent)
        }


        let tabelleSelektor = "#" + neueTabelle.id
        let zeilenSelector = "#" + zeile;
        let selektor = tabelleSelektor + " " + zeilenSelector
        let aktuellZeile = document.querySelector(selektor)
        // console.log(aktuellZeile, zeile)
        aktuellZeile.appendChild(neueData)
    }

}

function temperaturEinfaerben(temperatur) {
    let farbe
    switch (true) {
        case ((temperatur < 0)): {
            farbe = "blueviolet";
            break;
        }
        case ((temperatur < 10)): {
            farbe = "blue";
            break;
        }
        case ((temperatur < 15)): {
            farbe = "green";
            break;
        }
        case ((temperatur <= 20)): {
            farbe = "orange";
            break;
        }
        case ((temperatur > 20)): {
            farbe = "red";
            break;
        }
    }
    return farbe
}