/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % 
y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” 
se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, 
si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% 
de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var x ;
    var y ;
    var cantidad ;
    var marca ;
    var precio ;
    var precioDescuento ;
    var precioLámpara ;


    precioLámpara = 35 ;
    cantidad = parseInt(cantidad) ;
    precio = parseInt(precio) ;


    cantidad = document.getElementById('Cantidad').value ;
    marca = document.getElementById('Marca').value ;
    document.getElementById('precioDescuento').value = precioDescuento;


    precio = parseInt(cantidad) *  parseInt(precioLámpara);
    
    //CONDICIÓN A, 50% descuento
    if(cantidad >= 6){


        x = (parseInt(precio) * 50) / 100 ;

        precioDescuento = parseInt(precio) - x ;

        document.getElementById('precioDescuento').value = precioDescuento;
        
    
    //CONDICIÓN B, 40% descuento
    }else if(cantidad == 5 && marca == "ArgentinaLuz" ){

        precio = parseInt(cantidad) * precioLámpara;

        x = (parseInt(precio) * 40) / 100 ;
        /*x = parseInt(precio) *  40;
        y = parseInt(precio) / 100 ;*/

        precioDescuento = parseInt(precio) - x ;

        document.getElementById('precioDescuento').value = precioDescuento;
        


    //30% descuento
    }else if(cantidad == 5){

        precio = parseInt(cantidad) * precioLámpara;

        x = (parseInt(precio) * 30)/ 100 ;
        /*x = parseInt(precio) *  30;
        y = parseInt(precio) / 100 ;*/

        precioDescuento = parseInt(precio) - x ;

        document.getElementById('precioDescuento').value = precioDescuento;
        


    //CONICIÓN C, 25% descuento
    }else if(cantidad == 4 && marca == "ArgentinaLuz"  || marca == "FelipeLamparas"){

        precio = parseInt(cantidad) * precioLámpara;  

        x = (parseInt(precio) * 25)/ 100 ;
        /* x = parseInt(precio) * 25 ;
        y = parseInt(precio) / 100 ;*/

        precioDescuento = parseInt(precio) - y ;

        document.getElementById('precioDescuento').value = precioDescuento;
        

    //20% descuento
    }else if(cantidad == 4 && marca != "ArgentinaLuz" || marca != "FelipeLamparas"){

        precio = parseInt(cantidad) * precioLámpara;

        x = (parseInt(precio) * 20) / 100 ;
        /*x = parseInt(precio) *  20;
        y = parseInt(precio) / 100 ;*/

        precioDescuento = parseInt(precio) - y ;

        document.getElementById('precioDescuento').value = precioDescuento;
        

    //CONDICIÓN D, 15% descuento 
    }else if(cantidad == 3 && marca == "ArgentinaLuz"){

        precio = parseInt(cantidad) * precioLámpara;

        x = (parseInt(precio) * 15) / 100;
        /*x = parseInt(precio) *  30;
        y = parseInt(precio) / 100 ;*/

        precioDescuento = parseInt(precio) - y ;

        document.getElementById('precioDescuento').value = precioDescuento;
        


    //10% descuento
    }else if(cantidad == 3 && marca == "FelipeLamparas"){

        precio = parseInt(cantidad) * precioLámpara;

        x = (parseInt(precio) * 10) / 100 ;
        /*x = parseInt(precio) *  10;
        y = parseInt(precio) / 100 ;*/

        precioDescuento = parseInt(precio) - y ;

        document.getElementById('precioDescuento').value = precioDescuento;
        


    //5% descuento
    }else if(cantidad == 3){

        precio = parseInt(cantidad) * precioLámpara;

        x = parseInt(precio) * 5 ;
        y = parseInt(precio) / 100 ;

        precioDescuento = parseInt(precio) - y ;

        document.getElementById('precioDescuento').value = precioDescuento;        



    //CONDICIÓN E
    }else if(precioDescuento > 120){
        
        x = parseInt(precio) * 10 ;
        y = parseInt(precio) / 100 ;

        precioImpuesto = parseInt(precio) + y ;

        document.getElementById('precioDescuento').value = precioDescuento;

        alert("Usted pagó " + precioImpuesto + " de IIBB.") ;


    }
    
}
