## Änderungshistorie


### wettervorhersage_2026_05_16_V01
 
#### Basis: wettervorhersage_2026_05_11_V02

#### Änderung:
* Sonne wieder auf cloud_cover zurückgestellt
* WMO Code für Bewölkung geändert:
    * dwdWettericons[2] = dwdIconsBackup[2] (war 3)
    * dwdWettericons[3] = dwdIconsBackup[3] (war 4)

#### Mängel:
* 'Regen' als Icon anzeigen
* 'function legNeueTabelleAn' ist unübersichtlich
* 'Wind' noch prüfen, Iconauswahl und Richtung anhand der Realität
* Wärmste Stunde kennzeichnen
* Caption soll beim horizontalen Scrollen auch stehen bleiben. Ich habe sie in einen p umgewandelt, das ist aber eigentlich Beschiss
* Warnung, wenn json nicht aktuell ist. Sei es weil kein Internet da ist, oder weil der Server nicht antwortet.
* 10 Tage Wetter
    * Max Temperatur mit Uhrzeit
    * Max Temperatur als erste Zeile ausgeben
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_05_11_V02
 
#### Basis: wettervorhersage_2026_05_11_V01

#### Änderung:
* Sonnenschein als Icon anzeigen

#### Mängel:
* 'Regen' als Icon anzeigen
* 'function legNeueTabelleAn' ist unübersichtlich
* 'Wind' noch prüfen, Iconauswahl und Richtung anhand der Realität
* Wärmste Stunde kennzeichnen
* Caption soll beim horizontalen Scrollen auch stehen bleiben. Ich habe sie in einen p umgewandelt, das ist aber eigentlich Beschiss
* Warnung, wenn json nicht aktuell ist. Sei es weil kein Internet da ist, oder weil der Server nicht antwortet.
* 10 Tage Wetter
    * Max Temperatur mit Uhrzeit
    * Max Temperatur als erste Zeile ausgeben
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_05_11_V01
 
#### Basis: wettervorhersage_2026_04_21_V01

#### Änderung:
* 'Sonne' von 'cloud_cover' auf 'sunshine_duration' umgestellt. Angezeigt wird die Sonnenscheindauer in Sekunden

#### Mängel:
* Sonnenschein als Icon anzeigen
* 'function legNeueTabelleAn' ist unübersichtlich
* 'Sonne' in der Stundenausgabe nutzlos. Da steht jetzt der Bedecktheitsgrad drauf. Zur Kontrolle noch okay
* 'Wind' noch prüfen, Iconauswahl und Richtung anhand der Realität
* Wärmste Stunde kennzeichnen
* Caption soll beim horizontalen Scrollen auch stehen bleiben. Ich habe sie in einen p umgewandelt, das ist aber eigentlich Beschiss
* Warnung, wenn json nicht aktuell ist. Sei es weil kein Internet da ist, oder weil der Server nicht antwortet.
* 10 Tage Wetter
    * Max Temperatur mit Uhrzeit
    * Max Temperatur als erste Zeile ausgeben
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_04_21_V01
 
#### Basis: wettervorhersage_2026_04_17_V03

#### Änderung:
* DWD Wettermodell 'ICON' eingesetzt
* DWD macht nur 7-Tage Vorschau, also von 10 auf 7 gekürzt

#### Mängel:
* 'function legNeueTabelleAn' ist unübersichtlich
* 'Sonne' in der Stundenausgabe nutzlos. Da steht jetzt der Bedecktheitsgrad drauf. Zur Kontrolle noch okay
* 'Wind' noch prüfen, Iconauswahl und Richtung anhand der Realität
* Wärmste Stunde kennzeichnen
* Caption soll beim horizontalen Scrollen auch stehen bleiben. Ich habe sie in einen p umgewandelt, das ist aber eigentlich Beschiss
* Warnung, wenn json nicht aktuell ist. Sei es weil kein Internet da ist, oder weil der Server nicht antwortet.
* 10 Tage Wetter
    * Max Temperatur mit Uhrzeit
    * Max Temperatur als erste Zeile ausgeben
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_04_17_V03
 
#### Basis: wettervorhersage_2026_04_17_V02

#### Änderung:
* Windicons feiner aufgedroeselt
* WindIcons passend zu den offiziellen Wetterkartensymbolen dargestellt

#### Mängel:
* 'function legNeueTabelleAn' ist unübersichtlich
* 'Sonne' in der Stundenausgabe nutzlos. Da steht jetzt der Bedecktheitsgrad drauf. Zur Kontrolle noch okay
* 'Wind' noch prüfen, Iconauswahl und Richtung anhand der Realität
* Wärmste Stunde kennzeichnen
* Caption soll beim horizontalen Scrollen auch stehen bleiben. Ich habe sie in einen p umgewandelt, das ist aber eigentlich Beschiss
* Warnung, wenn json nicht aktuell ist. Sei es weil kein Internet da ist, oder weil der Server nicht antwortet.
* 10 Tage Wetter
    * Max Temperatur mit Uhrzeit
    * Max Temperatur als erste Zeile ausgeben
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_04_17_V02
 
#### Basis: wettervorhersage_2026_04_17_V01

#### Änderung:
* Windrichtung gelesen und im WindIcon dargestellt

#### Mängel:
* 'function legNeueTabelleAn' ist unübersichtlich
* 'Sonne' in der Stundenausgabe nutzlos. Da steht jetzt der Bedecktheitsgrad drauf. Zur Kontrolle noch okay
* 'Wind' noch prüfen, Iconauswahl und Richtung anhand der Realität
* Wärmste Stunde kennzeichnen
* Caption soll beim horizontalen Scrollen auch stehen bleiben. Ich habe sie in einen p umgewandelt, das ist aber eigentlich Beschiss
* Warnung, wenn json nicht aktuell ist. Sei es weil kein Internet da ist, oder weil der Server nicht antwortet.
* 10 Tage Wetter
    * Max Temperatur mit Uhrzeit
    * Max Temperatur als erste Zeile ausgeben
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_04_17_V01
 
#### Basis: wettervorhersage_2026_04_16_V07

#### Änderung:
* Sonne wieder in die Tabellen aufgenommen, zum Abgleich mit dem Wettericon
* WindIcon wird dargestellt, aber noch nicht in Windrichtung gedreht

#### Mängel:
* 'function legNeueTabelleAn' ist unübersichtlich
* Wettericons in ein eigenes File
* 'Sonne' in der Stundenausgabe nutzlos
* 'Wind' als Icon darstellen
    * Windrichtung auslesen
    * Windpfeil korrekt drehen
* Wärmste Stunde kennzeichnen
* Caption soll beim horizontalen Scrollen auch stehen bleiben. Ich habe sie in einen p umgewandelt, das ist aber eigentlich Beschiss
* Warnung, wenn json nicht aktuell ist. Sei es weil kein Internet da ist, oder weil der Server nicht antwortet.
* 10 Tage Wetter
    * Max Temperatur mit Uhrzeit
    * Max Temperatur als erste Zeile ausgeben
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_04_16_V07
 
#### Basis: wettervorhersage_2026_04_16_V06

#### Änderung:
* Wettericons ausgelagert
* Windicons dazu

#### Mängel:
* 'function legNeueTabelleAn' ist unübersichtlich
* Wettericons in ein eigenes File
* 'Sonne' in der Stundenausgabe nutzlos
* 'Wind' als Icon darstellen
    * Windrichtung auslesen
    * Windpfeil korrekt drehen
* Wärmste Stunde kennzeichnen
* Caption soll beim horizontalen Scrollen auch stehen bleiben. Ich habe sie in einen p umgewandelt, das ist aber eigentlich Beschiss
* Warnung, wenn json nicht aktuell ist. Sei es weil kein Internet da ist, oder weil der Server nicht antwortet.
* 10 Tage Wetter
    * Max Temperatur mit Uhrzeit
    * Max Temperatur als erste Zeile ausgeben
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_04_16_V06
 
#### Basis: wettervorhersage_2026_04_16_V05

#### Änderung:
* Temperaturen in größerer Schrift und Fettdruck, Werte mathematisch gerundet
* Tabellenhintergrund heller

#### Mängel:
* 'function legNeueTabelleAn' ist unübersichtlich
* Wettericons in ein eigenes File
* 'Sonne' in der Stundenausgabe nutzlos
* 'Wind' als Icon darstellen
* Temperaturen schlecht lesbar
* Wärmste Stunde kennzeichnen
* Caption soll beim horizontalen Scrollen auch stehen bleiben. Ich habe sie in einen p umgewandelt, das ist aber eigentlich Beschiss
* Warnung, wenn json nicht aktuell ist. Sei es weil kein Internet da ist, oder weil der Server nicht antwortet.
* 10 Tage Wetter
    * Max Temperatur mit Uhrzeit
    * Max Temperatur als erste Zeile ausgeben
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_04_16_V05
 
