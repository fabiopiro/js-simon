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
// FUNCTIONS END



// Max Number Value
var maxNumberValue = 100;
console.log("Valore massimo dei numeri proposti", maxNumberValue);

// Numbers To Guess
var numbersToGuess = 5;
console.log("Numeri da ricordare e indovinare", numbersToGuess);

// Wait Time
var waitTime = 30;
console.log("Tempo di attesa", waitTime, "secondi");

// Array Random Numbers - EMPTY
var arrayRandomNumbers = [];

// Array Random Numbers - FULL
while (arrayRandomNumbers.length < numbersToGuess) {

    var number = randomNumber(1, maxNumberValue);

    if (!isInArray(arrayRandomNumbers, number)) {
        arrayRandomNumbers.push(number);
    }
}
console.log("Numeri Random", arrayRandomNumbers);

// Alert
alert ("Simon Says...\n" + arrayRandomNumbers)

// Countdown
var countdown = setInterval (function() {

    document.getElementById("countdown").innerHTML = "<h1> CountDown " + (waitTime - 1) + "</h1>";

    if (waitTime == 1 ) {
        clearInterval(countdown);
    } else {
        waitTime--;
    }

}, 1000)

// Game
// Array User Input - EMPTY
var arrayUserNumbers = [];

// Array User Input Correct -EMPTY
var arrayCheck = [];


setTimeout (function() {

    for (var i = 0; i < numbersToGuess; i++) {
        
        do {
            // Input
            var userNumber = parseInt(prompt("Inserisci i numeri"));

        // Input Conditions
        } while (isNaN(userNumber) || userNumber < 1 || userNumber > maxNumberValue || isInArray(arrayUserNumbers, userNumber));

        // Input Save
        arrayUserNumbers.push(userNumber);

        // Input Correct save
        if (isInArray(arrayRandomNumbers, userNumber)) {
            arrayCheck.push(userNumber)
        }
    
    }
    
    document.getElementById("random_numbers").innerHTML = "I numeri erano questi " + arrayRandomNumbers;
    
    console.log("Numeri inseriti", arrayUserNumbers);
    document.getElementById("numbers").innerHTML = "Hai inserito " + arrayUserNumbers;


    console.log("Ne hai indovinati", arrayCheck.length, "su", numbersToGuess);
    document.getElementById("correct").innerHTML = "Ne hai indovinati " + arrayCheck.length + " su " + numbersToGuess;

    console.log("Numeri indovinati", arrayCheck);
    document.getElementById("numbers_correct").innerHTML = "Hai indovinato: " + arrayCheck;


}, waitTime*1000);
