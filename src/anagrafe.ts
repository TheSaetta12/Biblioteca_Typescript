import type { Libro } from "./libro";
import { Utente } from "./utente.js";

export class Anagrafe{
    utenti : Utente[]=[];

    constructor() {
        this.utenti.push(new Utente("Andrea", "Rossi", 1));
        this.utenti.push(new Utente("Mario", "Bianchi", 2));
        this.utenti.push(new Utente("Luigi", "Verdi", 3));
        this.utenti.push(new Utente("Dario", "Azzuri", 4));

        const select = document.getElementById(
            "utentePrestito",
        ) as HTMLSelectElement;

        this.utenti.forEach((u) => {
            const option = document.createElement("option");
            option.value = u.idTessera.toString();
            option.text = `${u.nome} ${u.cognome}`;

            select.appendChild(option);
        });
    }
    
    mostraAnagrafe(){
        
        const listaAnagrafe: HTMLUListElement = 
        document.getElementById("listaUtenti") as HTMLUListElement;
    
        if(listaAnagrafe){
            
            listaAnagrafe.innerHTML = "";
            
            this.utenti.forEach((utente : Utente) => {
                
                const li = document.createElement("li");
                
                li.textContent = `${utente.nome} ${utente.cognome}`;
                utente.libriInPrestito.forEach((libro : Libro) => {
                    li.textContent += ` "Libro in prestito " ${libro.titolo} " di " ${libro.autore}`
                }) 

                listaAnagrafe.appendChild(li);
            })
        }
    }
}