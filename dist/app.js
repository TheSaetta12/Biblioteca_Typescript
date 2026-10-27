console.log("Funziona!");
import { Libreria } from "./libreria.js";
import { Libro } from "./libro.js";
const biblioteca = new Libreria();
document.querySelector("#bookForm")?.addEventListener("submit", (event) => {
    // Evitare il refresh della pagina
    event.preventDefault();
    // Recupero i valori del form
    const titolo = document.querySelector("#titolo").value;
    const autore = document.querySelector("#autore").value;
    const anno = parseInt(document.querySelector("#anno").value);
    const quantita = {
        disponibile: parseInt(document.querySelector("#quantita").value),
        inPrestito: 0
    };
    const categoria = document.querySelector("#quantita")
        .value;
    // Creo il libro
    const libro = new Libro(titolo, autore, anno, categoria, quantita);
    // Aggiungo il libro
    biblioteca.addLibro(libro);
    // Visualizzo i libri
    biblioteca.mostraLibri();
});
document.querySelector("#cercaForm")?.addEventListener("submit", (event) => {
    // Gestione del submit del form di ricerca
    event.preventDefault();
    // Recupero il valore del campo input di ricerca
    const titolo = document.getElementById("cerca").value;
    // Richiamo la ricerca del libro
    biblioteca.findLibro(titolo);
});
//# sourceMappingURL=app.js.map