"use strict" // Correr JS en modo estricto, exige buenas prácticas

// Objeto nuevo
const producto = {
	nombreProducto : 'Monitor de 20 pulgadas',
	precio: 300,
	disponible: true
}

const producto2 = {
	nombreProducto : 'Monitor de 20 pulgadas',
	precio: 300,
	disponible: true
}

Object.freeze(producto); // No permite agregar y eliminar propiedades de un objeto, no puedes cambiar el valor
Object.seal(producto2); // No permite agregar y eliminar, pero si puedes cambiar el valor

//producto.imagen = 'imagen.jpg';
// producto.nombreProducto = "hola";
producto2.nombreProducto = 'imagen.jpg';

console.log(Object.isFrozen(producto));
console.log(Object.isSealed(producto2));

console.log(producto);
console.log(producto2);