#### Basis: wettervorhersage_2026_04_16_V04

#### Änderung:
* Aufgeräumt

#### Mängel:
* 'function legNeueTabelleAn' ist unübersichtlich
* Wettericons in ein eigenes File
* 'Sonne' in der Stundenausgabe nutzlos
* 'Wind' als Icon darstellen
* Temperaturen schlecht lesbar
* Wärmste Stunde kennzeichnen
* Caption soll beim horizontalen Scrollen auch stehen bleiben. Ich habe sie in einen p umgewandelt, das ist aber eigentlich Beschiss
* Warnung, wenn json nicht aktuell ist. Sei es weil kein Internet da ist, oder weil der Server nicht antwortet.
* 10 Tage Wetter
    * Max Temperatur mit Uhrzeit
    * Max Temperatur als erste Zeile ausgeben
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_04_16_V04
 
#### Basis: wettervorhersage_2026_04_16_V03

#### Änderung:
* 10-Tage Ausgabe fertig

#### Mängel:
* 'Sonne' in der Stundenausgabe nutzlos
* 'Wind' als Icon darstellen
* Temperaturen schlecht lesbar
* Wärmste Stunde kennzeichnen
* Ausgabe der Vorhersage erst bei der aktuellen Uhrzeit starten
* 10Tage Vorschau fehlt noch
* Caption soll beim horizontalen Scrollen auch stehen bleiben. Ich habe sie in einen p umgewandelt, das ist aber eigentlich Beschiss
* Warnung, wenn json nicht aktuell ist. Sei es weil kein Internet da ist, oder weil der Server nicht antwortet. Ich könnte 'datum' und 'jetzt' vergleichen, wie weit sie auseinanderliegen. Nee, das paßt nicht, 'datum' ist aktueller Tag 0:00, das paßt nie zu 'jetzt'
* 10 Tage Wetter
    * Die ersten beiden Tage können weg, sind ja in der Stundenvorhersage
    * Optik verbessern
    * Wind als +-Darstellung, wie bei stündlicher Vorschau
    * Sonne raus, dafür Regen rein
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Wetter der nächsten Stunden
    * Wind fehlt noch. Wird in den Daten des DWD gar nicht abgelegt. Seltsam. Ich nutze eben die Winddaten der Tagesvorhersagen
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_04_16_V03
 
#### Basis: wettervorhersage_2026_04_16_V02

#### Änderung:
* Begonnen, die 10-Tagesausgabe auf OpenMeteo umzustellen

#### Mängel:
* Temperaturen schlecht lesbar
* Wärmste Stunde kennzeichnen
* Ausgabe der Vorhersage erst bei der aktuellen Uhrzeit starten
* 10Tage Vorschau fehlt noch
* Caption soll beim horizontalen Scrollen auch stehen bleiben. Ich habe sie in einen p umgewandelt, das ist aber eigentlich Beschiss
* Warnung, wenn json nicht aktuell ist. Sei es weil kein Internet da ist, oder weil der Server nicht antwortet. Ich könnte 'datum' und 'jetzt' vergleichen, wie weit sie auseinanderliegen. Nee, das paßt nicht, 'datum' ist aktueller Tag 0:00, das paßt nie zu 'jetzt'
* 10 Tage Wetter
    * Die ersten beiden Tage können weg, sind ja in der Stundenvorhersage
    * Optik verbessern
    * Wind als +-Darstellung, wie bei stündlicher Vorschau
    * Sonne raus, dafür Regen rein
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Wetter der nächsten Stunden
    * Wind fehlt noch. Wird in den Daten des DWD gar nicht abgelegt. Seltsam. Ich nutze eben die Winddaten der Tagesvorhersagen
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_04_16_V02
 
#### Basis: wettervorhersage_2026_04_16_V01

#### Änderung:
* Stundenvorhersage ab der aktuellen Stunde und max 48h in die Zukunft

#### Mängel:
* Temperaturen schlecht lesbar
* Wärmste Stunde kennzeichnen
* Ausgabe der Vorhersage erst bei der aktuellen Uhrzeit starten
* 10Tage Vorschau fehlt noch
* Caption soll beim horizontalen Scrollen auch stehen bleiben. Ich habe sie in einen p umgewandelt, das ist aber eigentlich Beschiss
* Warnung, wenn json nicht aktuell ist. Sei es weil kein Internet da ist, oder weil der Server nicht antwortet. Ich könnte 'datum' und 'jetzt' vergleichen, wie weit sie auseinanderliegen. Nee, das paßt nicht, 'datum' ist aktueller Tag 0:00, das paßt nie zu 'jetzt'
* 10 Tage Wetter
    * Die ersten beiden Tage können weg, sind ja in der Stundenvorhersage
    * Optik verbessern
    * Wind als +-Darstellung, wie bei stündlicher Vorschau
    * Sonne raus, dafür Regen rein
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Wetter der nächsten Stunden
    * Wind fehlt noch. Wird in den Daten des DWD gar nicht abgelegt. Seltsam. Ich nutze eben die Winddaten der Tagesvorhersagen
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_04_16_V01
 
#### Basis: wettervorhersage_2026_04_15_V04

#### Änderung:
* Windicons dazu, werden aber noch nicht benutzt
* Verarbeiten der Stundendaten in mehrere functions unterteilt

#### Mängel:
* Ausgabe der Vorhersage erst bei der aktuellen Uhrzeit starten
* 10Tage Vorschau fehlt noch
* Caption soll beim horizontalen Scrollen auch stehen bleiben. Ich habe sie in einen p umgewandelt, das ist aber eigentlich Beschiss
* Warnung, wenn json nicht aktuell ist. Sei es weil kein Internet da ist, oder weil der Server nicht antwortet. Ich könnte 'datum' und 'jetzt' vergleichen, wie weit sie auseinanderliegen. Nee, das paßt nicht, 'datum' ist aktueller Tag 0:00, das paßt nie zu 'jetzt'
* 10 Tage Wetter
    * Die ersten beiden Tage können weg, sind ja in der Stundenvorhersage
    * Optik verbessern
    * Wind als +-Darstellung, wie bei stündlicher Vorschau
    * Sonne raus, dafür Regen rein
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Wetter der nächsten Stunden
    * Wind fehlt noch. Wird in den Daten des DWD gar nicht abgelegt. Seltsam. Ich nutze eben die Winddaten der Tagesvorhersagen
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_04_15_V04
 
#### Basis: wettervorhersage_2026_04_15_V03

#### Änderung:
* 10-Tageswetter wird eingelesen, aber noch nicht verarbeitet

#### Mängel:
* 10Tage Vorschau fehlt noch
* Caption soll beim horizontalen Scrollen auch stehen bleiben. Ich habe sie in einen p umgewandelt, das ist aber eigentlich Beschiss
* Warnung, wenn json nicht aktuell ist. Sei es weil kein Internet da ist, oder weil der Server nicht antwortet. Ich könnte 'datum' und 'jetzt' vergleichen, wie weit sie auseinanderliegen. Nee, das paßt nicht, 'datum' ist aktueller Tag 0:00, das paßt nie zu 'jetzt'
* 10 Tage Wetter
    * Die ersten beiden Tage können weg, sind ja in der Stundenvorhersage
    * Optik verbessern
    * Wind als +-Darstellung, wie bei stündlicher Vorschau
    * Sonne raus, dafür Regen rein
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Wetter der nächsten Stunden
    * Wind fehlt noch. Wird in den Daten des DWD gar nicht abgelegt. Seltsam. Ich nutze eben die Winddaten der Tagesvorhersagen
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_04_15_V03
 
#### Basis: wettervorhersage_2026_04_15_V02

#### Änderung:
* grafische Darstellung der stundentabelle erzeugt

#### Mängel:
* 10Tage Vorschau fehlt noch
* Caption soll beim horizontalen Scrollen auch stehen bleiben. Ich habe sie in einen p umgewandelt, das ist aber eigentlich Beschiss
* Warnung, wenn json nicht aktuell ist. Sei es weil kein Internet da ist, oder weil der Server nicht antwortet. Ich könnte 'datum' und 'jetzt' vergleichen, wie weit sie auseinanderliegen. Nee, das paßt nicht, 'datum' ist aktueller Tag 0:00, das paßt nie zu 'jetzt'
* 10 Tage Wetter
    * Die ersten beiden Tage können weg, sind ja in der Stundenvorhersage
    * Optik verbessern
    * Wind als +-Darstellung, wie bei stündlicher Vorschau
    * Sonne raus, dafür Regen rein
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Wetter der nächsten Stunden
    * Wind fehlt noch. Wird in den Daten des DWD gar nicht abgelegt. Seltsam. Ich nutze eben die Winddaten der Tagesvorhersagen
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_04_15_V02
 
