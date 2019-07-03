/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	/*var numeroUno ;
	var numeroDos ;

	numeroUno = 666 ; //asignación destructiva
	numeroDos = numeroUno ; 

	numeroUno = numeroDos ;*/

	var dato ;
	
	dato = prompt("Ingresar nombre y apellido"); //siempre retorna datos

	document.getElementById('elNombre').value = dato;



}

