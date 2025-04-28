//Curso Vue.js : Introduccion a js. // Carlos Moreno
// parte 18: Operador de comparacion

const numero1 = 20;
const numero2 = '20';

// procedemos a comparar 

if(numero1 == numero2){ // Operado que solo revisa el valor y no el tipo de datos
    console.log('Si son iguales')
}   else{
    console.log('No son iguales')
}

if(numero1 === numero2){ // Operador estricto 
    console.log('Si son iguales')
}   else{
    console.log('No son iguales')
}

console.log(typeof numero1,  typeof numero2) // String y number