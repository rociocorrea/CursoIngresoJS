function mostrar()
{
	var numero;

	numero=prompt("Ingresar un número entre 0 y 9");

	do{
		numero=parseInt(numero);

	}while(isNaN(numero));

	while(numero>9 || numero < 0)
	{
		numero = prompt("EL NÚMERO ESTÁ FUERA DEL PARÁMETRO, ingrese un número entre 0 y 10.");
	}

	document.getElementById('Numero').value = numero;



}//FIN DE LA FUNCIÓN

/*	var numero;
	var numero = prompt("ingrese un número entre 0 y 10.");

	numero = parseInt(numero);
	//PRIMERO VALIDAR QUE NUMERO SEA UN NÚMERO Y NO UNA LETRA O CARACTER
	while(isNaN(numero))
	{
		numero = prompt("EROR, ingrese un NUMERO");
		numero = parseInt(numero);
	}

	while(numero>9 || numero < 0)
	{
		numero = prompt("EL NÚMERO ESTÁ FUERA DEL PARÁMETRO, ingrese un número entre 0 y 10.");
	}
	
	document.getElementById('Numero').value= numero;
*/