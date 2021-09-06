// 1) CREARE UN ALERT CHE RAPPRESENTA 5 NUMERI GENERATI CASUALMENTE.

const numeroMassimo = 100; //indica i numeri massimi da randomizzare
let listaNumeriRandomici = []; //questo è l'array in cui verrano inseriti tot. numeri random associati ai numeri bomba
let numeroRandomico = getRandomNumber(1, numeroMassimo); //ho messo let e non const perchè in base alla difficolta varia il numero di bombe

let listaScelte = [];  //array dove si inseriscono i numeri scelti dall'utente


while ( listaNumeriRandomici.length < 5){
    
    let numeroRandomico = getRandomNumber(1, numeroMassimo); //genera randomicamente i numeri nell'array listabombe da 1 a numero massimo (100)
    if (listaNumeriRandomici.includes(numeroRandomico) == false){ //questo per non far ripetere gli stessi numeri
        listaNumeriRandomici.push(numeroRandomico); //aggiungi  un numero randomico nell'array listabombe
    }
}

alert(listaNumeriRandomici)
console.log(listaNumeriRandomici);

// 2) FAR PARTITRE UN TIMER DI 30 SECONDI.

let secondi = 3000

setTimeout (tempo, secondi);

// 3) ALLA FINE DEL TIMER L'UTENTE DEVE INSERIRE I NUMERI DELL'ALERT UNO PER VOLTA TRAMITE PROMPT
function tempo(){
    let numeriIndovinati =[];
   for(let i = 0; i<listaNumeriRandomici.length; i++){
        let numeriUtente = parseInt(prompt("inserisci gli stessi numeri visti prima"));
        let numeroCorrente = listaNumeriRandomici[i];
        console.log(numeriUtente);
        if(numeroCorrente == numeriUtente){
            numeriIndovinati.push(numeroCorrente)
            console.log("Hai vinto");
        }else{
            console.log("hai perso");
        }
    }
    console.log(numeriIndovinati);
}

// 4) DOPO CHE SONO STATI INSERITI IL SOFTWARE DICE QUANTI E QUALI NUMERI DA INDOVINARE SONO STATI INDIVIDUATI.





//FUNZIONI

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}