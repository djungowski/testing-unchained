#language: de

Funktionalität: Wikipedia Suche (Einfach)
  Szenario: Suche mit mehreren Suchergebnissen
    Gegeben sei Ich öffne "http://localhost:8080"
    Wenn Ich im Suchfeld "deutsche brauerei" eingebe
    Dann Wird die Seite neugeladen
    Und Ich sehe den Text "Ähnlicher Begriff: deutsche brauer"
    Und Ich sehe 20 Suchergebnisse auf der Seite