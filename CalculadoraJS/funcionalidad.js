/*Comentario en Javascript*/
function init(){
	var uno= document.getElementById('uno');/*getElementById('elemento'); recupera un elemento html (en este caso un "button")*/
	var resultado= document.getElementById('resultado');
	console.log(resultado);
	var valor1=0, valor2=0;
	var operacion;

}

/*uno.onclick= function(){}, se utiliza para sobreescribir el evento de click del boton*/
uno.onclick= function(e){
	resultado.textContent = resultado.textContent  + "1"; /*document.textContent es utilizado para "escribir en una etiqueta html, siempre que esta lo permita*/
}
dos.onclick= function(e){
	resultado.textContent = resultado.textContent  + "2"; /*document.textContent es utilizado para "escribir en una etiqueta html, siempre que esta lo permita*/
}
tres.onclick= function(e){
	resultado.textContent = resultado.textContent  + "3"; /*document.textContent es utilizado para "escribir en una etiqueta html, siempre que esta lo permita*/
}

cuatro.onclick= function(e){
	resultado.textContent = resultado.textContent  + "4"; /*document.textContent es utilizado para "escribir en una etiqueta html, siempre que esta lo permita*/
}

cinco.onclick= function(e){
	resultado.textContent = resultado.textContent  + "5"; /*document.textContent es utilizado para "escribir en una etiqueta html, siempre que esta lo permita*/
}

seis.onclick= function(e){
	resultado.textContent = resultado.textContent  + "6"; /*document.textContent es utilizado para "escribir en una etiqueta html, siempre que esta lo permita*/
}

siete.onclick= function(e){
	resultado.textContent = resultado.textContent  + "7"; /*document.textContent es utilizado para "escribir en una etiqueta html, siempre que esta lo permita*/
}

ocho.onclick= function(e){
	resultado.textContent = resultado.textContent  + "8"; /*document.textContent es utilizado para "escribir en una etiqueta html, siempre que esta lo permita*/
}

nueve.onclick= function(e){
	resultado.textContent = resultado.textContent  + "9"; /*document.textContent es utilizado para "escribir en una etiqueta html, siempre que esta lo permita*/
}
cero.onclick= function(e){
	resultado.textContent = resultado.textContent  + "0"; /*document.textContent es utilizado para "escribir en una etiqueta html, siempre que esta lo permita*/
}
reset.onclick= function(e){
	resultado.textContent = "";/*document.textContent es utilizado para "escribir en una etiqueta html, siempre que esta lo permita*/
	valor1=0;
	valor2=0; 	
	operacion='';
}


factorial.onclick= function(e){
	valor1=resultado.textContent;
	var respuesta=1;
	for (var i = valor1 ; i >= 1; i--) {
		respuesta=respuesta*i;
	}
	resultado.textContent= respuesta;
	valor1=respuesta;
	valor2=0;

}

suma.onclick= function(e){
	valor1= resultado.textContent;
	operacion='s';
	resultado.textContent="";
}
resta.onclick= function(e){
	valor1= resultado.textContent;
	operacion='r';
	resultado.textContent="";
}

par.onclick= function(e){
	valor1= resultado.textContent;
	if (valor1%2==0) {
		alert("es par!");
	}else{
		alert("no es par!");
	}
}


igual.onclick= function(e){
	switch(operacion){
		case 's':
		valor2=resultado.textContent;
		resultado.textContent= parseInt(valor1)+parseInt(valor2); 	
		valor1=resultado.textContent;
		valor2=0;
		break;
		case 'r':
		valor2=resultado.textContent;
		resultado.textContent= parseInt(valor1)-parseInt(valor2); 	
		valor1=resultado.textContent;	
		valor2=0;
		break;
	}
}