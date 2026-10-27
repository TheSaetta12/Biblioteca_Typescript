import type { Libro } from "./libro";
export declare class Utente {
    nome: string;
    cognome: string;
    idTessera: number;
    constructor(nome: string, cognome: string, idTessera: number);
    libriInPrestito: Libro[];
    prestito(libro: Libro): void;
    restituisci(libro: Libro): void;
}
//# sourceMappingURL=utente.d.ts.map