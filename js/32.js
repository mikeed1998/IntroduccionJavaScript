// Async / await -> es la base del desarrollo de JS y sus frameworks en la actualidad

function descargarNuevosClientes() {
	return new Promise(resolve => {
		console.log('Descargando clientes... espere...');

		setTimeout(() => {
			resolve('Los clientes fueron descargados');
		}, 5000);
	})
}

function descargarUltimosPedidos() {
	return new Promise(resolve => {
		console.log('Descargando pedidos... espere...');

		setTimeout(() => {
			resolve('Los pedidos fueron descargados');
		}, 3000);
	})
}

async function app() {
	try {
		/*
		const clientes = await descargarNuevosClientes();
		const pedidos = await descargarUltimosPedidos();
		console.log(clientes);
		console.log(pedidos);
		*/
		const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
		console.log(resultado[0]);
		console.log(resultado[1]);
	} catch (error) {
		console.log(error);
	}
}

app();

console.log('Este código no se bloquea');

/*
setInterval(function(){	// Por intervalos, cada 3000 = 3 segundos hara la acción
	conso.log('set timeout...');
}, 3000);
*/

/*
setTimeout(function(){	// Por tiempo, esperará 5000 = 5 segundos para mostrar solo una vez la acción
	conso.log('set timeout...');
}, 5000);
*/


/*
function descargarNuevosClientes() {
	return new Promise(resolve => {
		console.log('Descargando clientes... espere...');

		setTimeout(() => {
			resolve('Los clientes fueron descargados');
		}, 5000);
	})
}

async function app() {
	try {
		const resultado = await descargarNuevosClientes();
		console.log(resultado);
	} catch (error) {
		console.log(error);
	}
}

app();

console.log('Este código no se bloquea');
*/