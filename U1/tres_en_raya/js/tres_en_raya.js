/**
 * Crea un tablero vacío (lleno de celdas con ' ')
 * @returns la matriz
 */
const rellenarTablero = () => {
    let matriz = [...Array(3)].map(() => Array(3).fill(' '))
    return matriz
}

/**
 * Comprueba si se ha hecho tres en raya
 * @param {*} matriz 
 * @returns el contenido de una de las celdas del tres en raya, o null si no hay tres en raya
 */
const isTresEnRaya = (matriz) => {
    if ( (matriz[0][0]===matriz[0][1]) && (matriz[0][0]===matriz[0][2]) && (matriz[0][0]!==' ' ) ) { // linea 0 
        return matriz[0][0]
    }
    if ( (matriz[1][0]===matriz[1][1]) && (matriz[1][0]===matriz[1][2]) && (matriz[1][0]!==' ') ) { // linea 1
        return matriz[1][0]
    }
    if ( (matriz[2][0]===matriz[2][1]) && (matriz[2][0]===matriz[2][2]) && (matriz[2][0]!==' ') ) { // linea 2
        return matriz[2][0]
    }
    if ( (matriz[0][0]===matriz[1][0]) && (matriz[0][0]===matriz[2][0]) && (matriz[0][0]!==' ') ) { // columna 1
        return matriz[0][0]
    }
    if ( (matriz[0][1]===matriz[1][1]) && (matriz[0][1]===matriz[2][1]) && (matriz[0][1]!==' ') ) { // columna 1
        return matriz[0][1]
    }
    if ( (matriz[0][2]===matriz[1][2]) && (matriz[0][2]===matriz[2][2]) && (matriz[0][2]!==' ') ) { // columna 1
        return matriz[0][2]
    }
    if ( (matriz[0][0]===matriz[1][1]) && (matriz[0][0]===matriz[2][2]) && (matriz[0][0]!==' ') ) { // cruz 1
        return matriz[0][0]
    }
    if ( (matriz[0][2]===matriz[1][1]) && (matriz[0][2]===matriz[2][0]) && (matriz[0][2]!==' ') ) { // columna 1
        return matriz[0][2]
    } 
    return null
}


/**
 * Comprueba que todas las casillas NO estén vacías
 * Si retorna true, es que está llena y es empate
 * @param  matriz tablero
 * @returns boolean
 */
 const freeCells = (matriz) => {
    let cellFree = false
    matriz.map(i => i.map (j => { if (j === ' ') cellFree = true}))
    return cellFree
}


/**
 * Comprueba que la celda está vacía
 * @param  matriz tablero
 * @param  move movimiento
 * @returns boolean
 */
 const checkIsEmpty = (matriz, move) => {
    return matriz[move["fila"]][move["columna"]] === ' '? true : false
}


/**
 * recoje de un string (0,0), comprueba que se ha introducido correctamente
 *  una fila y una columna, crea un objeto literal (movimiento)
 * y lo devuelve, si no, devuelve null
 * @returns object objeto literal
 */
 const newMovement = () => {
    let regex = new RegExp(/[0-9]{1}\,[0-9]{1}/)
    let str = parseInt(prompt(`Inserte el número de fila y columna F,C`))
    if ( regex.test(str)){
        str = str.split(',')
    let row = str[0]
    let col = str[1]
    return {fila:row,columna:col}
    }
    return null
}

/**
 * comprueba que aún hay celdas vacías, y comienza un bucle que escoje posiciones
 * aleatorias hasta encontrar un hueco libre
 * @param {*} matriz 
 * @returns el objeto literal movimiento fila, columna
 */
const botPlay = (matriz) => {
    if(freeCells(matriz)){
        let movement = null
        do{
            movement = {fila:getRandomInt(3),columna:getRandomInt(3)}
        } while (checkIsEmpty(matriz,movement))
    }
   return movement 
}

const run = () => {
    // rellenar tablero
    let matriz = rellenarTablero()

    // variable para saber si hay tres en raya
    let tresEnRaya = null

    // bucle hasta que se empate o alguien gane
    do{
        // turno del jugador
        // bucle hasta que el jugador haga un movimiento válido y la celda esté vacía
        let movimiento = newMovement()
        while(movimiento===null || ! checkIsEmpty(matriz,movimiento)){
            movimiento = newMovement()
        }
        matriz[movimiento["fila"]][movimiento["columna"]] = 'X'

        // ver tabla
        console.table(matriz);
        
        // si no ha ganado el jugador
        if(!tresEnRaya(matriz)){
            // turno de la máquina
            movimiento = botPlay(matriz)
            matriz[movimiento["fila"]][movimiento["columna"]] = 'O'
            // ver tabla
            console.table(matriz);
        }
 
    } while (freeCells(matriz) && tresEnRaya(matriz)===null)

    if (!freeCells(matriz)){
        console.log("¡¡¡ EMPATE !!!");
    } else if (tresEnRaya(matriz)==='X'){
        console.log("¡¡¡ ENHORABUENA, HAS GANADO !!!");
    } else if (tresEnRaya(matriz)==='O'){
        console.log("¡ HAS PERDIDO !");
    } else {
        console.log("Algo salió mal. Fin del juego");
    }
}

run()