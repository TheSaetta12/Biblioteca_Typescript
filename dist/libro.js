export var Genere;
(function (Genere) {
    Genere["ROMANZO"] = "Romanzo";
    Genere["CLASSICO"] = "Classico";
    Genere["FANTASCIENZA"] = "Fantascienza";
    Genere["NARRATIVA"] = "Narrativa";
    Genere["GIALLO"] = "Giallo";
})(Genere || (Genere = {}));
export class Libro {
    titolo;
    autore;
    anno;
    categoria;
    quantita;
    constructor(titolo, autore, anno, categoria, quantita) {
        this.titolo = titolo;
        this.autore = autore;
        this.anno = anno;
        this.categoria = categoria;
        this.quantita = quantita;
    }
    prestito() {
        // Logiche di prestito
        if (this.quantita.disponibile > 0) {
            // Aumento la quantità in prestito
            this.quantita.inPrestito++;
            // e diminuisco quella disponibile
            this.quantita.disponibile--;
            // alert("Una copia di questo libro è stata prestata")
            alert(`Una copia di ${this.titolo} è stata data in prestito`);
        }
        else {
            alert(`${this.titolo} non è disponibile`);
        }
    }
    restituisci() {
        if (this.quantita.inPrestito > 0) {
            this.quantita.inPrestito--;
            this.quantita.disponibile++;
            alert(`Una copia di ${this.titolo} è stata restituita`);
        }
        else {
            alert(`Non ci sono copie di ${this.titolo} in prestito`);
        }
    }
}
//# sourceMappingURL=libro.js.map