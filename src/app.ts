console.log("Funziona!");

import { Libreria } from "./libreria.js";
import { Libro } from "./libro.js";
import type { Genere, QuantitaLibri } from "./libro.js";

const biblioteca = new Libreria();

document.querySelector("#bookForm")?.addEventListener("submit",
    (event) => {
        // Evitare il refresh della pagina
        event.preventDefault();
        // Recupero i valori del form
        const titolo: string = 
        (document.querySelector("#titolo") as HTMLInputElement).value;

        const autore: string = 
        (document.querySelector("#autore") as HTMLInputElement).value;

        const anno: number = parseInt(
            (document.querySelector("#anno") as HTMLInputElement).value
        );

        const quantita: QuantitaLibri = {
            disponibile: parseInt(
                (document.querySelector("#quantita") as HTMLInputElement).value
            ),
            inPrestito: 0
        }
        
        const categoria: Genere = 
        (document.querySelector("#quantita") as HTMLInputElement)
        .value as Genere;

        // Creo il libro
        const libro: Libro = 
        new Libro(titolo, autore, anno, categoria, quantita);
        // Aggiungo il libro
        biblioteca.addLibro(libro);
        // Visualizzo i libri
        biblioteca.mostraLibri();
    }
)

document.querySelector("#cercaForm")?.addEventListener("submit", (event) => {
    // Gestione del submit del form di ricerca
    event.preventDefault();
    // Recupero il valore del campo input di ricerca
    const titolo: String =
    (document.getElementById("cerca") as HTMLInputElement).value;

    // Richiamo la ricerca del libro
    biblioteca.findLibro(titolo);
})