#### Basis: wettervorhersage_2026_04_15_V01

#### Änderung:
* Die Stundentabelle mit openMeteo Daten wird erzeugt. Jetzt kommt die grafische Darstellung der stundentabelle

#### Mängel:
* Caption soll beim horizontalen Scrollen auch stehen bleiben. Ich habe sie in einen p umgewandelt, das ist aber eigentlich Beschiss
* Warnung, wenn json nicht aktuell ist. Sei es weil kein Internet da ist, oder weil der Server nicht antwortet. Ich könnte 'datum' und 'jetzt' vergleichen, wie weit sie auseinanderliegen. Nee, das paßt nicht, 'datum' ist aktueller Tag 0:00, das paßt nie zu 'jetzt'
* 10 Tage Wetter
    * Die ersten beiden Tage können weg, sind ja in der Stundenvorhersage
    * Optik verbessern
    * Wind als +-Darstellung, wie bei stündlicher Vorschau
    * Sonne raus, dafür Regen rein
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Wetter der nächsten Stunden
    * Wind fehlt noch. Wird in den Daten des DWD gar nicht abgelegt. Seltsam. Ich nutze eben die Winddaten der Tagesvorhersagen
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_04_15_V01
 
#### Basis: wettervorhersage_2026_04_08_V03

#### Änderung:
* Wetter kommt jetzt von Open-Meteo. Der bisherige dwd vom Bronnhaupter geht nicht mehr und war zudem laut dwd nicht autorisiert
* WetterJson steht zur Verfügung. Jetzt kann ich die Wetterdicts von bisher aus diesen Daten erzeugen

#### Mängel:
* Caption soll beim horizontalen Scrollen auch stehen bleiben. Ich habe sie in einen p umgewandelt, das ist aber eigentlich Beschiss
* Warnung, wenn json nicht aktuell ist. Sei es weil kein Internet da ist, oder weil der Server nicht antwortet. Ich könnte 'datum' und 'jetzt' vergleichen, wie weit sie auseinanderliegen. Nee, das paßt nicht, 'datum' ist aktueller Tag 0:00, das paßt nie zu 'jetzt'
* 10 Tage Wetter
    * Die ersten beiden Tage können weg, sind ja in der Stundenvorhersage
    * Optik verbessern
    * Wind als +-Darstellung, wie bei stündlicher Vorschau
    * Sonne raus, dafür Regen rein
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetterberichtDownload' 
* Wetter der nächsten Stunden
    * Wind fehlt noch. Wird in den Daten des DWD gar nicht abgelegt. Seltsam. Ich nutze eben die Winddaten der Tagesvorhersagen
* Korrekturrechnung auf Endingen fehlt    
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_04_08_V03
 
#### Basis: wettervorhersage_2026_04_08_V02

#### Änderung:
* Caption soll beim Scrollen nicht zur Seite rauswandern - ich habe sie in einen p umgewandelt, ist aber nicht perfekt
* Wettericons werden nur angezeigt, wenn es auch eines passend zur DWD Wettericonnummer gibt

#### Mängel:
* Caption soll beim horizontalen Scrollen auch stehen bleiben. Ich habe sie in einen p umgewandelt, das ist aber eigentlich Beschiss
* Warnung, wenn json nicht aktuell ist. Sei es weil kein Internet da ist, oder weil der Server nicht antwortet. Ich könnte 'datum' und 'jetzt' vergleichen, wie weit sie auseinanderliegen. Nee, das paßt nicht, 'datum' ist aktueller Tag 0:00, das paßt nie zu 'jetzt'
* 10 Tage Wetter
    * Die ersten beiden Tage können weg, sind ja in der Stundenvorhersage
    * Optik verbessern
    * Wind als +-Darstellung, wie bei stündlicher Vorschau
    * Sonne raus, dafür Regen rein
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetterberichtDownload' 
* Wetter der nächsten Stunden
    * Wind fehlt noch. Wird in den Daten des DWD gar nicht abgelegt. Seltsam. Ich nutze eben die Winddaten der Tagesvorhersagen
* Korrekturrechnung auf Endingen fehlt    
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_04_08_V02
 
#### Basis: wettervorhersage_2026_04_08_V01

#### Änderung:
* Hintegrund hellblau
* Große Überschrift

#### Mängel:
* Caption soll beim horizontalen Scrollen auch stehen bleiben, nicht nur die erste Spalte
* Warnung, wenn json nicht aktuell ist. Sei es weil kein Internet da ist, oder weil der Server nicht antwortet. Ich könnte 'datum' und 'jetzt' vergleichen, wie weit sie auseinanderliegen. Nee, das paßt nicht, 'datum' ist aktueller Tag 0:00, das paßt nie zu 'jetzt'
* 10 Tage Wetter
    * Die ersten beiden Tage können weg, sind ja in der Stundenvorhersage
    * Optik verbessern
    * Wind als +-Darstellung, wie bei stündlicher Vorschau
    * Sonne raus, dafür Regen rein
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetterberichtDownload' 
* Wetter der nächsten Stunden
    * Wind fehlt noch. Wird in den Daten des DWD gar nicht abgelegt. Seltsam. Ich nutze eben die Winddaten der Tagesvorhersagen
* Korrekturrechnung auf Endingen fehlt    
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_04_08_V01
 
#### Basis: wettervorhersage_2026_04_07_V06

#### Änderung:
* Tabellenrahmen 'collapse'
* Erste Spalte als 'th', Hintergrund lightgray
* Erste Zeile fett

#### Mängel:
* Caption soll beim horizontalen Scrollen auch stehen bleiben, nicht nur die erste Spalte
* Warnung, wenn json nicht aktuell ist. Sei es weil kein Internet da ist, oder weil der Server nicht antwortet. Ich könnte 'datum' und 'jetzt' vergleichen, wie weit sie auseinanderliegen. Nee, das paßt nicht, 'datum' ist aktueller Tag 0:00, das paßt nie zu 'jetzt'
* 10 Tage Wetter
    * Die ersten beiden Tage können weg, sind ja in der Stundenvorhersage
    * Optik verbessern
    * Wind als +-Darstellung, wie bei stündlicher Vorschau
    * Sonne raus, dafür Regen rein
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetterberichtDownload' 
* Wetter der nächsten Stunden
    * Wind fehlt noch. Wird in den Daten des DWD gar nicht abgelegt. Seltsam. Ich nutze eben die Winddaten der Tagesvorhersagen
* Korrekturrechnung auf Endingen fehlt    
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_04_07_V06
 
#### Basis: wettervorhersage_2026_04_07_V05

#### Änderung:
* Aufräumen

#### Mängel:
* Warnung, wenn json nicht aktuell ist. Sei es weil kein Internet da ist, oder weil der Server nicht antwortet. Ich könnte 'datum' und 'jetzt' vergleichen, wie weit sie auseinanderliegen. Nee, das paßt nicht, 'datum' ist aktueller Tag 0:00, das paßt nie zu 'jetzt'
* Tabellen sollen horizontal scrollbar sein, nicht nur die ganze Seite
    * Die erste Spalte soll dabei stehen bleiben, damit man noch weiß, was man sieht
* 10 Tage Wetter
    * Die ersten beiden Tage können weg, sind ja in der Stundenvorhersage
    * Optik verbessern
    * Wind als +-Darstellung, wie bei stündlicher Vorschau
    * Sonne raus, dafür Regen rein
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetterberichtDownload' 
* Wetter der nächsten Stunden
    * Wind fehlt noch. Wird in den Daten des DWD gar nicht abgelegt. Seltsam. Ich nutze eben die Winddaten der Tagesvorhersagen
* Korrekturrechnung auf Endingen fehlt    
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_04_07_V05
 
#### Basis: wettervorhersage_2026_04_07_V04

#### Änderung:
* Tabelle mit Überschriften

#### Mängel:
* Warnung, wenn json nicht aktuell ist. Sei es weil kein Internet da ist, oder weil der Server nicht antwortet. Ich könnte 'datum' und 'jetzt' vergleichen, wie weit sie auseinanderliegen. Nee, das paßt nicht, 'datum' ist aktueller Tag 0:00, das paßt nie zu 'jetzt'
* Tabellen sollen horizontal scrollbar sein, nicht nur die ganze Seite
    * Die erste Spalte soll dabei stehen bleiben, damit man noch weiß, was man sieht
* Der srsten Spalte fehlt der Tabellenrahmen
* Die Tabellen brauchen noch Überschriften
* 10 Tage Wetter
    * Die ersten beiden Tage können weg, sind ja in der Stundenvorhersage
    * Optik verbessern
    * Wind als +-Darstellung, wie bei stündlicher Vorschau
    * Sonne raus, dafür Regen rein
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetterberichtDownload' 
* Wetter der nächsten Stunden
    * Wind fehlt noch. Wird in den Daten des DWD gar nicht abgelegt. Seltsam. Ich nutze eben die Winddaten der Tagesvorhersagen
* Korrekturrechnung auf Endingen fehlt
* 10-Tage Vorschau: 
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_04_07_V04
 
#### Basis: wettervorhersage_2026_04_07_V03

#### Änderung:
* Icon in der Nacht mit dunklem Hintergrund

#### Mängel:
* Warnung, wenn json nicht aktuell ist. Sei es weil kein Internet da ist, oder weil der Server nicht antwortet. Ich könnte 'datum' und 'jetzt' vergleichen, wie weit sie auseinanderliegen. Nee, das paßt nicht, 'datum' ist aktueller Tag 0:00, das paßt nie zu 'jetzt'
* Tabellen sollen horizontal scrollbar sein, nicht nur die ganze Seite
    * Die erste Spalte soll dabei stehen bleiben, damit man noch weiß, was man sieht
* Der srsten Spalte fehlt der Tabellenrahmen
* Die Tabellen brauchen noch Überschriften
* 10 Tage Wetter
    * Die ersten beiden Tage können weg, sind ja in der Stundenvorhersage
    * Optik verbessern
    * Wind als +-Darstellung, wie bei stündlicher Vorschau
    * Sonne raus, dafür Regen rein
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetterberichtDownload' 
* Wetter der nächsten Stunden
    * Wind fehlt noch. Wird in den Daten des DWD gar nicht abgelegt. Seltsam. Ich nutze eben die Winddaten der Tagesvorhersagen
* Korrekturrechnung auf Endingen fehlt
* 10-Tage Vorschau: 
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_04_07_V03
 
#### Basis: wettervorhersage_2026_04_07_V02

#### Änderung:
* 10-Tage Ausgabe zweigeteilt

#### Mängel:
* Stundentabelle zweiteilen: 'heute' und 'morgen' in zwei Zeilen darstellen
    * 'stundenausgabe' mit 'date' abspeichern, nicht mit einem selbstgemachten Zeitstring. Den erst bei der Ausgabe erstellen
    * wetterdict ebenso
    * Zeitschritt auslesen und als Inkrement für 'ausgabe' nutzen. 'ausgabe' sinnvoller benennen
* Warnung, wenn json nicht aktuell ist. Sei es weil kein Internet da ist, oder weil der Server nicht antwortet. Ich könnte 'datum' und 'jetzt' vergleichen, wie weit sie auseinanderliegen. Nee, das paßt nicht, 'datum' ist aktueller Tag 0:00, das paßt nie zu 'jetzt'
* Tabellen sollen horizontal scrollbar sein, nicht nur die ganze Seite
    * Die erste Spalte soll dabei stehen bleiben, damit man noch weiß, was man sieht
* Der srsten Spalte fehlt der Tabellenrahmen
* Die Tabellen brauchen noch Überschriften
* 10 Tage Wetter
    * Wird von der Stndentabelle zerstört
    * Optik verbessern
        * Max-Temperatur einfärben
    * Wind als +-Darstellung, wie bei stündlicher Vorschau
    * Sonne raus, dafür Regen rein
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetterberichtDownload' 
* Wetter der nächsten Stunden
    * Wind fehlt noch. Wird in den Daten des DWD gar nicht abgelegt. Seltsam. Ich nutze eben die Winddaten der Tagesvorhersagen
    * Datum/Uhrzeit fehlen
* Korrekturrechnung auf Endingen fehlt
* 10-Tage Vorschau: 
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Tage ohne Regen, > 10° und mit wenig Wind markieren
* Um 23:00 steht schon der Folgetag drin. Also z.b. Mon statt Sun

####################################################################

### wettervorhersage_2026_04_07_V02
 
#### Basis: wettervorhersage_2026_04_07_V01

#### Änderung:
* 10-Tage Ausgabe auch auf 'date' umgestellt

#### Mängel:
* Stundentabelle zweiteilen: 'heute' und 'morgen' in zwei Zeilen darstellen
    * 'stundenausgabe' mit 'date' abspeichern, nicht mit einem selbstgemachten Zeitstring. Den erst bei der Ausgabe erstellen
    * wetterdict ebenso
    * Zeitschritt auslesen und als Inkrement für 'ausgabe' nutzen. 'ausgabe' sinnvoller benennen
* Warnung, wenn json nicht aktuell ist. Sei es weil kein Internet da ist, oder weil der Server nicht antwortet. Ich könnte 'datum' und 'jetzt' vergleichen, wie weit sie auseinanderliegen. Nee, das paßt nicht, 'datum' ist aktueller Tag 0:00, das paßt nie zu 'jetzt'
* Tabellen sollen horizontal scrollbar sein, nicht nur die ganze Seite
    * Die erste Spalte soll dabei stehen bleiben, damit man noch weiß, was man sieht
* Der srsten Spalte fehlt der Tabellenrahmen
* Die Tabellen brauchen noch Überschriften
* 10 Tage Wetter
    * Wird von der Stndentabelle zerstört
    * Optik verbessern
        * Max-Temperatur einfärben
    * Wind als +-Darstellung, wie bei stündlicher Vorschau
    * Sonne raus, dafür Regen rein
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetterberichtDownload' 
* Wetter der nächsten Stunden
    * Wind fehlt noch. Wird in den Daten des DWD gar nicht abgelegt. Seltsam. Ich nutze eben die Winddaten der Tagesvorhersagen
    * Datum/Uhrzeit fehlen
* Korrekturrechnung auf Endingen fehlt
* 10-Tage Vorschau: 
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Tage ohne Regen, > 10° und mit wenig Wind markieren
* Um 23:00 steht schon der Folgetag drin. Also z.b. Mon statt Sun

####################################################################

### wettervorhersage_2026_04_07_V01
 
#### Basis: wettervorhersage_2026_04_06_V02

#### Änderung:
* wetterdict und stundenausgabe mit 'date.getTime()' abgespeichert
* stundentabelle stimmt schon mal

#### Mängel:
* Stundentabelle zweiteilen: 'heute' und 'morgen' in zwei Zeilen darstellen
    * 'stundenausgabe' mit 'date' abspeichern, nicht mit einem selbstgemachten Zeitstring. Den erst bei der Ausgabe erstellen
    * wetterdict ebenso
    * Zeitschritt auslesen und als Inkrement für 'ausgabe' nutzen. 'ausgabe' sinnvoller benennen
* Warnung, wenn json nicht aktuell ist. Sei es weil kein Internet da ist, oder weil der Server nicht antwortet. Ich könnte 'datum' und 'jetzt' vergleichen, wie weit sie auseinanderliegen. Nee, das paßt nicht, 'datum' ist aktueller Tag 0:00, das paßt nie zu 'jetzt'
* Tabellen sollen horizontal scrollbar sein, nicht nur die ganze Seite
    * Die erste Spalte soll dabei stehen bleiben, damit man noch weiß, was man sieht
* Der srsten Spalte fehlt der Tabellenrahmen
* Die Tabellen brauchen noch Überschriften
* 10 Tage Wetter
    * Wird von der Stndentabelle zerstört
    * Optik verbessern
        * Max-Temperatur einfärben
    * Wind als +-Darstellung, wie bei stündlicher Vorschau
    * Sonne raus, dafür Regen rein
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetterberichtDownload' 
* Wetter der nächsten Stunden
    * Wind fehlt noch. Wird in den Daten des DWD gar nicht abgelegt. Seltsam. Ich nutze eben die Winddaten der Tagesvorhersagen
    * Datum/Uhrzeit fehlen
* Korrekturrechnung auf Endingen fehlt
* 10-Tage Vorschau: 
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Tage ohne Regen, > 10° und mit wenig Wind markieren
* Um 23:00 steht schon der Folgetag drin. Also z.b. Mon statt Sun

####################################################################

### wettervorhersage_2026_04_06_V02
 
#### Basis: wettervorhersage_2026_04_06_V01

#### Änderung:
* Erst muß ich mal die verschiedenen Datumseinträge verstehen - da bin ich dran
    * wenn ich die Daten als Zeitstempel in ms seit 1.1.1970 abspeichere, ist die Reihenfolge in den console.table noch richtig und das Datum komplett, so daß ich später z.B. noch Stunde und Wochentag oder auch nur DD-MM-YYYY rausziehen kann
* Stundentabelle geteilt

#### Mängel:
* Stundentabelle zweiteilen: 'heute' und 'morgen' in zwei Zeilen darstellen
    * 'stundenausgabe' mit 'date' abspeichern, nicht mit einem selbstgemachten Zeitstring. Den erst bei der Ausgabe erstellen
    * wetterdict ebenso
    * Zeitschritt auslesen und als Inkrement für 'ausgabe' nutzen. 'ausgabe' sinnvoller benennen
* Warnung, wenn json nicht aktuell ist. Sei es weil kein Internet da ist, oder weil der Server nicht antwortet. Ich könnte 'datum' und 'jetzt' vergleichen, wie weit sie auseinanderliegen. Nee, das paßt nicht, 'datum' ist aktueller Tag 0:00, das paßt nie zu 'jetzt'
* Tabellen sollen horizontal scrollbar sein, nicht nur die ganze Seite
    * Die erste Spalte soll dabei stehen bleiben, damit man noch weiß, was man sieht
* Der srsten Spalte fehlt der Tabellenrahmen
* Die Tabellen brauchen noch Überschriften
* 10 Tage Wetter
    * Wird von der Stndentabelle zerstört
    * Optik verbessern
        * Max-Temperatur einfärben
    * Wind als +-Darstellung, wie bei stündlicher Vorschau
    * Sonne raus, dafür Regen rein
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetterberichtDownload' 
* Wetter der nächsten Stunden
    * Wind fehlt noch. Wird in den Daten des DWD gar nicht abgelegt. Seltsam. Ich nutze eben die Winddaten der Tagesvorhersagen
    * Datum/Uhrzeit fehlen
* Korrekturrechnung auf Endingen fehlt
* 10-Tage Vorschau: 
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Tage ohne Regen, > 10° und mit wenig Wind markieren
* Um 23:00 steht schon der Folgetag drin. Also z.b. Mon statt Sun

####################################################################

### wettervorhersage_2026_04_06_V01
 
#### Basis: wettervorhersage_2026_04_05_V04

#### Änderung:
* querySelector in 'function legNeueTabelleAn(dickiName)' schoener. (Achtung: Selektoren dürfen nicht mit einer unmaskierten Zahl beginnen)

#### Mängel:
* Tabellen sollen horizontal scrollbar sein, nicht nur die ganze Seite
    * Die erste Spalte soll dabei stehen bleiben, damit man noch weiß, was man sieht
* Der srsten Spalte fehlt der Tabellenrahmen
* Die Tabellen brauchen noch Überschriften
* 10 Tage Wetter
    * Wird von der Stndentabelle zerstört
    * Optik verbessern
        * Max-Temperatur einfärben
    * Wind als +-Darstellung, wie bei stündlicher Vorschau
    * Sonne raus, dafür Regen rein
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetterberichtDownload' 
* Wetter der nächsten Stunden
    * Wind fehlt noch. Wird in den Daten des DWD gar nicht abgelegt. Seltsam. Ich nutze eben die Winddaten der Tagesvorhersagen
    * Datum/Uhrzeit fehlen
* Korrekturrechnung auf Endingen fehlt
* 10-Tage Vorschau: 
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Tage ohne Regen, > 10° und mit wenig Wind markieren
* Um 23:00 steht schon der Folgetag drin. Also z.b. Mon statt Sun

####################################################################

### wettervorhersage_2026_04_05_V04
 
#### Basis: wettervorhersage_2026_04_05_V03

#### Änderung:
* erste Spalte mit Rahmen. Lag an der 'function legNeueTabelleAn(dickiName)': ich hatte das "td" vergessen

#### Mängel:
* Tabellen sollen horizontal scrollbar sein, nicht nur die ganze Seite
    * Die erste Spalte soll dabei stehen bleiben, damit man noch weiß, was man sieht
* Der srsten Spalte fehlt der Tabellenrahmen
* Die Tabellen brauchen noch Überschriften
* 10 Tage Wetter
    * Wird von der Stndentabelle zerstört
    * Optik verbessern
        * Max-Temperatur einfärben
    * Wind als +-Darstellung, wie bei stündlicher Vorschau
    * Sonne raus, dafür Regen rein
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetterberichtDownload' 
* Wetter der nächsten Stunden
    * Wind fehlt noch. Wird in den Daten des DWD gar nicht abgelegt. Seltsam. Ich nutze eben die Winddaten der Tagesvorhersagen
    * Datum/Uhrzeit fehlen
* Korrekturrechnung auf Endingen fehlt
* 10-Tage Vorschau: 
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Tage ohne Regen, > 10° und mit wenig Wind markieren
* Um 23:00 steht schon der Folgetag drin. Also z.b. Mon statt Sun

####################################################################

### wettervorhersage_2026_04_05_V03
 
#### Basis: wettervorhersage_2026_04_05_V02

#### Änderung:
* Temperatur eingefärbt

#### Mängel:
* Tabellen sollen horizontal scrollbar sein, nicht nur die ganze Seite
    * Die erste Spalte soll dabei stehen bleiben, damit man noch weiß, was man sieht
* Der srsten Spalte fehlt der Tabellenrahmen
* Die Tabellen brauchen noch Überschriften
* 10 Tage Wetter
    * Wird von der Stndentabelle zerstört
    * Optik verbessern
        * Max-Temperatur einfärben
    * Wind als +-Darstellung, wie bei stündlicher Vorschau
    * Sonne raus, dafür Regen rein
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetterberichtDownload' 
* Wetter der nächsten Stunden
    * Wind fehlt noch. Wird in den Daten des DWD gar nicht abgelegt. Seltsam. Ich nutze eben die Winddaten der Tagesvorhersagen
    * Datum/Uhrzeit fehlen
* Korrekturrechnung auf Endingen fehlt
* 10-Tage Vorschau: 
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Tage ohne Regen, > 10° und mit wenig Wind markieren
* Um 23:00 steht schon der Folgetag drin. Also z.b. Mon statt Sun

####################################################################

### wettervorhersage_2026_04_05_V02
 
#### Basis: wettervorhersage_2026_04_05_V01

#### Änderung:
* Icon-Zeile korrigiert. Programm findet jetzt heraus, welche Tabelle gerade aktuell ist und trägt die Icons gezielt dort ein

#### Mängel:
* 10 Tage Wetter
    * Wird von der Stndentabelle zerstört
    * Optik verbessern
        * Max-Temperatur einfärben
    * Wind als +-Darstellung, wie bei stündlicher Vorschau
    * Sonne raus, dafür Regen rein
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetterberichtDownload' 
* Wetter der nächsten Stunden
    * Wind fehlt noch. Wird in den Daten des DWD gar nicht abgelegt. Seltsam. Ich nutze eben die Winddaten der Tagesvorhersagen
    * Datum/Uhrzeit fehlen
* Korrekturrechnung auf Endingen fehlt
* 10-Tage Vorschau: 
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Tage ohne Regen, > 10° und mit wenig Wind markieren
* Um 23:00 steht schon der Folgetag drin. Also z.b. Mon statt Sun

####################################################################

### wettervorhersage_2026_04_05_V01
 
#### Basis: wettervorhersage_2026_04_04_V03

#### Änderung:
* 'machHeuteUndMorgenVorhersage(dict)' komplett neu aufgebaut. War ein verhau, jetzt ist es kurz

#### Mängel:
* 10 Tage Wetter
    * Wird von der Stndentabelle zerstört
    * Optik verbessern
        * Max-Temperatur einfärben
    * Wind als +-Darstellung, wie bei stündlicher Vorschau
    * Sonne raus, dafür Regen rein
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetterberichtDownload' 
* Wetter der nächsten Stunden
    * Wind fehlt noch. Wird in den Daten des DWD gar nicht abgelegt. Seltsam. Ich nutze eben die Winddaten der Tagesvorhersagen
    * Datum/Uhrzeit fehlen
* Korrekturrechnung auf Endingen fehlt
* 10-Tage Vorschau: 
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Tage ohne Regen, > 10° und mit wenig Wind markieren
* Um 23:00 steht schon der Folgetag drin. Also z.b. Mon statt Sun

####################################################################

### wettervorhersage_2026_04_04_V03
 
#### Basis: wettervorhersage_2026_04_04_V02

#### Änderung:
* Stundenwetter mit der MachWettertabelleV3 aufgebaut, wie 10-Tagewetter
    * Es gibt eine Ausgabe als Tabelle. Ist aber noch nicht okay, weil dadurch die 10Tages Tabelle zerrupft wird

#### Mängel:
* 10 Tage Wetter
    * Wird von der Stndentabelle zerstört
    * Optik verbessern
        * Max-Temperatur einfärben
    * Wind als +-Darstellung, wie bei stündlicher Vorschau
    * Sonne raus, dafür Regen rein
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetterberichtDownload' 
* Wetter der nächsten Stunden
    * Wind fehlt noch. Wird in den Daten des DWD gar nicht abgelegt. Seltsam. Ich nutze eben die Winddaten der Tagesvorhersagen
    * Datum/Uhrzeit fehlen
* Korrekturrechnung auf Endingen fehlt
* 10-Tage Vorschau: 
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Tage ohne Regen, > 10° und mit wenig Wind markieren
* Um 23:00 steht schon der Folgetag drin. Also z.b. Mon statt Sun

####################################################################

### wettervorhersage_2026_04_04_V02
 
