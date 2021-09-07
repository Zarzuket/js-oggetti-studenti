// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


// var studente = {
//     "nome" : "Davide",
//     "cognome": "Bajo",
//     "eta": "29"

// };

// console.log(studente);

// for(var key in studente){
//     console.log(studente[key]);
// }


var studenti = [
    {
        "nome" :"Davide",
        "cognome":"Bajo",
        "eta": "29"
    },
    {
        "nome" :"Drizzt ",
        "cognome":"DoUrden",
        "eta": "480"
    },
    {
        "nome" :"Josè",
        "cognome":"Mourinho",
        "eta": "58"
    }
];

for (i=0; i<studenti.length; i++){
    console.log(studenti[i])
    for(var key in studenti[i]){
    console.log(`${[key]} => ${studenti[i][key]}`);
    
}
}