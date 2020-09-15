$(document).ready(function(){

  // PUNTO 1

  // 1. Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età
  var studente = {
    "nome": "Gianni",
    "cognome": "Ruggiero",
    "eta": 45
  }

  // 2. Stampare a schermo attraverso il ciclo "for in" tutte le proprietà
  console.log("PUNTO 1 ********************");
  for (var key in studente) {
    console.log(key);
  }

  // PUNTO 2

  // 1. Creare un array di oggetti di studenti

  var studenti = [
    {
      "nome": "Gianni",
      "cognome": "Ruggiero",
      "eta": 45
    },
    {
      "nome": "Pablo",
      "cognome": "Nutini",
      "eta": 25
    },
    {
      "nome": "Eric",
      "cognome": "Rossi",
      "eta": 29
    },
    {
      "nome": "Maria",
      "cognome": "Fusi",
      "eta": 22
    },
    {
      "nome": "Oscar",
      "cognome": "Bianchi",
      "eta": 35
    },
    {
      "nome": "Carla",
      "cognome": "Rodriguez",
      "eta": 23
    }
  ];

  // 2. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
  console.log("PUNTO 2 ********************");
  for (var i = 0; i < studenti.length; i++) {
      console.log("Nome: " + studenti[i]["nome"]);
      console.log("Cognome: " + studenti[i]["cognome"]);
  }

  // PUNTO 3

  // 1. Chiede all’utente attraverso 3 prompt: nome, cognome e età.
  var nomeUtente = prompt("Inserisci il nome dello studente");
  var cognomeUtente = prompt("Inserisci il cognome dello studente");
  var etaUtente = String(parseInt(prompt("Inserisci l'età dello studente")));

  // 2. Aggiunge un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
  studente = {"nome": nomeUtente, "cognome": cognomeUtente, "eta": etaUtente}
  studenti.push(studente);
  console.log("PUNTO 3 ********************");
  console.log(studenti);
  console.log("STUDENTE AGGIUNTO: " + studenti[(studenti.length - 1)].nome, studenti[(studenti.length - 1)].cognome + " / Età: " + studenti[(studenti.length - 1)].eta + " anni");



// *********** ATTENTION: non scrivere sotto questa riga
});
