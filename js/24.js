// Ciclo for
for(let i = 0; i < 10; i++) {
	console.log(i);
}

for(let i = 0; i < 10; i++) {
	if(i % 2 == 0) {
		console.log(`El numero ${i} es PAR`);
	} else {
		console.log(`El numero ${i} es IMPAR`);
	}
}

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

for(let i = 0; i < carrito.length; i++) {
	console.log(carrito[i].nombre);
}

// Ciclo while
let i = 0;

while(i < 10) {
	if(i % 2 == 0) {
		console.log(`El numero ${i} es PAR`);
	} else {
		console.log(`El numero ${i} es IMPAR`);
	}

	i++;
}

// Ciclo do while

let j = 0;

do {
	console.log(i);
	j++;
}while(j < 10);













