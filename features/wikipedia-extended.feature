#language: de

Funktionalität: Wikipedia Suche (Extended)
  Grundlage:
    Gegeben sei Ich öffne "http://localhost"
    Wenn Ich im Suchfeld "deutsche brauerei" eingebe
    Dann Wird die Seite neugeladen

    Szenario: Suche mit mehreren Treffern und Did-you-mean Vorschlag
      Und Ich sehe den Text "Ähnlicher Begriff: deutsche brauer"
      Und Ich sehe 20 Suchergebnisse auf der Seite

    Szenariogrundriss: Korrekte Suchergebnisliste
      Und Ich sehe den Text "<result>" an Position "<position>"

      Beispiele:
      | position  | result                        |
      | 1         | Feldschlösschen               |
      | 2         | Bitburger Brauerei            |
      | 3         | Hausbrauerei Feierling        |
      | 4         | Radeberger Exportbierbrauerei |
      | 5         | Brauerei Göller               |


