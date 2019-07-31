function mostrar()
{
    var repeticiones;
    repeticiones = prompt("Ingrese el número de repeticiones");

    while(isNaN(repeticiones)){
        repeticiones=prompt("ERROR");
        repeticiones=parseInt(repeticiones);
        
    }

    for(var i=repeticiones;i>0;i--){
        console.log("Hola UTN FRA");
    }

}//FIN DE LA FUNCIÓN