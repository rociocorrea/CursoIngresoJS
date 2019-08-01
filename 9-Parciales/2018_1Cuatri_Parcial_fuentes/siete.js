function mostrar()
{
    //declaro nota y sexo de 5 alumnos
    var nota;
    var sexo;
    var contador;
    var contador1;
    var acumulador;
    var maximo;
    var minimo;

    contador=0;
    contador1=0;
    acumulador=0;

    /*SE PUEDE PEDIR LAS NOTAS Y LOS SEXOS UNA SOLA VEZ CON FOR
    for(var i=0;i<5;i++){}
    */
    do{
        //pido nota por prompt
        nota=prompt("Ingresar nota: ");

        //pido las 5 notas
        contador++;

        //valido nota
        if(isNaN(nota) && nota<0 && nota>10)
        {
            nota=prompt("ERROR");
            
        }else
        {
            nota=parseInt(nota);
        }

        /*cuando el contador es 0, la nota es a su vez
        máximo y mínimo*/
        if(contador==0){

            maximo=nota;
            minimo=nota;

        }else
        {
            /*cuando el contador NO es 0,
            y la nota es menor al mínimo,
            se convierte en el nuevo mínimo
            */
            if(nota<minimo)
            {
                minimo=nota;
            }

            /*si la nota es mayor al máximo,
            se convierte en el nuevo máximo?
            */    
            if(nota>maximo)
            {
                maximo=nota;
            }
        
        }
        
        /*sumo las notas en el acumulador
        para después dividirlo por el contador y
        hacer el promedio
        */
        acumulador+=nota;

    }while(contador<5);
    
    do{
        //pido sexo por prompt
        sexo=prompt("Ingresar sexo: ");

        //pido los 5 sexos
        contador1++;

        //valido sexo
        if(sexo!= "f" && sexo!= "m"){
            sexo=prompt("ERROR");
        }
    
    }while(contador1<5);

    alert("El promedio de las notas es: " + acumulador/contador + ". La nota más baja es: " + minimo + "");






}