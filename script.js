let productos = [
    { id: 1, nombre: "Carpa", categoria: "Camping", propiedad: "2 mt x 2 mt x 2 mt", precio: 23000, stock: 10 },
    { id: 2, nombre: "Bolsa de dormir", categoria: "Camping", propiedad: "2 mt x 0,70 cm", precio: 12000, stock: 10 },
    { id: 3, nombre: "Reposera", categoria: "Playa", propiedad: "Color de acuerdo a stock", precio: 11000, stock: 10 },
    { id: 4, nombre: "Mate", categoria: "Varios", propiedad: "Incluye Mate y bombilla", precio: 5000, stock: 10 },
    { id: 5, nombre: "Repasador", categoria: "Hogar", propiedad: "30 cm x 40 cm", precio: 1200, stock: 0 },
    { id: 6, nombre: "Pava Eléctrica", categoria: "Electrodomésticos", propiedad: "Capacidad 1 litro", precio: 18000, stock: 10 },
    { id: 7, nombre: "Microondas", categoria: "Electrodomésticos", propiedad: "30 litros", precio: 45000, stock: 0 },
    { id: 8, nombre: "Termo", categoria: "Varios", propiedad: "1,2 litros", precio: 8500, stock: 10 },
    { id: 9, nombre: "Sombrilla", categoria: "Playa", propiedad: "Radio 1,4 mt", precio: 9000, stock: 10 },
    { id: 10, nombre: "Trapo de piso", categoria: "Hogar", propiedad: "40 cm x 50 cm", precio: 1500, stock: 10 }
]

function mostrarPorPantalla(mensaje) {
    alert(mensaje)
}

mostrarPorPantalla("¡Bienvenidos a TU TIENDA!")

let seleccionProducto = 99
let carritoDeCompras = []
let importeTotal = 0

while (seleccionProducto != 0) {

    let productosConStock = productos.filter(producto => producto.stock > 0)
    let salida = "Listado de Productos disponibles: \n\n"
    for (const producto of productosConStock) {
        salida = salida + producto.id + " - " + producto.nombre + " - " + producto.propiedad + " - Precio: $" + producto.precio + "\n"
    }

    seleccionProducto = prompt("Ingresa ID de producto a agregar a tu carrito: \n0 para terminar\n" + salida)

    let productoAgregado = productos.filter((producto) => producto.id == seleccionProducto)
    for (const prod of productoAgregado) {
        mostrarPorPantalla("Agregaste a tu carrito: \n\nProducto: " + prod.nombre + "\nCategoría: " + prod.categoria + "\nCaracterísticas: " + prod.propiedad + "\nPrecio: $" + prod.precio)
        carritoDeCompras.push({ id: prod.id, nombre: prod.nombre, propiedad: prod.propiedad, categoria: prod.categoria, precio: prod.precio })
    }
}

let cantidadProductosCarrito = carritoDeCompras.length

if (cantidadProductosCarrito == 0) {
    mostrarPorPantalla("Su carrito de compras está vacío\nVuelvan prontros!")
} else {
    carritoDeCompras.forEach(element => {
        importeTotal = importeTotal + element.precio
    });
    let cantidadTotal = carritoDeCompras.length
    mostrarPorPantalla("Tu carrito tiene " + cantidadTotal + " de productos\nEl importe total a pagar es de: $" + importeTotal)
    mostrarPorPantalla("Gracias por tu compra!\n\nVuelvan prontos!")
}
