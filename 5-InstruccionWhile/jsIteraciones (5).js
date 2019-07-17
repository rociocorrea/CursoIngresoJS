function mostrar()
{
    var sexo;
    var sexo = prompt("ingrese f ó m .");

    //pasar a minúscula

    sexo = sexo.toLowerCase();

    while(sexo != "f" && sexo != "m") 
    //si pongo O la condición siempre será verdadero y no se valida
    {
        alert("Ocurrió un error, por favor ingresar sexo nuevamente");
    }

    document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN