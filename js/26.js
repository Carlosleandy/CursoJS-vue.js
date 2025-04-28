//Curso Vue.js : Introduccion a js. // Carlos Moreno
// parte 26:

const inputNombre  = document.querySelector('#nombre')

const inputPassword = document.querySelector('#password')
// aparece lo que vas escribiendo con value
// inputNombre.addEventListener('input', (e) => {
//     console.log(e.target.value)
//     // contador como de letras, como para saber cuantas letra te quedan 
//     console.log(e.target.value.length)
//     console.log('Escribiendo')
// })



// reto 00 : Cambiar el Heading // Reto Carlos. 
// agrego el Heading
const heading = document.querySelector('.heading')

inputNombre.addEventListener('input', (e) => { // e hace referencia a evento 
    console.log(e.target.value)
    heading.textContent = e.target.value // aqui me permite poner el texto en el heading
    // Mi logica funciona, reto cumplido 
})

// solucion del curso:
//const heading = document.querySelector('.heading') // importo el heading
inputNombre.addEventListener('input', (e) => { 
    heading.textContent = e.target.value 
})


    //console.log(evt.target.type) // para ver el tipo de dato 
    // console.log(evt.target.value) // consola 
    // setTimeout registrar una funcion, esperar sierto timepo para que se ejecute
inputPassword.addEventListener('input', (evt) =>{

    evt.target.type = 'text'
    
    setTimeout(() =>{
        evt.target.type = 'password'
    }, 300);
})
