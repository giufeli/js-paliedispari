const bottoneVerify = document.getElementById("button")

bottoneVerify.addEventListener('click', function (){
    parolaInserita = document.getElementById("testo").value;
    if (isPali(parolaInserita)){
        alert( 'Questa parola è palindrome!');
        console.log( 'Questa parola è palindrome!');
    } else {
        alert ('Questa parola non è palindrome')
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

bottoneNumero.addEventListener('click', function (){
    numeroInserito = Number(document.getElementById("numero").value);
    paroDisparo = document.getElementById("genere");
    numeroComputer = (Math.floor(Math.random() * 5) + 1);

	console.log('Hai scelto il numero ' + numeroInserito);

    console.log('Il computer giocherà con il numero ' + numeroComputer)
    
    function somma(num1, num2){
        return(num1 + num2);
    }

    const numeroRisultato = (somma(numeroInserito, numeroComputer))
    console.log('La somma è: ' + numeroRisultato)
    
    function isEven(number) {
        if (number % 2) {
            return false;
        } else {
            return true;
        }
    }

    if (isEven(numeroRisultato)) {
        console.log('Il risultato della somma è pari');
    } else {
        console.log('Il risultato della somma è dispari');
    }
    
    console.log(paroDisparo)
})








