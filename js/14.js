//Curso Vue.js : Introduccion a js. // Carlos Moreno
// parte 14: Funtion Expression

console.log('\n Esta las funcion funciona solo funsioma con las llamada hacia bajo, como una variable')
const Restar = function (numero1, numero2){ // eso se le conoce como el parametro de la funcion: numero1, numero2
    console.log(numero1-numero2)
}

// ESE TIPO DE FUNFION ES como una variable y la otra es una funcionon 

Restar(10,5) // Estos son los argumentos 
Restar(25,5) // 
Restar(50,5) // 


/*
Restar(10,5) // Estos son los argumentos 
Restar(25,5) // 
Restar(50,5) // 

// Aqui da error porque  el const funciona para bajo del solamente  

const Restar = function (numero1, numero2){ // eso se le conoce como el parametro de la funcion: numero1, numero2
    console.log(numero1-numero2)
}

*/
console.log('\n Esta sin importar donde uno llame la funcion se hace.')
minimizar(10,5) // Estos son los argumentos 
minimizar(25,5) // 
minimizar(50,5) // 

// Aqui da error porque  el const funciona para bajo del solamente  

function minimizar (numero1, numero2){ // eso se le conoce como el parametro de la funcion: numero1, numero2
    console.log(numero1-numero2)}