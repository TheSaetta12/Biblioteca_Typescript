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
};
export declare enum Genere {
    ROMANZO = "Romanzo",
    CLASSICO = "Classico",
    FANTASCIENZA = "Fantascienza",
    NARRATIVA = "Narrativa",
    GIALLO = "Giallo"
}
export declare class Libro implements LibroProps {
    titolo: string;
    autore: string;
    anno: number;
    categoria: Genere;
    quantita: QuantitaLibri;
    constructor(titolo: string, autore: string, anno: number, categoria: Genere, quantita: QuantitaLibri);
    prestito(): void;
    restituisci(): void;
}
//# sourceMappingURL=libro.d.ts.map