function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var examen ;

	//Si tomo solo Math.random() * 11, me tiraría sólo números decimales, se utiliza el floor para redondear
	//Math.random (número máximo * número mínimo) + mínimo;
	examen = (Math.floor(Math.random() * 11)) ;	

	alert(examen) ;

	if(examen >= 9){
		alert("EXCELENTE") ;
	}else if(examen >= 4 && examen <=8){
		alert("APROBÓ") ;
	}else if(examen < 4){
		alert ("Vamos, la próxima se puede") ;
	}

}//FIN DE LA FUNCIÓN