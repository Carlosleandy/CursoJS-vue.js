//Curso Vue.js : Introduccion a js. // Carlos Moreno
// parte 19: operador or || y && (AND)

const disponible = 500
const total = 600
const  tarjeta = true

if(tarjeta === true){
    console.log('Puedes pagar')
} else if (disponible >= total){
    console.log('Puedes Pagar')
} else {
    console.log('No Puedes Pagar')
}

console.log('\n')                            // -- or || al menos una de las codiciones con || tiene que cumplirse 
if(tarjeta || disponible >= total){
    console.log('Puedes Pagar')
} else{
    console.log('No Puedes Pagar')
}

console.log('\n')                               // -- && (AND) todas las codiciones con && tiene que cumplirse 
if(tarjeta && disponible >= total){
    console.log('Puedes Pagar')
} else{
    console.log('No Puedes Pagar')
}