#### Basis: wettervorhersage_2026_04_04_V01

#### Änderung:
* Noch eine Version: es wird direkt das wetterdict verarbeitet

#### Mängel:
* 10 Tage Wetter
    * Datum fehlt
    * Optik verbessern
        * Max-Temperatur einfärben
    * Wind als +-Darstellung, wie bei stündlicher Vorschau
    * Sonne raus, dafür Regen rein
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetterberichtDownload' 
* Wetter der nächsten Stunden fehlt
    * Wind fehlt noch. Wird in den Daten des DWD gar nicht abgelegt. Seltsam. Ich nutze eben die Winddaten der Tagesvorhersagen
* Korrekturrechnung auf Endingen fehlt
* 10-Tage Vorschau: 
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Tage ohne Regen, > 10° und mit wenig Wind markieren
* Um 23:00 steht schon der Folgetag drin. Also z.b. Mon statt Sun

####################################################################

### wettervorhersage_2026_04_04_V01
 
#### Basis: wettervorhersage_2026_04_02_V03

#### Änderung:
* Wettertabelle besser gelöst. Es werden jetzt ein dict als Argument übergeben, damit ich nicht auf eine feste Anzahl von Argumenten festgelegt bin. Begonnen mit der 10 Tage Vorschau. 
* Es wird mal eine Tabelle angezeigt, ist aber immer noch kompliziert

#### Mängel:
* 10 Tage Wetter
    * Datum fehlt
    * Optik verbessern
        * Max-Temperatur einfärben
    * Wind als +-Darstellung, wie bei stündlicher Vorschau
    * Sonne raus, dafür Regen rein
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetterberichtDownload' 
* Wetter der nächsten Stunden fehlt
    * Wind fehlt noch. Wird in den Daten des DWD gar nicht abgelegt. Seltsam. Ich nutze eben die Winddaten der Tagesvorhersagen
* Korrekturrechnung auf Endingen fehlt
* 10-Tage Vorschau: 
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Tage ohne Regen, > 10° und mit wenig Wind markieren
* Um 23:00 steht schon der Folgetag drin. Also z.b. Mon statt Sun

####################################################################

### wettervorhersage_2026_04_02_V03
 
#### Basis: wettervorhersage_2026_04_02_V02

#### Änderung:
* 10 Tage Vorschau weiter
    * Die ersten beiden Tage der 10-Tagevorschau werden übergangen, die sind ja in der stündlichen Vorschau

#### Mängel:
* 10 Tage Wetter
    * Optik verbessern
        * Max-Temperatur einfärben
    * Wind als +-Darstellung, wie bei stündlicher Vorschau
    * Sonne raus, dafür Regen rein
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetterberichtDownload' 
* Wetter der nächsten Stunden fehlt
    * Wind fehlt noch. Wird in den Daten des DWD gar nicht abgelegt. Seltsam. Ich nutze eben die Winddaten der Tagesvorhersagen
* Korrekturrechnung auf Endingen fehlt
* 10-Tage Vorschau: 
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Tage ohne Regen, > 10° und mit wenig Wind markieren
* Um 23:00 steht schon der Folgetag drin. Also z.b. Mon statt Sun

####################################################################

### wettervorhersage_2026_04_02_V02
 
#### Basis: wettervorhersage_2026_04_02_V01

#### Änderung:
* 10 Tage Vorschau weiter
    * 10 Tage Wetter wird nach der stündlichen Vorschau angezeigt
    * Dafür mußtte ich functions der bisherigen stündlichen Vorschau aus der Oberfunction 'machWettertabelle' herauslösen. Das Programm ist damit sogar übersichtlicher geworden

#### Mängel:
* 10 Tage Wetter
    * Die ersten zwei Tage können weg, die sind ja in der stündlichen Vorschau
    * Optik verbessern
        * Max-Temperatur einfärben
    * Wind als +-Darstellung, wie bei stündlicher Vorschau
    * Sonne raus, dafür Regen rein
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetterberichtDownload' 
* Wetter der nächsten Stunden fehlt
    * Wind fehlt noch. Wird in den Daten des DWD gar nicht abgelegt. Seltsam. Ich nutze eben die Winddaten der Tagesvorhersagen
* Korrekturrechnung auf Endingen fehlt
* 10-Tage Vorschau: 
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Tage ohne Regen, > 10° und mit wenig Wind markieren
* Um 23:00 steht schon der Folgetag drin. Also z.b. Mon statt Sun

####################################################################

### wettervorhersage_2026_04_02_V01
 
#### Basis: wettervorhersage_2026_04_01_V01

#### Änderung:
* 10 Tage Vorschau weiter
    * alle Werte extrahiert. Ausgabe in Tabelle fehlt noch

#### Mängel:
* 
* 10-Tage Vorschau außerhalb der Konsole fehlt
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetterberichtDownload' 
* Wetter der nächsten Stunden fehlt
    * Wind fehlt noch. Wird in den Daten des DWD gar nicht abgelegt. Seltsam. Ich nutze eben die Winddaten der Tagesvorhersagen
* Korrekturrechnung auf Endingen fehlt
* 10-Tage Vorschau: 
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Tage ohne Regen, > 10° und mit wenig Wind markieren
* Um 23:00 steht schon der Folgetag drin. Also z.b. Mon statt Sun

####################################################################

### wettervorhersage_2026_04_01_V01
 
#### Basis: wettervorhersage_2026_03_29_V03

#### Änderung:
* Fehler in der Datumsausgabe bei einstelligen Monatstagen korrigiert

#### Mängel:
* 
* 10-Tage Vorschau außerhalb der Konsole fehlt
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetterberichtDownload' 
* Wetter der nächsten Stunden fehlt
    * Wind fehlt noch. Wird in den Daten des DWD gar nicht abgelegt. Seltsam. Ich nutze eben die Winddaten der Tagesvorhersagen
* Korrekturrechnung auf Endingen fehlt
* 10-Tage Vorschau: 
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Tage ohne Regen, > 10° und mit wenig Wind markieren
* Um 23:00 steht schon der Folgetag drin. Also z.b. Mon statt Sun

####################################################################

### wettervorhersage_2026_03_29_V03
 
#### Basis: wettervorhersage_2026_03_29_V02

#### Änderung:
* Background für nachts eingebaut

#### Mängel:
* 
* 10-Tage Vorschau außerhalb der Konsole fehlt
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetterberichtDownload' 
* Wetter der nächsten Stunden fehlt
    * Wind fehlt noch. Wird in den Daten des DWD gar nicht abgelegt. Seltsam. Ich nutze eben die Winddaten der Tagesvorhersagen
* Korrekturrechnung auf Endingen fehlt
* 10-Tage Vorschau: 
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Tage ohne Regen, > 10° und mit wenig Wind markieren
* Um 23:00 steht schon der Folgetag drin. Also z.b. Mon statt Sun

####################################################################

### wettervorhersage_2026_03_29_V02
 
#### Basis: wettervorhersage_2026_03_29_V01

#### Änderung:
* Wettericons vom DWD übernommen. Iconauswahl aus Bronnhaupterdaten übernommen. 
* 'icon' statt 'icon1h' genommen, die passen besser

#### Mängel:
* 
* 10-Tage Vorschau außerhalb der Konsole fehlt
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetterberichtDownload' 
* Wetter der nächsten Stunden fehlt
    * Wind fehlt noch. Wird in den Daten des DWD gar nicht abgelegt. Seltsam. Ich nutze eben die Winddaten der Tagesvorhersagen
* Korrekturrechnung auf Endingen fehlt
* 10-Tage Vorschau: 
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Tage ohne Regen, > 10° und mit wenig Wind markieren
* Um 23:00 steht schon der Folgetag drin. Also z.b. Mon statt Sun

####################################################################

### wettervorhersage_2026_03_29_V01
 
#### Basis: wettervorhersage_2026_03_28_V02

#### Änderung:
* Wettericons vom DWD übernommen. Iconauswahl aus Bronnhaupterdaten übernommen
* Ein Anfang ist gemacht. Icons werden in der Tabelle noch nicht dargestellt

#### Mängel:
* 
* 10-Tage Vorschau außerhalb der Konsole fehlt
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetterberichtDownload' 
* Wetter der nächsten Stunden fehlt
    * Wind fehlt noch. Wird in den Daten des DWD gar nicht abgelegt. Seltsam. Ich nutze eben die Winddaten der Tagesvorhersagen
* Korrekturrechnung auf Endingen fehlt
* 10-Tage Vorschau: 
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_03_28_V02
 
#### Basis: wettervorhersage_2026_03_28_V01

#### Änderung:
* Darstellung der 10 Tage Vorschau begonnen

