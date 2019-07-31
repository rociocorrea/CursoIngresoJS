function mostrar()
{
    var sexo;

    sexo=prompt("Ingrese f o m: ");

    sexo=sexo.toLowerCase();

    do{
        sexo=prompt("Ingrese f o m: ");

    }while(sexo!="f" && sexo!= "m");

    document.getElementById('Sexo').value=sexo;
    

}//FIN DE LA FUNCIÓN

/*var sexo;
    var sexo = prompt("ingrese f ó m .");

    //pasar a minúscula

    sexo = sexo.toLowerCase();

    while(sexo != "f" && sexo != "m") 
    //si pongo O la condición siempre será verdadero y no se valida
    {
        alert("Ocurrió un error, por favor ingresar sexo nuevamente");
    }

    document.getElementById('Sexo').value=sexo;
*/