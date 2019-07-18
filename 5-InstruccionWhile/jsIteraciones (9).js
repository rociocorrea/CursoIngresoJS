function mostrar()
{
	var numero;
	var contador=0;
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

		Math.max(numero);
		Math.min(numero);
		
	}




}//FIN DE LA FUNCIÓN