// Curso Vue.js : Introducción a JS. // Carlos Moreno
// Parte 29: Fetch API con Async Await

// Definimos la URL de donde vamos a traer los datos
const url = "https://jsonplaceholder.typicode.com/comments"

// Creamos una función asíncrona para consultar la API
const consultarAPI = async () => {
    try {
        // Usamos fetch para hacer una petición HTTP a la URL
        const respuesta = await fetch(url)

        // Convertimos la respuesta en formato JSON (para poder trabajar con los datos)
        const resultado = await respuesta.json()

        // Mostramos el resultado en forma de tabla en la consola
        console.table(resultado)
    } catch (error) {
        // Si ocurre algún error en la petición, lo capturamos aquí
        console.log('Error')
    } finally {
        // El bloque finally se ejecuta siempre, haya error o no
        console.log('Todo Listo')
    }
}

// Llamamos a la función para ejecutar todo
consultarAPI()
