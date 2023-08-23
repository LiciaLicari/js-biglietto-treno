/* 
DESCRIPTION
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (ovvero con massimo due decimali, per indicare i centesimi sul prezzo). 
Questo richiederà un minimo di ricerca nella documentazione di JS.
*/

/*
Tools:
- Prompt x2
- Number
- Moltiplicazione *
- If/Else
- Percentuale (x2): /100 *20 se < 18 anni: /100 *40 se >= 65 anni
- Output final price con massimo due decimali: Math.round(number*100)/100
- Console.log
- Document.GetElementById


*/

//Dichiaro il prezzo a km (0.21 €)

const ticketPriceElement = document.getElementById('ticket_price');
console.log("👉" + ticketPriceElement);
const kmPrice = 0.21 //Prezzo al km in €

//Chiedo all'utente il numero di km da percorrere e trasformo in numero

const kmToRun = Number(prompt("Inserire il numero di chilometri che si desidera percorrere: "));
console.log("km da percorrere: " + kmToRun)

//Chiedo all'utente l'età del passeggero e trasformo in numero

const age = Number(prompt("Inserire età del passeggero"))
console.log("età: " + age);

//Calcolo il prezzo del biglietto senza esenzioni 


if (kmToRun > 0 && age > 0) {
    
    let fullPrice = kmPrice * kmToRun;
    console.log("Prezzo biglietto prima di controllare l'età: " + fullPrice.toFixed(2));

    if (age < 18) {
        var underagePrice = fullPrice - ((fullPrice * 20) / 100);
        console.log(fullPrice);
    } else if (age >= 65) {
        var overPrice = fullPrice - ((fullPrice * 40) / 100);
        console.log(fullPrice);
    }

    console.log("Prezzo biglietto dopo aver controllato l'età: " + fullPrice.toFixed(2));

    fullPriceElement.innerHTML = `Il prezzo del tuo biglietto è: <strong>${fullPrice.toFixed(2)}€</strong>`;

} else {
    fullPriceElement.innerHTML = 'I dati inseriti non risultano corretti';
}