#### Mängel:
* 
* 10-Tage Vorschau außerhalb der Konsole fehlt
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetterberichtDownload' 
* Wetter der nächsten Stunden fehlt
    * Wind fehlt noch. Wird in den Daten des DWD gar nicht abgelegt. Seltsam. Ich nutze eben die Winddaten der Tagesvorhersagen
* Korrekturrechnung auf Endingen fehlt
* 10-Tage Vorschau: 
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_03_28_V01
 
#### Basis: wettervorhersage_2026_03_27_V04

#### Änderung:
* anderes Nachtblau "midnightblue"
* RegenIcons erweitert

#### Mängel:
* 
* 10-Tage Vorschau außerhalb der Konsole fehlt
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetterberichtDownload' 
* Wetter der nächsten Stunden fehlt
    * Wind fehlt noch. Wird in den Daten des DWD gar nicht abgelegt. Seltsam. Ich nutze eben die Winddaten der Tagesvorhersagen
* Korrekturrechnung auf Endingen fehlt
* 10-Tage Vorschau: 
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_03_27_V04
 
#### Basis: wettervorhersage_2026_03_27_V03

#### Änderung:
* Tabelle Spalten mit Strichen getrennt
* gelber Mond mit dunklem Hintergrund

#### Mängel:
* 
* 10-Tage Vorschau außerhalb der Konsole fehlt
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetter' 
* Wetter der nächsten Stunden fehlt
    * Wind fehlt noch. Wird in Bronnhaupten gar nicht abgelegt. Meßstetten oder Klippeneck?
* Korrekturrechnung auf Endingen fehlt
* 10-Tage Vorschau: 
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_03_27_V03
 
#### Basis: wettervorhersage_2026_03_27_V02

#### Änderung:
* Wind mit "+"-Zeichen als Symbol

#### Mängel:
* 10-Tage Vorschau außerhalb der Konsole fehlt
* Ausgabe im Browser, nicht in der Konsole
    * Temperatur farbig, wie wetteronline
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetter' 
* Wetter der nächsten Stunden fehlt
    * Wind fehlt noch. Wird in Bronnhaupten gar nicht abgelegt. Meßstetten oder Klippeneck?
* Korrekturrechnung auf Endingen fehlt
* 10-Tage Vorschau: 
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_03_27_V02
 
#### Basis: wettervorhersage_2026_03_27_V01

#### Änderung:
* Wind dazu, mit Fehler, liest nur den ersten Tag

#### Mängel:
* 10-Tage Vorschau außerhalb der Konsole fehlt
* Ausgabe im Browser, nicht in der Konsole
    * Temperatur farbig, wie wetteronline
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetter' 
* Wetter der nächsten Stunden fehlt
    * Wind fehlt noch. Wird in Bronnhaupten gar nicht abgelegt. Meßstetten oder Klippeneck?
* Korrekturrechnung auf Endingen fehlt
* 10-Tage Vorschau: 
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_03_27_V01
 
#### Basis: wettervorhersage_2026_03_22_V02

#### Änderung:
* Regenicons dazu und dargestellt

#### Mängel:
* 10-Tage Vorschau außerhalb der Konsole fehlt
* Ausgabe im Browser, nicht in der Konsole
    * Temperatur farbig, wie wetteronline
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetter' 
* Wetter der nächsten Stunden fehlt
    * Wind fehlt noch. Wird in Bronnhaupten gar nicht abgelegt. Meßstetten oder Klippeneck?
* Korrekturrechnung auf Endingen fehlt
* 10-Tage Vorschau: 
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_03_22_V02
 
#### Basis: wettervorhersage_2026_03_22_V01

#### Änderung:
* Styling der Ausgabe
    * Icons groesser als der Text

#### Mängel:
* 10-Tage Vorschau außerhalb der Konsole fehlt
* Ausgabe im Browser, nicht in der Konsole
    * Temperatur farbig, wie wetteronline
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetter' 
* Wetter der nächsten Stunden fehlt
    * Wind fehlt noch. Wird in Bronnhaupten gar nicht abgelegt. Meßstetten oder Klippeneck?
* Korrekturrechnung auf Endingen fehlt
* 10-Tage Vorschau: 
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_03_22_V01
 
#### Basis: wettervorhersage_2026_03_20_V04

#### Änderung:
* Styling der Ausgabe
    * Darstellung vergrößert
    * Temperatur einfärben

#### Mängel:
* 10-Tage Vorschau außerhalb der Konsole fehlt
* Ausgabe im Browser, nicht in der Konsole
    * Temperatur farbig, wie wetteronline
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetter' 
* Wetter der nächsten Stunden fehlt
    * Wind fehlt noch. Wird in Bronnhaupten gar nicht abgelegt. Meßstetten oder Klippeneck?
* Korrekturrechnung auf Endingen fehlt
* 10-Tage Vorschau: 
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_03_20_V04
 
#### Basis: wettervorhersage_2026_03_20_V03

#### Änderung:
* Wochentag und Stunde wird in der stündlichen Vorhersage angezeigt

#### Mängel:
* 10-Tage Vorschau außerhalb der Konsole fehlt
* Ausgabe im Browser, nicht in der Konsole
    * Temperatur farbig, wie wetteronline
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetter' 
* Wetter der nächsten Stunden fehlt
    * Wind fehlt noch. Wird in Bronnhaupten gar nicht abgelegt. Meßstetten oder Klippeneck?
* Korrekturrechnung auf Endingen fehlt
* 10-Tage Vorschau: 
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_03_20_V03
 
#### Basis: wettervorhersage_2026_03_20_V02

#### Änderung:
* aufgeraumt

#### Mängel:
* 10-Tage Vorschau außerhalb der Konsole fehlt
* Statt 'heute' und 'morgen' das Kürzel des Wochentags rein, also z.B. 'Mi', 'Do'...

* Nachts statt der Sonne einen Mond einblenden, nicht wie jetzt eine Wolke. Dazu muß ich den Sonnenauf- und untergang auslesen. Dazu kann ich 'isDay' auslesen
* Ausgabe im Browser, nicht in der Konsole
    * Temperatur farbig, wie wetteronline
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetter' 
* Wetter der nächsten Stunden fehlt
    * Wind fehlt noch. Wird in Bronnhaupten gar nicht abgelegt. Meßstetten oder Klippeneck?
* Korrekturrechnung auf Endingen fehlt
* 10-Tage Vorschau: 
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_03_20_V02
 
#### Basis: wettervorhersage_2026_03_20_V01

#### Änderung:
* 'machDieTabellenzeilen' schoener programmiert

#### Mängel:
* 10-Tage Vorschau außerhalb der Konsole fehlt
* Statt 'heute' und 'morgen' das Kürzel des Wochentags rein, also z.B. 'Mi', 'Do'...

* Nachts statt der Sonne einen Mond einblenden, nicht wie jetzt eine Wolke. Dazu muß ich den Sonnenauf- und untergang auslesen. Dazu kann ich 'isDay' auslesen
* Ausgabe im Browser, nicht in der Konsole
    * Temperatur farbig, wie wetteronline
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetter' 
* Wetter der nächsten Stunden fehlt
    * Wind fehlt noch. Wird in Bronnhaupten gar nicht abgelegt. Meßstetten oder Klippeneck?
* Korrekturrechnung auf Endingen fehlt
* 10-Tage Vorschau: 
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_03_20_V01
 
#### Basis: wettervorhersage_2026_03_19_V03

#### Änderung:
* Uhrzeit im Format hh:mm
* 'machDieTabellenzeilen' zusammengefasst, da wiederholte sich viel

#### Mängel:
* 10-Tage Vorschau außerhalb der Konsole fehlt
* Zeitausgabe schöner
* Statt 'heute' und 'morgen' das Kürzel des Wochentags rein, also z.B. 'Mi', 'Do'...

* Nachts statt der Sonne einen Mond einblenden, nicht wie jetzt eine Wolke. Dazu muß ich den Sonnenauf- und untergang auslesen. Dazu kann ich 'isDay' auslesen
* Ausgabe im Browser, nicht in der Konsole
    * Temperatur farbig, wie wetteronline
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetter' 
* Wetter der nächsten Stunden fehlt
    * Wind fehlt noch. Wird in Bronnhaupten gar nicht abgelegt. Meßstetten oder Klippeneck?
* Korrekturrechnung auf Endingen fehlt
* 10-Tage Vorschau: 
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_03_19_V03
 
#### Basis: wettervorhersage_2026_03_19_V02

#### Änderung:
* Tag oder Nacht erkennen. Darauf aufbauend zwischen Sonnen- und Mondicon trennen

#### Mängel:
* 10-Tage Vorschau außerhalb der Konsole fehlt
* Zeitausgabe schöner
* Statt 'heute' und 'morgen' das Kürzel des Wochentags rein, also z.B. 'Mi', 'Do'...
* 'machDieTabellenzeilen' zusammenfassen, da wiederholt sich viel
* Nachts statt der Sonne einen Mond einblenden, nicht wie jetzt eine Wolke. Dazu muß ich den Sonnenauf- und untergang auslesen. Dazu kann ich 'isDay' auslesen
* Ausgabe im Browser, nicht in der Konsole
    * Temperatur farbig, wie wetteronline
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetter' 
* Wetter der nächsten Stunden fehlt
    * Wind fehlt noch. Wird in Bronnhaupten gar nicht abgelegt. Meßstetten oder Klippeneck?
* Korrekturrechnung auf Endingen fehlt
* 10-Tage Vorschau: 
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_03_19_V02
 
#### Basis: wettervorhersage_2026_03_19_V01

#### Änderung:
* Wettertabelle erzeugt
    * Darstellung außerhalb der Konsole

#### Mängel:
* 10-Tage Vorschau außerhalb der Konsole fehlt
* Zeitausgabe schöner
* Statt 'heute' und 'morgen' das Kürzel des Wochentags rein, also z.B. 'Mi', 'Do'...
* 'machDieTabellenzeilen' zusammenfassen, da wiederholt sich viel
* Nachts statt der Sonne einen Mond einblenden, nicht wie jetzt eine Wolke. Dazu muß ich den Sonnenauf- und untergang auslesen. Dazu kann ich 'isDay' auslesen
* Ausgabe im Browser, nicht in der Konsole
    * Temperatur farbig, wie wetteronline
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetter' 
* Wetter der nächsten Stunden fehlt
    * Wind fehlt noch. Wird in Bronnhaupten gar nicht abgelegt. Meßstetten oder Klippeneck?
* Korrekturrechnung auf Endingen fehlt
* 10-Tage Vorschau: 
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_03_19_V01
 
#### Basis: wettervorhersage_2026_03_18_V01

#### Änderung:
* Wettertabelle erzeugt
    * Sonne ist drin, aber noch in der Konsole

#### Mängel:
* Nachts statt der Sonne einen Mond einblenden, nicht wie jetzt eine Wolke. Dazu muß ich den Sonnenauf- und untergang auslesen
* Ausgabe im Browser, nicht in der Konsole
    * Temperatur farbig, wie wetteronline
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetter' 
* Wetter der nächsten Stunden fehlt
    * Wind fehlt noch. Wird in Bronnhaupten gar nicht abgelegt. Meßstetten oder Klippeneck?
* Korrekturrechnung auf Endingen fehlt
* 10-Tage Vorschau: 
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_03_18_V01
 
#### Basis: wettervorhersage_2026_02_23_V01

#### Änderung:
* WetterJson wird von Sktipt 'wetter' als fertiges .js Include erzeugt und fest verdrahtet beim Start des wetterprogramms eingelesen

#### Mängel:
* Ausgabe im Browser, nicht in der Konsole
    * Temperatur farbig, wie wetteronline
* Braucht noch zum Start den Aufruf über das SHELL-Skript 'wetter' 
* Wetter der nächsten Stunden fehlt
    * Wind fehlt noch. Wird in Bronnhaupten gar nicht abgelegt. Meßstetten oder Klippeneck?
* Korrekturrechnung auf Endingen fehlt
* 10-Tage Vorschau: 
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_02_23_V01
 
#### Basis: wettervorhersage_2026_02_21_V02

#### Änderung:
* sunshineArray scheint nicht bei 0 Uhr zu beginnen, sondern ab der aktuellen Stunde. Dahingehend die Ausgabe korrigiert. Mal schauen, ob das so paßt

#### Mängel:
* Ausgabe im Browser, nicht in der Konsole
    * Temperatur farbig, wie wetteronline
* Braucht noch die bereits abgespeicherte JSON. 
    * Die wird mit dem Shell Skript 'wetterberichtDownload' gelesen und schreibt die Daten auf '$HOME/Downloads/wettervorhersage_Bronnhaupten.json'
* Wetter der nächsten Stunden fehlt
    * Wind fehlt noch. Wird in Bronnhaupten gar nicht abgelegt. Meßstetten oder Klippeneck?
* Korrekturrechnung auf Endingen fehlt
* 10-Tage Vorschau: 
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_02_21_V02
 
#### Basis: wettervorhersage_2026_02_21_V01

#### Änderung:
* Sonne stundenweise dazu

#### Mängel:
* Ausgabe im Browser, nicht in der Konsole
    * Temperatur farbig, wie wetteronline
* Braucht noch die bereits abgespeicherte JSON. 
    * Die wird mit dem Shell Skript 'wetterberichtDownload' gelesen und schreibt die Daten auf '$HOME/Downloads/wettervorhersage_Bronnhaupten.json'
* Wetter der nächsten Stunden fehlt
    * Wind fehlt noch. Wird in Bronnhaupten gar nicht abgelegt. Meßstetten oder Klippeneck?
* Korrekturrechnung auf Endingen fehlt
* 10-Tage Vorschau: 
    * Sonnenscheindauer in Stunden prüfen
    * Max Temperatur mit Uhrzeit
* Tage ohne Regen, > 10° und mit wenig Wind markieren

####################################################################

### wettervorhersage_2026_02_21_V01
 
#### Basis: wettervorhersage_2026_02_20_V04

#### Änderung:
* Dict Temperaturausgabe heißt jetzt Temp statt jaja
* Regen stundenweise dazu

#### Mängel:
* Ausgabe im Browser, nicht in der Konsole
* Braucht noch die bereits abgespeicherte JSON. 
    * Die wird mit dem Shell Skript 'wetterberichtDownload' gelesen und schreibt die Daten auf '$HOME/Downloads/wettervorhersage_Bronnhaupten.json'
* Wetter der nächsten Stunden fehlt
    * Stunden begonnen
* Korrekturrechnung auf Endingen fehlt
* Sonnenscheindauer in Stunden prüfen
* Tage ohne Regen, > 10° und mit wenig Wind markieren
* Max Temperatur mit Uhrzeit
* Dict für die Stundenausgabe ist noch eine Krücke

####################################################################

### wettervorhersage_2026_02_20_V04
 
#### Basis: wettervorhersage_2026_02_20_V03

#### Änderung:
* Stundenweise Ausgabe der nächsten Tage. Erst mal die Temperatur

#### Mängel:
* Ausgabe im Browser, nicht in der Konsole
* Braucht noch die bereits abgespeicherte JSON. 
    * Die wird mit dem Shell Skript 'wetterberichtDownload' gelesen und schreibt die Daten auf '$HOME/Downloads/wettervorhersage_Bronnhaupten.json'
* Wetter der nächsten Stunden fehlt
    * Stunden begonnen
* Korrekturrechnung auf Endingen fehlt
* Sonnenscheindauer in Stunden prüfen
* Tage ohne Regen, > 10° und mit wenig Wind markieren
* Max Temperatur mit Uhrzeit
* Dict für die Stundenausgabe ist noch eine Krücke

####################################################################

### wettervorhersage_2026_02_20_V03
 
#### Basis: wettervorhersage_2026_02_20_V02

#### Änderung:
* Ausgabe übersichtlich in Tabelle, aber immer noch in der Konsole

#### Mängel:
* Braucht noch die bereits abgespeicherte JSON. 
    * Die wird mit dem Shell Skript 'wetterberichtDownload' gelesen und schreibt die Daten auf '$HOME/Downloads/wettervorhersage_Bronnhaupten.json'
* Wetter der nächsten Stunden fehlt
* Korrekturrechnung auf Endingen fehlt
* Sonnenscheindauer in Stunden prüfen
* Ausgabe im Browser, nicht in der Konsole
* Tage ohne Regen, > 10° und mit wenig Wind markieren
* Max Temperatur mit Uhrzeit

####################################################################

### wettervorhersage_2026_02_20_V02
 
#### Basis: wettervorhersage_2026_02_20_V01

#### Änderung:
* Sonnenschein, Regen und Wind dazu

#### Mängel:
* Braucht noch die bereits abgespeicherte JSON. 
    * Die wird mit dem Shell Skript 'wetterberichtDownload' gelesen und schreibt die Daten auf '$HOME/Downloads/wettervorhersage_Bronnhaupten.json'
* Wetter der nächsten Stunden fehlt
* Korrekturrechnung auf Endingen fehlt
* Sonnenscheindauer in Stunden prüfen

####################################################################

### wettervorhersage_2026_02_20_V01
 
#### Basis: 

#### Änderung:
* Liest die Wetterdatei ein und gibt min/max Temoeratur der nächsten Tage aus

#### Mängel:
* Braucht noch die bereits abgespeicherte JSON. 
    * Die wird mit dem Shell Skript 'wetterberichtDownload' gelesen und schreibt die Daten auf '$HOME/Downloads/wettervorhersage_Bronnhaupten.json'
* Wetter der nächsten Stunden fehlt
* Korrekturrechnung auf Endingen fehlt

####################################################################