function mostrar()
{//tomo la edad

    var edad ;

    edad = document.getElementById('edad').value ;

    /*NO ME TOMA if((edad < 13) && (edad > 17)) {
        alert(Usted NO es adolescente!) ;
    }*/
    if(edad < 13){
        alert("Usted NO es adolescente!") ;

    }else if(edad > 17){
        alert("Usted NO es adolescente!") ;
    }

}//FIN DE LA FUNCIÓN