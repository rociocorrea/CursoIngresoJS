/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
//var define variables
var nombre ;
//nombre = "Maria" ; asignación de valor a variable

nombre = prompt("Ingresar nombre y apellido", "Harry Potter");
//Se muestra como ventana emergente

alert("Su nombre es: " + nombre) ;

/* llama a la variable nombre con alert
cuando el parámetro esta con comillas se nombra valor literario y 
se puede concatenar con variables. Ejemplo :
alert("Su nombre es: " + nombre);
*/	
}
