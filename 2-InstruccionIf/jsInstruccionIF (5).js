function mostrar()
{//tomo la edad

    var precio ;

    precio = document.getElementById('edad').value ;

    if(precio < 25){
        alert("BARATO!") ;
    }else{
        if(precio > 75){
            alert("CARO!") ;
        }else {
            alert("BIEN!");
        }
    }
    /*
    var edad ;

    edad = document.getElementById('edad').value ;

    if(edad > 18){
        alert("Usted NO es adolescente!") ;
    }

    */

}//FIN DE LA FUNCIÓN