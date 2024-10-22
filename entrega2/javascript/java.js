const productos = [
    { nombre: 'Manzana', precio: 10 },
    { nombre: 'Banana', precio: 12 },
    { nombre: 'Naranja', precio: 15 },
];

let carrito = [];

function agregarAlCarrito(nombreProducto, cantidad) {
    const producto = productos.find(p => p.nombre.toLowerCase() === nombreProducto.toLowerCase());
    if (producto) {
        carrito.push({ ...producto, cantidad });
        console.log(`Agregado al carrito: ${producto.nombre} x ${cantidad}`);
    } else {
        alert('ese producto no existe');
    }
}

function calcularTotal() {
    return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
}

function mostrarCarrito() {
    console.log('tu carrito tiene:');
    carrito.forEach(item => {
        console.log(`${item.nombre} x ${item.cantidad} - $${(item.precio * item.cantidad).toFixed(2)}`);
    });
    console.log(`Total: $${calcularTotal().toFixed(2)}`);
}

function iniciarCarrito() {
    let continuar = true;
    
    while (continuar) {
        const nombreProducto = prompt('Ingrese el producto que desea agregar (Manzana, Banana, Naranja):');
        const cantidad = parseInt(prompt('Ingrese la cantidad:'));
        
        agregarAlCarrito(nombreProducto, cantidad);

        continuar = confirm('¿Desea agregar otro producto?');
    }

    mostrarCarrito();
}

iniciarCarrito();

