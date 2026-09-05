# Express Blog Api Crud

API REST blog Express.js con operazioni CRUD.

## Milestone 1

- Creazione del Controller

  All’interno della cartella `controllers/`, creare un file dedicato alla gestione dei post.
  In questo controller definire tutte le funzioni necessarie (**Index, Show, Create, Update, Modify, Destroy**), copiando la logica che inizialmente si trovava nel cartella `routers/`.
 
- Collegamento Controller ↔ Router

  Importare le funzioni dichiarate in `controllers/` nel file delle rotte `routers/postsRouter.js`. 
  Associare ogni funzione alla rispettiva rotta **REST**.
  In questo modo il **router** delega completamente la logica al **controller**, mantenendo il codice più pulito e modulare.

- Test degli Endpoint

  Utilizzare **Postman** per verificare che ogni endpoint risponda correttamente.
  Verificare che le risposte siano identiche a quelle ottenute quando la logica era nel **router**.

## Milestone 2

- Creazione della cartella data

  All’interno della cartella `data/`, creare un file che esporti un array contenente tutti i post del blog.
  Questo array rappresenta il dataset dell’applicazione e verrà utilizzato dal **controller** per eseguire le **operazioni CRUD**.

- Implementazione delle operazioni CRUD

  -  **Index — Restituire la lista dei post**

       La funzione deve rispondere con l’intero array dei post in formato JSON.

  -  **Show — Restituire un singolo post**

      La funzione deve leggere l’ID dai parametri della rotta, cercare il post corrispondente, restituirlo in formato JSON e
      rispondere con 404 se il post non esiste.

  -  **Destroy — Eliminare un post**

      La funzione deve verificare che il post esista, eliminarlo dall’array, stampare in console la lista aggiornata, rispondere con **204 No Content** e restituire un **errore 404** se l’ID non è valido.
  


## Bonus

- Implementare un filtro di ricerca nella **Index** che   mostri solo i post che hanno un determinato **Tag**.

- In **Show e Destroy**, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno **stato 404** e un messaggio d’errore, sempre in formato **JSON**.

