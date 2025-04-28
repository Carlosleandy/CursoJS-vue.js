//Curso Vue.js : Introduccion a js. // Carlos Moreno
// parte 23: Seleccionando elementos del Dom 

//querySelector te permite selecionar un solo un resultado 
// // querySelectorAll te permite selecionar multiplr elementos

const heading = document.querySelector('.heading')

console.log(heading)
console.log(heading.textContent)
//heading.textContent = 'Nuevo Heading'
console.log(heading.innerHTML)
console.log(heading.tagName)
console.log(heading.classList)
console.log(heading.id)

const enlaces = document.querySelectorAll('.navegacion a')

console.log(enlaces)