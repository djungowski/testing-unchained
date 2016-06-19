#language: de

Funktionalität: Wikipedia Suche
  Szenario: Suche mit mehreren Treffern
    Gegeben sei Ich öffne "http://de.wikipedia.org"
    Wenn Ich im Suchfeld "deutsche brauerei" eingebe
    Dann Wird die Seite neugeladen
    Und Ich sehe den Text "Ähnlicher Begriff: deutsche brauer"
    Und Ich sehe 20 Suchergebnisse auf der Seite