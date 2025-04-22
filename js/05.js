///Curso Vue.js : Introduccion a js. // Carlos Moreno
// parte 5: Los Objeto (Manipulacion)

const Producto03 = {
  nombre: "Laptop",
  presio: 10000,
  disponible: true,
};

//Object.seal(Producto03);
//Object.freeze(Producto03);
console.table(Producto03);

// Editar o re-escribir valor
Producto03.nombre = "Telefono";

// añadir campos
Producto03.imagen = "imagen.jpg";

// ELIMINAR PRODUCTO
delete Producto03.disponible;

console.table(Producto03);

// Otra tecnica para eliminar producto mas Moderna. supongamos que quiero eliminar img
const { imagen, ...Producto02 } = Producto03;
console.table(Producto02);

//Object.freeze(Producto03);
//Object.seal(Producto03);
