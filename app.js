const IVA_TASA = 0.16;
const DESCUENTO_UMBRAL = 200;
const DESCUENTO_TASA = 0.10;

let carrito = [];
let productos = [
    { nombre: "Laptop", precio: 500 },
    { nombre: "Mouse", precio: 20 },
    { nombre: "Teclado", precio: 30 }
];

let nombre = prompt("Ingresa tu nombre:");
console.log("Hola, " + nombre + "!");

console.log("Productos:");
for (let i = 0; i < productos.length; i++) {
    console.log((i + 1) + ". " + productos[i].nombre + " - $" + productos[i].precio);
}

let opcion = parseInt(prompt("Elige un producto (1-3):"));
if (opcion >= 1 && opcion <= 3) {
    let confirmar = confirm("¿Agregar " + productos[opcion - 1].nombre + "?");
    if (confirmar) {
        carrito.push(productos[opcion - 1]);
        console.log("Agregado!");
    } else {
        console.log("No agregado.");
    }
} else {
    alert("Opción inválida.");
}

if (carrito.length === 0) {
    console.log("Carrito vacío.");
} else {
    console.log("Tu carrito:");
    let subtotal = 0;
    carrito.forEach(function(item) {
        console.log(item.nombre + " - $" + item.precio);
        subtotal = subtotal + item.precio;
    });
    

    let descuento = 0;
    if (subtotal > DESCUENTO_UMBRAL) {
        descuento = subtotal * DESCUENTO_TASA;
        console.log("Descuento: -$" + descuento);
    }
    subtotal = subtotal - descuento;
    let iva = subtotal * IVA_TASA;
    let total = subtotal + iva;
    
    console.log("Subtotal: $" + subtotal);
    console.log("IVA: $" + iva);
    console.log("Total: $" + total);
    
    alert("Gracias por tu compra.");
}



