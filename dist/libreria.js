import { Anagrafe } from "./anagrafe.js";
import { Libro } from "./libro.js";
// import type { Libro } from "./libro";
export class Libreria {
    libri = [];
    anagrafe = new Anagrafe();
    constructor() {
        // Integrazione della logica per il recupero degli elementi da localStorage
        let libriStorage = localStorage.getItem("libri");
        if (libriStorage) {
            // Trasformare libriStorage in un array di libri
            this.libri = JSON.parse(libriStorage).map((libroDaIstanziare) => {
                return new Libro(libroDaIstanziare.titolo, libroDaIstanziare.autore, libroDaIstanziare.anno, libroDaIstanziare.categoria, libroDaIstanziare.quantita);
            });
            // Una volta recuperati i libri, li mostro
            this.mostraLibri();
        }
        // Mostro anche gli utenti salvati in anagrafe
        this.anagrafe.mostraAnagrafe();
    }
    addLibro(libro) {
        if (this.libri.map((libro) => libro.titolo)
            .includes(libro.titolo)) {
            alert("Il libro è già stato inserito");
        }
        else {
            this.libri.push(libro);
            // Salva il libro su database
            this.salvaLibri();
        }
    }
    salvaLibri() {
        localStorage.setItem("libri", JSON.stringify(this.libri));
    }
    mostraLibri(libriFiltro) {
        // Imposto quale set di libri visualizzare (Filtrati o tutti quanti)
        let libriDaVisualizzare = libriFiltro ?? this.libri; // null coalescing
        /*
            libriFiltro ? libriFiltro : this.libri
             (operatore ternario)
             condizione ? se vero : se falso

            oppure col metodo classico utilizzando l'if

            if(libriFiltro){
                libriDaVisualizzare = libriFiltro;
            } else {
                libriDaVisualizzare = this.libri;
            }
        */
        // Recupero l'elemento HTML dove andare a stampare i libri
        const listaLibri = document.getElementById("listaLibri");
        if (listaLibri) {
            // Svuotare il contenuto di listaLibri
            listaLibri.innerHTML = "";
            // Ciclo i libri dell'array libri per visualizzarli nella lista
            libriDaVisualizzare.forEach((libro) => {
                // Questa funzione verrà eseguita per ogni elemento dell'array
                // Creo un elemento list item <li>
                const li = document.createElement("li");
                // Impostare il testo da visualizzare
                li.textContent = `${libro.titolo} di ${libro.autore} 
                (${libro.categoria} | ${libro.anno}) - Disponibile: ${libro.quantita.disponibile}
                 | In prestito: ${libro.quantita.inPrestito}`;
                // Aggiugiamo il pulsante per dare in prestito un libro
                // <button class="primary me-5" type="button">Presta</button>
                const btnPresta = document.createElement("button");
                btnPresta.textContent = "Presta";
                btnPresta.setAttribute("class", "primary me-5");
                btnPresta.setAttribute("type", "button");
                btnPresta.onclick = () => {
                    // Assegno il libro all'utente selezionato recuperando l'idTessera dalla select
                    let selectedTesseraUtente = document.getElementById("utentePrestito").value;
                    //Cerco l'utente corrispondente all'idTessera selezionato per accedere ai suoi metodi di classe
                    let selectdUser = this.anagrafe.utenti.find(u => u.idTessera.toString() == selectedTesseraUtente);
                    // Richiamo il metodo prestito() e se l'operazione restituisce esito positivo aumento la qualità in prestito del libro
                    selectdUser?.prestito(libro);
                    libro.prestito();
                    // Salva i libri su database
                    this.salvaLibri();
                    // Aggiorno la view
                    this.mostraLibri();
                    this.anagrafe.mostraAnagrafe();
                };
                // Creo il pulsante per restituire il libro
                const btnRestituisci = document.createElement("button");
                btnRestituisci.textContent = "Restituisci";
                btnRestituisci.setAttribute("class", "secondary me-5");
                btnRestituisci.setAttribute("type", "button");
                btnRestituisci.onclick = () => {
                    // Rimuovo il libro all'utente selezionato recuperando l'idTessera dalla select
                    let selectedTesseraUtente = document.getElementById("utentePrestito").value;
                    //Cerco l'utente corrispondente all'idTessera selezionato per accedere ai suoi metodi di classe
                    let selectdUser = this.anagrafe.utenti.find(u => u.idTessera.toString() == selectedTesseraUtente);
                    // Richiamo il metodo restituisci()
                    selectdUser?.restituisci(libro);
                    // Restituisci il libro
                    libro.restituisci();
                    // Salva i libri su database
                    this.salvaLibri();
                    // Aggiorno la view
                    this.mostraLibri();
                    this.anagrafe.mostraAnagrafe();
                };
                // Aggiungo i pulsanti all'elemento <li> (list item)
                li.appendChild(btnPresta);
                li.appendChild(btnRestituisci);
                // Aggiungo il list item alla lista <ul>
                listaLibri.appendChild(li);
            });
        }
    }
    findLibro(titolo) {
        // Se l'utente ha digitato un titolo filtro altrimenti mostro tutto
        if (titolo) {
            // Filtro i libri
            /*
            // Soluzione con metodo .find()
            let libroTrovato =
            this.libri.find((libro:Libro) =>
                libro.titolo.toLowerCase().includes(titolo.toLowerCase()));
            if(libroTrovato){
                // Gestisco il filtro
            }
            */
            // Soluzione con metodo .filter()
            let libriTrovati = this.libri.filter((libro) => libro.titolo.toLowerCase().includes(titolo.toLowerCase()));
            if (libriTrovati.length) {
                // Se la lunghezza dell'array è > 0 allora mostro i libri filtrati
                this.mostraLibri(libriTrovati);
            }
            else {
                alert("Nessuna corrispondenza trovata per il libro cercato");
            }
        }
        else {
            // Mostro sempre tutti i libri
            this.mostraLibri();
        }
    }
}
//# sourceMappingURL=libreria.js.map