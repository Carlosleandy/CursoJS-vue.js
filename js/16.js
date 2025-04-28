//Curso Vue.js : Introduccion a js. // Carlos Moreno
// parte 16: Array Methods con Arrow functions

const tecnologias = ['js', 'C#', 'PY', 'Vue.js'];
const numeros = [10, 20, 30]

//Includes
// Que es ? La fomar de verificar si un Elemento existe en un arreglo

const resultado = tecnologias.includes('C#')  // True el resultado existe.
console.table(resultado)


const resultadoN = numeros.includes('C#') // false

console.log(resultadoN)

//findIndex
// para ver el indice de un arreglo:  (Arrow functions)
resultadoPuesto  = tecnologias.findIndex(tech => tech === 'C#')
console.log(resultadoPuesto)

//Some
// te devuelve si al menos un elemento de un arreglo cumple con una condicion

resultadoSome = numeros.some( numeros => numeros >35 )

console.log(resultadoSome)

//find
// Te desvuelve el primer elemento que cumpla con la condicion
resultadoFind = numeros.find(numeros => numeros ===5)
console.log(resultadoFind)


//Every
/// verifica si todos cumplen las condicion 
resultadoEvery = numeros.every(numeros => numeros ===10)
console.log(resultadoEvery)


//Reduce
resultadoReduce = numeros.reduce((total, numeros)=>numeros + total, 0)
console.log(resultadoReduce)

//filter
resultadoFilter = tecnologias.filter(tech => tech !== 'C#')
console.log(resultadoFilter)
console.table(resultadoFilter)