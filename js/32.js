// Definimos las URLs que vamos a consultar
const url = "https://jsonplaceholder.typicode.com/comments"
const url2 = "https://jsonplaceholder.typicode.com/photos"

// -------- Primera forma (NO tan eficiente) --------

const cosultarAPI = async () => {
    // Medimos el tiempo de inicio
    const inicio = performance.now()

    // Hacemos la primera petición
    const repuesta = await fetch(url)
    const resultado = await repuesta.json()
    // console.table(resultado)

    // Hacemos la segunda petición después de que la primera terminó
    const repuesta2 = await fetch(url2)
    const resultado2 = await repuesta2.json()
    // console.table(resultado2)

    // Medimos el tiempo de fin
    const fin = performance.now()

    // Mostramos el tiempo que tardó
    console.log(`El resultado de la primera es: ${fin - inicio} ms`)
}

// -------- Segunda forma (más eficiente, correcta) --------

const cosultarAPI2 = async () => {
    // Medimos el tiempo de inicio
    const inicio = performance.now()

    // Hacemos ambas peticiones al mismo tiempo usando Promise.all
    const [repuesta, repuesta2] = await Promise.all([
        fetch(url),
        fetch(url2)
    ])

    // Esperamos los resultados de ambas peticiones
    const resultado = await repuesta.json()
    const resultado2 = await repuesta2.json()
    // console.log(resultado)
    // console.log(resultado2)

    // Medimos el tiempo de fin
    const fin = performance.now()

    // Mostramos el tiempo que tardó
    console.log(`El resultado de la segunda es: ${fin - inicio} ms`)
}

// Ejecutamos ambas funciones para comparar
cosultarAPI()
cosultarAPI2()
