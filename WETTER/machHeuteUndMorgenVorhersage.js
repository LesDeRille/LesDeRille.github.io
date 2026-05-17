'use strict'
function machHeuteUndMorgenVorhersage(dict) {
    let alleZeilen = Object.keys(dict);
    let alleZeiten = Object.keys(dict.Sonne);
    let starttag = new Date(parseInt(alleZeiten[0])).getDate();

    let hilfsdictSpaltenweise = {};

    let jetzt = new Date().getTime();
    for (let zeit of alleZeiten) {
        // Nur  Zeiten ab der aktuellen Stunde anzeigen
        // und bei 48h Vorhersage aufhören
        if (zeit > jetzt - (1 * 3600 * 1000) && zeit < jetzt + (48 * 3600 * 1000)) {
            hilfsdictSpaltenweise["Zeit"] = zeit
            for (let zeile of alleZeilen) {

                hilfsdictSpaltenweise[zeile] = dict[zeile][zeit]
            }
            if (starttag == new Date(parseInt(zeit)).getDate()) {
                legNeueTabelleAn({ "Heute": hilfsdictSpaltenweise });
            } else {
                legNeueTabelleAn({ "Morgen": hilfsdictSpaltenweise })
            }
        }
    }
}