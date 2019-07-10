/*al seleccionar un mes informar. 
si estamos en Invierno: "Abrigate que hace frio." 
si aún no llego el Invierno: "Falta para el invierno." 
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!." 
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
Curso de ingreso UTN FRA
*/


function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño){

    case "Enero" :
    alert("Ya pasamos el frio, ahora calor!!!.") ;
    break ;


    case "Febrero" :
    alert("Ya pasamos el frio, ahora calor!!!.") ;
    break ;


    case "Marzo" :
    alert("Ya pasamos el frio, ahora calor!!!.") ;
    break ;


    case "Abril" :
    alert("Ya pasamos el frio, ahora calor!!!.") ;
    break ;


    case "Mayo" :
    alert("Falta para el invierno.");
    break ;


    case "Junio" :
    alert("Falta para el invierno.");
    break ;
    
    case "Julio" :
   /* alert ("Abrigate que hace frio!") ;
    break ;*/ //NO HACE FALTA DECLARAR NADA PORQUE SIN EL BREAK, EL LOOP CONTINÚA

    case "Agosto" :
    alert ("Abrigate que hace frio!") ;
    break ;

    case "Septiembre" :
    alert("Ya pasamos el frio, ahora calor!!!.") ;
    break ;

    case "Octubre" :
    alert("Ya pasamos el frio, ahora calor!!!.") ;
    break ;

    case "Noviembre" :
    alert("Ya pasamos el frio, ahora calor!!!.") ;
    break ;

    case "Diciembre" :
    alert("Ya pasamos el frio, ahora calor!!!.") ;
    break ;

}
}//FIN DE LA FUNCIÓN