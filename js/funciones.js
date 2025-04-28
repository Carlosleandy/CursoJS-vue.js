

// export : para exportarla

export function sumar(numero1 = 0, numero2 = 0){
    return numero1 + numero2
}

export function restar(numero1 = 0, numero2 = 0){
    return numero1 - numero2

}

// segunda forma para esportar: lo mismo

// export{
//     restar
// }

// export que se puede renombrar y solo se crea uno por archivo  

const hola = ' Hola mundo'
export default hola