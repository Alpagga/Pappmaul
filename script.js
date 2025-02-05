// Erstellen des Kartendecks
const bayerischesDeck = [
    "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Unter", "Herz Ober", "Herz König", "Herz Ass",
    "Eichel 7", "Eichel 8", "Eichel 9", "Eichel 10", "Eichel Unter", "Eichel Ober", "Eichel König", "Eichel Ass",
    "Laub 7", "Laub 8", "Laub 9", "Laub 10", "Laub Unter", "Laub Ober", "Laub König", "Laub Ass",
    "Schellen 7", "Schellen 8", "Schellen 9", "Schellen 10", "Schellen Unter", "Schellen Ober", "Schellen König", "Schellen Ass"
];

// Mischen des Kartendecks
function mischen(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]; // Tauschen
    }
}

// Karte übereinander aufdecken
let aktuelleKarte = 0;

function aufdecken() {
    if (aktuelleKarte < bayerischesDeck.length) {
        const karte = bayerischesDeck[aktuelleKarte];
        const karteDiv = document.createElement('div');
        karteDiv.classList.add('card');
        karteDiv.textContent = karte;

        // Berechnung der vertikalen Position, damit die Karten übereinander liegen
        const vertikalePosition = aktuelleKarte * 10; // Jede Karte 10px nach unten verschieben

        // Karte im Deck platzieren und animieren
        karteDiv.style.top = `${vertikalePosition}px`;
        document.getElementById('deck').appendChild(karteDiv);

        // Sichtbarkeit der Karte ändern, um sie "aufzudecken"
        setTimeout(() => {
            karteDiv.style.opacity = 1;
        }, 100); // Verzögerung, damit die Karte sichtbar wird

        aktuelleKarte++;
    } else {
        alert("Das Deck ist leer!");
    }
}

// Initialisierung
mischen(bayerischesDeck);

// Klick-Event für den Button
document.getElementById('deckButton').addEventListener('click', aufdecken);
