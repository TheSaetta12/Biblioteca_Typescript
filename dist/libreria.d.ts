import { Libro } from "./libro.js";
export declare class Libreria {
    private libri;
    private anagrafe;
    constructor();
    addLibro(libro: Libro): void;
    salvaLibri(): void;
    mostraLibri(libriFiltro?: Libro[]): void;
    findLibro(titolo: String): void;
}
//# sourceMappingURL=libreria.d.ts.map