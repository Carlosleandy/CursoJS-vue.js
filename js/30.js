// Curso Vue.js : Introducción a JS. // Carlos Moreno
// Parte 29: Fetch API con Promesas (then, catch, finally)

// Definimos la URL de la API de donde vamos a traer los datos
const url = "https://jsonplaceholder.typicode.com/comments"

// Creamos una función para consultar la API
const consultarAPI = () => {
    // Hacemos la petición usando fetch
    fetch(url)
        // Cuando fetch responde, convertimos la respuesta a formato JSON
        .then((respuesta) => respuesta.json())
        
        // Una vez convertido, trabajamos con los datos
        .then((resultado) => {
            console.table(resultado) // Mostramos los datos como tabla en la consola
        })

        // Si ocurre algún error en la petición, lo capturamos aquí
        .catch((error) => console.log(error))

        // El bloque finally se ejecuta siempre, haya error o no
        .finally(() => console.log('Todo listo'))
}

// Llamamos a la función para ejecutar la consulta
consultarAPI()
