/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numeroUno ;
    var numeroDos ;
    var resultado ;

    numeroUno = parseInt(numeroUno) ;
    numeroDos = parseInt(numeroDos) ;

    numeroUno = document.getElementById('numeroUno').value ;
    numeroDos = document.getElementById('numeroDos').value ;

    resultado = parseInt(numeroUno) + parseInt(numeroDos) ;

    alert("El resultado de la suma es : " + resultado) ;


}


