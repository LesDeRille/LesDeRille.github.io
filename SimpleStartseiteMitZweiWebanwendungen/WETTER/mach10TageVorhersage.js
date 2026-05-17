'use strict'
function mach10TageVorhersage(dict) {
    let jetzt = new Date();
    let uebermorgen = new Date(jetzt.getFullYear(), jetzt.getMonth(), jetzt.getDate() + 2);
    uebermorgen = uebermorgen.getTime();
    let hilfsdict = {};
    for (let tag in dict) {
        if (tag > uebermorgen) {
            hilfsdict["Datum"] = tag
            let unterdict = dict[tag];
            for (let entry in unterdict) {
                hilfsdict[entry] = unterdict[entry]
            }
            legNeueTabelleAn({ "ZehnTage": hilfsdict })
        }
    }
}