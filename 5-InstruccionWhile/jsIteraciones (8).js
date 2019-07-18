function mostrar()
{
	var numero;
	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';

	while(respuesta != 'no')
	{
		contador++;
		numero=prompt("Ingresar un número");
		numero=parseInt(numero);

		while(isNaN(numero))
		{
			numero=prompt("ERROR, ingrese número");
		}

		respuesta=prompt("Quiere seguir ingresando números?");

		if(numero >0)
		{
			positivo += numero;

		}else 
		{
			negativo *= numero;
		}

	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN