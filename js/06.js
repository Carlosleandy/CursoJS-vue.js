///Curso Vue.js : Introduccion a js. // Carlos Moreno
// parte 5: Los Objeto (Destructuring a 2 o mas objetos)

// ------------------------------- Destructuring a 2 o mas objetos -----------------------------------

const producto = {
  nombre: "Laptop",
  presio: 10000,
  disponible: true,
};

const cliente = {
  nombre: "Leandy",
  vip: true,
};

console.log(producto.nombre, cliente.nombre);

// --------------------------- APLICANDO AHORA EL Destructuring ----------------------------------------

const { nombre } = producto;
const { nombre: nombreC } = cliente;

console.log(nombre);
console.log(nombreC);
