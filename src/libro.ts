export interface LibroProps {
    titolo: string;
    autore: string;
    anno: number;
    categoria: Genere;
    quantita: QuantitaLibri;
    prestito(): void;
}

export type QuantitaLibri = {
    disponibile: number;
    inPrestito: number;
}

export enum Genere {
    ROMANZO = "Romanzo",
    CLASSICO = "Classico",
    FANTASCIENZA = "Fantascienza",
    NARRATIVA = "Narrativa",
    GIALLO = "Giallo",
}

export class Libro implements LibroProps {
    
    constructor(
        public titolo: string,
        public autore: string,
        public anno: number,
        public categoria: Genere,
        public quantita: QuantitaLibri
    ){}

    prestito(): void{
        // Logiche di prestito
        if(this.quantita.disponibile > 0){
            // Aumento la quantità in prestito
            this.quantita.inPrestito++;
            // e diminuisco quella disponibile
            this.quantita.disponibile--;
            // alert("Una copia di questo libro è stata prestata")
            alert(`Una copia di ${this.titolo} è stata data in prestito`)
        }
        else {
            alert(`${this.titolo} non è disponibile`);
        }
    }

    restituisci() {
        if(this.quantita.inPrestito > 0){
            this.quantita.inPrestito--;
            this.quantita.disponibile++;
            alert(`Una copia di ${this.titolo} è stata restituita`);
        }
        else {
            alert(`Non ci sono copie di ${this.titolo} in prestito`);
        }
    }
}