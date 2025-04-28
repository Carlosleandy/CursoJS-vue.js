// Curso Vue.js : Introducción a JS. // Carlos Moreno
// Parte 28: Generar código HTML para mostrar las alertas

// Seleccionamos el formulario por su id
const formulario = document.querySelector('#formulario')

// Agregamos un event listener al formulario para el evento 'submit'
formulario.addEventListener('submit', e => {
    e.preventDefault() // Prevenimos el comportamiento por defecto (enviar y recargar)

    // Primero prevenimos que haya una alerta previa (si existe, la eliminamos)
    const alertaPrevia = document.querySelector('.alerta')
    if (alertaPrevia) {
        alertaPrevia.remove()
    }

    // Obtenemos los valores de los inputs
    const nombre = document.querySelector('#nombre').value
    const password = document.querySelector('#password').value

    // Validamos que los campos no estén vacíos
    if (nombre === '' || password === '') {
        // Si hay campos vacíos, generamos una alerta nueva

        // Creamos un nuevo elemento DIV
        const alerta = document.createElement('DIV')

        // Le agregamos texto
        alerta.textContent = 'Todos los campos son Obligatorios'

        // Le agregamos varias clases para darle estilos (tailwind classes)
        alerta.classList.add(
            'alerta',        // Clase personalizada para identificarla después
            'bg-red-500',    // Fondo rojo
            'text-white',    // Texto blanco
            'uppercase',     // Texto en mayúsculas
            'text-sm',       // Texto pequeño
            'text-center',   // Texto centrado
            'p-2',           // Padding 2
            'font-black'     // Fuente en negrita fuerte
        )

        // Insertamos la alerta dentro del formulario
        formulario.appendChild(alerta)

        // Programamos que la alerta desaparezca automáticamente después de 3 segundos
        setTimeout(() => {
            alerta.remove()
        }, 3000)

        // Nos salimos de la función, para no continuar ejecutando
        return
    }

    // Aquí puedes continuar con el envío correcto si quieres
    console.log('Formulario enviado correctamente')
})
