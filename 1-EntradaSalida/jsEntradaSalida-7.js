/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numeroUno ;
    var numeroDos ;
    var suma ;

    numeroUno = parseInt(numeroUno) ;
    numeroDos = parseInt(numeroDos) ;

    numeroUno = document.getElementById('numeroUno').value ;
    numeroDos = document.getElementById('numeroDos').value ;

    suma = parseInt(numeroUno) + parseInt(numeroDos) ;

    alert("El resultado de la suma es : " + suma) ;
	
}

function restar()
{
	var numeroUno ;
    var numeroDos ;
    var resta ;

    numeroUno = parseInt(numeroUno) ;
    numeroDos = parseInt(numeroDos) ;

    numeroUno = document.getElementById('numeroUno').value ;
    numeroDos = document.getElementById('numeroDos').value ;

    resta = parseInt(numeroUno) - parseInt(numeroDos) ;

    alert("El resultado de la resta es : " + resta) ;

    
}

function multiplicar()
{ 
	var numeroUno ;
    var numeroDos ;
    var multiplicacion ;

    numeroUno = parseInt(numeroUno) ;
    numeroDos = parseInt(numeroDos) ;

    numeroUno = document.getElementById('numeroUno').value ;
    numeroDos = document.getElementById('numeroDos').value ;

    multiplicacion = parseInt(numeroUno) * parseInt(numeroDos) ;
    
    alert("El resultado de la multiplicación es : " + multiplicacion) ;
}

function dividir()
{
	var numeroUno ;
    var numeroDos ;
    var division ;
    
    numeroUno = parseInt(numeroUno) ;
    numeroDos = parseInt(numeroDos) ;

    numeroUno = document.getElementById('numeroUno').value ;
    numeroDos = document.getElementById('numeroDos').value ;

    division = parseInt(numeroUno) / parseInt(numeroDos) ;
    
    alert("El resultado de la división es : " + division) ;
}

