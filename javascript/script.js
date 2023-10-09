// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

let mioDiv = document.getElementById("testo");

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
let kilometers = prompt("Inserire numero km da percorrere.");
let age = prompt("Inserire l'eta' del passeggero.");
console.log(kilometers, age);
if (isNaN(kilometers) || isNaN(age)) {
  let attetiont = alert("Per favore inserire solo valori numerici");
  window.location.reload();
}
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
let baseTicketPrice = 0.21;
let ticketPrice;

// va applicato uno sconto del 20% per i minorenni
if (age < 18) {
  ticketPrice =
    baseTicketPrice * kilometers -
    ((baseTicketPrice * kilometers) / 100) * 20 +
    "\u20AC";
  console.log(ticketPrice);
}
// va applicato uno sconto del 40% per gli over 65.
else if (age >= 65) {
  ticketPrice =
    baseTicketPrice * kilometers -
    ((baseTicketPrice * kilometers) / 100) * 40 +
    "\u20AC";
  console.log(ticketPrice);
} else {
  ticketPrice = baseTicketPrice * kilometers + "\u20AC";
  console.log(ticketPrice);
}
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo)
mioDiv.innerHTML = ticketPrice;
