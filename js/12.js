///Curso Vue.js : Introduccion a js. // Carlos Moreno
// parte 12: Iteradores en js


// Te permite recorrer una coleccion, en este caso un arreglo y desvover o ejecutar una accion al terminar. 


// Ejemplo normal
const tecnologia = ['Vue.js', 'JavaScript', 'Node.js', 'HTML', 'CSS']
console.log('\n El Ejmplo de abajo usa las 10 linea de codigo y no se usa iteradores')
const vuejs = tecnologia[0]
const js = tecnologia[1]
const node = tecnologia[2]
const html= tecnologia[3]
const css = tecnologia[4]

console.log(vuejs)
console.log(js)
console.log(node)
console.log(html)
console.log(css)


console.log('\n El ejemplo de abajo solo se utiliza dos liena con forEach')
// ahora veremos una forma mas dinamica de hacerlo 
// que si crece el arreglo se ejecute mas veces o menos veces si es mas pequeno

// forEach
tecnologia.forEach(function(tech){// se ejecuta de a la cantida de elementos que tenga el arreglo.
console.log(tech) // seguntengo entendido va linea por liena emprimiendo el arreglo 

})
console.log('\n El ejemplo de abajo se utiliza iteradores con indice el forEach')

tecnologia.forEach(function(corto, i){
    console.log(corto)
    console.log(i)
})
    

// map
console.log('\n El ejemplo de abajo se utiliza iteradores: el map')

tecnologia.map(function(tech){
    console.log(tech)

})

// la diferencia en que for Each intera solo en ese arreglo y map como que crea uno nuevo.


// ------------------------------------------------------ chat GPT Definicion ---------------------------------- //
/*🔹 forEach()
¿Qué hace?
Recorre cada elemento del arreglo.

Ejecuta una función por cada elemento.

No retorna nada (devuelve undefined).

Se usa cuando solo quieres hacer algo con los elementos (como imprimirlos, mostrarlos en pantalla, etc.).

// deal para: mostrar datos, guardar en base de datos, ejecutar funciones, etc.


/*🔹 map()
¿Qué hace?
También recorre el arreglo.

Devuelve un nuevo arreglo con los resultados de aplicar una función a cada elemento.

No modifica el original.


//✅ Ideal cuando: necesitas transformar un arreglo y guardar ese nuevo arreglo.

/*
🎯 Diferencia clave:
Característica:	        forEach()	                                  map()
Retorna un nuevo array:	❌ No	                                    ✅ Sí
Modifica el original:	❌ No	                                    ❌ No

Uso principal:	        Ejecutar algo por cada elemento     	    Transformar elementos y guardar
Devuelve:   	        undefined	                                Nuevo array con resultados

✅ Resumen claro
Usa forEach cuando quieras hacer algo con cada elemento (como imprimir).
Usa map cuando quieras transformar cada elemento y obtener un nuevo array con esos cambios.
*/

const arrayMap = tecnologia.map(function(tech){
    return tech
})

const arrayForEach = tecnologia.forEach(function(tech){
    return tech
})