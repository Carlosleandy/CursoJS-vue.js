//Curso Vue.js : Introduccion a js. // Carlos Moreno
// parte 25:  Eventos en Js - Clicks
//heading.addEventListener
const heading = document.querySelector('.heading')

const enlaces = document.querySelectorAll('.navegacion a')

// heading.addEventListener('click', () => {
//     console.log( 2 + 2)
// })

// heading.addEventListener('click', () => {
//    heading.textContent = '' + ' Soy' +' el' + ' mejor'
// })

// heading.addEventListener('click', restar)

// function restar (){
//     console.log( 2 - 5)
// }


// heading.addEventListener('click', ()=>{
//     const numero = 10
//     if(numero === 10){
//         console.log('El numero es Diez')
//         heading.textContent = 'El numero es Diez'
//     } else {
//         console.log('El numero no es Diez')
//         heading.textContent = 'El numero no es Diez'
//     }
// })


heading.addEventListener('click', () => {
//    heading.textContent = '' + ' Soy' +' el' + ' mejor'
heading.textContent = 'NUEVO'
})

heading.addEventListener('dblclick', () => {
    //    heading.textContent = '' + ' Soy' +' el' + ' mejor'
    heading.textContent = 'NUEVO'
    })
    

heading.addEventListener('dblclick', () => {
        //    heading.textContent = '' + ' Soy' +' el' + ' mejor'
    heading.textContent = 'NUEVO en Doble Click'
    })



    enlaces.forEach(enlace => {

        enlace.addEventListener('click',() =>{
            console.log('LE DISTE CLIK')
            enlace.textContent = "GOAT"
        })

    })

    