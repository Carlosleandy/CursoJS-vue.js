//Curso Vue.js : Introduccion a js. // Carlos Moreno
// parte 22: Scope  el escope

// Scope 
// Significa alcanse
// se refiere al contexto en el que se define y acceden las variables.
// scope determina la visibilidad y disponivilidad de las variables en diferentes parte del programa.

// 

let presios = 300

function unaFuncion(){
    presios = 100
    console.log(presios)
}

unaFuncion() // imprime 100
console.log(presios) // imprime 100

// Porque ??? porque  en la funciom recribimos la misma variable y le damos valor de 100

// ahora veremos como se aplica el scope 
//let presios = 300 recondano que no podemos tener dos vareable con el mismo nombre. 

let costo = 500
function unaf(){
    let costo = 200 // aqui podemos observas que tememos dos variable con el mismo nombre, porque ??
    console.log(costo)
}
unaf()// imprime 200
console.log(costo)// imprime 500
// porque esa variable, la que vale 100 tiene alcance hasta la llave
// La variable solo existe en la funcion 