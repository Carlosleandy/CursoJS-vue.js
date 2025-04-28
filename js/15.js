//Curso Vue.js : Introduccion a js. // Carlos Moreno
// parte 15: Arrow functions

// que hace cmabia el function por una flecha o => 

/*

ejemplo con functions
const Restar = function (numero1, numero2){ // eso se le conoce como el parametro de la funcion: numero1, numero2
    console.log(numero1-numero2)
}
Ejemeplo sin funtion


const Restar = (numero1, numero2) ((=>)){
    console.log(numero1-numero2)
}
*/

//primera carateritica 

const tecnologias = ['js', 'C#', 'PY', 'Vue.js']


// forEach con Arrow functions
tecnologias.forEach( tech => console.log(tech))


console.log('\n')

// forEach sin Arrow functions
tecnologias.forEach(function(tech){// se ejecuta de a la cantida de elementos que tenga el arreglo.
    console.log(tech)
})


console.log('\n')


// map sin arro Arrow functions
const tecnologias1 = tecnologias.map(function(tech){// se ejecuta de a la cantida de elementos que tenga el arreglo.
    console.log(tech)
})
console.table(tecnologias1)


console.log('\n')

// codigo limpio
// map con arrow funtions
const tecnologias2 =tecnologias.map(tech => console.log(tech))

console.table(tecnologias2)