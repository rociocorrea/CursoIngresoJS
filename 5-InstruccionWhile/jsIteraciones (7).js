function mostrar()
{
	//declaro variable numero para los numeros ingresados
	var numero;
	var contador=0;
	var acumulador=0;
	var respuesta='si';

	/*empiezo bucle while con condición,
	si escribo algo distinto a no, debe ejecutar la condición
	y sigue pidiendo números
	*/
	while(respuesta == 'si')
	{
		contador++;
		
		numero=prompt("Ingrese un número");
		numero = parseInt(numero);

		while(isNaN(numero))
	{
		numero=prompt("ERROR, Ingresar un número");
	}
	
	respuesta=prompt("Quiere seguir ingresando números?");
	
	acumulador += numero;
	}


	
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN