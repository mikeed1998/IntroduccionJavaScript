// POO

//** Object Literal
const producto = {
	nombre: 'Tablet',
	precio: 500
}

//** Object Constructor
// Una forma de almacenar la forma como los datos que va a tener una dato en especifico 

function Producto(nombre, precio) {
	this.nombre = nombre;
	this.precio = precio;
}

function Cliente(nombre, apellido) {
	this.nombre = nombre;
	this.apellido = apellido;
}

Cliente.prototype.formatearCliente = function(){
	return `El Cliente se llama: ${this.nombre} ${this.apellido}`; 
};

const producto2 = new Producto("Monitor curvo de 49\"", 800);
const producto3 = new Producto("Laptop", 300);

const cliente = new Cliente('Michael Eduardo', 'Sandoval Perez');


function formatearProducto(producto) {
	return `El producto ${producto.nombre} tiene un precio de: $${producto.precio}`;
}

console.log(formatearProducto(producto2));

// Crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatearProducto = function() {
	return `El producto ${this.nombre} tiene un precio de: $${this.precio}`;
}

console.log(cliente.formatearCliente());
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());













