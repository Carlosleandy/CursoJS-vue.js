///Curso Vue.js : Introduccion a js. // Carlos Moreno
// parte 7: Los Objeto (rescribiendo sus propiedades o manteniendo sus propiedades. )

const producto = {
    nombre : "Laptop",
    precio : 4000,
    disponible : true 
};

const cliente = {
    nombre : "Carlos",
    Edad : 21,
    vip : true
};

const nuevoObjeto = Object.assign(producto, cliente)

console.log(nuevoObjeto)
console.table(nuevoObjeto)

// como tiene la misma propieda solo se guarda una con el nombre de tabla y la se re-escribe

// pero si queremos materner los datos pdemos hacer los siguiente:


// ejemplo>

const nuevoObjetoPruebaDos = {
    producto,
    cliente,
}

console.log(nuevoObjetoPruebaDos)
console.table(nuevoObjetoPruebaDos)