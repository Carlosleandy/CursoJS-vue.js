///Curso Vue.js : Introduccion a js. // Carlos Moreno
// parte 8: Template Strings o Concatenación

const cliente = "Juan";
const saldo = 20000;

//Ejemplo con las propiedades
//Ejemplo con concatenacion 
console.log('El cliente:' + cliente + 'saldo:'+saldo)
console.table('El cliente:', cliente, 'saldo:', saldo)

console.log("\n")
// ahora con template Strings
console.log(`El Cliente : ${cliente} tiene un saldo de: ${saldo}` )
console.table(`El Cliente : ${cliente} tiene un saldo de: ${saldo}` )


const producto = {
    nombre : "Laptop",
    precio : 4000,
    disponible : true 
};

// Ejemplos con los objeto
console.log("\n")
console.log(`EL nombre del Producto es: ${producto.nombre} y su precio es de ${producto.precio}`)
console.log("\n")
console.table(`EL nombre del Producto es: ${producto.nombre} y su precio es de ${producto.precio}`)