// lee una matriz recorriendo como las agujas del reloj de fuera hacia adentro

// crear y llenar la matriz
let matriz = [...Array(4)].map(() => Array(4).fill(parseInt(Math.random()*100)))
console.table(matriz);

// recorrerla como un reloj hacia adentro
let filaInicio = 0
let columnaFin = matriz.length -1
// let columnaFin = matriz[filaInicio][matriz.length -1]
let filaFin = matriz.length -1
//let filaFin = matriz[matriz.length]
let columnaInicio = 0
//let columnaInicio = matriz[filaInicio][0]

// fila arriba
let arrayResultante = []
while(matriz.length/2 <= filaFin) {
    for (let i = columnaInicio; i <= columnaFin; i++) {
        arrayResultante.push(matriz[filaInicio][i])
    }
    filaInicio++
    // columna derecha
    for (let i = filaInicio; i <= filaFin; i++) {
        arrayResultante.push(matriz[i][columnaFin])
    }
    columnaFin--
    // fila abajo
    for (let i = columnaFin; i >= columnaInicio ; i--) {
        arrayResultante.push(matriz[filaFin][i])
    }
    filaFin--
    // columna izquierda
    for (let i = filaFin; i >= filaInicio; i--) {
        arrayResultante.push(matriz[i][columnaInicio])
    }
    columnaInicio++
}




console.log(arrayResultante);

