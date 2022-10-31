const bottoneVerify = document.getElementById("button")
const wordDiv = document.querySelector('.wordPal');

bottoneVerify.addEventListener('click', function (){
    parolaInserita = document.getElementById("testo").value;
    if (isPali(parolaInserita)){
        wordDiv.innerHTML += 'La parola '+ parolaInserita + ' è Palindrome! ';
        console.log( 'Questa parola è palindrome!');
    } else {
        wordDiv.innerHTML += 'La parola '+ parolaInserita + ' non è Palindrome! '
        console.log('Questa parola non è palindrome');        
    };
    
    function isPali(testo) {
        if(Array.from(testo).toString() == (Array.from(testo).reverse()).toString()) {
            return true
        } else {
            return false
        }
    }

});

const bottoneNumero = document.getElementById("buttonNumero")
const numberDiv = document.querySelector('.numberParoDisparo');

bottoneNumero.addEventListener('click', function (){
    numeroInserito = Number(document.getElementById("numero").value);
    paroDisparo = document.getElementById("genere").value;
    numeroComputer = (Math.floor(Math.random() * 5) + 1);

    if(numeroInserito > 5){
        alert("Perfavore inserisci un numero tra 1 e 5")
        STOP
    }

	console.log('Hai scelto il numero: ' + numeroInserito);
    numberDiv.innerHTML += `<div class="pt-3">Hai scelto di giocare ${paroDisparo} con il numero: ${numeroInserito}</div>`;

    console.log('Il computer giocherà con il numero: ' + numeroComputer)
    numberDiv.innerHTML += `<div class="py-1">Il computer giocherà con il numero: ${numeroComputer}</div>`;

    function somma(num1, num2){
        return(num1 + num2);
    }

    const numeroRisultato = (somma(numeroInserito, numeroComputer))
    console.log('La somma è: ' + numeroRisultato)
    numberDiv.innerHTML += `<div class="py-1">La somma è: ${numeroRisultato}</div>`;

    function isEven(number) {
        if (number % 2) {
            return false       
        } else {
            return true
        }
    }
   
    if (isEven(numeroRisultato)) {
        console.log('Il risultato della somma è pari');
        numberDiv.innerHTML += `<div class="py-1">Il risultato della somma è pari</div>`;
        var numeroGiocato = "paro"
    } else {        
        console.log('Il risultato della somma è dispari');
        numberDiv.innerHTML += `<div class="py-1">Il risultato della somma è dispari</div>`;
        var numeroGiocato = "disparo"
    }

   if (numeroGiocato == paroDisparo){
    console.log("HAI VINTO!")
    numberDiv.innerHTML += `<div class="py-1">HAI VINTO!</div>`;
   } else {
    console.log("Ha vinto il computer :(")
    numberDiv.innerHTML += `<div class="py-1">Ha vinto il computer :(</div>`;
   }
   
    
})








