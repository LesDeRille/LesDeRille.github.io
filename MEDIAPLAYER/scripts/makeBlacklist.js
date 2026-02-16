
blacklist.onclick = () => {
    console.log(blacklistArray)

    console.log("aktuell läuft");
    let geradeLaeuft = globaleVariableFuerTitelpfadAufDieBlacklist;
    console.log(geradeLaeuft.name);
    console.log(geradeLaeuft.webkitRelativePath);
    blacklistArray.push(geradeLaeuft.webkitRelativePath);
    // console.log(blacklistArray)
    localStorage.setItem("mediaplayerBlacklist", JSON.stringify(blacklistArray));

    let kopieZurSicherheit = datenMediaplayerWiederhergestellt
    kopieZurSicherheit.blacklist = blacklistArray;

    localStorage.setItem("datenMediaplayer", JSON.stringify(kopieZurSicherheit));
}