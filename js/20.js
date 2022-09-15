// Métodos de propiedad
const reproductor = {
	reproducir: function(id) {
		console.log(`Reproduciendo la cancion con el ID: ${id}`);
	},
	pausar: function() {
		console.log('Pausando...');
	},
	crearPlayList: function(nombre) {
		console.log(`Creando la PlayList: ${nombre}`);
	},
	reproducirPlayList: function(nombre) {
		console.log(`Reproduciendo la PlayList: ${nombre}`);
	}
}

reproductor.borrarCancion = function(id) {
	console.log(`Eliminando la cancion: ${id}`);
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlayList('Heavy Metal');
reproductor.reproducirPlayList('Heavy Metal');