/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo ;
    var resultado ;

    sueldo = parseInt(sueldo) ;
    resultado = parseInt(resultado) ;

    sueldo = document.getElementById('sueldo').value ;

    resultado = parseInt(sueldo) * 1.1 ;

    document.getElementById('resultado').value = resultado ;

	
}
