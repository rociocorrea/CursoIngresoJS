/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{

    var dato ;
    //dato = "anda?" ;
    dato = document.getElementById('elNombre').value;
    //Existen dos tipos de datos erróneos: undefined y null.

    alert(dato);

}


