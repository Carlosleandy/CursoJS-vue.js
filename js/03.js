//Curso Vue.js : Introduccion a js. // Carlos Moreno
// parte 3: Tipo de datos

// ----------------------------------- 1- undefined
let pacientes;
console.log(pacientes);

//-------------------------------------- 2- booleanos -- boolean
let aprediendoVueJS = true;
console.log(typeof aprediendoVueJS);

//-------------------------------------3- number
const numero1 = 99.99;
console.log(typeof numero1);

const numero2 = 100;
console.log(typeof numero2);

const numero3 = -100;
console.log(typeof numero3);

//-------------------------------- 4- strings o cadena de texto en db conosido como varchar
const empleado = "Nesser";
console.log(typeof empleado);

//----------------------------------------------------------- 5 - bigint
// Ejemplos para tipo de datos BigInt -- Numero muy grandes
let numeroGrande = BigInt(1000000000000000);
console.log(typeof numeroGrande);

// el bigint no se mescla o no se puede sumar con otra variable de numero.
// miestra que dos variables tipo number si.
// ejemplos

console.log(numero1 + numero2 + numero3);
// semuestra el resultado = 99.99

//console.log(numero1 + numeroGrande);
/* da error Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
De la una forma que covertirlo a tipo de numero
*/
//Ejemplo
console.log(numero2 + Number(numeroGrande));
//de esta forma lo logramos sumar y el resultado fue de = 1000000000000100

// -------------------------------------- 6- Symbols
const primerSymbol = Symbol(1);
const segundoSymbol = Symbol(1);

console.log(primerSymbol === segundoSymbol);
// EL resultado es false

const numero01 = 1;
const numero02 = 1;

console.log(numero01 === numero02);
// resultado Verdadero

// Lo que esto demuestra es que cada symbol es unico

// ----------------------------------------- 7- object
//ejemplo 1
const numero = [1, 2, 3];
console.log(typeof numero);

//ejemplos 2
const descuento = null;
console.log(typeof descuento);

//ejemplos 3
const clientes = {};
console.log(typeof clientes);
