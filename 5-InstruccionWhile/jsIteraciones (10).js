function mostrar()
{
	var numero;
	var contador=0;
	var negativos=0;
	var positivos= 0;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		contador++;
		numero=prompt("Ingresar un número");
		numero=parseInt(numero);

		while(isNaN(numero))
		{
			numero=prompt("ERROR, ingrese número nuevamente");
		}

		respuesta=prompt("Quiere seguir agregando números?");

		if(numero < 0)
		{
			resultado= (negativos += numero);
		}
		
	
	}

	document.write(resultado);


}//FIN DE LA FUNCIÓN