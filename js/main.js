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
      // HANDLEBARS
      // selettore per puntare il template che si vuole utilizzare
      var source = $("#studente-template").html();
      // compila il template e lo appoggia come oggetto nella variabile template
      var template = Handlebars.compile(source);
      // prepara la variabile per manipolare il contenuto del template
      var context = {"nome": studenti[i]["nome"], "cognome": studenti[i]["cognome"], "eta": studenti[i]["eta"]};
      // modifica il template con le modifiche contenute in context e lo appoggia nell'oggetto html
      var html = template(context);
      // appende l'oggetto template manipolato al div .classe nel documento HTML
      $(".classe").append(html);
  }


  // PUNTO 3

  // CLICK sul pulsante Aggiungi Studente
  // Aggiunge un nuovo studente con i dati inseriti negli input
  $("#aggiungi_studente").click (
    function() {
      // recupera i valori inseriti negli input
      var nomeUtente = $("#nome-new").val();
      var cognomeUtente = $("#cognome-new").val();
      var etaUtente = $("#eta-new").val();
      // aggiunge un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
      studente = {"nome": nomeUtente, "cognome": cognomeUtente, "eta": etaUtente}
      studenti.push(studente);
      // selettore per puntare il template che si vuole utilizzare
      var source = $("#studente-template").html();
      // compila il template e lo appoggia come oggetto nella variabile template
      var template = Handlebars.compile(source);
      // prepara la variabile per manipolare il contenuto del template
      var context = {"nome": studenti[(studenti.length - 1)]["nome"], "cognome": studenti[(studenti.length - 1)]["cognome"], "eta": studenti[(studenti.length - 1)]["eta"]};
      // modifica il template con le modifiche contenute in context e lo appoggia nell'oggetto html
      var html = template(context);
      // appende l'oggetto template manipolato al div .classe nel documento HTML
      $(".classe").append(html);
      // ripulisce i campi input nuovo studente
      $("#nome-new").val("");
      $("#cognome-new").val("");
      $("#eta-new").val("");
    });



// *********** ATTENTION: non scrivere sotto questa riga
});
