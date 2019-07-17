function mostrar()
{	var numero;
	var contador=0;
	var acumulador=0;


	contador = prompt("Ingrese un numero");

	while(contador>5)
	{
		contador++;
		acumulador++;
		numero = prompt("Ingrese un numero");

	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN