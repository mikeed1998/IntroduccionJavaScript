// Declaración de función
function sumar() { // Se puede llamar primero, lo toma como función
	console.log(10 + 10);
}

sumar();

// Expresión de la función
const sumar2 = function() { // No se puede llamar primero, lo toma como variable
	console.log(3 + 3);
}

sumar2();

// Es posible utilizar funciones y variables de otros archivos
// IIFE - Se llaman a si mismas, es segura para que no se llamen cosas de otros archivos
(function() {
	console.log('Esto es una funcion');
})();

// JS primero registra las llamadas y despues las declaracipnes, da dos vueltas al ejecutarse, vuelta un registra la funciones, vuelta dos ejecuta

