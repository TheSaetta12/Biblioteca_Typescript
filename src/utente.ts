import type { Libro } from "./libro";

export class Utente {
    constructor(
        public nome: string,
        public cognome: string,
        public idTessera: number,
    ){}

    libriInPrestito: Libro[] = [];

    prestito(libro: Libro): void{
        this.libriInPrestito.push(libro);
    }

    restituisci(libro: Libro) {
       this.libriInPrestito = this.libriInPrestito.filter((l: Libro)=>libro.titolo != l.titolo);
    }
}