// Arrow Functions

const sumar2 = (n1, n2) => console.log(n1 + n2);
sumar2(5, 10);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);
aprendiendo('JavaScript');

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');

const carrito = [
	{ nombre: 'Monitor 20 pulgadas', precio: 500 },
	{ nombre: 'Television 50 pulgadas', precio: 700 },
	{ nombre: 'Tablet', precio: 300 },
	{ nombre: 'Audifonos', precio: 200 },
	{ nombre: 'Teclado', precio: 50 },
	{ nombre: 'Celular', precio: 500 },
	{ nombre: 'Bocinas', precio: 300 },
	{ nombre: 'Laptop', precio: 800 }
];

// forEach
meses.forEach(mes => {
	if(mes == 'Marzo') {
		console.log("Marzo si existe");
	}
});

// Includes
const resultado = meses.includes('Diciembre');
console.log(resultado);

// Some ideal para arreglos de objetos
let resultado2;
resultado2 = carrito.some(producto => producto.nombre === "Celular PRO");

console.log(resultado2);

// Reduce 
let resultado3;
resultado3 = carrito.reduce((total, producto) => total + producto.precio, 0);

console.log(resultado3);

// Filter
resultado4 = carrito.filter(producto => producto.precio > 400);
resultado5 = carrito.filter(producto => producto.nombre === 'Celular');

console.log(resultado4);
console.log(resultado5);






















