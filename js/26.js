// This -> Hace referencia al objeto sobre el cual se esta mandando a llamar la función

const reservacion = {
	nombre: 'Michael Eduardo',
	apellido: 'Sandoval Perez',
	total: 5000,
	pagado: false,
	informacion: function() {
		console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
	}
}

// Usar arrowfunction da undefined
// El arrowfunction hace referencia a window,  no funciona dentro de reservacion, para que funcione hace primero
// window.nombre = "nombre", ya funcionaria 

console.log(reservacion.informacion());