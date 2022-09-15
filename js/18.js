function sumar(numero1 = 0, numero2 = 0) { // numero1, numero2 son parámetros, tambíen son parámetros por default al inicializarse
	console.log(numero1 + numero2);
}

sumar(10, 10); // Argumentos o los valores reales
sumar(3, 3);
sumar(3, 6);
sumar(1, 2);   
sumar(1);
sumar();

const sumar2 = function(numero1, numero2) {
	console.log(numero1 + numero2);
}

sumar2(5, 10);
