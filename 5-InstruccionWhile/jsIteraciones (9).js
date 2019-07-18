function mostrar()
{
	var numero;
	var contador=0;
	var maximo;
	var minimo;
	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		contador++;
		numero=prompt("Ingresar un número");
		numero=parseInt(numero);

		while(isNaN(numero))
		{
			numero=prompt("ERROR, ingresar un NÚMERO");
		}

		respuesta=prompt("Quiere seguir agregando números?");

		if(contador == 1)
		{
			minimo = numero;
			maximo = numero;


	//ESTAN MAL LAS CONDICIONES, ME TIRA SOLO EL PRIMER NUM QUE INGRESO
			if(numero < minimo)
			{
				numero = minimo;

			}else if(numero > maximo)
			{
				maximo = minimo;
			}
		}
		/*; minimo y maximo 
		maximo 0 number
		minimo = num
		*/

		document.getElementById('maximo').value= maximo;
		document.getElementById('minimo').value= minimo;
		/* numero<minimo
		minimo = mni
		num mayor a max
		max=min
		*/


	}

}//FIN DE LA FUNCIÓN