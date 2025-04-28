// Curso Vue.js : Introducción a JS. // Carlos Moreno
// Parte 27: Eventos JS - Submit

// Seleccionamos el formulario con su id
const formulario = document.querySelector('#formulario')

// Agregamos un event listener al formulario para el evento 'submit'
formulario.addEventListener('submit', e => {
    e.preventDefault() // Prevenimos que el formulario se envíe automáticamente

    // Seleccionamos los inputs de nombre y password
    const nombre = document.querySelector('#nombre')
    const password = document.querySelector('#password')

    // Mostramos en consola los valores ingresados
    console.log(nombre.value)
    console.log(password.value)
    
    // Validamos que los campos no estén vacíos
    if (nombre.value === '' || password.value === '') {
        console.log('Todos los campos son obligatorios')
    } else {
        console.log('Todo bien, enviando...')
    }
})

