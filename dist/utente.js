export class Utente {
    nome;
    cognome;
    idTessera;
    constructor(nome, cognome, idTessera) {
        this.nome = nome;
        this.cognome = cognome;
        this.idTessera = idTessera;
    }
    libriInPrestito = [];
    prestito(libro) {
        this.libriInPrestito.push(libro);
    }
    restituisci(libro) {
        this.libriInPrestito = this.libriInPrestito.filter((l) => libro.titolo != l.titolo);
    }
}
//# sourceMappingURL=utente.js.map