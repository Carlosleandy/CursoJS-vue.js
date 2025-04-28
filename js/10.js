///Curso Vue.js : Introduccion a js. // Carlos Moreno
// parte 10: Arrays (manipulacon)

// La manipulacion de arreglos


const tecnologia = ['Python', 'Vue.js', 'JavaScript', 'HTML', 'CSS', 'Node.js']

// NombreDelArreglo.Push  para añadir elementos a los arreglos se utiliza lo visto. Ejemplo:

// para agregarlo al final de la lista 
tecnologia.push('Git', 'SQL')
console.log(tecnologia)

console.table(tecnologia)


//para agregarlo al principio de las lista 
tecnologia.unshift('php', 'C')

console.table(tecnologia)

// Termino de mutable o inmutable

// Con ... tomamos una copia del arrays de tecnologia y le podemos agregar mas  
const nuevoArreglo = [...tecnologia, 'Jira', 'Scrum']
console.table(tecnologia)

console.table(nuevoArreglo)


// Para eliminar Elementos de un del final del arreglo  .pop()

console.table(tecnologia)
tecnologia.pop()
console.table(tecnologia)

// Para eliminar Elementos de un del principio es .shift()

console.table(tecnologia)
tecnologia.shift()
console.table(tecnologia)

// para Eliminar por posicion se utiliza splice(2,2) 
//el primer numero indica que arreglo va a elimar 
// el otro es para eliminar otro segun la posicion, seria el leguaje 3 que esta en la posicion 4 del arreglo 

//ejemplo 
console.log(tecnologia)
/*
0: "C"
1: "Python"
2: "Vue.js"
3: "JavaScript"
4: "HTML"
5: "CSS"
6: "Node.js"
7: "Git"
length: 8 Son 8 Tecnologia empesando por el 0. 

si hieromos splice(2,1) se eliminan vuel.js y ya 

si hieromos splice(2,2) se eliminan vuel.js y javaScript 

asi esta la tabla:
(index)     Value
0	        'C'
1	        'Python'
2	        'Vue.js'
3	        'JavaScript'
4	        'HTML'
5	        'CSS'
6	        'Node.js'
7	        'Git'

*/

//ejemplo 
console.table(tecnologia)
tecnologia.splice(2,2)
console.table(tecnologia)
//asi quedo la tabla 
/*(index)  Value
0	        'C'
1	        'Python'
2	        'HTML'
3	        'CSS'
4	        'Node.js'
5	        'Git'
*/

// o Simplemente hacemos  splice(2) y se elima dicha posicion asi como splice(1) 0 3 o 0, cualquier posicion del arreglo le podemos poner 


// Método .filter()

// El método filter() nos permite crear un nuevo arreglo filtrando elementos según una condición.

// Por ejemplo, si queremos eliminar 'HTML' del arreglo de tecnología, usamos filter así:
const tecnologiaFiltrada = tecnologia.filter(function(tech) {
    return tech !== 'HTML'; // Retorna todos los elementos que NO sean 'HTML'
});

console.table(tecnologia);           // Muestra el arreglo original (sin cambios)
console.table(tecnologiaFiltrada);   // Muestra el nuevo arreglo, sin 'HTML'