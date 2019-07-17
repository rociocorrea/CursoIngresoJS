function mostrar()
{
    var sexo;
    var sexo = prompt("ingrese f ó m .");

    while(sexo != "f" && sexo != "m")
    {
        alert("Ocurrió un error, por favor ingresar sexo nuevamente");
    }

    document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN