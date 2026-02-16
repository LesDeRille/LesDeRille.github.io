function checkboxErzeugen(tag) {
      let alleBoxen = document.querySelector("#tagAuswahl")
      let neueBox = document.createElement("input");
      let neuesLabel = document.createElement("label");

      neueBox.type = "checkbox";
      neueBox.id = tag;
      neueBox.name = "tags";
      neueBox.value = tag;

      neuesLabel.htmlFor = tag;
      neuesLabel.textContent = tag;

      alleBoxen.appendChild(neueBox);
      alleBoxen.appendChild(neuesLabel);
    }


    function erzeugeDieEventlistener() {
      let alleBoxen = document.getElementsByName("tags");

      for (let box of alleBoxen) {
        box.addEventListener("click", () => {
          checkVerarbeiten(alleBoxen)
        }
        );
      }
    }

    function checkVerarbeiten(alleBoxen) {
      let aktivierteTags = [];
      for (let box of alleBoxen) {
        if (box.checked) {
          aktivierteTags.push(box.id);
        }
      }
      console.log("aktiv", aktivierteTags)
      // meinePlaylist = erzeugePlaylistAufTagbasis(aktivierteTags[0]);
      // playNextSong(defineNumberOfNextSong());
      checkboxAuswahl = aktivierteTags // Das ist nicht schön programmiert
    }