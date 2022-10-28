const bottoneVerify = document.getElementById("button")

bottoneVerify.addEventListener('click', function (){
    parolaInserita = document.getElementById("testo").value;

    if (isPali(parolaInserita)){
        alert( 'E\' una parola palindrome');
        console.log( 'E\' una parola palindrome');
    } else {
        alert ('Non è palindrome')
        console.log('Non è palindrome'); 
    }
    
    function isPali(testo) {
        if(Array.from(testo).toString() == (Array.from(testo).reverse()).toString()) {
            return true
        } else {
            return false
        }
    }

});






