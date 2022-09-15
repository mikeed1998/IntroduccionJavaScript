// Arreglos o Arrays

const numeros = [10, 20, 30, 40, 50];
console.table(numeros);

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');
console.table(meses);

const arreglo = ["Hola", 10, true, "si", null, {nombre: "Michael", trabajo: 'Programador'}, [1, 2, 3]];
console.log(arreglo);

// Acceder a los valores de un arreglo
console.log(numeros[4]);
console.log(numeros[200]); // undefined

// Conocer la extensión de un arreglo
console.log(meses.length);

numeros.forEach(function(numero){
	console.log(numero);
});

numeros[5] = 60;
console.log(numeros);

// No se recomienda modificar el arreglo original
numeros.push(70, 80, 90); // Al final del arreglo
console.log(numeros);

numeros.unshift(-10, -20, -30); // Al principio del arreglo
console.table(numeros);

meses.pop(); // Elimina el ultimo elemento
meses.shift(); // Elimina el primer elemento
console.table(meses);

meses.splice(1, 1); // Elimina por posición
console.table(meses);

// Rest Operator o Spread Operator
// RECOMENDADO, Evita modificar el arreglo original, crea una copia

// const nuevoArreglo = ['Junio', ...meses];
const nuevoArreglo = [...meses, 'Junio'];
console.log(nuevoArreglo);















