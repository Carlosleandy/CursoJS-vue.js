///Curso Vue.js : Introduccion a js. // Carlos Moreno
// parte 4: Los Objeto

// Los Objeto son un conjunto de propiedades

// Propiedades
let nombreProducto = "table";
let precioProducto = 1000;
let disponible = true;

//  estan conformado por dichas propiedades
// Ejemplos

const Producto2 = {
  nombre: "Table",
  presio: 2000,
  disponible: true,
};
// .... 
console.log(Producto2);
console.table(Producto2); // para ver el objeto en forma de tabla

// formas para aceder a los valores del objeto
console.log(Producto2.nombre);
console.log(Producto2.presio);

console.log(Producto2["nombre"]); // otra forma menos habitual

// otra sintaxis muy utilizada
// es el Destructuring : sacar un valor de una estrutura

const { nombre, presio } = Producto2;

console.log(nombre);
console.log(presio);

//object literal

const aunteticado = true;
const nombre01 = "juan";

const nuevoObject = {
  aunteticado,
  nombre: nombre01,
};

console.log(nuevoObject);
