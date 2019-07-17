function mostrar()
{
	var numero;
	var numero = prompt("ingrese un número entre 0 y 10.");

	while(numero>9)
	{
		numero = prompt("EL NÚMERO ES MAYOR A DIEZ, ingrese un número entre 0 y 10.");
	}
	
	document.getElementById('Numero').value= numero;


}//FIN DE LA FUNCIÓN