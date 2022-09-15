const producto = {
	nombreProducto : 'Monitor de 20 pulgadas',
	precio: 300,
	disponible: true
}

/*
const precioProducto = producto.precio;
const nombreProducto = producto.nombreProducto;

console.log(precioProducto);
console.log(nombreProducto);
*/

// Destructuring de objetos

const {precio} = producto;
const {nombreProducto, disponible} = producto;

console.log(precio);