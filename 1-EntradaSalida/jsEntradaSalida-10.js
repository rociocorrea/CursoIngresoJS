/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe ;
    var x ;
    var y ;
    var resultado ;

    var numUno = parseInt(importe) ;

    importe = document.getElementById('importe').value ; 

    x = parseInt(importe) *25 ;
    y = x / 100 ;
    resultado = parseInt(importe) - y ;

    document.getElementById('resultado').value = resultado;
}
