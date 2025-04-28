//Curso Vue.js : Introduccion a js. // Carlos Moreno
// parte 24: Modificacion de texto
// classList // api que te permiten conectar con las clase 
const heading = document.querySelector('.heading')

heading.textContent = 'Nuevo headinng'


const enlaces = document.querySelectorAll('.navegacion a')

//heading.classList.add // para agrgar 
//heading.classList.remove // para remover
//heading.classList.toggle// para elimir si hay o ponert si no hay todo dependeindo el contesto
//heading.classList.remove('text-4xl')


enlaces[2].textContent = 'Nuevo texto de enlace'

enlaces.forEach(enlaces => enlaces.textContent = 'el mejor')