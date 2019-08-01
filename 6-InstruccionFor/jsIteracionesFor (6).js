function mostrar()
{
    var numero;
    var pares;
    var cont;
    cont=0;
    
    numero=prompt("Ingrese un número: ");

    while(isNaN(numero)){
        numero=prompt("ERROR");
        numero=parseInt(numero);
    }

    for(var i=1;i<=numero;i++){

        pares=i%2;

        while(pares==0){
            document.write(i + "<br>");
        }

    }

}//FIN DE LA FUNCIÓN
//numero modulo dos y resulta 0, el numero es par
//numero divisible por i = 0