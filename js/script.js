/*
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
*/

// FUNCTIONS
// Random Number
function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Is In Array
function isInArray (array, element) {

    for (var i = 0; i < array.length; i++) {

        if (array[i] == element) {
            return true
        }
    }
    return false
}

// SCRIPT

// Number Range
var maxNumberValue = 10;
// Number To Guess
var numberToGuess = 5;
// Wait Time
var waitTime = 3;

// Array With Random Numbers - EMPTY
var arrayRandomNumbers = [];

// Array With Random Numbers - FULL
/* With For
for (var i = 0; i < numberToGuess; i++) {
    
    var number = randomNumber(1, maxNumberValue);
    arrayRandomNumbers.push(number);

}
*/

while (arrayRandomNumbers.length < numberToGuess) {

    var number = randomNumber(1, maxNumberValue);

    if (!isInArray(arrayRandomNumbers, number)) {
        arrayRandomNumbers.push(number);
    }
}
console.log("Numeri Random", arrayRandomNumbers);

// Alert
alert ("Numeri\n" + arrayRandomNumbers)

// Number Input
var arrayUserNumbers = [];
var arrayCheck = [];


setTimeout (function() {

    for (var i = 0; i < numberToGuess; i++) {
        
        do {
            var userNumber = parseInt(prompt("Inserisci i numeri"));
        } while (isNaN(userNumber) || userNumber < 1 || userNumber > maxNumberValue || isInArray(arrayUserNumbers, userNumber));

        arrayUserNumbers.push(userNumber);


        if (isInArray(arrayRandomNumbers, userNumber)) {
            arrayCheck.push(userNumber)
        }
    
    }
    console.log("Numeri inseriti", arrayUserNumbers);
    console.log("Numeri azzeccati ", arrayCheck);
    console.log("Hai indovinato", arrayCheck.length, "numeri su", numberToGuess);

}, waitTime*1000);
