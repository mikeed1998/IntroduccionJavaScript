// Classes

class Producto {
	constructor(nombre, precio) {
		this.nombre = nombre;
		this.precio = precio;
	}

	formatearProducto() {
		return `El producto ${this.nombre} tiene un precio de: $${this.precio}`;
	}

	obetenerPrecio() {
		console.log(this.precio);
	}
}

const producto2 = new Producto("Monitor curvo de 49\"", 800);

console.log(producto2.formatearProducto());

// Herencia

class Libro extends Producto {
	constructor(nombre, precio, isbn) {
		super(nombre, precio);
		this.isbn = isbn;
	}

	formatearProducto() {
		return `${super.formatearProducto()} y su IBSN es ${this.isbn}`;
	}

	obetenerPrecio() {
		super.obetenerPrecio();
		console.log('Y si hay en existencia');
	}
}

const libro = new Libro('JavaScript', 120, '123456675');

console.log(libro.formatearProducto());
