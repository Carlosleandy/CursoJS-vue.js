///Curso Vue.js : Introduccion a js. // Carlos Moreno
// parte 11: Arrays  // Destructuring de arrays

const tecnologias = ['HTML', 'CSS', 'JavaScript'];

// Destructuring:
const [primera, segunda, tercera] = tecnologias;

console.log(primera);  // HTML
console.log(tercera);  // JavaScript



//Ejemplos 2

const numeros =[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const [uno, dos, tres, cuatro] = numeros

console.log(uno, dos, tres, cuatro)

const [ , , lenguajePrincipal ] = tecnologias;

console.log(lenguajePrincipal); // JavaScript
// yo le puedo poner el nombre que quiera y llamarlo con esa vairable 
//y las coma me salta los lugares (Espacio en balco )


function mostrarNombre({ nombre }) {
    console.log(`El nombre es ${nombre}`);
}
const usuario = { nombre: 'Ana', edad: 25 };
mostrarNombre(usuario); // El nombre es Ana
