//Curso Vue.js : Introduccion a js. // Carlos Moreno
// parte 20: Operador Ternarion - (condicion) ? si se cumple : si no se cumple

const disponible = 800
const total = 6900
const  tarjeta = false

tarjeta || disponible >= total? console.log("si se puede ") : console.log("no se pudo")

disponible >= total ? console.log("si se puede ")
            : tarjeta ? console.log("Si puedes pagar") 
            : console.log("no se pudo")