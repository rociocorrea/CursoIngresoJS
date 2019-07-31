
function mostrar()
{
    var ancho ;
    var largo ;
    var perimetro;

    ancho = prompt("Ingresar el ancho de su rectángulo:");
    largo = prompt("Ingresar el largo de su rectángulo");

    ancho = parseInt(ancho);
    largo = parseInt(largo);

    perimetro = (ancho + largo)* 2;

    alert("El perímetro del rectángulo es: " + perimetro);



}
