dominiosValidos = ['@gmail.com', '@outlook.com', '@hotmail.com']

function validaEmail(email) {

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email) && dominioValido(email)){                           
            alert("EMAIL VALIDO");
        }else{
        	if(!email.length){
        		alert("CAMPO VAZIO!");	
        	}else{
        		alert("EMAIL INVALIDO!");	
        	}
        	
        }
    }

function dominioValido(email){
 var dominioValido = false;
 for(var index = 0; index < dominiosValidos.length;index++){
 	var dominioAtual = dominiosValidos[index];
	if(email.indexOf(dominioAtual, email.length - dominioAtual.length) !== -1){
         dominioValido = true;         
        }
	}
	return dominioValido; 	
}

var formulario = document.getElementById('meuForm');
var input = document.getElementById('email');
formulario.addEventListener('submit', function(e){
	e.preventDefault();
	validaEmail(input.value);
})
