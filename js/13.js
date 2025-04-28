//Curso Vue.js : Introduccion a js. // Carlos Moreno
// parte 13: Funtion Delcaration

// funsion se puede reutilizar 
// se utiliza nombres Nombres descrictivo 

// Ejemplos
function sumar(){
    console.log (1+1)
}

sumar()


// vamos hacerlo mas dinamico en este caso se pasaran dos parametros 
// Parametros y algumentos 
function Restar(numero1, numero2){ // eso se le conoce como el parametro de la funcion: numero1, numero2
    console.log(numero1-numero2)
}

Restar(10,5) // Estos son los argumentos 
Restar(25,5) // 
Restar(50,5) // 


// Parametros por Default

function sumaConParametro(numero1 = 0, numero2 = 0){ // si la suma no le pasan los argumentos entonces tomar el 0.
    console.log(numero1-numero2)
}
sumaConParametro()