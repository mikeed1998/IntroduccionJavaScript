const producto = 'Monitor de 20\" pulgadas'; // String o cadenas de texto
const producto2 = String('Monitor de 30 pulgadas');
const producto3 = new String('Monitor de 50 pulgadas'); 
const producto4 = 'Monitor HD';
const email = 'correo@correo.com';

console.log(typeof(producto));
console.log(typeof(producto2));
console.log(typeof(producto3));
console.log(producto4.length);

// IndexOf (retorna posición)
console.log(producto4.indexOf("HD"));
console.log(producto4.indexOf("a"));
console.log(email.indexOf('@'));

// Includes (retorna true o false)
console.log(producto4.includes("HD"));
console.log(producto4.includes("a"));
