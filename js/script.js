const bottoneVerify = document.getElementById("button")
parolaInserita = document.getElementById("testo").value;
bottoneVerify.addEventListener('click', function (){
    
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
    numeroInserito = document.getElementById("numero").value;
    paroDisparo = document.getElementById("genere").value;
    numeroComputer = (Math.floor(Math.random() * 5) + 1);

    console.log(numeroInserito);
    console.log(numeroComputer)
    
    
    function somma(num1, num2){
        return(num1 + num2);
    }

    console.log(somma(numeroInserito + numeroComputer)); 
    
})






